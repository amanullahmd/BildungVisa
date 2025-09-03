import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const services = [
  { name: 'Ausbildung Programs', href: '/ausbildung' },
  { name: 'Study Visa Services', href: '/study-visa' },
  { name: 'Work Permit Assistance', href: '/work-permit' },
  { name: 'Consultation Booking', href: '/consultation' },
]

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Blog & Resources', href: '/blog' },
  { name: 'Success Stories', href: '/success-stories' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
]

const countries = [
  { name: 'Germany', href: '/countries/germany' },
  { name: 'Netherlands', href: '/countries/netherlands' },
  { name: 'Austria', href: '/countries/austria' },
  { name: 'Switzerland', href: '/countries/switzerland' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  BildungVisa
                </h3>
                <p className="text-gray-300 mb-6">
                  Your trusted partner for German visa services. We specialize in helping students and professionals achieve their dreams in Germany and the EU.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-white" />
                  <span>{process.env.NEXT_PUBLIC_CONTACT_PHONE || '+49 1556 0354545'}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-white" />
                  <span>{process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@bildungvisa.de'}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-white" />
                  <span>{process.env.NEXT_PUBLIC_OFFICE_ADDRESS || 'Frankfurt Germany'}</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-gray-400 hover:text-black transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors">
                   <Twitter className="w-6 h-6" />
                 </a>
                 <a href="#" className="text-gray-400 hover:text-black transition-colors">
                   <Linkedin className="w-6 h-6" />
                 </a>
                 <a href="#" className="text-gray-400 hover:text-black transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                 Quick Links
               </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Countries */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                 Resources
               </h4>
              <ul className="space-y-3">
                {countries.map((country) => (
                  <li key={country.name}>
                    <Link
                      href={country.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {country.name}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 BildungVisa. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}