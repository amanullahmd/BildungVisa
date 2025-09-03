'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Clock, MapPin, Euro, Users, Star, CheckCircle, Calendar, Building, Phone, Mail, Send } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Mock data - in real app, this would come from API/database
interface ProgramData {
  id: string
  title: string
  category: string
  duration: string
  location: string
  salary: string
  company: string
  description: string
  requirements: string[]
  benefits: string[]
  rating: number
  applicants: number
  deadline: string
  featured: boolean
  startDate: string
  language: string
  companyInfo: {
    name: string
    founded: string
    employees: string
    industry: string
    description: string
  }
  curriculum: string[]
  careerProspects: string[]
}

const programData: { [key: string]: ProgramData } = {
  '1': {
    id: '1',
    title: 'IT System Integration Specialist',
    category: 'Information Technology',
    duration: '3 years',
    location: 'Berlin, Germany',
    salary: '€950-1200/month',
    company: 'Information Technology Sector',
    description: 'Learn to design, implement and maintain IT systems and networks in the growing technology sector. This comprehensive program combines theoretical knowledge with hands-on experience in modern IT infrastructure.',
    requirements: ['High school diploma', 'Basic computer knowledge', 'English proficiency', 'Problem-solving skills'],
    benefits: ['Job guarantee after completion', 'Health insurance', 'Paid vacation', 'Career advancement'],
    rating: 4.8,
    applicants: 45,
    deadline: '2025-12-15',
    featured: true,
    startDate: '2025-09-01',
    language: 'German (B1 required)',
    companyInfo: {
      name: 'Information Technology Sector',
      founded: 'Established Field',
      employees: 'Multiple Employers',
      industry: 'Information Technology',
      description: 'Growing technology sector in Germany with excellent career opportunities and international prospects.'
    },
    curriculum: [
      'Network Administration and Security',
      'Database Management Systems',
      'Cloud Computing Technologies',
      'System Integration and Automation',
      'IT Project Management',
      'Customer Support and Training'
    ],
    careerProspects: [
      'IT System Administrator',
      'Network Engineer',
      'Cloud Solutions Architect',
      'IT Project Manager',
      'Technical Consultant'
    ]
  }
}

interface ProgramDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProgramDetailPage({ params }: ProgramDetailPageProps) {
  const { id } = await params
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    motivation: ''
  })

  const program = programData[id]

  if (!program) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container-max py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Program Not Found</h1>
          <p className="text-gray-600 mb-8">The program you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/ausbildung" className="btn-primary">
            Back to Programs
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationForm({
      ...applicationForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Application submitted:', applicationForm)
        alert('Application submitted successfully! We&apos;ll contact you soon.')
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container-max">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-black hover:text-gray-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/ausbildung" className="text-black hover:text-gray-600">Ausbildung</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{program.title}</span>
          </div>
        </div>
      </section>

      {/* Program Header */}
      <section className="bg-white py-12">
        <div className="container-max">
          <div className="flex items-center mb-6">
            <Link href="/ausbildung" className="flex items-center space-x-2 text-black hover:text-gray-600">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Programs</span>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {program.featured && (
                <div className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-4">
                  Featured Program
                </div>
              )}
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{program.title}</h1>
              <p className="text-xl text-black font-semibold mb-6">{program.company}</p>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-black fill-current" />
                  <span className="font-medium">{program.rating}</span>
                  <span className="text-gray-500 text-sm">({program.applicants} reviews)</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{program.applicants} applicants</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Clock className="w-5 h-5 text-black mb-2" />
                  <div className="text-sm text-gray-600">Duration</div>
                  <div className="font-semibold">{program.duration}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <MapPin className="w-5 h-5 text-black mb-2" />
                  <div className="text-sm text-gray-600">Location</div>
                  <div className="font-semibold">{program.location}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Euro className="w-5 h-5 text-black mb-2" />
                  <div className="text-sm text-gray-600">Salary</div>
                  <div className="font-semibold">{program.salary}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Calendar className="w-5 h-5 text-black mb-2" />
                  <div className="text-sm text-gray-600">Start Date</div>
                  <div className="font-semibold">{new Date(program.startDate).toLocaleDateString()}</div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Overview</h2>
                <p className="text-gray-600 mb-8">{program.description}</p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">What You&apos;ll Learn</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {program.curriculum.map((item: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Career Prospects</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {program.careerProspects.map((career: string, index: number) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-black font-medium">{career}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {program.requirements.map((req: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {program.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Company Info */}
                <div className="card mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Building className="w-6 h-6 text-black" />
                    <h3 className="text-lg font-bold text-gray-900">Company Information</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-600">Company</div>
                      <div className="font-semibold">{program.companyInfo.name}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Founded</div>
                      <div className="font-semibold">{program.companyInfo.founded}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Employees</div>
                      <div className="font-semibold">{program.companyInfo.employees}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Industry</div>
                      <div className="font-semibold">{program.companyInfo.industry}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-4">{program.companyInfo.description}</p>
                </div>

                {/* Application Form */}
                <div className="card">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Apply for this Program</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={applicationForm.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={applicationForm.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={applicationForm.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Education Level</label>
                      <select
                        name="education"
                        value={applicationForm.education}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      >
                        <option value="">Select Education Level</option>
                        <option value="high-school">High School</option>
                        <option value="bachelor">Bachelor&apos;s Degree</option>
                <option value="master">Master&apos;s Degree</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Relevant Experience</label>
                      <textarea
                        name="experience"
                        value={applicationForm.experience}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Describe any relevant experience..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Motivation</label>
                      <textarea
                        name="motivation"
                        value={applicationForm.motivation}
                        onChange={handleInputChange}
                        rows={3}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Why are you interested in this program?"
                      />
                    </div>
                    <button type="submit" className="w-full btn-primary flex items-center justify-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Submit Application</span>
                    </button>
                  </form>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 text-center">
                      Application deadline: {new Date(program.deadline).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="card mt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-black" />
                      <span className="text-sm">+49 30 1234 5678</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-black" />
                      <span className="text-sm">info@ausbildungvisa.com</span>
                    </div>
                  </div>
                  <Link href="/consultation" className="btn-outline w-full mt-4">
                    Book Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}