'use client'

import { AusbildungLink, StudyVisaLink, WorkPermitLink, ConsultationLink, AboutLink, ContactLink, BlogLink } from './InternalLink'
import { ArrowRight, BookOpen, Users, FileText, Phone } from 'lucide-react'

interface RelatedContentProps {
  currentPage: string
  className?: string
}

interface RelatedLink {
  component: React.ComponentType<{ children: React.ReactNode, className?: string }>
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const relatedLinksMap: Record<string, RelatedLink[]> = {
  home: [
    {
      component: AusbildungLink,
      title: 'German Ausbildung Programs',
      description: 'Explore healthcare, IT, and engineering training programs in Germany',
      icon: BookOpen
    },
    {
      component: StudyVisaLink,
      title: 'Study Visa Services',
      description: 'Complete guide to German student visa application process',
      icon: FileText
    },
    {
      component: WorkPermitLink,
      title: 'Work Permit & EU Blue Card',
      description: 'Professional work opportunities in Germany and Europe',
      icon: Users
    },
    {
      component: ConsultationLink,
      title: 'Free Consultation',
      description: 'Book your personalized German visa consultation today',
      icon: Phone
    }
  ],
  ausbildung: [
    {
      component: StudyVisaLink,
      title: 'Study Visa Requirements',
      description: 'Learn about visa requirements for Ausbildung programs',
      icon: FileText
    },
    {
      component: WorkPermitLink,
      title: 'Work After Ausbildung',
      description: 'Career opportunities after completing your Ausbildung',
      icon: Users
    },
    {
      component: ConsultationLink,
      title: 'Ausbildung Consultation',
      description: 'Get expert guidance on choosing the right Ausbildung program',
      icon: Phone
    }
  ],
  'study-visa': [
    {
      component: AusbildungLink,
      title: 'Ausbildung Programs',
      description: 'Vocational training programs with guaranteed job placement',
      icon: BookOpen
    },
    {
      component: WorkPermitLink,
      title: 'Work While Studying',
      description: 'Part-time work opportunities for international students',
      icon: Users
    },
    {
      component: ConsultationLink,
      title: 'Study Visa Consultation',
      description: 'Expert guidance for your German study visa application',
      icon: Phone
    }
  ],
  'work-permit': [
    {
      component: AusbildungLink,
      title: 'Professional Training',
      description: 'Enhance your skills with German Ausbildung programs',
      icon: BookOpen
    },
    {
      component: StudyVisaLink,
      title: 'Further Education',
      description: 'Continue your education while working in Germany',
      icon: FileText
    },
    {
      component: ConsultationLink,
      title: 'Work Permit Consultation',
      description: 'Professional guidance for EU Blue Card and work permits',
      icon: Phone
    }
  ],
  consultation: [
    {
      component: AusbildungLink,
      title: 'Ausbildung Options',
      description: 'Discover available training programs in your field',
      icon: BookOpen
    },
    {
      component: StudyVisaLink,
      title: 'Study Opportunities',
      description: 'Explore German universities and study programs',
      icon: FileText
    },
    {
      component: WorkPermitLink,
      title: 'Work Opportunities',
      description: 'Professional career paths in Germany and Europe',
      icon: Users
    }
  ],
  about: [
    {
      component: ConsultationLink,
      title: 'Book Consultation',
      description: 'Schedule your free consultation with our experts',
      icon: Phone
    },
    {
      component: BlogLink,
      title: 'Success Stories',
      description: 'Read about our clients\' successful German visa journeys',
      icon: BookOpen
    },
    {
      component: ContactLink,
      title: 'Contact Us',
      description: 'Get in touch with our German visa specialists',
      icon: Phone
    }
  ],
  contact: [
    {
      component: ConsultationLink,
      title: 'Free Consultation',
      description: 'Book your personalized consultation appointment',
      icon: Phone
    },
    {
      component: AboutLink,
      title: 'About Our Team',
      description: 'Meet our experienced German visa consultants',
      icon: Users
    },
    {
      component: BlogLink,
      title: 'Latest Updates',
      description: 'Stay updated with German visa news and success stories',
      icon: FileText
    }
  ]
}

export default function RelatedContent({ currentPage, className = '' }: RelatedContentProps) {
  const relatedLinks = relatedLinksMap[currentPage] || relatedLinksMap.home

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Related Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover more ways we can help you achieve your German visa goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedLinks.map((link, index) => {
            const IconComponent = link.icon
            const LinkComponent = link.component
            
            return (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <LinkComponent className="text-xl font-semibold text-gray-900 hover:text-blue-600">
                    {link.title}
                  </LinkComponent>
                </div>
                <p className="text-gray-600 mb-4">{link.description}</p>
                <LinkComponent className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </LinkComponent>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}