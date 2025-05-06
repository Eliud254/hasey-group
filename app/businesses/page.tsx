import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function BusinessesPage() {
  return (
    <PageLayout title="Our Business Sectors" subtitle="Diversified operations across key sectors of the global economy">
      <div className="mb-16">
        <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-gray-700">
          Hasey Group operates across multiple industries, leveraging our expertise, resources, and global network to
          create value for our stakeholders. Our diversified portfolio allows us to capitalize on synergies while
          managing risks across different market cycles.
        </p>

        {/* Digital Sector */}
        <div className="mb-12 border rounded-lg overflow-hidden shadow-sm">
          <div className="bg-blue-50 p-6 border-b">
            <h2 className="text-2xl font-bold text-blue-800">Digital</h2>
            <p className="text-gray-600 mt-2">Digital transformation, software development, and IT services.</p>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">Our Brands:</h3>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>GoDigital</li>
              <li>Jijo Digital</li>
              <li>SISO</li>
            </ul>
            <Button asChild variant="outline">
              <Link href="/businesses/digital" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Food Sector */}
        <div className="mb-12 border rounded-lg overflow-hidden shadow-sm">
          <div className="bg-green-50 p-6 border-b">
            <h2 className="text-2xl font-bold text-green-800">Food</h2>
            <p className="text-gray-600 mt-2">Food production, processing, and distribution services.</p>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">Our Brands:</h3>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>ASA Poultry</li>
              <li>Sharaf Food</li>
              <li>Haya Water</li>
            </ul>
            <Button asChild variant="outline">
              <Link href="/businesses/food" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Finance Sector */}
        <div className="mb-12 border rounded-lg overflow-hidden shadow-sm">
          <div className="bg-purple-50 p-6 border-b">
            <h2 className="text-2xl font-bold text-purple-800">Finance</h2>
            <p className="text-gray-600 mt-2">
              Banking, microfinance, and financial services for individuals and businesses.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">Our Brands:</h3>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>Barwako Brothers</li>
              <li>Sharaf Microfinance</li>
              <li>Sharaf Bank</li>
              <li>Smoney</li>
            </ul>
            <Button asChild variant="outline">
              <Link href="/businesses/finance" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Tours & Travel Sector */}
        <div className="mb-12 border rounded-lg overflow-hidden shadow-sm">
          <div className="bg-yellow-50 p-6 border-b">
            <h2 className="text-2xl font-bold text-yellow-800">Tours & Travel</h2>
            <p className="text-gray-600 mt-2">Travel services, tour operations, and hospitality solutions.</p>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">Our Brands:</h3>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>Qatken Travel & Tours</li>
            </ul>
            <Button asChild variant="outline">
              <Link href="/businesses/tours-travel" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* E-Commerce Sector */}
        <div className="mb-12 border rounded-lg overflow-hidden shadow-sm">
          <div className="bg-orange-50 p-6 border-b">
            <h2 className="text-2xl font-bold text-orange-800">E-Commerce</h2>
            <p className="text-gray-600 mt-2">Online retail platforms and digital marketplace solutions.</p>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">Our Brands:</h3>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>Get24 Electronics</li>
              <li>SwiftSkillSquad</li>
              <li>Marikiti</li>
              <li>Hadiyad</li>
            </ul>
            <Button asChild variant="outline">
              <Link href="/businesses/e-commerce" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Oil & Gas Sector */}
        <div className="mb-12 border rounded-lg overflow-hidden shadow-sm">
          <div className="bg-red-50 p-6 border-b">
            <h2 className="text-2xl font-bold text-red-800">Oil & Gas</h2>
            <p className="text-gray-600 mt-2">
              Energy exploration, production, and distribution across global markets.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">Our Brands:</h3>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>Hasey Petroleum</li>
              <li>Hasey Oil</li>
              <li>Hasey Refinery</li>
            </ul>
            <Button asChild variant="outline">
              <Link href="/businesses/oil-gas" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Media Sector */}
        <div className="mb-12 border rounded-lg overflow-hidden shadow-sm">
          <div className="bg-pink-50 p-6 border-b">
            <h2 className="text-2xl font-bold text-pink-800">Media</h2>
            <p className="text-gray-600 mt-2">Content creation, broadcasting, and digital media services.</p>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">Our Brands:</h3>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>Jijo Media</li>
              <li>Jijo TV</li>
            </ul>
            <Button asChild variant="outline">
              <Link href="/businesses/media" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Real Estate Sector */}
        <div className="mb-12 border rounded-lg overflow-hidden shadow-sm">
          <div className="bg-indigo-50 p-6 border-b">
            <h2 className="text-2xl font-bold text-indigo-800">Real Estate</h2>
            <p className="text-gray-600 mt-2">Property development, management, and interior design solutions.</p>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">Our Brands:</h3>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>Qatken Properties</li>
              <li>H Interiors</li>
            </ul>
            <Button asChild variant="outline">
              <Link href="/businesses/real-estate" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Education Sector */}
        <div className="mb-12 border rounded-lg overflow-hidden shadow-sm">
          <div className="bg-teal-50 p-6 border-b">
            <h2 className="text-2xl font-bold text-teal-800">Education</h2>
            <p className="text-gray-600 mt-2">Higher education institutions and professional training services.</p>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">Our Brands:</h3>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>Sharaf University</li>
              <li>Balaf Institute</li>
            </ul>
            <Button asChild variant="outline">
              <Link href="/businesses/education" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Health Sector */}
        <div className="mb-12 border rounded-lg overflow-hidden shadow-sm">
          <div className="bg-cyan-50 p-6 border-b">
            <h2 className="text-2xl font-bold text-cyan-800">Health</h2>
            <p className="text-gray-600 mt-2">
              Healthcare facilities, specialized medical centers, and wellness services.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">Our Brands:</h3>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>Sheikh Abdi Cancer Centre</li>
              <li>Sharaf Group of Hospitals</li>
              <li>Sharaf Life</li>
            </ul>
            <Button asChild variant="outline">
              <Link href="/businesses/health" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-gray-100 p-8">
        <h2 className="mb-6 text-center text-3xl font-bold">Our Business Ecosystem</h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-gray-700">
          The Hasey Group ecosystem encompasses a diverse range of sectors and brands, working together to create
          synergies and deliver comprehensive solutions to our customers worldwide.
        </p>

        <div className="relative mx-auto h-[600px] max-w-4xl overflow-hidden rounded-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-20%20at%2015.47.20_793d61cd.jpg-mpflpZ9usxyqToC0SAJIelgoTXarW7.jpeg"
            alt="Hasey Group Business Ecosystem"
            fill
            className="object-contain rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </PageLayout>
  )
}
