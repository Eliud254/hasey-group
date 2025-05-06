import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Users, Building, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function AdvancedProductionProjectPage() {
  return (
    <PageLayout
      title="Advanced Production Facility"
      subtitle="State-of-the-art manufacturing with Industry 4.0 technologies"
      backLink="/projects"
      backLabel="Back to Projects"
    >
      <div className="mb-12">
        <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
          <Image
            src="/placeholder.svg?height=500&width=1000&query=advanced manufacturing facility with robots and automation"
            alt="Advanced Production Facility"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="mb-6 text-2xl font-bold">Project Overview</h2>
          <p className="mb-4 text-gray-700">
            The Advanced Production Facility represents Hasey Group's commitment to manufacturing excellence and
            Industry 4.0 principles. Located in our main manufacturing hub, this state-of-the-art facility combines
            cutting-edge automation, digital technologies, and sustainable practices to create a model for the future of
            manufacturing.
          </p>
          <p className="mb-4 text-gray-700">
            The facility spans 50,000 square meters and houses multiple production lines capable of manufacturing a wide
            range of products with unprecedented precision and efficiency. From advanced electronics to precision
            components, the facility's flexible manufacturing systems can adapt to diverse production requirements while
            maintaining the highest quality standards.
          </p>
          <p className="mb-8 text-gray-700">
            A key feature of the facility is its comprehensive digital integration, with IoT sensors, real-time
            monitoring systems, and AI-powered quality control creating a true smart factory environment. This digital
            backbone enables predictive maintenance, optimized resource utilization, and continuous process improvement.
          </p>

          <h3 className="mb-4 text-xl font-bold">Key Features</h3>
          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h4 className="mb-3 font-semibold">Advanced Automation</h4>
              <p className="text-gray-700">
                Robotic assembly systems, automated guided vehicles, and collaborative robots working alongside human
                operators to maximize productivity and precision.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h4 className="mb-3 font-semibold">Digital Twin Technology</h4>
              <p className="text-gray-700">
                Complete virtual replica of the facility enabling simulation, optimization, and real-time monitoring of
                all production processes and equipment.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h4 className="mb-3 font-semibold">Sustainable Operations</h4>
              <p className="text-gray-700">
                Energy-efficient systems, waste reduction technologies, and renewable energy integration reducing the
                facility's environmental footprint.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h4 className="mb-3 font-semibold">Quality Assurance</h4>
              <p className="text-gray-700">
                AI-powered inspection systems, real-time quality monitoring, and comprehensive traceability ensuring
                zero-defect manufacturing.
              </p>
            </div>
          </div>

          <h3 className="mb-4 text-xl font-bold">Sustainability Impact</h3>
          <p className="mb-4 text-gray-700">
            The Advanced Production Facility was designed with sustainability as a core principle. The facility achieves
            a 40% reduction in energy consumption compared to conventional manufacturing facilities through:
          </p>
          <ul className="mb-8 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-green-600" />
              <span>Rooftop solar panels generating 30% of the facility's electricity needs</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-green-600" />
              <span>Advanced energy management systems optimizing consumption in real-time</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-green-600" />
              <span>Closed-loop water recycling reducing water consumption by 65%</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 text-green-600" />
              <span>Zero-waste manufacturing processes with comprehensive material recycling</span>
            </li>
          </ul>

          <h3 className="mb-4 text-xl font-bold">Gallery</h3>
          <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400&query=robotic assembly line with industrial robots"
                alt="Robotic Assembly Line"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400&query=modern factory control room with monitors and operators"
                alt="Control Room"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400&query=high tech quality testing laboratory with precision equipment"
                alt="Quality Testing Lab"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="sticky top-24 rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="mb-6 text-lg font-bold">Project Details</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="mt-1 h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Timeline</p>
                  <p className="text-gray-600">2020 - 2022</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">Singapore Manufacturing Hub</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building className="mt-1 h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Division</p>
                  <p className="text-gray-600">Manufacturing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="mt-1 h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Capacity</p>
                  <p className="text-gray-600">500 employees</p>
                </div>
              </div>
            </div>

            <hr className="my-6" />

            <h3 className="mb-4 text-lg font-bold">Key Achievements</h3>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                  ✓
                </span>
                <span>40% increase in production efficiency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                  ✓
                </span>
                <span>99.98% quality rate achieved</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                  ✓
                </span>
                <span>65% reduction in manufacturing waste</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                  ✓
                </span>
                <span>Industry 4.0 Excellence Award 2022</span>
              </li>
            </ul>

            <div className="flex flex-col gap-3">
              <Button asChild>
                <Link href="/contact?project=advanced-production">Request More Information</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/businesses/manufacturing">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Manufacturing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
