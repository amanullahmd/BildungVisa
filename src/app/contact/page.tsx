'use client'

import { Metadata } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar, Globe, Facebook, Twitter, Linkedin, Instagram, CheckCircle, Upload, FileText, X, Users, Building } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import RelatedContent from '@/components/seo/RelatedContent'

// Metadata removed due to 'use client' directive

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  service: string
  message: string
  preferredContact: string
  urgency: string
  files: File[]
}

interface UploadedFile {
  file: File
  id: string
}

interface Office {
  id: string
  name: string
  address: string
  phone: string
  email: string
  hours: string
  image: string
  isMain: boolean
}

const offices: Office[] = [
  {
    id: 'frankfurt-main',
    name: 'Frankfurt Main Office',
    address: 'Frankfurt Germany',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+49 1556 0354545',
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@bildungvisa.de',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
    image: '/images/offices/office-building-1.svg',
    isMain: true
  }
]

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp Chat',
    description: 'Quick responses via WhatsApp',
    contact: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+49 1556 0354545',
    action: 'Chat Now',
    available: '24/7 Support',
    onClick: () => {
      const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+49 1556 0354545').replace(/[^0-9]/g, '')
      const message = encodeURIComponent('Hello! I would like to get information about your immigration services to Germany.')
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
    }
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Detailed inquiries and documentation',
    contact: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@bildungvisa.de',
    action: 'Send Email',
    available: 'Response within 24-48 hours',
    onClick: () => {
      window.open(`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@bildungvisa.de'}`, '_self')
    }
  }
]

const faqs = [
  {
    question: 'How long does the visa process take?',
    answer: 'Processing times vary by visa type: Student visas typically take 4-8 weeks, work permits 6-12 weeks, and Ausbildung applications 8-16 weeks.'
  },
  {
    question: 'Do you provide document translation services?',
    answer: 'Yes, we provide certified translation services for all required documents in German, English, and Bengali.'
  },
  {
    question: 'Can you help with accommodation in Germany?',
    answer: 'Yes, we assist with finding suitable accommodation including student dormitories, shared apartments, and private housing.'
  },
  {
    question: 'What is your success rate?',
    answer: 'We maintain a 95% success rate for visa applications with proper documentation and preparation.'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
    preferredContact: 'email',
    urgency: 'normal',
    files: []
  })
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [dragActive, setDragActive] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return
    
    const newFiles: UploadedFile[] = []
    Array.from(files).forEach(file => {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert(`File ${file.name} is too large. Maximum size is 10MB.`)
        return
      }
      
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png', 'image/jpg']
      if (!allowedTypes.includes(file.type)) {
        alert(`File ${file.name} is not supported. Please upload PDF, DOC, DOCX, JPG, or PNG files.`)
        return
      }
      
      newFiles.push({
        file,
        id: Math.random().toString(36).substr(2, 9)
      })
    })
    
    setUploadedFiles(prev => [...prev, ...newFiles])
    setFormData(prev => ({ ...prev, files: [...prev.files, ...newFiles.map(f => f.file)] }))
  }

  const removeFile = (id: string) => {
    setUploadedFiles(prev => {
      const updated = prev.filter(f => f.id !== id)
      setFormData(prevForm => ({ ...prevForm, files: updated.map(f => f.file) }))
      return updated
    })
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Prepare form data for submission
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        service: formData.service,
        message: formData.message,
        preferredContact: formData.preferredContact,
        urgency: formData.urgency,
        files: uploadedFiles.map(f => f.file.name)
      }

      // Submit to API
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      const result = await response.json()
      
      // Handle WhatsApp integration if preferred contact is WhatsApp
      if (formData.preferredContact === 'whatsapp' && formData.phone) {
        const whatsappMessage = `Hello! I submitted a contact form on BildungVisa.de regarding ${formData.service}. My name is ${formData.name} and I need assistance with: ${formData.subject}`
        const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+49 1556 0354545'
        const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`
        window.open(whatsappUrl, '_blank')
      }
      
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          service: '',
          message: '',
          preferredContact: 'email',
          urgency: 'normal',
          files: []
        })
        setUploadedFiles([])
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsSubmitting(false)
      // You could add error state handling here
      alert('Failed to send message. Please try again or contact us directly.')
    }
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        {/* Hero Background Icons */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-3 gap-8">
              <Phone className="w-16 h-16 text-blue-500" />
              <MessageCircle className="w-16 h-16 text-green-500" />
              <Mail className="w-16 h-16 text-blue-500" />
            </div>
          </div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full text-sm font-medium mb-4">
                🇩🇪 Expert German Immigration Consultation ⭐
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight text-gray-900">
              Get in Touch with Our
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Expert Team</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 font-semibold max-w-3xl mx-auto leading-relaxed">
              Ready to start your journey to Germany? Our experienced consultants are here to guide you every step of the way with personalized solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE || '+49 1556 0354545'}`} className="btn-primary hover-lift animate-glow font-bold px-8 py-4 text-lg font-semibold rounded-xl shadow-large transition-all duration-300 inline-flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a href="#contact-form" className="btn-secondary hover-scale px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                <MessageCircle className="w-5 h-5 mr-2" />
                Send Message
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 font-semibold mb-4">
              Contact <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Our Team</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto mb-6">
              Get in touch with us via email or WhatsApp. We will respond within 24-48 hours and schedule your appointment manually.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-blue-800 font-semibold mb-2">📅 Appointment Scheduling</p>
              <p className="text-blue-700">
                After you contact us, our team will get back to you within 24-48 hours to schedule your consultation appointment manually based on your needs and availability.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              const gradients = ['bg-gradient-professional', 'bg-gradient-educational', 'bg-gradient-neutral', 'bg-gradient-professional']
              const cardClasses = ['card-primary', 'card-secondary', 'card-accent', 'card-primary']
              return (
                <div key={index} className="group">
                  <div className="bg-gray-50 text-center p-8 h-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className={`w-16 h-16 ${gradients[index]} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{method.title}</h3>
                    <p className="text-gray-600 font-medium mb-4 leading-relaxed">{method.description}</p>
                    <p className="font-semibold text-gray-900 mb-2">{method.contact}</p>
                    <p className="text-sm text-gray-500 mb-6">{method.available}</p>
                    <button 
                      onClick={method.onClick}
                      className="btn-accent hover-scale w-full transition-transform duration-300"
                    >
                      {method.action}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Visit Our <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Offices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our team in person at our Frankfurt office
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {offices.map((office, index) => {
              const gradients = ['bg-gradient-to-r from-blue-500 to-blue-600', 'bg-gradient-to-r from-green-500 to-green-600', 'bg-gradient-to-r from-purple-500 to-purple-600'];
              return (
                <div key={office.id} className="group">
                  <div className="bg-white overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    {office.isMain && (
                      <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                        Main Office
                      </div>
                    )}
                    <div className="relative h-48 mb-6 overflow-hidden">
                      <div className={`w-full h-48 ${gradients[index % gradients.length]} group-hover:scale-110 transition-transform duration-500 flex items-center justify-center`}>
                        <Building className="w-16 h-16 text-white" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className={`w-12 h-12 ${gradients[index % gradients.length]} rounded-full flex items-center justify-center shadow-lg`}>
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-6">
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">{office.name}</h3>
                        <div className="flex items-start space-x-3 text-gray-600">
                          <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-blue-500" />
                          <p className="leading-relaxed">{office.address}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-gray-600 hover:text-green-500 transition-colors duration-200">
                          <Phone className="w-4 h-4" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-500 transition-colors duration-200">
                          <Mail className="w-4 h-4" />
                          <span>{office.email}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{office.hours}</span>
                        </div>
                      </div>
                      
                      <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-6 py-2 rounded-lg w-full transition-all duration-300">
                        <MapPin className="w-4 h-4 mr-2" />
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Simple Contact Message */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                Ready to Start Your <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Journey?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Contact us today via email or WhatsApp, and we&apos;ll personally guide you through your immigration process to Germany.
              </p>
              {/* Consultation Icons */}
              <div className="max-w-md mx-auto mb-8">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl shadow-large hover-scale transition-transform duration-300 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <Users className="w-12 h-12 text-white" />
                    <MessageCircle className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Contact Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@bildungvisa.de'}`} 
                  className="btn-primary hover-lift animate-glow font-bold px-8 py-4 text-lg font-semibold rounded-xl shadow-large transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
                <button 
                  onClick={() => {
                    const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+49 1556 0354545').replace(/[^0-9]/g, '')
                    const message = encodeURIComponent('Hello! I would like to get information about your immigration services to Germany.')
                    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
                  }}
                  className="btn-secondary hover-scale px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Chat
                </button>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold text-green-800 mb-2">What happens next?</h3>
                <ul className="text-green-700 space-y-2 text-left">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    We&apos;ll respond to your inquiry within 24-48 hours
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Our expert will schedule a consultation appointment manually
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    We&apos;ll provide personalized guidance for your immigration journey
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <RelatedContent currentPage="contact" />

      <Footer />
    </div>
  )
}