import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function ManufacturingBusinessPage() {
  return (
    <PageLayout
      title="Manufacturing"
      subtitle="Creating quality products with innovative manufacturing solutions"
      backLink="/businesses"
      backLabel="Back to Businesses"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Our Manufacturing Business</h2>
          <p className="mb-4 text-gray-700">
            Hasey Group's Manufacturing division combines cutting-edge technology with operational excellence to produce
            high-quality products across multiple industries. From consumer goods to industrial components, we deliver
            precision, reliability, and innovation.
          </p>
          <p className="mb-8 text-gray-700">
            Our state-of-the-art facilities employ advanced automation, quality control systems, and sustainable
            practices to ensure efficient production while minimizing environmental impact. We continuously invest in
            new technologies and processes to stay at the forefront of manufacturing excellence.
          </p>

          <h3 className="mb-3 text-xl font-bold">Key Capabilities</h3>
          <ul className="mb-8 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Advanced automation and robotics</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Precision engineering and fabrication</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Consumer and industrial product manufacturing</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Quality assurance and testing</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-primary" />
              <span>Sustainable manufacturing practices</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/projects?category=manufacturing">View Manufacturing Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact?department=manufacturing">Contact Manufacturing Division</Link>
            </Button>
          </div>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <Image src="/modern-manufacturing.png" alt="Hasey Manufacturing Operations" fill className="object-cover" />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Featured Manufacturing Projects</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg border shadow-sm">
            <div className="relative h-48">
              <Image
                src="/modern-production-space.png"
                alt="Advanced Production Facility"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">Advanced Production Facility</h3>
              <p className="mb-4 text-gray-600">
                State-of-the-art manufacturing facility with Industry 4.0 technologies and sustainable operations.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/projects/advanced-production" className="flex items-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border shadow-sm">
            <div className="relative h-48">
              <Image src="/robotic-assembly-line.png" alt="Automated Assembly Line" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">Automated Assembly Systems</h3>
              <p className="mb-4 text-gray-600">
                Cutting-edge robotics and automation solutions for high-precision assembly operations.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/projects/automated-assembly" className="flex items-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border shadow-sm">
            <div className="relative h-48">
              <Image src="/high-tech-qc-lab.png" alt="Quality Control Lab" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">Quality Control Systems</h3>
              <p className="mb-4 text-gray-600">
                Advanced quality assurance technologies ensuring the highest standards for all manufactured products.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/projects/quality-control" className="flex items-center gap-1">
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
