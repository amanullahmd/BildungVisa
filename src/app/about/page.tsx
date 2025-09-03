import Link from 'next/link'
import { Users, Target, Award, Globe, CheckCircle, Star, FileText, ArrowRight, FileCheck, Shield, Building } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import RelatedContent from '@/components/seo/RelatedContent'

interface Achievement {
  id: string
  title: string
  description: string
  year: string
  icon: string
}

const achievements: Achievement[] = [
  {
    id: '1',
    title: '250+ Success Stories',
    description: 'Successfully helped over 250 Bangladeshi students and professionals achieve their European dreams.',
    year: '2024',
    icon: '🎓'
  },
  {
    id: '2',
    title: '98% Visa Success Rate',
    description: 'Maintained an exceptional visa approval rate through expert guidance and thorough preparation.',
    year: '2024',
    icon: '✅'
  },
  {
    id: '3',
    title: 'Top Immigration Consultancy',
    description: 'Recognized as the leading immigration consultancy for Bangladesh-Europe migration.',
    year: '2023',
    icon: '🏆'
  },
  {
    id: '4',
    title: '50+ University Partners',
    description: 'Established partnerships with top European universities and institutions.',
    year: '2023',
    icon: '🤝'
  }
]

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every service we provide, ensuring the highest standards of professional guidance.'
  },
  {
    icon: Users,
    title: 'Integrity',
    description: 'We maintain complete transparency and honesty in all our dealings, building trust with every client.'
  },
  {
    icon: Globe,
    title: 'Global Vision',
    description: 'We believe in creating global opportunities and breaking down barriers to international education and careers.'
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'We continuously innovate our services to provide the most effective and efficient solutions for our clients.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-gray-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-green-600/5"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-blue-200 to-green-200 flex items-center justify-center">
            <div className="flex space-x-8">
              <Users className="w-24 h-24 text-blue-600/30" />
              <Globe className="w-24 h-24 text-green-600/30" />
              <Award className="w-24 h-24 text-blue-600/30" />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-8">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">AusbildungVisa</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Your trusted partner in achieving European dreams. We specialize in connecting Bangladeshi talent with world-class opportunities in Germany and across Europe, transforming aspirations into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link href="/consultation" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Meet Our Team
              </Link>
              <Link href="#mission" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Our Mission
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
                <div className="text-gray-600">Successful Applications</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-yellow-100">
                <div className="text-3xl font-bold text-yellow-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white" id="mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                To empower Bangladeshi students and professionals by providing comprehensive, reliable, and personalized guidance for pursuing education and career opportunities in Europe.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that talent knows no borders, and everyone deserves the opportunity to achieve their full potential on the global stage through quality education and meaningful careers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">Expert guidance from certified immigration consultants</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">Personalized support throughout your journey</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">Strong network of European partners and institutions</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">Proven track record of success stories</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8">
                <div className="bg-white rounded-xl shadow-lg p-12 flex flex-col items-center justify-center space-y-6">
                  <div className="flex space-x-6">
                    <div className="bg-blue-500 rounded-full p-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-green-500 rounded-full p-4">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800">Professional Consultation</h3>
                    <p className="text-gray-600">Expert European Immigration Services</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-8 flex justify-center">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 p-8 rounded-2xl shadow-lg">
                <div className="flex justify-center items-center space-x-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Core <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do and shape our commitment to your success in achieving your European dreams.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              const gradients = [
                'from-blue-500 to-blue-600',
                'from-purple-500 to-purple-600', 
                'from-green-500 to-green-600',
                'from-blue-500 to-green-500'
              ];
              return (
                <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className={`w-20 h-20 bg-gradient-to-r ${gradients[index % gradients.length]} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-8 mb-6 flex justify-center">
                  <div className="flex space-x-4">
                    <div className="bg-blue-500 rounded-full p-3">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-green-500 rounded-full p-3">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-blue-500 rounded-full p-3">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                   <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
                   <div className="text-gray-600">Successful Applications</div>
                 </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-8 mb-6 flex justify-center">
                  <div className="flex space-x-4">
                    <div className="bg-green-500 rounded-full p-3">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-blue-500 rounded-full p-3">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-green-500 rounded-full p-3">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Milestones that reflect our commitment to excellence and our clients' success in achieving their European dreams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const gradients = [
                'from-blue-500 to-blue-600',
                'from-purple-500 to-purple-600',
                'from-green-500 to-green-600',
                'from-blue-500 to-green-500'
              ];
              return (
                <div key={achievement.id} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className={`w-20 h-20 bg-gradient-to-r ${gradients[index % gradients.length]} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <div className="text-3xl">{achievement.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{achievement.description}</p>
                  <div className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">{achievement.year}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Company Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-8">
              <div className="w-full max-w-3xl mx-auto h-64 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="flex space-x-8">
                  <Building className="w-16 h-16 text-white" />
                  <Users className="w-16 h-16 text-white" />
                  <Globe className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-green-600 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Five years of dedicated service, transforming dreams into reality and becoming your trusted partner in European immigration
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>
            
            <div className="space-y-12">
              {[
                { year: "2019", title: "Agency Established", description: "BildungVisa was established with a vision to bridge the gap between Bangladeshi talent and European opportunities, focusing on quality education and career pathways." },
                { year: "2021", title: "First 100 Success Stories", description: "Reached our first major milestone of helping 100 students and professionals achieve their European dreams through personalized guidance." },
                { year: "2022", title: "Digital Transformation", description: "Launched our comprehensive online platform and virtual consultation services, making our expertise accessible to clients worldwide." },
                { year: "2024", title: "250+ Success Stories", description: "Celebrating over 250 successful visa applications with a 98% success rate, establishing ourselves as a trusted partner in European immigration." }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-3">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <RelatedContent currentPage="about" />

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-500 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your European Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our expert team is here to guide you every step of the way. Book a consultation today and take the first step towards your European dream.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">250+</div>
              <div className="text-white/80">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consultation"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}