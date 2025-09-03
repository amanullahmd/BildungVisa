'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Briefcase, Clock, Euro, Users, Star, CheckCircle, ArrowRight, Building, Award, Globe, TrendingUp } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

interface WorkCategory {
  id: string
  title: string
  icon: string
  description: string
  averageSalary: string
  inDemand: boolean
  countries: string[]
  visaTypes: string[]
  requirements: string[]
  benefits: string[]
  careerPath: string
  jobProspects: string
}

const workCategories: WorkCategory[] = [
  {
    id: '1',
    title: 'Information Technology',
    icon: '💻',
    description: 'Software development, data science, cybersecurity, and digital innovation roles across Europe.',
    averageSalary: '€45,000-85,000',
    inDemand: true,
    countries: ['Germany', 'Netherlands', 'Sweden', 'Denmark'],
    visaTypes: ['EU Blue Card', 'Skilled Worker Visa'],
    requirements: ['Bachelor\'s degree in IT/CS', 'Programming skills', 'English proficiency'],
    benefits: ['High demand', 'Remote work options', 'Innovation environment', 'Career growth'],
    careerPath: 'Junior Developer → Senior Developer → Team Lead → CTO',
    jobProspects: 'Excellent - Growing 15% annually'
  },
  {
    id: '2',
    title: 'Engineering',
    icon: '⚙️',
    description: 'Mechanical, electrical, civil, and renewable energy engineering opportunities.',
    averageSalary: '€40,000-75,000',
    inDemand: true,
    countries: ['Germany', 'Austria', 'Sweden', 'Denmark'],
    visaTypes: ['EU Blue Card', 'National Work Permit'],
    requirements: ['Engineering degree', 'Technical expertise', 'Problem-solving skills'],
    benefits: ['Stable employment', 'Innovation projects', 'Good work-life balance'],
    careerPath: 'Engineer → Senior Engineer → Project Manager → Director',
    jobProspects: 'Very Good - Steady demand'
  },
  {
    id: '3',
    title: 'Healthcare',
    icon: '🏥',
    description: 'Medical professionals, nurses, healthcare specialists, and medical research roles.',
    averageSalary: '€35,000-90,000',
    inDemand: true,
    countries: ['Germany', 'Netherlands', 'Austria', 'France'],
    visaTypes: ['EU Blue Card', 'Professional Recognition'],
    requirements: ['Medical qualification', 'Language proficiency', 'Professional registration'],
    benefits: ['Job security', 'Social impact', 'Continuous learning', 'Competitive salary'],
    careerPath: 'Junior Doctor → Specialist → Consultant → Department Head',
    jobProspects: 'Excellent - High demand due to aging population'
  },
  {
    id: '4',
    title: 'Finance & Banking',
    icon: '💰',
    description: 'Financial analysis, banking, investment, insurance, and fintech opportunities.',
    averageSalary: '€40,000-80,000',
    inDemand: false,
    countries: ['Germany', 'Netherlands', 'France', 'Austria'],
    visaTypes: ['EU Blue Card', 'National Work Permit'],
    requirements: ['Finance/Economics degree', 'Analytical skills', 'Language requirements'],
    benefits: ['Competitive salary', 'Career progression', 'International exposure'],
    careerPath: 'Analyst → Senior Analyst → Manager → Director',
    jobProspects: 'Good - Stable with digital transformation'
  },
  {
    id: '5',
    title: 'Manufacturing',
    icon: '🏭',
    description: 'Production, quality control, logistics, and industrial management roles.',
    averageSalary: '€35,000-65,000',
    inDemand: false,
    countries: ['Germany', 'Austria', 'Czech Republic', 'Poland'],
    visaTypes: ['National Work Permit', 'Seasonal Work'],
    requirements: ['Technical training', 'Industry experience', 'Safety certifications'],
    benefits: ['Stable employment', 'Skills development', 'Union protection'],
    careerPath: 'Operator → Supervisor → Manager → Plant Director',
    jobProspects: 'Moderate - Automation impact'
  },
  {
    id: '6',
    title: 'Hospitality & Tourism',
    icon: '🏨',
    description: 'Hotel management, tourism, restaurant, and service industry opportunities.',
    averageSalary: '€25,000-50,000',
    inDemand: false,
    countries: ['France', 'Spain', 'Italy', 'Austria'],
    visaTypes: ['National Work Permit', 'Seasonal Work'],
    requirements: ['Service experience', 'Language skills', 'Customer focus'],
    benefits: ['Cultural exposure', 'Language development', 'Flexible schedules'],
    careerPath: 'Staff → Supervisor → Manager → General Manager',
    jobProspects: 'Recovering - Post-pandemic growth'
  }
]

export default function WorkPermitPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Building className="w-96 h-96 text-white" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-green-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Work Permits &amp; Career Opportunities in <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">Europe</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Unlock your career potential with work opportunities across Europe. From tech jobs in Germany to renewable energy in Denmark, find your dream job with our comprehensive work permit assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/consultation" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Career Guidance
            </Link>
            <Link href="#opportunities" className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Browse Jobs
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">27</div>
              <div className="text-gray-300">EU Countries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">€85K</div>
              <div className="text-gray-300">Avg Salary</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-red-400 mb-2">94%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">5K+</div>
              <div className="text-gray-300">Jobs Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-blue-500 to-green-500 rounded-full">
                <Globe className="w-16 h-16 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Work in <span className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">Europe?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the exceptional advantages of building your career in Europe's thriving job market with unmatched opportunities and benefits.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Euro className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Salaries</h3>
              <p className="text-gray-600 leading-relaxed">
                Higher earning potential with salaries ranging from €35,000 to €100,000+ annually across various industries.
              </p>
            </div>
            
            <div className="group text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Work-Life Balance</h3>
              <p className="text-gray-600 leading-relaxed">
                Generous vacation time, flexible working hours, and strong employee protection laws ensuring quality of life.
              </p>
            </div>
            
            <div className="group text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Career Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Excellent opportunities for professional development with access to training, mentorship, and advancement.
              </p>
            </div>
            
            <div className="group text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-400 to-red-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Benefits</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive healthcare, unemployment insurance, and family support systems providing security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Categories Section */}
      <section id="opportunities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Popular Work <span className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">Categories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore high-demand career opportunities across Europe with competitive salaries and excellent growth prospects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {workCategories.map((category) => (
              <div key={category.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div className="h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    {category.inDemand && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        High Demand
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{category.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-green-600 font-semibold">{category.averageSalary}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {category.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {category.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                            <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Top Countries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.countries.slice(0, 3).map((country) => (
                        <span key={country} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2">
                    <span>Explore Opportunities</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              European Work <span className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">Visa Types</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understanding different visa categories to find the best path for your career goals and professional aspirations in Europe.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-32 overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Award className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">EU Blue Card</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  For highly skilled professionals with university degrees. Offers fast-track to permanent residence and exceptional benefits.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">University degree required</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Salary threshold: €56,400+</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Valid for 4 years</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Family reunification rights</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-32 overflow-hidden bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <Briefcase className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">National Work Permit</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Country-specific work permits with varying requirements and benefits across EU nations, tailored to local job markets.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Job offer required</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Country-specific requirements</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Renewable permits</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Path to permanent residence</span>
                  </li>
                </ul>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-32 overflow-hidden bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <Users className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Skilled Worker Visa</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  For professionals with specific skills in shortage occupations across European countries with streamlined processing.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Skills-based assessment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Shortage occupation list</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Language requirements</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Long-term settlement options</span>
                  </li>
                </ul>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-green-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your European <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">Career Journey?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get personalized guidance from our visa experts and take the first step towards your dream job in Europe. We're here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Career Consultation
              </button>
              <button className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Download Work Guide
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5+</div>
              <div className="text-gray-300">EU Countries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">94%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}