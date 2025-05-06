import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, BarChart3, Shield, CreditCard, Building, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function FinancialServicesPage() {
  return (
    <PageLayout
      title="Financial Services"
      subtitle="Innovative financial solutions for businesses and individuals"
      backLink="/businesses"
      backLabel="Back to Businesses"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Our Financial Services Business</h2>
          <p className="mb-4 text-gray-700">
            Hasey Group's Financial Services division provides comprehensive financial solutions designed to meet the
            evolving needs of businesses and individuals. From banking and investment services to insurance and
            financial technology, we deliver innovative products backed by expertise and integrity.
          </p>
          <p className="mb-8 text-gray-700">
            Our customer-centric approach, combined with advanced digital capabilities, allows us to offer seamless
            financial experiences while maintaining the highest standards of security and compliance. We're committed to
            helping our clients achieve their financial goals through personalized service and forward-thinking
            solutions.
          </p>

          <h3 className="mb-3 text-xl font-bold">Key Services</h3>
          <ul className="mb-8 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Corporate and retail banking</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Investment management and advisory</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Insurance and risk management</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Digital payment solutions</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Microfinance and inclusive banking</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/projects?category=financial">View Financial Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact?department=financial">Contact Financial Services</Link>
            </Button>
          </div>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <Image src="/placeholder.svg?key=9ys57" alt="Hasey Financial Services" fill className="object-cover" />
        </div>
      </div>

      <div className="mt-16 mb-16">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Financial Solutions</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
              <Building className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Banking Services</h3>
            <p className="mb-6 text-gray-600">
              Comprehensive banking solutions for individuals and businesses, including accounts, loans, and trade
              finance.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="/businesses/financial-services/banking" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <BarChart3 className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Investment Services</h3>
            <p className="mb-6 text-gray-600">
              Expert investment management and advisory services to help clients grow and protect their assets.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="/businesses/financial-services/investments" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
              <Shield className="h-7 w-7 text-amber-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Insurance</h3>
            <p className="mb-6 text-gray-600">
              Comprehensive insurance solutions to protect individuals and businesses against various risks.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="/businesses/financial-services/insurance" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
              <CreditCard className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Payment Solutions</h3>
            <p className="mb-6 text-gray-600">
              Innovative digital payment platforms and solutions for seamless financial transactions.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="/businesses/financial-services/payments" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
              <LineChart className="h-7 w-7 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Microfinance</h3>
            <p className="mb-6 text-gray-600">
              Accessible financial services for underserved communities, supporting economic empowerment and growth.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="/businesses/financial-services/microfinance" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-teal-100">
              <Shield className="h-7 w-7 text-teal-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Risk Management</h3>
            <p className="mb-6 text-gray-600">
              Advanced risk assessment and management solutions to protect financial assets and operations.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="/businesses/financial-services/risk-management" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-16 rounded-xl bg-gray-50 p-8 md:p-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold">Featured Companies</h2>
            <p className="mb-6 text-gray-700">
              Our Financial Services division includes several specialized companies, each focused on delivering
              excellence in their respective areas. These companies combine local expertise with global best practices
              to provide innovative financial solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-gray-200 bg-white p-1">
                  <Image src="/logos/sharaf-bank-logo.png" alt="Sharaf Bank" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="font-medium">Sharaf Bank</h3>
                  <p className="text-sm text-gray-600">Corporate and retail banking services</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-gray-200 bg-white p-1">
                  <Image
                    src="/logos/sharaf-microfinance-logo.png"
                    alt="Sharaf Microfinance"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Sharaf Microfinance</h3>
                  <p className="text-sm text-gray-600">Inclusive financial services</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-gray-200 bg-white p-1">
                  <Image src="/logos/smoney-logo.png" alt="SMoney" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="font-medium">SMoney</h3>
                  <p className="text-sm text-gray-600">Digital payment platform</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link href="/companies?sector=financial">View All Financial Companies</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-xl md:h-auto">
            <Image src="/placeholder.svg?key=q7gyr" alt="Hasey Financial Companies" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Global Presence</h2>
        <div className="relative h-[400px] overflow-hidden rounded-xl">
          <Image
            src="/placeholder.svg?height=400&width=800&query=global financial network with world map and connection lines"
            alt="Global Financial Operations"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:max-w-lg">
            <h3 className="mb-4 text-2xl font-bold text-white">Serving Clients Worldwide</h3>
            <p className="mb-6 text-white/90">
              Our financial services network spans multiple countries, allowing us to serve clients globally while
              understanding local market dynamics.
            </p>
            <Button asChild>
              <Link href="/about/global-presence">Explore Our Global Network</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
