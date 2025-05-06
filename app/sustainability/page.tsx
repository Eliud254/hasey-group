import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Users2, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function SustainabilityPage() {
  return (
    <PageLayout title="Sustainability" subtitle="Building a better future through responsible business practices">
      <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Our Commitment</h2>
          <p className="mb-4 text-gray-700">
            At Hasey Group, sustainability is not just a corporate responsibility—it's a core business strategy. We
            believe that long-term business success depends on creating value for all stakeholders while protecting the
            environment and supporting the communities where we operate.
          </p>
          <p className="mb-8 text-gray-700">
            Our comprehensive sustainability framework addresses environmental stewardship, social responsibility, and
            governance excellence. We have set ambitious targets to reduce our carbon footprint, conserve natural
            resources, promote diversity and inclusion, and uphold the highest standards of business ethics.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/sustainability/reports">Sustainability Reports</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/sustainability/goals">Our 2030 Goals</Link>
            </Button>
          </div>
        </div>

        <div className="relative h-[400px] overflow-hidden rounded-xl">
          <Image
            src="/interconnected-sustainable-growth.png"
            alt="Sustainability Initiatives"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Focus Areas</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-blue-900 to-teal-700 p-6 text-white">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Environmental Stewardship</h3>
            <p className="mb-4">
              Reducing our environmental footprint through innovative technologies and sustainable practices across all
              operations.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-white text-white bg-blue-500/30 hover:bg-blue-500/50 relative z-10"
            >
              <Link href="/sustainability/environment" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-900 to-teal-700 p-6 text-white">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
              <Users2 className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Social Responsibility</h3>
            <p className="mb-4">
              Empowering communities through education, healthcare, and infrastructure development initiatives.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-white text-white bg-blue-500/30 hover:bg-blue-500/50 relative z-10"
            >
              <Link href="/sustainability/social" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-900 to-teal-700 p-6 text-white">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
              <Scale className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Governance</h3>
            <p className="mb-4">
              Upholding the highest standards of corporate governance, ethics, and transparency in all our operations.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-white text-white bg-blue-500/30 hover:bg-blue-500/50 relative z-10"
            >
              <Link href="/sustainability/governance" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-gray-100 p-8">
        <h2 className="mb-6 text-center text-3xl font-bold">Sustainability Highlights</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">30%</div>
            <p className="text-gray-700">Reduction in carbon emissions since 2015</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">$500M+</div>
            <p className="text-gray-700">Invested in renewable energy projects</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">100+</div>
            <p className="text-gray-700">Community development initiatives</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">45%</div>
            <p className="text-gray-700">Water recycling across operations</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/sustainability/reports">View Full Sustainability Report</Link>
          </Button>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Our 2030 Sustainability Goals</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-blue-900 to-teal-700 p-6 text-white">
            <h3 className="mb-3 text-xl font-bold">Environmental</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Leaf className="mt-1 h-5 w-5 text-blue-300" />
                <span>50% reduction in greenhouse gas emissions</span>
              </li>
              <li className="flex items-start gap-2">
                <Leaf className="mt-1 h-5 w-5 text-blue-300" />
                <span>75% renewable energy use across operations</span>
              </li>
              <li className="flex items-start gap-2">
                <Leaf className="mt-1 h-5 w-5 text-blue-300" />
                <span>Zero waste to landfill at all facilities</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-blue-900 to-teal-700 p-6 text-white">
            <h3 className="mb-3 text-xl font-bold">Social</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Users2 className="mt-1 h-5 w-5 text-blue-300" />
                <span>40% women in leadership positions</span>
              </li>
              <li className="flex items-start gap-2">
                <Users2 className="mt-1 h-5 w-5 text-blue-300" />
                <span>2 million people reached through community programs</span>
              </li>
              <li className="flex items-start gap-2">
                <Users2 className="mt-1 h-5 w-5 text-blue-300" />
                <span>Zero serious injuries across all operations</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-blue-900 to-teal-700 p-6 text-white">
            <h3 className="mb-3 text-xl font-bold">Governance</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Scale className="mt-1 h-5 w-5 text-blue-300" />
                <span>100% compliance with ethics and anti-corruption policies</span>
              </li>
              <li className="flex items-start gap-2">
                <Scale className="mt-1 h-5 w-5 text-blue-300" />
                <span>ESG metrics linked to executive compensation</span>
              </li>
              <li className="flex items-start gap-2">
                <Scale className="mt-1 h-5 w-5 text-blue-300" />
                <span>Transparent reporting on all material ESG issues</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
