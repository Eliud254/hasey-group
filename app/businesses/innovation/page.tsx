import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function InnovationBusinessPage() {
  return (
    <PageLayout
      title="Innovation"
      subtitle="Pioneering solutions for tomorrow's challenges"
      backLink="/businesses"
      backLabel="Back to Businesses"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Our Innovation Business</h2>
          <p className="mb-4 text-gray-700">
            Hasey Group's Innovation division is at the forefront of technological advancement, developing cutting-edge
            solutions that address complex challenges across industries and drive digital transformation.
          </p>
          <p className="mb-8 text-gray-700">
            Through strategic investments, partnerships with leading research institutions, and our own R&D
            capabilities, we are pioneering innovations in artificial intelligence, IoT, advanced materials, and clean
            technology that shape the future of business and society.
          </p>

          <h3 className="mb-3 text-xl font-bold">Key Focus Areas</h3>
          <ul className="mb-8 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Artificial Intelligence and Machine Learning</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Internet of Things (IoT) and Industrial Automation</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Advanced Materials and Nanotechnology</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Clean Technology and Renewable Energy Solutions</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Digital Platforms and Software Solutions</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/projects?category=innovation">View Innovation Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact?department=innovation">Contact Innovation Division</Link>
            </Button>
          </div>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <Image
            src="/placeholder.svg?height=1000&width=800&query=futuristic technology innovation lab"
            alt="Hasey Innovation Center"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Featured Innovation Projects</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg border shadow-sm">
            <div className="relative h-48">
              <Image src="/interconnected-data-flow.png" alt="AI Platform" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">AI-Powered Predictive Analytics</h3>
              <p className="mb-4 text-gray-600">
                Advanced analytics platform using artificial intelligence to optimize operations and predict maintenance
                needs.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/projects/ai-analytics" className="flex items-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border shadow-sm">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600&query=industrial IoT sensors factory"
                alt="IoT Solutions"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">Industrial IoT Ecosystem</h3>
              <p className="mb-4 text-gray-600">
                Comprehensive IoT solution for industrial facilities, enabling real-time monitoring and automated
                decision-making.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/projects/industrial-iot" className="flex items-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border shadow-sm">
            <div className="relative h-48">
              <Image src="/business-innovation-materials.png" alt="Advanced Materials" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">Next-Gen Materials Research</h3>
              <p className="mb-4 text-gray-600">
                Development of sustainable, high-performance materials for construction, energy, and manufacturing
                applications.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/projects/advanced-materials" className="flex items-center gap-1">
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
