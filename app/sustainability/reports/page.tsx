import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function ReportsPage() {
  const reports = [
    {
      year: "2023",
      title: "Sustainability Report 2023",
      description:
        "Comprehensive overview of our sustainability performance, initiatives, and progress toward our 2030 goals.",
      image: "/placeholder.svg?height=300&width=500&query=sustainability report cover 2023",
      fileSize: "12.5 MB",
      link: "/documents/sustainability-report-2023.pdf",
    },
    {
      year: "2022",
      title: "Sustainability Report 2022",
      description: "Detailed report on our environmental, social, and governance performance and key initiatives.",
      image: "/placeholder.svg?height=300&width=500&query=sustainability report cover 2022",
      fileSize: "11.8 MB",
      link: "/documents/sustainability-report-2022.pdf",
    },
    {
      year: "2021",
      title: "Sustainability Report 2021",
      description:
        "Overview of our sustainability strategy, performance metrics, and case studies from across our operations.",
      image: "/placeholder.svg?height=300&width=500&query=sustainability report cover 2021",
      fileSize: "10.2 MB",
      link: "/documents/sustainability-report-2021.pdf",
    },
  ]

  const disclosures = [
    {
      title: "Climate-Related Financial Disclosures 2023",
      description:
        "Reporting aligned with the Task Force on Climate-Related Financial Disclosures (TCFD) recommendations.",
      fileSize: "5.3 MB",
      link: "/documents/tcfd-report-2023.pdf",
    },
    {
      title: "ESG Data Summary 2023",
      description: "Comprehensive data on our environmental, social, and governance performance metrics.",
      fileSize: "3.8 MB",
      link: "/documents/esg-data-2023.pdf",
    },
    {
      title: "Carbon Footprint Report 2023",
      description: "Detailed analysis of our greenhouse gas emissions across Scope 1, 2, and 3 categories.",
      fileSize: "4.2 MB",
      link: "/documents/carbon-footprint-2023.pdf",
    },
    {
      title: "Water Stewardship Report 2023",
      description: "Overview of our water management practices, consumption data, and conservation initiatives.",
      fileSize: "3.5 MB",
      link: "/documents/water-report-2023.pdf",
    },
  ]

  return (
    <PageLayout
      title="Sustainability Reports & Disclosures"
      subtitle="Transparent reporting on our environmental, social, and governance performance"
      backLink="/sustainability"
      backLabel="Back to Sustainability"
    >
      <div className="mb-12">
        <p className="mx-auto max-w-3xl text-center text-lg text-gray-700">
          Transparency is a core principle of our sustainability approach. We regularly report on our environmental,
          social, and governance performance, providing stakeholders with comprehensive information about our impacts,
          initiatives, and progress toward our goals.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-2xl font-bold">Annual Sustainability Reports</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reports.map((report, index) => (
            <div key={index} className="overflow-hidden rounded-lg border shadow-sm">
              <div className="relative h-[200px]">
                <Image src={report.image || "/placeholder.svg"} alt={report.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {report.year}
                </div>
                <h3 className="mb-2 text-xl font-bold">{report.title}</h3>
                <p className="mb-4 text-gray-600">{report.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{report.fileSize} PDF</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href={report.link} className="flex items-center gap-1">
                      Download <Download className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-2xl font-bold">Specialized Reports & Disclosures</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {disclosures.map((disclosure, index) => (
            <div key={index} className="flex items-start gap-4 rounded-lg border p-6 shadow-sm">
              <FileText className="mt-1 h-10 w-10 text-primary" />
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-bold">{disclosure.title}</h3>
                <p className="mb-3 text-gray-600">{disclosure.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{disclosure.fileSize} PDF</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href={disclosure.link} className="flex items-center gap-1">
                      Download <Download className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-gray-100 p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">Reporting Framework Alignment</h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-gray-700">
          Our sustainability reporting is aligned with leading global frameworks and standards to ensure comprehensive,
          comparable, and reliable disclosure.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 text-center shadow-sm">
            <h3 className="mb-2 text-xl font-bold">GRI</h3>
            <p className="text-gray-600">Global Reporting Initiative</p>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-sm">
            <h3 className="mb-2 text-xl font-bold">SASB</h3>
            <p className="text-gray-600">Sustainability Accounting Standards Board</p>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-sm">
            <h3 className="mb-2 text-xl font-bold">TCFD</h3>
            <p className="text-gray-600">Task Force on Climate-Related Financial Disclosures</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/sustainability/reporting-approach" className="flex items-center gap-1">
              Learn More About Our Reporting Approach <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
