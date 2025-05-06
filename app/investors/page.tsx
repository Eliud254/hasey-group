import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart4, DollarSign, LineChart, Shield, Gift, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function InvestorsPage() {
  return (
    <PageLayout title="Investor Relations" subtitle="Information and resources for Hasey Group investors">
      <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Investment Highlights</h2>
          <p className="mb-4 text-gray-700">
            Hasey Group offers a compelling investment opportunity with our diversified business portfolio, strong
            financial performance, and commitment to sustainable growth. Our strategic focus on high-growth sectors and
            emerging markets positions us well for long-term value creation.
          </p>
          <p className="mb-8 text-gray-700">
            With a track record of consistent dividend growth and disciplined capital allocation, we continue to deliver
            shareholder value while investing in future opportunities and maintaining a strong balance sheet.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/investors/financial-information">Financial Reports</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/investors/stock-information">Stock Information</Link>
            </Button>
          </div>
        </div>

        <div className="relative h-[400px] overflow-hidden rounded-xl">
          <Image src="/stock-market-data.png" alt="Financial Performance" fill className="object-cover" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Our Investment Strategy</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-gray-700">
              Hasey Group's investment strategy is built on four key pillars that drive sustainable growth and long-term
              value creation for our shareholders:
            </p>
            <ul className="mb-4 space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  1
                </div>
                <div>
                  <h3 className="font-bold">Disciplined Capital Allocation</h3>
                  <p className="text-gray-600">
                    Strategic deployment of capital to high-return opportunities while maintaining a strong balance
                    sheet
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  2
                </div>
                <div>
                  <h3 className="font-bold">Portfolio Optimization</h3>
                  <p className="text-gray-600">
                    Continuous evaluation and optimization of our business portfolio to maximize returns
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  3
                </div>
                <div>
                  <h3 className="font-bold">Operational Excellence</h3>
                  <p className="text-gray-600">Driving efficiency and performance improvements across all operations</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  4
                </div>
                <div>
                  <h3 className="font-bold">Strategic Growth Investments</h3>
                  <p className="text-gray-600">Investing in emerging opportunities aligned with long-term trends</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-xl">
            <Image src="/upward-trend-analysis.png" alt="Investment Strategy" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Investor Resources</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <BarChart4 className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Financial Information</h3>
            <p className="mb-4 text-gray-600">
              Access our annual reports, quarterly results, and financial presentations.
            </p>
            <Button asChild variant="outline">
              <Link href="/investors/financial-information" className="flex items-center gap-1">
                View Reports <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <LineChart className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Stock Information</h3>
            <p className="mb-4 text-gray-600">View our stock price, historical performance, and analyst coverage.</p>
            <Button asChild variant="outline">
              <Link href="/investors/stock-information" className="flex items-center gap-1">
                Stock Details <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Corporate Governance</h3>
            <p className="mb-4 text-gray-600">
              Learn about our board of directors, governance policies, and committees.
            </p>
            <Button asChild variant="outline">
              <Link href="/investors/corporate-governance" className="flex items-center gap-1">
                Governance Details <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Gift className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Shareholder Resources</h3>
            <p className="mb-4 text-gray-600">Information on dividends, share repurchases, and shareholder services.</p>
            <Button asChild variant="outline">
              <Link href="/investors/shareholder-resources" className="flex items-center gap-1">
                Shareholder Services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Events & Presentations</h3>
            <p className="mb-4 text-gray-600">
              Access upcoming and past investor events, conferences, and presentations.
            </p>
            <Button asChild variant="outline">
              <Link href="/investors/events-presentations" className="flex items-center gap-1">
                View Events <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <DollarSign className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Investor FAQs</h3>
            <p className="mb-4 text-gray-600">
              Find answers to frequently asked questions from investors and analysts.
            </p>
            <Button asChild variant="outline">
              <Link href="/investors/faqs" className="flex items-center gap-1">
                View FAQs <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-gray-100 p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">Financial Highlights</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-primary">$42.8B</div>
            <p className="text-gray-700">Annual Revenue (2022)</p>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-primary">$8.5B</div>
            <p className="text-gray-700">Operating Income</p>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-primary">15.2%</div>
            <p className="text-gray-700">Return on Equity</p>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-primary">$2.40</div>
            <p className="text-gray-700">Annual Dividend per Share</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/investors/financial-information">View Detailed Financial Information</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
