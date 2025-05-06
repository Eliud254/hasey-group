import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function InfrastructureBusinessPage() {
  return (
    <PageLayout
      title="Infrastructure"
      subtitle="Building the foundations for sustainable growth and development"
      backLink="/businesses"
      backLabel="Back to Businesses"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Our Infrastructure Business</h2>
          <p className="mb-4 text-gray-700">
            Hasey Group's Infrastructure division develops, operates, and maintains critical infrastructure assets that
            connect communities, enable commerce, and support economic growth around the world.
          </p>
          <p className="mb-8 text-gray-700">
            From ports and logistics facilities to transportation networks and urban developments, our infrastructure
            solutions combine engineering excellence, innovative technologies, and sustainable practices to create
            long-term value for stakeholders.
          </p>

          <h3 className="mb-3 text-xl font-bold">Key Capabilities</h3>
          <ul className="mb-8 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Port development and operations</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Transportation infrastructure (roads, bridges, tunnels)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Urban development and smart city solutions</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Water and wastewater management systems</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Public-private partnerships for infrastructure development</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/projects?category=infrastructure">View Infrastructure Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact?department=infrastructure">Contact Infrastructure Division</Link>
            </Button>
          </div>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <Image
            src="/images/hero-infrastructure.png"
            alt="Hasey Infrastructure Operations"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Featured Infrastructure Projects</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg border shadow-sm">
            <div className="relative h-48">
              <Image src="/bustling-container-terminal.png" alt="Deep Water Port" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">Deep Water Port Expansion</h3>
              <p className="mb-4 text-gray-600">
                Major port expansion increasing capacity while implementing sustainable practices and advanced
                automation.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/projects/port-expansion" className="flex items-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border shadow-sm">
            <div className="relative h-48">
              <Image src="/interconnected-smart-city.png" alt="Smart City" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">Smart City Infrastructure</h3>
              <p className="mb-4 text-gray-600">
                Integrated urban development with smart technology for efficient resource management and improved
                quality of life.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/projects/smart-city" className="flex items-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border shadow-sm">
            <div className="relative h-48">
              <Image src="/business-infrastructure-highway.png" alt="Highway Network" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">Highway Network Development</h3>
              <p className="mb-4 text-gray-600">
                Comprehensive highway system with advanced traffic management and sustainable construction methods.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/projects/highway-network" className="flex items-center gap-1">
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
