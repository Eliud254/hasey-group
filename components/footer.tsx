import Link from "next/link"
import Image from "next/image"
import {
  Building2,
  Users,
  Clock,
  Heart,
  MapPin,
  Droplets,
  Factory,
  Fuel,
  Smartphone,
  ShoppingBag,
  Film,
  Zap,
  Leaf,
  Users2,
  Scale,
  FileText,
  HeartHandshake,
  BarChart4,
  DollarSign,
  LineChart,
  Shield,
  Gift,
  Calendar,
  Newspaper,
  Radio,
  BookOpen,
  ImageIcon,
  CalendarDays,
  PhoneCall,
  Briefcase,
  Coffee,
  GraduationCap,
  Globe,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link href="/" className="mb-6 block">
              <Image
                src="/images/hasey-logo-white.png"
                alt="Hasey Group"
                width={200}
                height={53}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mb-6 text-gray-400">
              A global leader in energy, infrastructure, and innovation, committed to powering progress and shaping
              tomorrow.
            </p>
          </div>

          {/* About Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">About</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link href="/about/overview" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Building2 className="h-4 w-4" /> Overview
              </Link>
              <Link href="/about/leadership" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Users className="h-4 w-4" /> Leadership
              </Link>
              <Link href="/about/history" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Clock className="h-4 w-4" /> Our History
              </Link>
              <Link href="/about/values" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Heart className="h-4 w-4" /> Values & Culture
              </Link>
              <Link href="/about/global-presence" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <MapPin className="h-4 w-4" /> Global Presence
              </Link>
            </div>
          </div>

          {/* Businesses Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Businesses</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link href="/brands/hasey-petroleum" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Droplets className="h-4 w-4" /> Hasey Petroleum
              </Link>
              <Link href="/brands/go-digital" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Smartphone className="h-4 w-4" /> GoDigital
              </Link>
              <Link href="/brands/asa-poultry" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <ShoppingBag className="h-4 w-4" /> ASA Poultry
              </Link>
              <Link href="/brands/barwako-brothers" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <DollarSign className="h-4 w-4" /> Barwako Brothers
              </Link>
              <Link href="/brands/qatken-travel" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Globe className="h-4 w-4" /> Qatken Travel
              </Link>
              <Link href="/brands/jijo-media" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Film className="h-4 w-4" /> Jijo Media
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-start gap-2 text-gray-400">
                <MapPin className="mt-1 h-4 w-4" />
                <span>123 Business Avenue, New York, NY 10001, USA</span>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <PhoneCall className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </p>
              <Link href="/contact" className="inline-block rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
            <div>© 2024 Hasey Group. All rights reserved.</div>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
              <Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
