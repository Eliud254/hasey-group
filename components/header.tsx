"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Globe,
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
  BookOpenIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-[90] w-full border-b bg-white/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/hasey-logo.png"
              alt="Hasey Group"
              width={720}
              height={191}
              className="h-32 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Navigation - centered */}
        <div className="hidden flex-1 justify-center md:flex">
          <nav className="flex gap-8">
            {/* About Dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium py-2">
                About <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full z-[100] mt-1 hidden w-[600px] max-w-[95vw] rounded-md border bg-white p-4 shadow-lg group-hover:block lg:left-1/2 lg:-translate-x-1/2">
                <div className="grid grid-cols-3 gap-4">
                  <Link
                    href="/about/overview"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <Building2 className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Overview</div>
                      <div className="text-sm text-muted-foreground">Learn about our company</div>
                    </div>
                  </Link>
                  <Link
                    href="/about/leadership"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <Users className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Leadership</div>
                      <div className="text-sm text-muted-foreground">Meet our executive team</div>
                    </div>
                  </Link>
                  <Link
                    href="/about/history"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <Clock className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Our History</div>
                      <div className="text-sm text-muted-foreground">Our journey through the years</div>
                    </div>
                  </Link>
                  <Link
                    href="/about/values"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <Heart className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Values & Culture</div>
                      <div className="text-sm text-muted-foreground">What drives us forward</div>
                    </div>
                  </Link>
                  <Link
                    href="/about/global-presence"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Global Presence</div>
                      <div className="text-sm text-muted-foreground">Our operations worldwide</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Businesses Dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium py-2">
                Businesses <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div
                className="absolute top-full z-[100] mt-1 hidden w-[1000px] max-w-[95vw] rounded-md border bg-white p-4 shadow-lg group-hover:block"
                style={{ left: "50%", transform: "translateX(-50%)" }}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Droplets className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">Oil & Gas</h3>
                    </div>
                    <div className="space-y-1.5">
                      <Link href="/brands/hasey-petroleum" className="block text-sm text-gray-600 hover:text-primary">Hasey Petroleum</Link>
                      <Link href="/brands/hasey-oil" className="block text-sm text-gray-600 hover:text-primary">Hasey Oil</Link>
                      <Link href="/brands/hasey-refinery" className="block text-sm text-gray-600 hover:text-primary">Hasey Refinery</Link>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">Digital</h3>
                    </div>
                    <div className="space-y-1.5">
                      <Link href="https://godigitalafrica.com/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-primary">GoDigital</Link>
                      <Link href="/brands/jijo-digital" className="block text-sm text-gray-600 hover:text-primary">Jijo Digital</Link>
                      <Link href="/brands/siso" className="block text-sm text-gray-600 hover:text-primary">SISO</Link>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">Food</h3>
                    </div>
                    <div className="space-y-1.5">
                      <Link href="/brands/asa-poultry" className="block text-sm text-gray-600 hover:text-primary">ASA Poultry</Link>
                      <Link href="/brands/sharaf-food" className="block text-sm text-gray-600 hover:text-primary">Sharaf</Link>
                      <Link href="/brands/haya-water" className="block text-sm text-gray-600 hover:text-primary">Haya Water</Link>
                      <Link href="/brands/asa" className="block text-sm text-gray-600 hover:text-primary">ASA</Link>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">Finance</h3>
                    </div>
                    <div className="space-y-1.5">
                      <Link href="/brands/barwako-brothers" className="block text-sm text-gray-600 hover:text-primary">Barwako Brothers</Link>
                      <Link href="/brands/sharaf-microfinance" className="block text-sm text-gray-600 hover:text-primary">Sharaf Microfinance</Link>
                      <Link href="/brands/sharaf-bank" className="block text-sm text-gray-600 hover:text-primary">Sharaf Bank</Link>
                      <Link href="/brands/smoney" className="block text-sm text-gray-600 hover:text-primary">Smoney</Link>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">Tours & Travel</h3>
                    </div>
                    <div className="space-y-1.5">
                      <Link href="https://qatkentravel.com/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-primary">Qatken Travel & Tours</Link>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">E-Commerce</h3>
                    </div>
                    <div className="space-y-1.5">
                      <Link href="/brands/get24" className="block text-sm text-gray-600 hover:text-primary">Get24 Electronics</Link>
                      <Link href="/brands/marikiti" className="block text-sm text-gray-600 hover:text-primary">Marikiti</Link>
                      <Link href="/brands/swift-skill-squad" className="block text-sm text-gray-600 hover:text-primary">SwiftSkillSquad</Link>
                      <Link href="/brands/hadiyad" className="block text-sm text-gray-600 hover:text-primary">Hadiyad</Link>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Film className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">Media</h3>
                    </div>
                    <div className="space-y-1.5">
                      <Link href="/brands/jijo-media" className="block text-sm text-gray-600 hover:text-primary">Jijo Media</Link>
                      <Link href="/brands/jijo-tv" className="block text-sm text-gray-600 hover:text-primary">Jijo TV</Link>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">Real Estate</h3>
                    </div>
                    <div className="space-y-1.5">
                      <Link href="/brands/qatken-properties" className="block text-sm text-gray-600 hover:text-primary">Qatken Properties</Link>
                      <Link href="/brands/interiors" className="block text-sm text-gray-600 hover:text-primary">Interiors</Link>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">Education</h3>
                    </div>
                    <div className="space-y-1.5">
                      <Link href="/brands/sharaf-university" className="block text-sm text-gray-600 hover:text-primary">Sharaf University</Link>
                      <Link href="/brands/balaf-institute" className="block text-sm text-gray-600 hover:text-primary">Balaf Institute</Link>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">Health</h3>
                    </div>
                    <div className="space-y-1.5">
                      <Link href="/brands/sheikh-abdi" className="block text-sm text-gray-600 hover:text-primary">Sheikh Abdi Cancer Centre</Link>
                      <Link href="/brands/sharaf-hospitals" className="block text-sm text-gray-600 hover:text-primary">Sharaf Group of Hospitals</Link>
                      <Link href="/brands/sharaf-life" className="block text-sm text-gray-600 hover:text-primary">Sharaf Life</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sustainability Dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium py-2">
                Sustainability{" "}
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div
                className="absolute left-1/2 top-full z-[100] mt-1 hidden w-[800px] max-w-[95vw] rounded-md border bg-white p-4 shadow-lg group-hover:block"
                style={{ transform: "translateX(-50%)" }}
              >
                <div className="grid grid-cols-3 gap-4">
                  <Link
                    href="/sustainability/overview"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <Building2 className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Overview</div>
                      <div className="text-sm text-muted-foreground">Our sustainability approach</div>
                    </div>
                  </Link>
                  <Link
                    href="/sustainability/environment"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <Leaf className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Environment</div>
                      <div className="text-sm text-muted-foreground">Climate action and conservation</div>
                    </div>
                  </Link>
                  <Link
                    href="/sustainability/social"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <Users2 className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Social</div>
                      <div className="text-sm text-muted-foreground">Community initiatives and welfare</div>
                    </div>
                  </Link>
                  <Link
                    href="/sustainability/governance"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <Scale className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Governance</div>
                      <div className="text-sm text-muted-foreground">Ethical business practices</div>
                    </div>
                  </Link>
                  <Link
                    href="/sustainability/reports"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <FileText className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Reports & Disclosures</div>
                      <div className="text-sm text-muted-foreground">Sustainability performance data</div>
                    </div>
                  </Link>
                  <Link
                    href="/sustainability/foundation"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <HeartHandshake className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Hasey Foundation</div>
                      <div className="text-sm text-muted-foreground">Philanthropic initiatives</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Investors Dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium py-2">
                Investors <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div
                className="absolute top-full z-[100] mt-1 hidden w-[800px] max-w-[95vw] rounded-md border bg-white p-4 shadow-lg group-hover:block lg:left-1/2 lg:-translate-x-1/2"
                style={{ left: "auto", right: "0" }}
              >
                <div className="grid grid-cols-3 gap-4">
                  <Link
                    href="/investors/overview"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <BarChart4 className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Overview</div>
                      <div className="text-sm text-muted-foreground">Investment highlights</div>
                    </div>
                  </Link>
                  <Link
                    href="/investors/financial-information"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <DollarSign className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Financial Information</div>
                      <div className="text-sm text-muted-foreground">Reports and statements</div>
                    </div>
                  </Link>
                  <Link
                    href="/investors/stock-information"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <LineChart className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Stock Information</div>
                      <div className="text-sm text-muted-foreground">Share price and performance</div>
                    </div>
                  </Link>
                  <Link
                    href="/investors/corporate-governance"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <Shield className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Corporate Governance</div>
                      <div className="text-sm text-muted-foreground">Board and governance structure</div>
                    </div>
                  </Link>
                  <Link
                    href="/investors/shareholder-resources"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <Gift className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Shareholder Resources</div>
                      <div className="text-sm text-muted-foreground">Dividends and shareholder services</div>
                    </div>
                  </Link>
                  <Link
                    href="/investors/events-presentations"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <Calendar className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Events & Presentations</div>
                      <div className="text-sm text-muted-foreground">Investor events and webcasts</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* News & Media Dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium py-2">
                News & Media{" "}
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div
                className="absolute top-full z-[100] mt-1 hidden w-[800px] max-w-[95vw] rounded-md border bg-white p-4 shadow-lg group-hover:block lg:left-1/2 lg:-translate-x-1/2"
                style={{ left: "auto", right: "0" }}
              >
                <div className="grid grid-cols-3 gap-4">
                  <Link
                    href="/news/press-releases"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <Newspaper className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Press Releases</div>
                      <div className="text-sm text-muted-foreground">Latest company announcements</div>
                    </div>
                  </Link>
                  <Link
                    href="/news/media-coverage"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <Radio className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Media Coverage</div>
                      <div className="text-sm text-muted-foreground">News articles about Hasey Group</div>
                    </div>
                  </Link>
                  <Link
                    href="/news/stories"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <BookOpen className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Stories</div>
                      <div className="text-sm text-muted-foreground">Feature stories and case studies</div>
                    </div>
                  </Link>
                  <Link
                    href="/news/media-library"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <ImageIcon className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Media Library</div>
                      <div className="text-sm text-muted-foreground">Images, videos, and resources</div>
                    </div>
                  </Link>
                  <Link
                    href="/news/events"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <CalendarDays className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Events</div>
                      <div className="text-sm text-muted-foreground">Upcoming and past events</div>
                    </div>
                  </Link>
                  <Link
                    href="/news/contact-media"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <PhoneCall className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Media Contacts</div>
                      <div className="text-sm text-muted-foreground">Press and media inquiries</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Careers Dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium py-2">
                Careers <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div
                className="absolute top-full z-[100] mt-1 hidden w-[800px] max-w-[95vw] rounded-md border bg-white p-4 shadow-lg group-hover:block lg:left-1/2 lg:-translate-x-1/2"
                style={{ left: "auto", right: "0" }}
              >
                <div className="grid grid-cols-3 gap-4">
                  <Link
                    href="/careers/why-hasey"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <Briefcase className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Why Hasey Group</div>
                      <div className="text-sm text-muted-foreground">Benefits of joining our team</div>
                    </div>
                  </Link>
                  <Link
                    href="/careers/life-at-hasey"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <Coffee className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Life at Hasey Group</div>
                      <div className="text-sm text-muted-foreground">Our culture and work environment</div>
                    </div>
                  </Link>
                  <Link
                    href="/careers/opportunities"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <Zap className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Opportunities</div>
                      <div className="text-sm text-muted-foreground">Current job openings</div>
                    </div>
                  </Link>
                  <Link
                    href="/careers/campus-recruitment"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <GraduationCap className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Campus Recruitment</div>
                      <div className="text-sm text-muted-foreground">Programs for students and graduates</div>
                    </div>
                  </Link>
                  <Link
                    href="/careers/learning-development"
                    className="flex cursor-pointer items-start gap-3 rounded-md p-3 hover:bg-gray-100"
                  >
                    <BookOpenIcon className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Learning & Development</div>
                      <div className="text-sm text-muted-foreground">Growth and training opportunities</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>

          <div className="group relative hidden md:block">
            <Button variant="ghost" size="icon">
              <Globe className="h-5 w-5" />
            </Button>
            <div className="absolute right-0 top-full z-50 mt-1 hidden w-40 rounded-md border bg-white p-1 shadow-lg group-hover:block">
              <button className="w-full rounded-sm px-3 py-2 text-left text-sm hover:bg-gray-100">English</button>
              <button className="w-full rounded-sm px-3 py-2 text-left text-sm hover:bg-gray-100">Español</button>
              <button className="w-full rounded-sm px-3 py-2 text-left text-sm hover:bg-gray-100">Français</button>
              <button className="w-full rounded-sm px-3 py-2 text-left text-sm hover:bg-gray-100">中文</button>
              <button className="w-full rounded-sm px-3 py-2 text-left text-sm hover:bg-gray-100">العربية</button>
            </div>
          </div>

          <Button className="hidden md:flex">Contact Us</Button>

          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary md:hidden"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } md:hidden fixed top-[64px] left-0 right-0 bottom-0 bg-white shadow-lg z-[100] border-t overflow-y-auto`}
      >
        <div className="space-y-1 px-4 py-5 sm:px-6">
          <nav className="flex flex-col gap-4">
            <div className="border-b pb-2">
              <div className="mb-2 font-medium">About</div>
              <div className="grid grid-cols-1 gap-2">
                <Link href="/about/overview" className="flex items-center gap-2 text-sm text-gray-600">
                  <Building2 className="h-4 w-4 text-primary" /> Overview
                </Link>
                <Link href="/about/leadership" className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="h-4 w-4 text-primary" /> Leadership
                </Link>
                <Link href="/about/history" className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4 text-primary" /> Our History
                </Link>
                <Link href="/about/values" className="flex items-center gap-2 text-sm text-gray-600">
                  <Heart className="h-4 w-4 text-primary" /> Values & Culture
                </Link>
                <Link href="/about/global-presence" className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 text-primary" /> Global Presence
                </Link>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="mb-2 font-medium">Businesses</div>
              <div className="grid grid-cols-1 gap-2">
                <Link
                  href="/businesses/oil-gas"
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <Droplets className="h-4 w-4 text-primary" /> Oil & Gas
                </Link>
                <Link href="/businesses/digital" className="flex items-center gap-2 text-sm text-gray-600">
                  <Smartphone className="h-4 w-4 text-primary" /> Digital
                </Link>
                <Link href="/businesses/food" className="flex items-center gap-2 text-sm text-gray-600">
                  <ShoppingBag className="h-4 w-4 text-primary" /> Food
                </Link>
                <Link href="/businesses/finance" className="flex items-center gap-2 text-sm text-gray-600">
                  <DollarSign className="h-4 w-4 text-primary" /> Finance
                </Link>
                <Link href="/businesses/tours-travel" className="flex items-center gap-2 text-sm text-gray-600">
                  <Globe className="h-4 w-4 text-primary" /> Tours & Travel
                </Link>
                <Link href="/businesses/ecommerce" className="flex items-center gap-2 text-sm text-gray-600">
                  <ShoppingBag className="h-4 w-4 text-primary" /> E-Commerce
                </Link>
                <Link href="/businesses/media" className="flex items-center gap-2 text-sm text-gray-600">
                  <Film className="h-4 w-4 text-primary" /> Media
                </Link>
                <Link href="/businesses/real-estate" className="flex items-center gap-2 text-sm text-gray-600">
                  <Building2 className="h-4 w-4 text-primary" /> Real Estate
                </Link>
                <Link href="/businesses/education" className="flex items-center gap-2 text-sm text-gray-600">
                  <GraduationCap className="h-4 w-4 text-primary" /> Education
                </Link>
                <Link href="/businesses/health" className="flex items-center gap-2 text-sm text-gray-600">
                  <Heart className="h-4 w-4 text-primary" /> Health
                </Link>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="mb-2 font-medium">Sustainability</div>
              <div className="grid grid-cols-1 gap-2">
                <Link href="/sustainability/overview" className="flex items-center gap-2 text-sm text-gray-600">
                  <Building2 className="h-4 w-4 text-primary" /> Overview
                </Link>
                <Link href="/sustainability/environment" className="flex items-center gap-2 text-sm text-gray-600">
                  <Leaf className="h-4 w-4 text-primary" /> Environment
                </Link>
                <Link href="/sustainability/social" className="flex items-center gap-2 text-sm text-gray-600">
                  <Users2 className="h-4 w-4 text-primary" /> Social
                </Link>
                <Link href="/sustainability/governance" className="flex items-center gap-2 text-sm text-gray-600">
                  <Scale className="h-4 w-4 text-primary" /> Governance
                </Link>
                <Link href="/sustainability/reports" className="flex items-center gap-2 text-sm text-gray-600">
                  <FileText className="h-4 w-4 text-primary" /> Reports & Disclosures
                </Link>
                <Link href="/sustainability/foundation" className="flex items-center gap-2 text-sm text-gray-600">
                  <HeartHandshake className="h-4 w-4 text-primary" /> Hasey Foundation
                </Link>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="mb-2 font-medium">Investors</div>
              <div className="grid grid-cols-1 gap-2">
                <Link href="/investors/overview" className="flex items-center gap-2 text-sm text-gray-600">
                  <BarChart4 className="h-4 w-4 text-primary" /> Overview
                </Link>
                <Link href="/investors/financial-information" className="flex items-center gap-2 text-sm text-gray-600">
                  <DollarSign className="h-4 w-4 text-primary" /> Financial Information
                </Link>
                <Link href="/investors/stock-information" className="flex items-center gap-2 text-sm text-gray-600">
                  <LineChart className="h-4 w-4 text-primary" /> Stock Information
                </Link>
                <Link href="/investors/corporate-governance" className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="h-4 w-4 text-primary" /> Corporate Governance
                </Link>
                <Link href="/investors/shareholder-resources" className="flex items-center gap-2 text-sm text-gray-600">
                  <Gift className="h-4 w-4 text-primary" /> Shareholder Resources
                </Link>
                <Link href="/investors/events-presentations" className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4 text-primary" /> Events & Presentations
                </Link>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="mb-2 font-medium">News & Media</div>
              <div className="grid grid-cols-1 gap-2">
                <Link href="/news/press-releases" className="flex items-center gap-2 text-sm text-gray-600">
                  <Newspaper className="h-4 w-4 text-primary" /> Press Releases
                </Link>
                <Link href="/news/media-coverage" className="flex items-center gap-2 text-sm text-gray-600">
                  <Radio className="h-4 w-4 text-primary" /> Media Coverage
                </Link>
                <Link href="/news/stories" className="flex items-center gap-2 text-sm text-gray-600">
                  <BookOpen className="h-4 w-4 text-primary" /> Stories
                </Link>
                <Link href="/news/media-library" className="flex items-center gap-2 text-sm text-gray-600">
                  <ImageIcon className="h-4 w-4 text-primary" /> Media Library
                </Link>
                <Link href="/news/events" className="flex items-center gap-2 text-sm text-gray-600">
                  <CalendarDays className="h-4 w-4 text-primary" /> Events
                </Link>
                <Link href="/news/contact-media" className="flex items-center gap-2 text-sm text-gray-600">
                  <PhoneCall className="h-4 w-4 text-primary" /> Media Contacts
                </Link>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="mb-2 font-medium">Careers</div>
              <div className="grid grid-cols-1 gap-2">
                <Link href="/careers/why-hasey" className="flex items-center gap-2 text-sm text-gray-600">
                  <Briefcase className="h-4 w-4 text-primary" /> Why Hasey Group
                </Link>
                <Link href="/careers/life-at-hasey" className="flex items-center gap-2 text-sm text-gray-600">
                  <Coffee className="h-4 w-4 text-primary" /> Life at Hasey Group
                </Link>
                <Link href="/careers/opportunities" className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="h-4 w-4 text-primary" /> Opportunities
                </Link>
                <Link href="/careers/campus-recruitment" className="flex items-center gap-2 text-sm text-gray-600">
                  <GraduationCap className="h-4 w-4 text-primary" /> Campus Recruitment
                </Link>
                <Link href="/careers/learning-development" className="flex items-center gap-2 text-sm text-gray-600">
                  <BookOpenIcon className="h-4 w-4 text-primary" /> Learning & Development
                </Link>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <Button className="w-full">Contact Us</Button>
              <div className="flex justify-between">
                <Button variant="outline" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
