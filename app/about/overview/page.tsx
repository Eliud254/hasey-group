import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function AboutOverviewPage() {
  return (
    <PageLayout
      title="Company Overview"
      subtitle="A global leader in energy, infrastructure, and innovation"
      backLink="/about"
      backLabel="Back to About"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Who We Are</h2>
          <p className="mb-4 text-gray-700">
            Hasey Group is a diversified global enterprise with operations spanning energy, infrastructure, technology,
            and manufacturing sectors. Founded in 1973, we have grown from a small trading company to a multinational
            conglomerate with a presence in over 30 countries.
          </p>
          <p className="mb-4 text-gray-700">
            Our mission is to power progress and shape tomorrow through innovative solutions, operational excellence,
            and sustainable practices. We leverage our global scale, technical expertise, and financial strength to
            create long-term value for our stakeholders.
          </p>
          <p className="mb-8 text-gray-700">
            With a workforce of more than 25,000 talented professionals, we continue to expand our global footprint
            while maintaining our core values of integrity, excellence, innovation, and sustainability.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/about/leadership">Our Leadership</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/about/values">Our Values</Link>
            </Button>
          </div>
        </div>

        <div className="relative h-[400px] overflow-hidden rounded-xl">
          <Image src="/images/about-corporate.png" alt="Hasey Group Headquarters" fill className="object-cover" />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Key Facts</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-primary">1973</div>
            <p className="text-gray-600">Year Founded</p>
          </div>
          <div className="rounded-lg border p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-primary">30+</div>
            <p className="text-gray-600">Countries of Operation</p>
          </div>
          <div className="rounded-lg border p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-primary">25,000+</div>
            <p className="text-gray-600">Employees Worldwide</p>
          </div>
          <div className="rounded-lg border p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-primary">$42.8B</div>
            <p className="text-gray-600">Annual Revenue (2022)</p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
