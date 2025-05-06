import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Droplets, Wind, Sun, Recycle, TreePine } from "lucide-react"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import KeyMetrics from "@/components/key-metrics"

export default function EnvironmentPage() {
  const environmentalMetrics = [
    { value: "32%", label: "Carbon Emissions Reduction Since 2015" },
    { value: "45%", label: "Renewable Energy in Operations" },
    { value: "28M", label: "Trees Planted Through Reforestation" },
    { value: "85%", label: "Waste Diverted from Landfills" },
  ]

  return (
    <PageLayout
      title="Environmental Stewardship"
      subtitle="Our commitment to protecting the planet and building a sustainable future"
      backLink="/sustainability"
      backLabel="Back to Sustainability"
    >
      <div className="grid gap-8 md:gap-12">
        <section>
          <div className="relative mb-8 h-80 overflow-hidden rounded-xl md:h-96 lg:h-[500px]">
            <Image
              src="/sustainability-environment.png"
              alt="Hasey Group Environmental Initiatives"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-10 lg:max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Building a Sustainable Future</h2>
              <p className="text-lg text-white/90">
                At Hasey Group, we're committed to environmental stewardship across all our operations. Our
                comprehensive approach addresses climate change, biodiversity, water conservation, and circular economy
                principles.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <KeyMetrics
              title="Environmental Impact"
              subtitle="Key metrics showcasing our environmental performance"
              metrics={environmentalMetrics}
            />
          </div>

          <div className="mb-8">
            <h2 className="mb-6 text-2xl font-bold">Our Environmental Focus Areas</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <div className="relative h-48 overflow-hidden">
                  <Image src="/sustainability-climate.png" alt="Climate Action" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Climate Action</h3>
                  <p className="mb-4 text-gray-600">
                    We're committed to reducing our carbon footprint and supporting the transition to a low-carbon
                    economy through innovative technologies and operational excellence.
                  </p>
                  <Link
                    href="/sustainability/environment/climate-action"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <div className="relative h-48 overflow-hidden">
                  <Image src="/sustainability-water.png" alt="Water Stewardship" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Droplets className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Water Stewardship</h3>
                  <p className="mb-4 text-gray-600">
                    We implement comprehensive water management strategies to reduce consumption, prevent pollution, and
                    protect water resources in the communities where we operate.
                  </p>
                  <Link
                    href="/sustainability/environment/water-stewardship"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <div className="relative h-48 overflow-hidden">
                  <Image src="/sustainability-biodiversity.png" alt="Biodiversity" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                    <TreePine className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Biodiversity</h3>
                  <p className="mb-4 text-gray-600">
                    We work to protect and enhance biodiversity through habitat conservation, reforestation initiatives,
                    and minimizing the environmental impact of our operations.
                  </p>
                  <Link
                    href="/sustainability/environment/biodiversity"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <div className="relative h-48 overflow-hidden">
                  <Image src="/sustainability-circular.png" alt="Circular Economy" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <Recycle className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Circular Economy</h3>
                  <p className="mb-4 text-gray-600">
                    We embrace circular economy principles by designing out waste, keeping materials in use, and
                    regenerating natural systems throughout our value chain.
                  </p>
                  <Link
                    href="/sustainability/environment/circular-economy"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <div className="relative h-48 overflow-hidden">
                  <Image src="/sustainability-air.png" alt="Air Quality" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
                    <Wind className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Air Quality</h3>
                  <p className="mb-4 text-gray-600">
                    We implement advanced technologies and best practices to reduce air emissions and improve air
                    quality in the communities where we operate.
                  </p>
                  <Link
                    href="/sustainability/environment/air-quality"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <div className="relative h-48 overflow-hidden">
                  <Image src="/business-energy-solar.png" alt="Renewable Energy" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                    <Sun className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Renewable Energy</h3>
                  <p className="mb-4 text-gray-600">
                    We're investing in renewable energy sources including solar, wind, and hydroelectric power to reduce
                    our carbon footprint and support the clean energy transition.
                  </p>
                  <Link
                    href="/sustainability/environment/renewable-energy"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section>
          <div className="rounded-xl bg-green-50 p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Our Climate Commitments</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-xs text-white">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-semibold">Net Zero by 2050</h3>
                      <p className="text-sm text-gray-600">
                        We're committed to achieving net-zero carbon emissions across our entire value chain by 2050.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-xs text-white">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-semibold">50% Emissions Reduction by 2030</h3>
                      <p className="text-sm text-gray-600">
                        We aim to reduce our Scope 1 and 2 emissions by 50% by 2030, compared to our 2015 baseline.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-xs text-white">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-semibold">100% Renewable Electricity by 2035</h3>
                      <p className="text-sm text-gray-600">
                        We're transitioning to 100% renewable electricity for all our global operations by 2035.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-xs text-white">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-semibold">Zero Waste to Landfill by 2030</h3>
                      <p className="text-sm text-gray-600">
                        We're working to eliminate waste to landfill from our operations by 2030.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6">
                  <Button asChild>
                    <Link href="/sustainability/reports">View Our Climate Report</Link>
                  </Button>
                </div>
              </div>

              <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
                <Image
                  src="/wind-solar-synergy.png"
                  alt="Hasey Group Renewable Energy Projects"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold">Environmental Case Studies</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <span className="text-sm text-muted-foreground">Case Study</span>
                <h3 className="mb-2 mt-1 text-lg font-semibold">Solar Power Integration</h3>
                <p className="mb-4 text-sm text-gray-600">
                  How we implemented solar power across our manufacturing facilities, reducing carbon emissions by 35%.
                </p>
                <Link
                  href="/sustainability/case-studies/solar-power-integration"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <span className="text-sm text-muted-foreground">Case Study</span>
                <h3 className="mb-2 mt-1 text-lg font-semibold">Water Recycling Initiative</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Our innovative water recycling system that reduced freshwater consumption by 45% in our operations.
                </p>
                <Link
                  href="/sustainability/case-studies/water-recycling"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <span className="text-sm text-muted-foreground">Case Study</span>
                <h3 className="mb-2 mt-1 text-lg font-semibold">Reforestation Project</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Our partnership with local communities to restore forest ecosystems and enhance biodiversity.
                </p>
                <Link
                  href="/sustainability/case-studies/reforestation"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="rounded-xl bg-gray-50 p-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold">Environmental Partnerships</h2>
              <p className="mb-6 text-gray-600">
                We collaborate with leading environmental organizations, industry partners, and research institutions to
                advance sustainable practices and drive positive environmental change.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <Image
                  src="/conservation-logo.png"
                  alt="Conservation Partner"
                  width={160}
                  height={80}
                  className="grayscale transition-all duration-300 hover:grayscale-0"
                />
                <Image
                  src="/environmental-research-institute-logo.png"
                  alt="Research Partner"
                  width={160}
                  height={80}
                  className="grayscale transition-all duration-300 hover:grayscale-0"
                />
                <Image
                  src="/climate-action-alliance-logo.png"
                  alt="Climate Alliance"
                  width={160}
                  height={80}
                  className="grayscale transition-all duration-300 hover:grayscale-0"
                />
                <Image
                  src="/sustainable-business-council-logo.png"
                  alt="Business Council"
                  width={160}
                  height={80}
                  className="grayscale transition-all duration-300 hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
