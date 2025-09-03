import { Metadata } from 'next'
import Link from 'next/link';
import { ArrowRight, Users, GraduationCap, FileText, Phone, CheckCircle, Globe, Award, Clock, Star, Quote, Calendar, Plane, MapPin } from 'lucide-react';
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import RelatedContent from '@/components/seo/RelatedContent'

export const metadata: Metadata = {
  title: 'BildungVisa - #1 German Visa & Ausbildung Experts | 98% Success Rate',
  description: 'Top-rated German visa consultation for students & professionals. Ausbildung programs, study visas, work permits, EU Blue Card. 250+ successful applications. 5+ years experience. Free consultation available.',
  keywords: [
    'German visa Bangladesh', 'Ausbildung programs Germany', 'Germany study visa Bangladesh', 'German work permit Bangladesh',
    'Bangladesh to Germany visa', 'German visa consultant Dhaka', 'Ausbildung visa Bangladesh', 'Germany immigration services',
    'EU Blue Card Bangladesh', 'German student visa application', 'Vocational training Germany Bangladesh', 'Germany job visa consultant',
    'Pflege Ausbildung Bangladesh', 'IT Ausbildung Germany', 'Engineering jobs Germany', 'Healthcare jobs Germany',
    'German visa agency Bangladesh', 'Europe visa services Dhaka', 'Study in Germany from Bangladesh', 'Work in Germany Bangladesh',
    'German embassy visa Bangladesh', 'Schengen visa Bangladesh', 'Germany visa requirements', 'German language course Bangladesh',
    'University admission Germany', 'German visa interview preparation', 'Germany visa success rate', 'Best German visa consultant'
  ],
  openGraph: {
    title: 'BildungVisa - #1 German Visa & Ausbildung Experts',
    description: 'Top-rated German visa consultation with 98% success rate. 250+ successful applications. 5+ years experience. Ausbildung, study visas, work permits. Free consultation available.',
    type: 'website',
    locale: 'en_US',
    url: 'https://bildungvisa.de',
    siteName: 'BildungVisa',
    images: [{
      url: 'https://bildungvisa.de/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'BildungVisa - German Visa Experts'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BildungVisa - #1 German Visa Experts | 98% Success Rate',
    description: 'Top-rated German visa consultation for students & professionals. 250+ successful applications. 5+ years experience. Free consultation available.',
    images: ['https://bildungvisa.de/twitter-image.jpg']
  },
  alternates: {
    canonical: 'https://bildungvisa.de',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Immigration Services',
}

const services = [
  {
    title: 'Ausbildung Programs',
    description: 'Comprehensive guidance for German vocational training programs with guaranteed job placement.',
    icon: Award,
    href: '/ausbildung',
    features: ['300+ Programs', 'Job Guarantee', 'Full Support']
  },
  {
    title: 'Study Visa Services',
    description: 'Complete assistance for study visas across Germany and EU countries.',
    icon: Globe,
    href: '/study-visa',
    features: ['EU Coverage', 'University Admission', 'Visa Processing']
  },
  {
    title: 'Work Permit Assistance',
    description: 'Specialized services for Bangladeshi professionals in Singapore, Malaysia, and UAE.',
    icon: Users,
    href: '/work-permit',
    features: ['Multiple Countries', 'Job Matching', 'Legal Support']
  }
]

const stats = [
  { number: '250+', label: 'Successful Applications' },
  { number: '98%', label: 'Visa Success Rate' },
  { number: '5+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' }
]

const testimonials = [
  {
    name: 'Ahmed Rahman',
    role: 'Ausbildung Graduate',
    content: 'AusbildungVisa made my dream of studying in Germany a reality. Their support was exceptional throughout the entire process.',
    rating: 5
  },
  {
    name: 'Fatima Khatun',
    role: 'Study Visa Recipient',
    content: 'Professional service and excellent guidance. I got my study visa for Netherlands within 3 months.',
    rating: 5
  },
  {
    name: 'Mohammad Ali',
    role: 'Work Permit Holder',
    content: 'They helped me secure a work permit for Germany. The process was smooth and transparent.',
    rating: 5
  }
]

const whyChooseUs = [
  {
    title: 'Expert Guidance',
    description: 'Our team of visa experts has years of experience in German and EU immigration processes.'
  },
  {
    title: 'High Success Rate',
    description: 'We maintain a 95% success rate in visa applications through our proven methodology.'
  },
  {
    title: 'End-to-End Support',
    description: 'From initial consultation to post-arrival assistance, we support you every step of the way.'
  },
  {
    title: 'Transparent Process',
    description: 'No hidden fees, clear timelines, and regular updates on your application status.'
  }
]

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bildungvisa.de/#organization",
        "name": "BildungVisa",
        "url": "https://bildungvisa.de",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bildungvisa.de/logo.png",
          "width": 300,
          "height": 100
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+49 1556 0354545",
          "contactType": "customer service",
          "areaServed": "DE",
          "availableLanguage": ["English", "German"]
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Frankfurt",
          "addressRegion": "Hessen",
          "addressCountry": "DE"
        },
        "sameAs": [
          "https://facebook.com/bildungvisa",
          "https://linkedin.com/company/bildungvisa",
          "https://twitter.com/bildungvisa"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://bildungvisa.de/#localbusiness",
        "name": "BildungVisa - German Visa Consultants",
        "image": "https://bildungvisa.de/business-image.jpg",
        "telephone": "+49 1556 0354545",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Frankfurt",
          "addressRegion": "Hessen",
          "addressCountry": "DE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 50.1109,
          "longitude": 8.6821
        },
        "url": "https://bildungvisa.de",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "priceRange": "$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500"
        }
      },
      {
        "@type": "Service",
        "@id": "https://bildungvisa.de/#services",
        "name": "German Visa Consultation Services",
        "provider": {
          "@id": "https://bildungvisa.de/#organization"
        },
        "areaServed": "Germany",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Visa Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ausbildung Program Consultation",
                "description": "Comprehensive guidance for German vocational training programs"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Study Visa Services",
                "description": "Complete assistance for study visas across Germany and EU"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Work Permit Assistance",
                "description": "Specialized services for work permits and EU Blue Card"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://bildungvisa.de/#website",
        "url": "https://bildungvisa.de",
        "name": "BildungVisa",
        "description": "Top-rated German visa consultation for students & professionals",
        "publisher": {
          "@id": "https://bildungvisa.de/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://bildungvisa.de/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-professional text-white py-20 animate-gradient-shift">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your Gateway to
                <span className="block text-white animate-pulse">
                  German Opportunities ⭐
                </span>
              </h1>
              <p className="text-xl text-white leading-relaxed">
                Professional visa consultation services for students and professionals seeking Ausbildung, study, and work opportunities in Germany and the EU.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation" className="btn-primary hover-lift">
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/ausbildung" className="btn-secondary hover-scale">
                  Explore Programs
                </Link>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              {/* Hero Icon Display */}
              <div className="mb-8 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 p-12 shadow-2xl">
                <div className="flex justify-center items-center space-x-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                    <GraduationCap className="w-16 h-16 text-white" />
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                    <Plane className="w-16 h-16 text-white" />
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                    <MapPin className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="text-center mt-6">
                  <p className="text-white font-semibold text-lg">Your Journey to Germany Starts Here</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-educational border-t-4 border-vibrant-yellow">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in hover-scale">
                <div className="text-4xl font-bold text-white mb-2 animate-bounce">{stat.number}</div>
                <div className="text-white font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-sunset border-t-4 border-vibrant-green">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-pulse">Our Services</h2>
            <p className="text-lg text-white mb-12 max-w-3xl mx-auto font-semibold">
              Comprehensive visa and immigration services tailored for students and professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const cardClasses = [
                'card-primary hover-lift animate-fade-in',
                'card-secondary hover-lift animate-fade-in',
                'card-accent hover-lift animate-fade-in'
              ]
              return (
                <div key={index} className={`card-primary p-6 transition-all duration-300 group`}>
                  <div className="text-center">
                    {/* Service Icon Display */}
                    <div className="mb-6 flex justify-center">
                      <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-rainbow rounded-full hover-scale animate-glow shadow-lg">
                        <IconComponent className="w-12 h-12 text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-blue-600 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 font-medium">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-vibrant-green animate-pulse" />
                          <span className="text-sm text-gray-700 font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link href={service.href} className="btn-primary w-full hover-scale">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t-4 border-blue-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-pulse">Why Choose BildungVisa?</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto font-semibold">
              We are committed to making your German dream a reality with our expert guidance and proven track record
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const iconColors = ['bg-blue-600', 'bg-green-600', 'bg-orange-600', 'bg-purple-600']
              return (
                <div key={index} className="text-center animate-fade-in hover-lift">
                  <div className={`${iconColors[index]} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 hover-scale animate-glow shadow-lg`}>
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">{item.title}</h3>
                  <p className="text-gray-600 font-medium">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-educational border-t-4 border-blue-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-pulse">Proven Success Stories</h2>
            <p className="text-lg text-white mb-12 max-w-3xl mx-auto font-semibold">
              Hear from our successful students who are now living their dreams in Germany
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const cardStyles = ['bg-white/10 backdrop-blur-sm border border-white/20', 'bg-white/10 backdrop-blur-sm border border-white/20', 'bg-white/10 backdrop-blur-sm border border-white/20']
              const avatarColors = ['bg-blue-600', 'bg-green-600', 'bg-purple-600']
              return (
                <div key={index} className={`${cardStyles[index % 3]} p-6 rounded-lg hover-lift animate-fade-in`}>
                  {/* Success Story Icon */}
                  <div className="mb-4 flex justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Award className="w-12 h-12 text-yellow-400" />
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${avatarColors[index % 3]} rounded-full flex items-center justify-center mr-4 hover-scale`}>
                      <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-200 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white mb-4 font-medium">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Related Content Section */}
      <RelatedContent currentPage="home" />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-professional text-white text-center">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Ready to Start Your German Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 animate-fade-in">
              Join hundreds of successful students who chose BildungVisa as their pathway to Germany
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link href="/consultation" className="btn-accent hover-lift text-lg px-8 py-4">
                Book Free Consultation
                <Calendar className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/contact" className="btn-outline hover-scale text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900">
                Contact Us
                <Phone className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}