import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function EnergyBusinessPage() {
  return (
    <PageLayout
      title="Energy"
      subtitle="Powering the world with reliable and sustainable energy solutions"
      backLink="/businesses"
      backLabel="Back to Businesses"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Our Energy Business</h2>
          <p className="mb-4 text-gray-700">
            Hasey Group's Energy division is at the forefront of the global energy transition, balancing the delivery of
            reliable energy solutions today while investing in the sustainable energy systems of tomorrow.
          </p>
          <p className="mb-8 text-gray-700">
            From exploration and production of oil and gas to refining, marketing, and the development of renewable
            energy sources, our integrated approach ensures we meet the world's growing energy needs while reducing
            environmental impact.
          </p>

          <h3 className="mb-3 text-xl font-bold">Key Capabilities</h3>
          <ul className="mb-8 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Exploration and production of oil and gas resources</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Refining and petrochemical manufacturing</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Renewable energy development and integration</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Energy trading and marketing</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Carbon capture and storage technologies</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/projects?category=energy">View Energy Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact?department=energy">Contact Energy Division</Link>
            </Button>
          </div>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <Image src="/images/hero-energy.png" alt="Hasey Energy Operations" fill className="object-cover" />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Featured Energy Projects</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg border shadow-sm">
            <div className="relative h-48">
              <Image src="/images/featured-project.png" alt="Offshore Platform" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">Offshore Energy Platform</h3>
              <p className="mb-4 text-gray-600">
                State-of-the-art offshore platform with advanced safety systems and carbon capture technology.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/projects/offshore-platform" className="flex items-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border shadow-sm">
            <div className="relative h-48">
              <Image src="/business-energy-solar.png" alt="Solar Farm" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">Solar Energy Farm</h3>
              <p className="mb-4 text-gray-600">
                Large-scale solar installation providing clean energy to thousands of homes and businesses.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/projects/solar-farm" className="flex items-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border shadow-sm">
            <div className="relative h-48">
              <Image src="/business-energy-refinery.png" alt="Modern Refinery" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">Advanced Refinery</h3>
              <p className="mb-4 text-gray-600">
                Next-generation refining facility with industry-leading efficiency and environmental standards.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/projects/advanced-refinery" className="flex items-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
