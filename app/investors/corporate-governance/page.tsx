import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function CorporateGovernancePage() {
  const governanceDocuments = [
    {
      title: "Corporate Governance Guidelines",
      description: "Our comprehensive guidelines outlining the governance framework and practices of the company.",
      link: "/documents/governance-guidelines.pdf",
    },
    {
      title: "Code of Business Conduct and Ethics",
      description: "The ethical standards and principles that guide our business conduct and decision-making.",
      link: "/documents/code-of-conduct.pdf",
    },
    {
      title: "Board Committee Charters",
      description: "Charters defining the purpose, composition, and responsibilities of each Board committee.",
      link: "/documents/committee-charters.pdf",
    },
    {
      title: "Articles of Incorporation",
      description: "The legal document establishing Hasey Group as a corporation.",
      link: "/documents/articles-of-incorporation.pdf",
    },
    {
      title: "Corporate Bylaws",
      description: "The rules and procedures governing the internal management of the corporation.",
      link: "/documents/corporate-bylaws.pdf",
    },
  ]

  const committees = [
    {
      name: "Audit Committee",
      chair: "Michael Thompson",
      members: ["Michael Thompson", "Sarah Chen", "David Rodriguez"],
      description: "Oversees financial reporting, internal controls, and the independent audit process.",
    },
    {
      name: "Compensation Committee",
      chair: "Sarah Chen",
      members: ["Sarah Chen", "Robert Kim", "Lisa Williams"],
      description: "Reviews and approves executive compensation and incentive programs.",
    },
    {
      name: "Nominating and Governance Committee",
      chair: "Lisa Williams",
      members: ["Lisa Williams", "Michael Thompson", "James Wilson"],
      description: "Identifies and evaluates board candidates and oversees corporate governance practices.",
    },
    {
      name: "Risk Committee",
      chair: "David Rodriguez",
      members: ["David Rodriguez", "Robert Kim", "James Wilson"],
      description: "Oversees enterprise risk management and compliance programs.",
    },
  ]

  return (
    <PageLayout
      title="Corporate Governance"
      subtitle="Our commitment to ethical leadership, accountability, and transparency"
      backLink="/investors"
      backLabel="Back to Investor Relations"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Governance Framework</h2>
          <p className="mb-4 text-gray-700">
            At Hasey Group, we believe that strong corporate governance is essential to creating long-term shareholder
            value and maintaining the trust of our stakeholders. Our governance framework is designed to ensure
            effective oversight, accountability, and ethical decision-making at all levels of the organization.
          </p>
          <p className="mb-8 text-gray-700">
            The Board of Directors, elected by our shareholders, is responsible for overseeing the management of the
            company and providing strategic guidance. The Board operates through committees that focus on specific
            aspects of governance and regularly reviews and updates our governance practices to reflect evolving
            standards and stakeholder expectations.
          </p>

          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-3 text-xl font-bold">Governance Highlights</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Shield className="mt-1 h-5 w-5 text-primary" />
                <span>Independent Board Chair and majority independent directors</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="mt-1 h-5 w-5 text-primary" />
                <span>Diverse Board with a range of skills, experiences, and backgrounds</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="mt-1 h-5 w-5 text-primary" />
                <span>Annual Board and committee self-evaluations</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="mt-1 h-5 w-5 text-primary" />
                <span>Robust shareholder engagement program</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="mt-1 h-5 w-5 text-primary" />
                <span>Comprehensive risk oversight framework</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <Image
            src="/placeholder.svg?height=1000&width=800&query=corporate board meeting professional diverse"
            alt="Board Meeting"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-2xl font-bold">Board of Directors</h2>
        <div className="mb-8 text-center">
          <Button asChild size="lg">
            <Link href="/about/leadership#board">Meet Our Board of Directors</Link>
          </Button>
        </div>

        <h3 className="mb-6 text-xl font-bold">Board Committees</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {committees.map((committee, index) => (
            <div key={index} className="rounded-lg border p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold">{committee.name}</h4>
              <p className="mb-4 text-gray-600">{committee.description}</p>
              <div className="mb-2">
                <span className="font-medium">Chair:</span> {committee.chair}
              </div>
              <div>
                <span className="font-medium">Members:</span> {committee.members.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-2xl font-bold">Governance Documents</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {governanceDocuments.map((document, index) => (
            <div key={index} className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold">{document.title}</h3>
              <p className="mb-4 text-gray-600">{document.description}</p>
              <Button asChild variant="outline">
                <Link href={document.link} className="flex items-center gap-1">
                  Download PDF <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-lg bg-gray-100 p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">ESG Governance</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative h-[300px] overflow-hidden rounded-xl">
            <Image src="/governance-stakeholders.png" alt="ESG Governance" fill className="object-cover" />
          </div>
          <div>
            <p className="mb-4 text-gray-700">
              Environmental, Social, and Governance (ESG) considerations are integrated into our governance framework
              and business strategy. The Board of Directors, through its committees, provides oversight of our ESG
              initiatives and performance.
            </p>
            <p className="mb-6 text-gray-700">
              Our ESG governance structure includes a dedicated Sustainability Committee at the executive level, which
              reports regularly to the Board. This committee is responsible for developing and implementing our
              sustainability strategy, setting targets, and monitoring progress.
            </p>
            <Button asChild>
              <Link href="/sustainability/governance" className="flex items-center gap-1">
                Learn More About ESG Governance <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
