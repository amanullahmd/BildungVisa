'use client'

import { Metadata } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import { GraduationCap, Clock, MapPin, Euro, Users, CheckCircle, ArrowRight, BookOpen, Award, Briefcase, Globe, Heart, Wrench, Calculator, Stethoscope, Cpu, Car, Building, Utensils, TrendingUp, Star, Search, Filter, Calendar, Code, Truck, Palette, Phone, Mail } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import RelatedContent from '@/components/seo/RelatedContent'

// Metadata removed due to 'use client' directive

interface AusbildungCategory {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  duration: string
  averageSalary: string
  jobProspects: string
  requirements: string[]
  careerPaths: string[]
  popularFields: string[]
  color: string
}

const ausbildungCategories: AusbildungCategory[] = [
  {
    id: 'it-technology',
    title: 'Information Technology',
    icon: <Cpu className="w-8 h-8" />,
    description: 'Develop expertise in software development, system administration, cybersecurity, and digital innovation.',
    duration: '2.5 - 3.5 years',
    averageSalary: '€950 - €1,400/month',
    jobProspects: 'Excellent - High demand across all industries',
    requirements: ['High school diploma', 'Basic computer knowledge', 'Logical thinking', 'English proficiency'],
    careerPaths: ['Software Developer', 'System Administrator', 'IT Consultant', 'Cybersecurity Specialist'],
    popularFields: ['Software Development', 'System Integration', 'Network Administration', 'Data Analysis'],
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'automotive',
    title: 'Automotive Technology',
    icon: <Car className="w-8 h-8" />,
    description: 'Master automotive engineering, electric vehicle technology, and advanced manufacturing processes.',
    duration: '3 - 3.5 years',
    averageSalary: '€1,000 - €1,500/month',
    jobProspects: 'Very Good - Germany\'s leading industry',
    requirements: ['Technical aptitude', 'Manual dexterity', 'German A2 level', 'Mathematics skills'],
    careerPaths: ['Automotive Engineer', 'Quality Control Specialist', 'Production Manager', 'R&D Technician'],
    popularFields: ['Mechatronics', 'Electric Vehicles', 'Manufacturing', 'Quality Assurance'],
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Medical',
    icon: <Stethoscope className="w-8 h-8" />,
    description: 'Contribute to healthcare excellence through nursing, medical technology, and patient care.',
    duration: '3 - 4 years',
    averageSalary: '€1,100 - €1,600/month',
    jobProspects: 'Excellent - Growing aging population',
    requirements: ['Empathy and patience', 'Physical stamina', 'German B2 level', 'Clean criminal record'],
    careerPaths: ['Registered Nurse', 'Medical Technician', 'Healthcare Administrator', 'Specialist Therapist'],
    popularFields: ['Nursing', 'Medical Technology', 'Physiotherapy', 'Laboratory Technology'],
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 'engineering',
    title: 'Engineering & Manufacturing',
    icon: <Wrench className="w-8 h-8" />,
    description: 'Build the future through mechanical engineering, industrial automation, and precision manufacturing.',
    duration: '3 - 4 years',
    averageSalary: '€1,050 - €1,450/month',
    jobProspects: 'Very Good - Industrial backbone of Germany',
    requirements: ['Technical education', 'Safety awareness', 'Precision work', 'Problem-solving skills'],
    careerPaths: ['Industrial Engineer', 'Production Supervisor', 'Quality Manager', 'Technical Specialist'],
    popularFields: ['Industrial Mechanics', 'Electrical Engineering', 'Automation Technology', 'Precision Manufacturing'],
    color: 'from-gray-600 to-blue-700'
  },
  {
    id: 'business-finance',
    title: 'Business & Finance',
    icon: <Calculator className="w-8 h-8" />,
    description: 'Master financial services, business administration, and commercial operations in Europe\'s financial hub.',
    duration: '2.5 - 3 years',
    averageSalary: '€900 - €1,350/month',
    jobProspects: 'Good - Stable demand in financial sector',
    requirements: ['Mathematics skills', 'Analytical thinking', 'Customer focus', 'Integrity'],
    careerPaths: ['Financial Advisor', 'Business Analyst', 'Account Manager', 'Investment Specialist'],
    popularFields: ['Banking', 'Insurance', 'Investment', 'Business Administration'],
    color: 'from-blue-500 to-green-600'
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Tourism',
    icon: <Building className="w-8 h-8" />,
    description: 'Excel in hotel management, tourism services, and international hospitality operations.',
    duration: '3 - 3.5 years',
    averageSalary: '€800 - €1,200/month',
    jobProspects: 'Good - Growing tourism industry',
    requirements: ['Customer service skills', 'Communication abilities', 'Flexibility', 'Cultural awareness'],
    careerPaths: ['Hotel Manager', 'Event Coordinator', 'Tourism Specialist', 'Restaurant Manager'],
    popularFields: ['Hotel Management', 'Event Planning', 'Tourism Services', 'Restaurant Operations'],
    color: 'from-purple-500 to-pink-600'
  }
]

export default function AusbildungPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "German Ausbildung Visa Consultation",
    "description": "Expert consultation services for German Ausbildung programs including vocational training visa guidance and application support",
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
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-professional animate-gradient-shift">
        <div className="absolute inset-0 bg-gradient-educational opacity-20"></div>
        {/* Hero Background Icons */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-blue-200 to-green-200 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-8">
              <GraduationCap className="w-16 h-16 text-blue-600/40" />
              <Briefcase className="w-16 h-16 text-green-600/40" />
              <Award className="w-16 h-16 text-blue-600/40" />
              <BookOpen className="w-16 h-16 text-green-600/40" />
              <Users className="w-16 h-16 text-blue-600/40" />
              <Globe className="w-16 h-16 text-green-600/40" />
            </div>
          </div>
        </div>
        <div className="container-max relative z-10">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-educational p-4 rounded-full animate-glow hover-scale">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-pulse">
              Ausbildung in Germany
            </h1>
            <p className="text-xl text-white mb-8 max-w-4xl mx-auto leading-relaxed font-semibold">
              Discover Germany's world-renowned vocational training system. Our comprehensive Ausbildung programs combine theoretical knowledge with practical experience, offering you a direct pathway to a successful career in Europe's strongest economy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="card-primary p-6 shadow-lg hover-lift animate-fade-in">
                <div className="text-3xl font-bold text-vibrant-yellow mb-2 animate-bounce">350+</div>
                <div className="text-white font-semibold">Recognized Professions</div>
              </div>
              <div className="card-secondary p-6 shadow-lg hover-lift animate-fade-in">
                <div className="text-3xl font-bold text-vibrant-green mb-2 animate-bounce">68%</div>
                <div className="text-white font-semibold">Employment Rate</div>
              </div>
              <div className="card-accent p-6 shadow-lg hover-lift animate-fade-in">
                <div className="text-3xl font-bold text-vibrant-orange mb-2 animate-bounce">€1,200</div>
                <div className="text-white font-semibold">Average Monthly Salary</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary hover-lift animate-glow">
                Get Free Consultation
              </Link>
              <Link href="#categories" className="btn-secondary hover-scale">
                Explore Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Ausbildung Section */}
      <section className="py-16 bg-white border-t-4 border-blue-500">
        <div className="container-max">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 animate-pulse">
              What is Ausbildung?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-semibold">
              Ausbildung is Germany's dual education system that combines classroom learning with hands-on work experience. 
              It's a structured vocational training program that typically lasts 2-4 years, leading to recognized professional qualifications.
            </p>
            {/* Dual Education System Visual */}
            <div className="mt-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-xl shadow-2xl p-8 hover-lift">
                <div className="flex justify-center items-center space-x-8">
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-4">
                      <BookOpen className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Theory</h3>
                    <p className="text-white/80 text-sm">Vocational School</p>
                  </div>
                  <div className="text-white text-4xl font-bold">+</div>
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-4">
                      <Briefcase className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Practice</h3>
                    <p className="text-white/80 text-sm">Company Training</p>
                  </div>
                  <div className="text-white text-4xl font-bold">=</div>
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-4">
                      <Award className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Success</h3>
                    <p className="text-white/80 text-sm">Professional Career</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in hover-lift">
              <div className="bg-gradient-professional p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center hover-scale animate-glow">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Theoretical Learning</h3>
              <p className="text-gray-600 font-medium">1-2 days per week in vocational school learning theory and fundamentals</p>
            </div>
            
            <div className="text-center animate-fade-in hover-lift">
              <div className="bg-gradient-nature p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center hover-scale animate-glow">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Practical Training</h3>
              <p className="text-gray-600 font-medium">3-4 days per week working in companies gaining real experience</p>
            </div>
            
            <div className="text-center animate-fade-in hover-lift">
              <div className="bg-gradient-neutral p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center hover-scale animate-glow">
                <Euro className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Paid Training</h3>
              <p className="text-gray-600 font-medium">Earn €800-€1,600 per month while learning and training</p>
            </div>
            
            <div className="text-center animate-fade-in hover-lift">
              <div className="bg-gradient-rainbow p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center hover-scale animate-glow">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Certification</h3>
              <p className="text-gray-600 font-medium">Receive nationally recognized professional qualifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ausbildung Categories */}
      <section className="py-16 bg-gray-50 border-t-4 border-green-500" id="categories">
        <div className="container-max">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 animate-pulse">
              Popular Ausbildung Fields
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-semibold">
              Explore diverse career paths through Germany's renowned dual education system. Each field offers unique opportunities for professional growth and development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ausbildungCategories.map((category, index) => {
              const categoryIcons = {
                'it-technology': <Code className="w-16 h-16 text-white" />,
                'automotive': <Car className="w-16 h-16 text-white" />,
                'healthcare': <Stethoscope className="w-16 h-16 text-white" />,
                'engineering': <Wrench className="w-16 h-16 text-white" />,
                'business-finance': <Calculator className="w-16 h-16 text-white" />,
                'hospitality': <Utensils className="w-16 h-16 text-white" />
              };
              const gradients = [
                'from-blue-500 to-blue-600',
                'from-green-500 to-green-600', 
                'from-purple-500 to-purple-600',
                'from-orange-500 to-orange-600',
                'from-teal-500 to-teal-600',
                'from-pink-500 to-pink-600'
              ];
              return (
              <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden hover-lift animate-fade-in hover:shadow-2xl transition-all duration-300`}>
                {/* Category Icon Display */}
                <div className="h-48 overflow-hidden">
                  <div className={`w-full h-full bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center hover-scale transition-transform duration-300`}>
                    {categoryIcons[category.id as keyof typeof categoryIcons]}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`${index % 4 === 0 ? 'bg-gradient-professional' : index % 4 === 1 ? 'bg-gradient-educational' : index % 4 === 2 ? 'bg-gradient-neutral' : 'bg-gradient-educational'} p-3 rounded-lg mr-4 hover-scale animate-glow`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 font-medium">{category.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Average Salary:</span>
                      <span className="font-semibold text-green-600 animate-pulse">{category.averageSalary}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Job Prospects:</span>
                      <span className="font-semibold text-blue-600 animate-pulse">{category.jobProspects}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Career Path:</span>
                      <span className="font-semibold text-purple-600 animate-pulse">{category.careerPaths[0]}</span>
                    </div>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Requirements & Benefits */}
      <section className="py-16 bg-white border-t-4 border-purple-500">
        <div className="container-max">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 animate-pulse">
              Requirements & Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-semibold">
              Understanding what you need and what you'll gain from Ausbildung
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover-lift animate-fade-in">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 hover-scale animate-glow">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Requirements</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 animate-fade-in hover-lift">
                  <div className="bg-gradient-professional p-2 rounded-full flex-shrink-0 hover-scale animate-glow">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
                    <p className="text-gray-600 font-medium">Minimum secondary school certificate (Hauptschulabschluss) or equivalent qualification</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-in hover-lift">
                  <div className="bg-gradient-ocean p-2 rounded-full flex-shrink-0 hover-scale animate-glow">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Language Skills</h3>
                    <p className="text-gray-600 font-medium">German language proficiency (B1-B2 level) depending on the program</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-in hover-lift">
                  <div className="bg-gradient-sunset p-2 rounded-full flex-shrink-0 hover-scale animate-glow">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Age Requirement</h3>
                    <p className="text-gray-600 font-medium">Typically between 16-25 years old, though some programs accept older candidates</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-in hover-lift">
                  <div className="bg-gradient-rainbow p-2 rounded-full flex-shrink-0 hover-scale animate-glow">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Motivation</h3>
                    <p className="text-gray-600 font-medium">Strong interest in the chosen field and commitment to complete the program</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Benefits */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover-lift animate-fade-in">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4 hover-scale animate-glow">
                  <Star className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Benefits</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 animate-fade-in hover-lift">
                  <div className="bg-gradient-educational p-2 rounded-full flex-shrink-0 hover-scale animate-glow">
                    <Euro className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Earn While Learning</h3>
                    <p className="text-gray-600 font-medium">Receive monthly salary during training, increasing each year of the program</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-in hover-lift">
                  <div className="bg-gradient-ocean p-2 rounded-full flex-shrink-0 hover-scale animate-glow">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Recognized Qualification</h3>
                    <p className="text-gray-600 font-medium">Obtain nationally and internationally recognized professional certificates</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-in hover-lift">
                  <div className="bg-gradient-sunset p-2 rounded-full flex-shrink-0 hover-scale animate-glow">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Career Advancement</h3>
                    <p className="text-gray-600 font-medium">High employment rate with opportunities for further education and specialization</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-in hover-lift">
                  <div className="bg-gradient-rainbow p-2 rounded-full flex-shrink-0 hover-scale animate-glow">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Job Security</h3>
                    <p className="text-gray-600 font-medium">Strong job market demand and potential for permanent employment after completion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <RelatedContent currentPage="ausbildung" />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-professional border-t-4 border-blue-500">
        <div className="container-max">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white animate-pulse">
               Ready to Start Your Ausbildung Journey?
              </h2>
              <p className="text-xl text-green-300 mb-4 font-semibold">
                Start Your Journey Today!
              </p>
            <p className="text-lg text-white mb-8 max-w-2xl mx-auto font-semibold">
              Take the first step towards a successful career in Germany. Our expert consultants are here to guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-accent hover-lift animate-glow px-8 py-4 rounded-lg font-semibold"
              >
                Get Free Consultation
              </Link>
              <Link 
                href="/blog" 
                className="btn-outline hover-scale px-8 py-4 rounded-lg font-semibold"
              >
                View Success Stories
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center card-primary hover-lift animate-fade-in p-6 rounded-xl">
                <div className="text-4xl font-bold text-vibrant-yellow mb-2 animate-bounce">95%</div>
                <p className="text-white font-semibold">Success Rate</p>
              </div>
              <div className="text-center card-secondary hover-lift animate-fade-in p-6 rounded-xl">
                <div className="text-4xl font-bold text-vibrant-green mb-2 animate-bounce">500+</div>
                <p className="text-white font-semibold">Students Placed</p>
              </div>
              <div className="text-center card-accent hover-lift animate-fade-in p-6 rounded-xl">
                <div className="text-4xl font-bold text-vibrant-orange mb-2 animate-bounce">50+</div>
                <p className="text-white font-semibold">Partner Companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}