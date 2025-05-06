import Link from "next/link"
import { TrendingUp, DollarSign, BarChart4 } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function StockInformationPage() {
  // Mock stock data
  const stockData = {
    price: "$78.42",
    change: "+$1.35",
    percentChange: "+1.75%",
    volume: "3.2M",
    avgVolume: "2.8M",
    marketCap: "$98.5B",
    peRatio: "16.2",
    dividend: "$2.40",
    dividendYield: "3.06%",
    yearHigh: "$82.15",
    yearLow: "$65.30",
  }

  const analystCoverage = [
    {
      firm: "Morgan Stanley",
      analyst: "Sarah Johnson",
      rating: "Overweight",
      targetPrice: "$85.00",
      date: "June 15, 2023",
    },
    {
      firm: "Goldman Sachs",
      analyst: "Michael Chen",
      rating: "Buy",
      targetPrice: "$88.00",
      date: "June 10, 2023",
    },
    {
      firm: "JP Morgan",
      analyst: "David Rodriguez",
      rating: "Neutral",
      targetPrice: "$80.00",
      date: "June 5, 2023",
    },
    {
      firm: "Bank of America",
      analyst: "Lisa Williams",
      rating: "Buy",
      targetPrice: "$86.00",
      date: "May 28, 2023",
    },
    {
      firm: "Citigroup",
      analyst: "Robert Kim",
      rating: "Neutral",
      targetPrice: "$79.00",
      date: "May 20, 2023",
    },
  ]

  return (
    <PageLayout
      title="Stock Information"
      subtitle="Current stock data, performance, and analyst coverage"
      backLink="/investors"
      backLabel="Back to Investor Relations"
    >
      <div className="mb-16">
        <div className="rounded-lg border shadow-sm">
          <div className="border-b bg-gray-50 p-6">
            <div className="flex flex-wrap items-baseline gap-4">
              <h2 className="text-4xl font-bold">{stockData.price}</h2>
              <div className="flex items-center gap-1 text-lg font-medium text-green-600">
                <TrendingUp className="h-5 w-5" />
                {stockData.change} ({stockData.percentChange})
              </div>
              <div className="text-sm text-gray-500">Last updated: June 30, 2023, 4:00 PM EST</div>
            </div>
          </div>
          <div className="grid grid-cols-1 divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="p-6">
              <h3 className="mb-4 text-lg font-bold">Trading Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Volume</span>
                  <span className="font-medium">{stockData.volume}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg. Volume</span>
                  <span className="font-medium">{stockData.avgVolume}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">52-Week High</span>
                  <span className="font-medium">{stockData.yearHigh}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">52-Week Low</span>
                  <span className="font-medium">{stockData.yearLow}</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-4 text-lg font-bold">Valuation</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Market Cap</span>
                  <span className="font-medium">{stockData.marketCap}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">P/E Ratio</span>
                  <span className="font-medium">{stockData.peRatio}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">EPS (TTM)</span>
                  <span className="font-medium">$4.85</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Beta</span>
                  <span className="font-medium">0.92</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-4 text-lg font-bold">Dividend Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Dividend</span>
                  <span className="font-medium">{stockData.dividend}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dividend Yield</span>
                  <span className="font-medium">{stockData.dividendYield}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ex-Dividend Date</span>
                  <span className="font-medium">Aug 15, 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dividend Payment Date</span>
                  <span className="font-medium">Sep 1, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Stock Performance</h2>
        <div className="rounded-lg border p-6 shadow-sm">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                1D
              </Button>
              <Button variant="outline" size="sm">
                1W
              </Button>
              <Button variant="outline" size="sm">
                1M
              </Button>
              <Button variant="outline" size="sm">
                3M
              </Button>
              <Button variant="outline" size="sm">
                6M
              </Button>
              <Button variant="outline" size="sm">
                1Y
              </Button>
              <Button variant="outline" size="sm">
                5Y
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <BarChart4 className="h-4 w-4" /> Compare
            </Button>
          </div>
          <div className="relative h-[400px] w-full bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">Stock chart visualization would appear here</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Analyst Coverage</h2>
        <div className="rounded-lg border shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Firm</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Analyst</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Rating</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Target Price</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {analystCoverage.map((analyst, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{analyst.firm}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{analyst.analyst}</td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${
                          analyst.rating === "Buy" || analyst.rating === "Overweight"
                            ? "bg-green-100 text-green-800"
                            : analyst.rating === "Sell" || analyst.rating === "Underweight"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {analyst.rating}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{analyst.targetPrice}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{analyst.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-gray-100 p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">Shareholder Resources</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 text-center shadow-sm">
            <DollarSign className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-2 text-xl font-bold">Dividend Information</h3>
            <p className="mb-4 text-gray-600">View our dividend history and reinvestment program details.</p>
            <Button asChild variant="outline">
              <Link href="/investors/dividends">Learn More</Link>
            </Button>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-sm">
            <BarChart4 className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-2 text-xl font-bold">Investment Calculator</h3>
            <p className="mb-4 text-gray-600">Calculate the value of your investment over time.</p>
            <Button asChild variant="outline">
              <Link href="/investors/calculator">Use Calculator</Link>
            </Button>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-sm">
            <TrendingUp className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-2 text-xl font-bold">Historical Price Lookup</h3>
            <p className="mb-4 text-gray-600">Access historical stock price data and performance.</p>
            <Button asChild variant="outline">
              <Link href="/investors/historical-data">View Data</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
