import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Scale, Shield, FileText, Users, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function GovernancePage() {
  const governanceAreas = [
    {
      icon: <Scale className="h-8 w-8 text-primary" />,
      title: "Corporate Governance",
      description:
        "Our governance framework ensures oversight, accountability, and ethical decision-making at all levels of the organization.",
      link: "/sustainability/governance/corporate",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Ethics & Compliance",
      description:
        "We maintain the highest standards of business ethics and ensure compliance with laws and regulations in all jurisdictions where we operate.",
      link: "/sustainability/governance/ethics",
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Risk Management",
      description:
        "Our comprehensive approach to risk management identifies, assesses, and mitigates risks across our operations and value chain.",
      link: "/sustainability/governance/risk",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Stakeholder Engagement",
      description:
        "We actively engage with stakeholders to understand their perspectives, address concerns, and incorporate feedback into our decision-making.",
      link: "/sustainability/governance/stakeholders",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Public Policy",
      description:
        "We participate responsibly in public policy discussions that affect our business, industry, and the communities we serve.",
      link: "/sustainability/governance/policy",
    },
  ]

  return (
    <PageLayout
      title="Governance"
      subtitle="Upholding the highest standards of corporate governance, ethics, and transparency"
      backLink="/sustainability"
      backLabel="Back to Sustainability"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Our Governance Approach</h2>
          <p className="mb-4 text-gray-700">
            Strong governance is the foundation of our business and essential to creating long-term value for our
            stakeholders. At Hasey Group, we are committed to maintaining the highest standards of corporate governance,
            ethics, and transparency in all our operations.
          </p>
          <p className="mb-8 text-gray-700">
            Our governance framework is designed to ensure effective oversight, accountability, and ethical
            decision-making at all levels of the organization. It is regularly reviewed and updated to reflect evolving
            best practices, regulatory requirements, and stakeholder expectations.
          </p>

          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-3 text-xl font-bold">Governance Highlights</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Scale className="mt-1 h-5 w-5 text-primary" />
                <span>Independent Board of Directors with diverse expertise and backgrounds</span>
              </li>
              <li className="flex items-start gap-2">
                <Scale className="mt-1 h-5 w-5 text-primary" />
                <span>Robust Code of Business Conduct and Ethics</span>
              </li>
              <li className="flex items-start gap-2">
                <Scale className="mt-1 h-5 w-5 text-primary" />
                <span>Comprehensive risk management framework</span>
              </li>
              <li className="flex items-start gap-2">
                <Scale className="mt-1 h-5 w-5 text-primary" />
                <span>Transparent reporting and disclosure practices</span>
              </li>
              <li className="flex items-start gap-2">
                <Scale className="mt-1 h-5 w-5 text-primary" />
                <span>Regular stakeholder engagement and feedback mechanisms</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <Image src="/governance-board.png" alt="Corporate Governance" fill className="object-cover" />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Governance Framework</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {governanceAreas.map((area, index) => (
            <div key={index} className="rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                {area.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{area.title}</h3>
              <p className="mb-4 text-gray-600">{area.description}</p>
              <Button asChild variant="outline" size="sm">
                <Link href={area.link} className="flex items-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-lg bg-gray-100 p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">Governance Documents</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-bold">Corporate Governance Guidelines</h3>
            <p className="mb-4 text-gray-600">
              Our comprehensive guidelines outlining the governance framework and practices of the company.
            </p>
            <Button asChild variant="outline">
              <Link href="/documents/governance-guidelines.pdf">Download PDF</Link>
            </Button>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-bold">Code of Business Conduct</h3>
            <p className="mb-4 text-gray-600">
              The ethical standards and principles that guide our business conduct and decision-making.
            </p>
            <Button asChild variant="outline">
              <Link href="/documents/code-of-conduct.pdf">Download PDF</Link>
            </Button>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-bold">Supplier Code of Conduct</h3>
            <p className="mb-4 text-gray-600">
              The standards and expectations we have for our suppliers and business partners.
            </p>
            <Button asChild variant="outline">
              <Link href="/documents/supplier-code.pdf">Download PDF</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
