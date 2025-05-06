import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function AboutPage() {
  return (
    <PageLayout title="About Hasey Group" subtitle="A global leader in energy, infrastructure, and innovation">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Our Story</h2>
          <p className="mb-4 text-gray-700">
            Founded in 2016, Hasey Group has grown from a small trading company to a global conglomerate with interests
            spanning energy, petrochemicals, infrastructure, telecommunications, and retail.
          </p>
          <p className="mb-4 text-gray-700">
            Our journey is defined by bold vision, strategic investments, and an unwavering commitment to excellence.
            Today, we stand as one of the world's leading integrated energy and materials companies, driving innovation
            and sustainable growth.
          </p>
          <p className="mb-8 text-gray-700">
            With operations in over 30 countries and a workforce of more than 25,000 talented professionals, we continue
            to expand our global footprint while maintaining our core values of integrity, excellence, and
            sustainability.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/about/leadership">Our Leadership</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/about/history">Company History</Link>
            </Button>
          </div>
        </div>

        <div className="relative h-[400px] overflow-hidden rounded-xl">
          <Image src="/images/about-corporate.png" alt="Hasey Group Headquarters" fill className="object-cover" />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Values</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold">Integrity</h3>
            <p className="text-gray-600">
              We conduct our business with the highest ethical standards, transparency, and accountability.
            </p>
          </div>
          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in everything we do, constantly raising the bar for quality and performance.
            </p>
          </div>
          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold">Innovation</h3>
            <p className="text-gray-600">
              We embrace innovation and creative thinking to develop solutions for tomorrow's challenges.
            </p>
          </div>
          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold">Sustainability</h3>
            <p className="text-gray-600">
              We are committed to sustainable practices that benefit our communities and protect our planet.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Key Milestones</h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-200 hidden md:block"></div>
          <div className="space-y-12">
            <div className="relative flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 md:text-right md:pr-12">
                <div className="hidden md:block absolute right-0 top-0 h-4 w-4 rounded-full bg-primary translate-x-1/2"></div>
                <h3 className="text-xl font-bold">2016</h3>
                <p className="text-gray-600">Founded in Nairobi by Robert Hasey</p>
              </div>
              <div className="md:w-1/2 md:pl-12"></div>
            </div>
            <div className="relative flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 md:pr-12"></div>
              <div className="md:w-1/2 md:pl-12">
                <div className="hidden md:block absolute left-0 top-0 h-4 w-4 rounded-full bg-primary -translate-x-1/2"></div>
                <h3 className="text-xl font-bold">2018</h3>
                <p className="text-gray-600">Entered the energy sector with acquisition of Eastern Petroleum</p>
              </div>
            </div>
            <div className="relative flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 md:text-right md:pr-12">
                <div className="hidden md:block absolute right-0 top-0 h-4 w-4 rounded-full bg-primary translate-x-1/2"></div>
                <h3 className="text-xl font-bold">2020</h3>
                <p className="text-gray-600">Established first sustainability framework</p>
              </div>
              <div className="md:w-1/2 md:pl-12"></div>
            </div>
            <div className="relative flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 md:pr-12"></div>
              <div className="md:w-1/2 md:pl-12">
                <div className="hidden md:block absolute left-0 top-0 h-4 w-4 rounded-full bg-primary -translate-x-1/2"></div>
                <h3 className="text-xl font-bold">2023</h3>
                <p className="text-gray-600">Expanded to over 30 countries with 25,000+ employees worldwide</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/about/history">View Full History</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
