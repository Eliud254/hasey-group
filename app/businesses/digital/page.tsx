import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"
import { BrandLogo } from "@/components/brand-logo"

export default function DigitalBusinessPage() {
  const digitalBrands = [
    {
      name: "GoDigital",
      logo: "/logos/godigital-logo.png",
      description: "Digital transformation solutions for businesses of all sizes.",
      website: "https://godigital.example.com",
    },
    {
      name: "Jijo Digital",
      logo: "/logos/jijo-digital-logo.png",
      description: "Custom software development and IT consulting services.",
      website: "https://jijodigital.example.com",
    },
    {
      name: "SISO",
      logo: "/logos/siso-logo.png",
      description: "Enterprise software solutions and digital infrastructure services.",
      website: "https://siso.example.com",
    },
  ]

  return (
    <PageLayout title="Digital Business Sector" subtitle="Driving digital transformation and innovation">
      <div className="mb-12">
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/digital-sector.jpg"
            alt="Digital Business Sector"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 max-w-xl">
            <h2 className="text-3xl font-bold text-white mb-2">Digital Innovation</h2>
            <p className="text-white/90">Transforming businesses through cutting-edge digital solutions and services</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Digital Division</h2>
            <p className="text-gray-700 mb-4">
              The Hasey Group's Digital sector is at the forefront of technological innovation, providing cutting-edge
              solutions to businesses and consumers alike. Our digital brands leverage the latest technologies including
              artificial intelligence, cloud computing, and data analytics to deliver transformative digital
              experiences.
            </p>
            <p className="text-gray-700">
              With a focus on both B2B and B2C markets, our digital companies offer a comprehensive range of services
              from custom software development to enterprise-level digital transformation initiatives. Our teams of
              experienced professionals work closely with clients to understand their unique challenges and develop
              tailored solutions.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Capabilities</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xs font-bold text-primary">1</span>
                </div>
                <span>
                  <span className="font-semibold">Software Development:</span> Custom applications, mobile apps, and
                  enterprise software
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xs font-bold text-primary">2</span>
                </div>
                <span>
                  <span className="font-semibold">Digital Transformation:</span> End-to-end digital strategy and
                  implementation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xs font-bold text-primary">3</span>
                </div>
                <span>
                  <span className="font-semibold">Cloud Services:</span> Migration, management, and optimization
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xs font-bold text-primary">4</span>
                </div>
                <span>
                  <span className="font-semibold">Data Analytics:</span> Business intelligence and advanced analytics
                  solutions
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Brands Section - Prominent Display */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Digital Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {digitalBrands.map((brand) => (
              <div key={brand.name} className="bg-white rounded-lg shadow-md border p-6">
                <div className="flex items-center mb-4">
                  <BrandLogo name={brand.name} logo={brand.logo} size="lg" className="mr-4" />
                  <h3 className="text-xl font-bold">{brand.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{brand.description}</p>
                {brand.website && (
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={brand.website}
                      className="flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Digital Sector Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-600">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-gray-600">Enterprise Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <p className="text-gray-600">Technology Professionals</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
