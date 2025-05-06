import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import KeyMetrics from "@/components/key-metrics"

export default function InvestorsOverviewPage() {
  const financialMetrics = [
    { value: "$78.5B", label: "Revenue (FY 2023)", change: "12.3%", isPositive: true },
    { value: "$14.2B", label: "Operating Income", change: "8.7%", isPositive: true },
    { value: "$9.8B", label: "Net Income", change: "15.2%", isPositive: true },
    { value: "$3.25", label: "Earnings Per Share", change: "14.8%", isPositive: true },
  ]

  const stockMetrics = [
    { value: "$142.68", label: "Stock Price", change: "2.4%", isPositive: true },
    { value: "$285B", label: "Market Cap" },
    { value: "1.8%", label: "Dividend Yield" },
    { value: "18.2x", label: "P/E Ratio" },
  ]

  return (
    <PageLayout
      title="Investor Overview"
      subtitle="Key information for shareholders and potential investors"
      backLink="/investors"
      backLabel="Back to Investors"
    >
      <div className="grid gap-8 md:gap-12">
        <section>
          <div className="mb-8 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 p-8">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Investment Highlights</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                      ✓
                    </span>
                    <span>Global leader in energy, infrastructure, and technology sectors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                      ✓
                    </span>
                    <span>Consistent revenue growth with 12.3% increase in FY 2023</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                      ✓
                    </span>
                    <span>Strong dividend history with 15 consecutive years of increases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                      ✓
                    </span>
                    <span>Strategic investments in renewable energy and sustainable technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                      ✓
                    </span>
                    <span>Robust balance sheet with $18.5B in cash and equivalents</span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Button asChild>
                    <Link href="/investors/financial-information">Financial Reports</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/investors/events-presentations">Investor Presentations</Link>
                  </Button>
                </div>
              </div>

              <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
                <Image src="/investors-meeting.png" alt="Hasey Group Investor Meeting" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <KeyMetrics
              title="Financial Highlights"
              subtitle="Key financial metrics for fiscal year 2023"
              metrics={financialMetrics}
            />

            <KeyMetrics
              title="Stock Information"
              subtitle="Current stock performance and metrics"
              metrics={stockMetrics}
            />
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold">Latest Financial News</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <span className="text-sm text-muted-foreground">May 15, 2023</span>
                <h3 className="mb-2 mt-1 text-lg font-semibold">Q1 2023 Financial Results</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Hasey Group reports strong first quarter results with revenue up 14% year-over-year.
                </p>
                <Link
                  href="/news/press-releases/q1-2023-results"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <span className="text-sm text-muted-foreground">April 3, 2023</span>
                <h3 className="mb-2 mt-1 text-lg font-semibold">Annual Shareholder Meeting</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Hasey Group announces date for 2023 Annual Shareholder Meeting to be held on May 25.
                </p>
                <Link
                  href="/news/press-releases/annual-meeting-2023"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <span className="text-sm text-muted-foreground">March 12, 2023</span>
                <h3 className="mb-2 mt-1 text-lg font-semibold">Dividend Announcement</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Board of Directors approves quarterly dividend of $0.85 per share, a 5% increase.
                </p>
                <Link
                  href="/news/press-releases/dividend-increase-2023"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold">Investor Resources</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Download className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-lg font-semibold">Annual Report</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Download our latest annual report and financial statements.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/investors/reports/annual-report-2023.pdf">Download PDF</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Download className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-lg font-semibold">Investor Presentation</h3>
                <p className="mb-4 text-sm text-gray-600">View our latest investor presentation with key highlights.</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/investors/presentations/investor-deck-2023.pdf">Download PDF</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Download className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-lg font-semibold">ESG Report</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Learn about our environmental, social, and governance initiatives.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/investors/reports/esg-report-2023.pdf">Download PDF</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Download className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-lg font-semibold">Fact Sheet</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Quick overview of Hasey Group's business and financial highlights.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/investors/reports/fact-sheet-2023.pdf">Download PDF</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="rounded-xl bg-gray-50 p-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold">Investor Contact</h2>
              <p className="mb-6 text-gray-600">
                For investor relations inquiries, please contact our IR team. We're here to assist with any questions
                regarding Hasey Group's financial performance, strategy, and investment opportunities.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild>
                  <Link href="mailto:investors@haseygroup.com">Email Investor Relations</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact?department=investor-relations">Contact Form</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
