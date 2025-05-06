import Link from "next/link"
import { ArrowRight, Download, FileText, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PageLayout from "@/components/page-layout"

export default function FinancialInformationPage() {
  const annualReports = [
    {
      year: "2022",
      title: "Annual Report 2022",
      description: "Comprehensive overview of our financial performance, strategic initiatives, and outlook.",
      fileSize: "15.8 MB",
      link: "/documents/annual-report-2022.pdf",
    },
    {
      year: "2021",
      title: "Annual Report 2021",
      description: "Detailed report on our financial results, business segments, and strategic progress.",
      fileSize: "14.2 MB",
      link: "/documents/annual-report-2021.pdf",
    },
    {
      year: "2020",
      title: "Annual Report 2020",
      description: "Overview of our financial performance and strategic response to global challenges.",
      fileSize: "13.5 MB",
      link: "/documents/annual-report-2020.pdf",
    },
  ]

  const quarterlyReports = [
    {
      period: "Q1 2023",
      title: "First Quarter 2023 Results",
      date: "April 28, 2023",
      link: "/documents/q1-2023-results.pdf",
    },
    {
      period: "Q4 2022",
      title: "Fourth Quarter 2022 Results",
      date: "January 27, 2023",
      link: "/documents/q4-2022-results.pdf",
    },
    {
      period: "Q3 2022",
      title: "Third Quarter 2022 Results",
      date: "October 28, 2022",
      link: "/documents/q3-2022-results.pdf",
    },
    {
      period: "Q2 2022",
      title: "Second Quarter 2022 Results",
      date: "July 29, 2022",
      link: "/documents/q2-2022-results.pdf",
    },
    {
      period: "Q1 2022",
      title: "First Quarter 2022 Results",
      date: "April 29, 2022",
      link: "/documents/q1-2022-results.pdf",
    },
  ]

  const financialHighlights = [
    {
      metric: "Revenue",
      value: "$42.8B",
      change: "+8.5%",
      positive: true,
    },
    {
      metric: "Operating Income",
      value: "$8.5B",
      change: "+12.3%",
      positive: true,
    },
    {
      metric: "Net Income",
      value: "$6.2B",
      change: "+15.1%",
      positive: true,
    },
    {
      metric: "Earnings Per Share",
      value: "$4.85",
      change: "+16.2%",
      positive: true,
    },
    {
      metric: "Free Cash Flow",
      value: "$7.3B",
      change: "+9.8%",
      positive: true,
    },
    {
      metric: "Return on Equity",
      value: "15.2%",
      change: "+1.8pp",
      positive: true,
    },
  ]

  return (
    <PageLayout
      title="Financial Information"
      subtitle="Comprehensive financial reports and performance data"
      backLink="/investors"
      backLabel="Back to Investor Relations"
    >
      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Financial Highlights (FY 2022)</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {financialHighlights.map((highlight, index) => (
            <div key={index} className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-medium text-gray-600">{highlight.metric}</h3>
              <div className="text-3xl font-bold text-gray-900">{highlight.value}</div>
              <div className={`mt-1 text-sm font-medium ${highlight.positive ? "text-green-600" : "text-red-600"}`}>
                {highlight.change} YoY
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <Tabs defaultValue="annual" className="w-full">
          <TabsList className="mx-auto grid max-w-md grid-cols-3">
            <TabsTrigger value="annual">Annual Reports</TabsTrigger>
            <TabsTrigger value="quarterly">Quarterly Results</TabsTrigger>
            <TabsTrigger value="presentations">Presentations</TabsTrigger>
          </TabsList>

          <TabsContent value="annual" className="mt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {annualReports.map((report, index) => (
                <div key={index} className="rounded-lg border p-6 shadow-sm">
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
              ))}
            </div>
          </TabsContent>

          <TabsContent value="quarterly" className="mt-6">
            <div className="rounded-lg border shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Period</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Title</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                      <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {quarterlyReports.map((report, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          {report.period}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{report.title}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">{report.date}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
                          <Button asChild variant="ghost" size="sm">
                            <Link href={report.link} className="flex items-center gap-1">
                              <FileText className="h-4 w-4" /> PDF
                            </Link>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="presentations" className="mt-6">
            <div className="rounded-lg border p-8 text-center">
              <h3 className="text-xl font-bold">Investor Presentations</h3>
              <p className="mt-2 text-gray-600">View our latest investor presentations and earnings call materials.</p>
              <Button className="mt-4" asChild>
                <Link href="/investors/presentations">View Presentations</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="rounded-lg bg-gray-100 p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">Financial Calendar</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-medium text-gray-500">July 28, 2023</span>
            </div>
            <h3 className="text-lg font-bold">Q2 2023 Results</h3>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-medium text-gray-500">October 27, 2023</span>
            </div>
            <h3 className="text-lg font-bold">Q3 2023 Results</h3>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-medium text-gray-500">January 26, 2024</span>
            </div>
            <h3 className="text-lg font-bold">Q4 2023 Results</h3>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-medium text-gray-500">May 15, 2024</span>
            </div>
            <h3 className="text-lg font-bold">Annual Shareholder Meeting</h3>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/investors/calendar" className="flex items-center gap-1">
              View Full Financial Calendar <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
