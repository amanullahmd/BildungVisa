'use client'

import Link from 'next/link'
import { Calendar, Phone, MessageSquare, Star, Award, Globe, Users, Video, MapPin, FileText, Shield, Clock, ArrowRight, Mail } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import RelatedContent from '@/components/seo/RelatedContent'





// Consultation services information (without pricing)
const consultationServices = [
  {
    title: 'Study Visa Guidance',
    description: 'Comprehensive guidance on study visa applications, university selection, and academic requirements.',
    icon: '🎓'
  },
  {
    title: 'Work Permit Consultation',
    description: 'Expert advice on work permits, job search strategies, and career opportunities in Europe.',
    icon: '💼'
  },
  {
    title: 'Ausbildung Programs',
    description: 'Detailed information about German vocational training programs and application processes.',
    icon: '🔧'
  },
  {
    title: 'General Immigration Advice',
    description: 'Complete profile analysis and personalized guidance for your European journey.',
    icon: '🎯'
  }
]



export default function ConsultationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "European Immigration Consultation Services",
    "description": "Professional consultation services for European visa applications, study abroad, work permits, and Ausbildung programs",
    "provider": {
      "@type": "Organization",
      "name": "BildungVisa",
      "url": "https://bildungvisa.de"
    },
    "areaServed": "Germany",
    "serviceType": "Immigration Consultation",
    "offers": [
      {
        "@type": "Offer",
        "name": "Initial Assessment",
        "price": "0",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Study Visa Consultation",
        "price": "75",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "name": "Work Permit Consultation",
        "price": "85",
        "priceCurrency": "EUR"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What happens during the consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "During the consultation, our expert will review your profile, discuss your goals, explain available options, and create a personalized action plan for your European journey. We ensure comprehensive coverage of all aspects."
        }
      },
      {
        "@type": "Question",
        "name": "Can I reschedule my consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can reschedule your consultation up to 24 hours before the scheduled time. Contact us via email or phone to make changes. We understand that plans can change and we're flexible with scheduling."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer refunds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a 100% satisfaction guarantee. If you're not satisfied with your consultation, we'll provide a full refund within 7 days or work with you to resolve any concerns."
        }
      },
      {
        "@type": "Question",
        "name": "What documents should I prepare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bring your educational certificates, work experience documents, passport, IELTS/language test results, and any previous visa applications or rejections. We'll provide a detailed checklist after booking."
        }
      }
    ]
  }






  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gray-50">
        <div className="relative container-max">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mb-6">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Expert Immigration
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get personalized guidance from our certified immigration experts. Contact us via email or WhatsApp and we'll schedule your consultation within 24-48 hours.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">250+</div>
                <div className="text-sm text-gray-600">Successful Applications</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
            

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Choose Our
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Expert Consultation?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Get personalized guidance from certified experts with proven success in European immigration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-red-500 to-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certified Experts</h3>
              <p className="text-gray-600 leading-relaxed">Licensed immigration consultants with 5+ years of experience in European visa processes.</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">98% Success Rate</h3>
              <p className="text-gray-600 leading-relaxed">Proven track record with 250+ successful visa applications and satisfied clients.</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Approach</h3>
              <p className="text-gray-600 leading-relaxed">Tailored strategies and advice based on your unique profile, goals, and circumstances.</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-black to-gray-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600 leading-relaxed">Continuous guidance and support throughout your entire application and settlement process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Services */}
      <section className="section-padding bg-gray-50" id="packages">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Consultation
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We provide expert guidance across various immigration pathways. Contact us to discuss your specific needs and get personalized advice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {consultationServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Simple Contact Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us via email or WhatsApp to discuss your immigration goals. We'll respond within 24-48 hours and schedule a consultation that fits your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@bildungvisa.de'}`}
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
              <a
                href={`https://wa.me/${(process.env.NEXT_PUBLIC_CONTACT_PHONE || '+49 1556 0354545').replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                <MessageSquare className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">What happens next?</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <span>Contact us via email or WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <span>We respond within 24-48 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <span>Schedule consultation manually</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Related Content */}
      <RelatedContent currentPage="consultation" />

      <Footer />
    </div>
  )
}