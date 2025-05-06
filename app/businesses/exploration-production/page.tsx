import Image from "next/image"
import Link from "next/link"
import { MapPin, Droplets, BarChart4, Globe } from "lucide-react"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import KeyMetrics from "@/components/key-metrics"
import ProjectCard from "@/components/project-card"

export default function ExplorationProductionPage() {
  const businessMetrics = [
    { value: "2.4M", label: "Barrels of Oil Equivalent Per Day" },
    { value: "32", label: "Countries with Active Operations" },
    { value: "15.8B", label: "Proven Reserves (BOE)" },
    { value: "$24.5B", label: "Annual Revenue" },
  ]

  return (
    <PageLayout
      title="Exploration & Production"
      subtitle="Discovering and developing energy resources to power progress"
      backLink="/businesses"
      backLabel="Back to Businesses"
    >
      <div className="grid gap-8 md:gap-12">
        <section>
          <div className="relative mb-8 h-80 overflow-hidden rounded-xl md:h-96 lg:h-[500px]">
            <Image
              src="/sprawling-refinery.png"
              alt="Hasey Group Exploration & Production"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-10 lg:max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Powering the World's Energy Needs</h2>
              <p className="text-lg text-white/90">
                Our Exploration & Production division discovers, develops, and produces crude oil and natural gas
                globally, using cutting-edge technology and sustainable practices.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <KeyMetrics
              title="Business Highlights"
              subtitle="Key metrics for our Exploration & Production division"
              metrics={businessMetrics}
            />
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">About Our E&P Division</h2>
              <p className="mb-4 text-gray-700">
                Hasey Group's Exploration & Production division is at the forefront of discovering and developing the
                energy resources that power global progress. With operations spanning 32 countries across six
                continents, we combine technical expertise, innovative technology, and sustainable practices to deliver
                reliable energy solutions.
              </p>
              <p className="mb-4 text-gray-700">
                Our diverse portfolio includes conventional and unconventional oil and gas assets, from offshore
                deepwater projects to onshore shale developments. We employ advanced seismic imaging, machine learning,
                and digital technologies to enhance exploration success rates and operational efficiency.
              </p>
              <p className="text-gray-700">
                As we navigate the energy transition, we're focused on reducing the carbon intensity of our operations
                while maintaining our commitment to safe, reliable, and responsible energy production.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Droplets className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Offshore Operations</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    World-class deepwater and shallow water operations across major basins globally.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Onshore Assets</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Conventional and unconventional onshore developments in key energy-producing regions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <BarChart4 className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Production Excellence</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Industry-leading operational efficiency and production optimization capabilities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Global Presence</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Strategic operations across six continents with a focus on high-potential regions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold">Featured Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Gulf of Mexico Deepwater Development"
              description="Our flagship deepwater project in the Gulf of Mexico, producing over 250,000 barrels of oil equivalent per day."
              imageSrc="/images/hero-offshore.png"
              categories={["Offshore", "Deepwater"]}
              location="Gulf of Mexico"
              year="2018-Present"
              url="/projects/gulf-deepwater"
            />

            <ProjectCard
              title="North Sea Production Platform"
              description="Advanced production platform in the North Sea with state-of-the-art safety and environmental systems."
              imageSrc="/offshore-dawn-1980s.png"
              categories={["Offshore", "Production"]}
              location="North Sea"
              year="2015-Present"
              url="/projects/north-sea-platform"
            />

            <ProjectCard
              title="Permian Basin Shale Development"
              description="Large-scale unconventional development in the Permian Basin utilizing advanced drilling and completion technologies."
              imageSrc="/sprawling-petrochemical-complex.png"
              categories={["Onshore", "Unconventional"]}
              location="Texas, USA"
              year="2017-Present"
              url="/projects/permian-shale"
            />
          </div>

          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/projects?division=exploration-production">View All E&P Projects</Link>
            </Button>
          </div>
        </section>

        <section>
          <div className="rounded-xl bg-blue-50 p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Technology & Innovation</h2>
                <p className="mb-4 text-gray-700">
                  Technology and innovation are at the heart of our Exploration & Production strategy. We invest in
                  cutting-edge technologies that enhance our ability to find and develop energy resources safely,
                  efficiently, and sustainably.
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                      ✓
                    </span>
                    <span>Advanced seismic imaging and interpretation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                      ✓
                    </span>
                    <span>AI and machine learning for reservoir modeling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                      ✓
                    </span>
                    <span>Automated drilling systems and digital twins</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                      ✓
                    </span>
                    <span>Carbon capture and storage technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                      ✓
                    </span>
                    <span>Methane detection and reduction solutions</span>
                  </li>
                </ul>

                <Button variant="outline" asChild>
                  <Link href="/innovation/exploration-production">Explore Our Technologies</Link>
                </Button>
              </div>

              <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
                <Image src="/innovation-lab.png" alt="Hasey Group E&P Technology" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold">Sustainability in E&P</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold">Emissions Reduction</h3>
                <p className="mb-4 text-sm text-gray-600">
                  We're committed to reducing the carbon intensity of our operations through methane leak detection and
                  repair, electrification of facilities, and elimination of routine flaring.
                </p>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 w-[65%] rounded-full bg-green-500"></div>
                </div>
                <div className="mt-2 flex justify-between text-xs">
                  <span>2020 Baseline</span>
                  <span className="font-medium">65% Progress</span>
                  <span>2030 Target</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold">Water Management</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Our comprehensive water management strategy focuses on reducing freshwater use, increasing water
                  recycling, and protecting local water resources in all our operations.
                </p>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 w-[78%] rounded-full bg-blue-500"></div>
                </div>
                <div className="mt-2 flex justify-between text-xs">
                  <span>2020 Baseline</span>
                  <span className="font-medium">78% Progress</span>
                  <span>2030 Target</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold">Biodiversity Protection</h3>
                <p className="mb-4 text-sm text-gray-600">
                  We implement rigorous biodiversity action plans to minimize our environmental footprint and contribute
                  to conservation efforts in sensitive ecosystems.
                </p>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 w-[42%] rounded-full bg-amber-500"></div>
                </div>
                <div className="mt-2 flex justify-between text-xs">
                  <span>2020 Baseline</span>
                  <span className="font-medium">42% Progress</span>
                  <span>2030 Target</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/sustainability/reports">View Our Sustainability Report</Link>
            </Button>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold">Our Global Presence</h2>
          <div className="relative h-[400px] overflow-hidden rounded-xl">
            <Image
              src="/global-business-network.png"
              alt="Hasey Group Global E&P Operations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" asChild>
                <Link href="/about/global-presence">Explore Our Global Operations</Link>
              </Button>
            </div>
          </div>
        </section>

        <section>
          <div className="rounded-xl bg-gray-50 p-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold">Careers in Exploration & Production</h2>
              <p className="mb-6 text-gray-600">
                Join our team of talented professionals working at the forefront of the energy industry. We offer
                exciting career opportunities across various disciplines, from geoscience and engineering to digital
                technology and sustainability.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild>
                  <Link href="/careers/opportunities?division=exploration-production">View Open Positions</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/careers/life-at-hasey">Life at Hasey Group</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
