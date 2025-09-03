'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface InternalLinkProps {
  href: string
  children: ReactNode
  className?: string
  title?: string
  rel?: string
  prefetch?: boolean
}

export default function InternalLink({ 
  href, 
  children, 
  className = '', 
  title,
  rel,
  prefetch = true 
}: InternalLinkProps) {
  return (
    <Link 
      href={href} 
      className={`text-blue-600 hover:text-blue-800 transition-colors duration-200 ${className}`}
      title={title}
      rel={rel}
      prefetch={prefetch}
    >
      {children}
    </Link>
  )
}

// Pre-built internal link components for common pages
export const AusbildungLink = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <InternalLink 
    href="/ausbildung" 
    className={className}
    title="German Ausbildung Programs - Healthcare, IT, Engineering"
  >
    {children}
  </InternalLink>
)

export const StudyVisaLink = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <InternalLink 
    href="/study-visa" 
    className={className}
    title="German Study Visa Services for Bangladeshi Students"
  >
    {children}
  </InternalLink>
)

export const WorkPermitLink = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <InternalLink 
    href="/work-permit" 
    className={className}
    title="German Work Permit and EU Blue Card Services"
  >
    {children}
  </InternalLink>
)

export const ConsultationLink = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <InternalLink 
    href="/consultation" 
    className={className}
    title="Free German Visa Consultation - Book Your Appointment"
  >
    {children}
  </InternalLink>
)

export const AboutLink = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <InternalLink 
    href="/about" 
    className={className}
    title="About AusbildungVisa - Your Trusted German Visa Partner"
  >
    {children}
  </InternalLink>
)

export const ContactLink = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <InternalLink 
    href="/contact" 
    className={className}
    title="Contact AusbildungVisa - German Visa Consultation Office"
  >
    {children}
  </InternalLink>
)

export const BlogLink = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <InternalLink 
    href="/blog" 
    className={className}
    title="German Visa Blog - Latest Updates and Success Stories"
  >
    {children}
  </InternalLink>
)