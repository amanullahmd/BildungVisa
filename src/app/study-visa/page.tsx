'use client'

import Link from 'next/link'
import { GraduationCap, Clock, Euro, Star, CheckCircle, ArrowRight, BookOpen, Award, Globe, Users, TrendingUp, MapPin, Calendar, CheckCircle2, Search, FileText, CreditCard, Trophy } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import RelatedContent from '@/components/seo/RelatedContent'

interface StudyDestination {
  id: string
  country: string
  flag: string
  description: string
  averageTuition: string
  language: string
  popularFields: string[]
  advantages: string[]
  livingCost: string
  workRights: string
  scholarships: string
}

const studyDestinations: StudyDestination[] = [
  {
    id: '1',
    country: 'Germany',
    flag: '🇩🇪',
    description: 'Europe\'s largest economy offering world-class education with minimal tuition fees and excellent career prospects.',
    averageTuition: 'Free - €350/semester',
    language: 'German/English',
    popularFields: ['Engineering', 'Computer Science', 'Business', 'Medicine'],
    advantages: ['Tuition-free education', 'Strong job market', 'Post-study work visa', 'Research opportunities'],
    livingCost: '€800-1200/month',
    workRights: '20 hours/week during studies',
    scholarships: 'DAAD, Erasmus+, University scholarships'
  },
  {
    id: '2',
    country: 'Netherlands',
    flag: '🇳🇱',
    description: 'International hub with English-taught programs, innovative teaching methods, and multicultural environment.',
    averageTuition: '€2,314-20,000/year',
    language: 'English/Dutch',
    popularFields: ['Business', 'Engineering', 'Social Sciences', 'Arts'],
    advantages: ['English-taught programs', 'International environment', 'High quality of life', 'EU job access'],
    livingCost: '€900-1400/month',
    workRights: '16 hours/week during studies',
    scholarships: 'Holland Scholarship, Orange Tulip, University grants'
  },
  {
    id: '3',
    country: 'France',
    flag: '🇫🇷',
    description: 'Rich cultural heritage with prestigious institutions, affordable education, and diverse academic programs.',
    averageTuition: '€170-3,770/year',
    language: 'French/English',
    popularFields: ['Arts', 'Business', 'Engineering', 'Fashion'],
    advantages: ['Low tuition fees', 'Cultural diversity', 'EU access', 'Research excellence'],
    livingCost: '€700-1200/month',
    workRights: '20 hours/week during studies',
    scholarships: 'Eiffel Excellence, Campus France, Regional scholarships'
  }
]

export default function StudyVisaPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "European Study Visa Consultation",
    "description": "Comprehensive study visa consultation services for European universities including Germany, Netherlands, and France",
    "provider": {
      "@type": "Organization",
      "name": "AusbildungVisa",
      "url": "https://ausbildungvisa.com"
    },
    "areaServed": "Bangladesh",
    "serviceType": "Immigration Consultation",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "Free Consultation",
      "priceCurrency": "BDT"
    }
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-b-4 border-blue-500">
        <div className="container-max relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Study in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Europe</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Unlock world-class education opportunities across Europe. From tuition-free programs to prestigious institutions, we guide you to your perfect study destination with comprehensive support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
              <div className="card-primary hover-lift animate-fade-in">
                <div className="text-3xl font-bold text-vibrant-yellow animate-bounce">27+</div>
                <div className="text-sm text-white font-semibold">EU Countries</div>
              </div>
              <div className="card-secondary hover-lift animate-fade-in">
                <div className="text-3xl font-bold text-vibrant-green animate-bounce">95%</div>
                <div className="text-sm text-white font-semibold">Success Rate</div>
              </div>
              <div className="card-accent hover-lift animate-fade-in">
                <div className="text-3xl font-bold text-vibrant-orange animate-bounce">5000+</div>
                <div className="text-sm text-white font-semibold">Students Placed</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="btn-primary hover-lift animate-glow">
                Get Free Consultation
              </Link>
              <Link href="#destinations" className="btn-secondary hover-scale">
                Explore Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white border-t-4 border-blue-500">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="mb-8 flex justify-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl shadow-2xl">
                <div className="flex justify-center items-center space-x-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Globe className="w-12 h-12 text-white" />
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-semibold mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">European Education?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Europe offers world-class education with unmatched quality, cultural diversity, and exceptional career opportunities in a globally connected environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">World-Class Education</h3>
              <p className="text-gray-600 leading-relaxed">Top-ranked universities with cutting-edge research, innovative teaching methods, and globally recognized degrees.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Euro className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Affordable Education</h3>
              <p className="text-gray-600 leading-relaxed">Many programs are tuition-free or low-cost, with numerous scholarship opportunities and reasonable living costs.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cultural Diversity</h3>
              <p className="text-gray-600 leading-relaxed">Experience rich European culture while studying alongside international students from around the world.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career Excellence</h3>
              <p className="text-gray-600 leading-relaxed">Access to Europe's dynamic job market with post-study work permits and excellent career advancement opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Study Destinations */}
      <section className="py-20 bg-gray-50 border-t-4 border-blue-500">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-semibold mb-6">
              Popular <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Study Destinations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore top European countries offering world-class education, diverse programs, and excellent opportunities for international students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studyDestinations.map((destination, index) => {
              const cardClasses = ['bg-white', 'bg-gray-50', 'bg-white'];
              const destinationIcons = [GraduationCap, BookOpen, Globe];
              const IconComponent = destinationIcons[index];
              return (
              <div key={index} className={`${cardClasses[index % 3]} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100`}>
                <div className="mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-4 hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                    <IconComponent className="w-20 h-20 text-white" />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{destination.country}</h3>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {destination.language}
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Tuition:</span>
                    <span className="font-semibold text-gray-900">{destination.averageTuition}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Living Cost:</span>
                    <span className="font-semibold text-gray-900">{destination.livingCost}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Work Rights:</span>
                    <span className="font-semibold text-green-600">{destination.workRights}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Popular Fields:</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.popularFields.map((field, fieldIndex) => (
                      <span key={fieldIndex} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {field}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Advantages:</h4>
                  <ul className="space-y-1">
                    {destination.advantages.map((advantage, advIndex) => (
                      <li key={advIndex} className="text-gray-600 text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-3">Scholarships: {destination.scholarships}</div>
                  <Link href={`/study-visa/${destination.id}`} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 w-full text-center block">
                    Learn More
                  </Link>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-gray-50 border-t-4 border-blue-500">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-semibold mb-6 animate-pulse">
                Your <span className="text-blue-600">Study Journey</span>
              </h2>
              <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
              We guide you through every step of your European study adventure, from program selection to successful enrollment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-primary hover-lift animate-fade-in">
              <div className="mb-6">
                <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl mb-4 flex items-center justify-center">
                  <Search className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="bg-gradient-professional w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 hover-scale animate-glow">
                <BookOpen className="w-8 h-8 text-white animate-pulse" />
              </div>
              <div className="bg-gradient-professional text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Step 1
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Program Selection</h3>
              <p className="text-gray-600 font-medium leading-relaxed">Choose from thousands of programs across Europe. We help you find the perfect match for your career goals and interests.</p>
            </div>
            
            <div className="card-secondary hover-lift animate-fade-in">
              <div className="mb-6">
                <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl mb-4 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="bg-gradient-neutral w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 hover-scale animate-glow">
                <Users className="w-8 h-8 text-white animate-pulse" />
              </div>
              <div className="bg-gradient-educational text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Step 2
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Application Prep</h3>
              <p className="text-gray-600 font-medium leading-relaxed">Complete documentation, language tests, and application requirements with our expert guidance and support.</p>
            </div>
            
            <div className="card-accent hover-lift animate-fade-in">
              <div className="mb-6">
                <div className="w-full h-32 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl mb-4 flex items-center justify-center">
                  <CreditCard className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="bg-gradient-professional w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 hover-scale animate-glow">
                <Calendar className="w-8 h-8 text-white animate-pulse" />
              </div>
              <div className="bg-gradient-neutral text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Step 3
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Visa Processing</h3>
              <p className="text-gray-600 font-medium leading-relaxed">Navigate the visa application process smoothly with our comprehensive support and documentation assistance.</p>
            </div>
            
            <div className="card-primary hover-lift animate-fade-in">
              <div className="mb-6">
                <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-4 flex items-center justify-center">
                  <Trophy className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="bg-gradient-educational w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 hover-scale animate-glow">
                <GraduationCap className="w-8 h-8 text-white animate-pulse" />
              </div>
              <div className="bg-gradient-professional text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Step 4
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Study Success</h3>
              <p className="text-gray-600 font-medium leading-relaxed">Begin your European education journey with ongoing support for accommodation, integration, and academic success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t-4 border-blue-500">
        <div className="container-max relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-semibold mb-6">
              Ready to Start Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">European Journey?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Join thousands of successful students who have achieved their dreams of studying in Europe. Let our expert team guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/consultation" className="btn-accent hover-lift animate-glow">
                Book Free Consultation
              </Link>
              <Link href="/contact" className="btn-outline hover-scale">
                Get Study Guide
              </Link>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">250+</div>
              <div className="text-gray-900 font-semibold">Students Placed</div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-gray-900 font-semibold">Success Rate</div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-900 font-semibold">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <RelatedContent currentPage="study-visa" />

      <Footer />
    </div>
  )
}