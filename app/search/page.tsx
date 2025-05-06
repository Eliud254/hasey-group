import { Search } from "lucide-react"
import Link from "next/link"
import PageLayout from "@/components/page-layout"
import SearchForm from "@/components/search-form"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface SearchPageProps {
  searchParams: { q?: string }
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ""

  // Mock search results - in a real application, these would come from a search API
  const mockResults = query
    ? [
        {
          title: "Exploration & Production",
          description: "Learn about our oil and gas exploration and production operations.",
          url: "/businesses/exploration-production",
          category: "businesses",
        },
        {
          title: "Sustainability Report 2023",
          description: "Our annual sustainability report detailing our environmental and social initiatives.",
          url: "/sustainability/reports/2023",
          category: "sustainability",
        },
        {
          title: "Quarterly Financial Results Q1 2023",
          description: "Financial results for the first quarter of fiscal year 2023.",
          url: "/investors/financial-information/q1-2023",
          category: "investors",
        },
        {
          title: "Careers at Hasey Group",
          description: "Explore career opportunities across our global operations.",
          url: "/careers",
          category: "careers",
        },
        {
          title: "Press Release: New Renewable Energy Project",
          description: "Hasey Group announces major investment in solar energy development.",
          url: "/news/press-releases/renewable-energy-project",
          category: "news",
        },
        {
          title: "Leadership Team",
          description: "Meet the executive leadership team driving Hasey Group's vision and strategy.",
          url: "/about/leadership",
          category: "about",
        },
        {
          title: "Contact Information",
          description: "Get in touch with our team for inquiries, support, or information.",
          url: "/contact",
          category: "contact",
        },
      ]
    : []

  return (
    <PageLayout title="Search Results" subtitle={query ? `Results for "${query}"` : "Search our website"}>
      <div className="mb-8">
        <SearchForm placeholder="Search for pages, news, projects..." fullWidth />
      </div>

      {query ? (
        <div>
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Results ({mockResults.length})</TabsTrigger>
              <TabsTrigger value="businesses">Businesses</TabsTrigger>
              <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
              <TabsTrigger value="investors">Investors</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="space-y-4">
                {mockResults.map((result, index) => (
                  <SearchResultCard key={index} result={result} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="businesses">
              <div className="space-y-4">
                {mockResults
                  .filter((result) => result.category === "businesses")
                  .map((result, index) => (
                    <SearchResultCard key={index} result={result} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="sustainability">
              <div className="space-y-4">
                {mockResults
                  .filter((result) => result.category === "sustainability")
                  .map((result, index) => (
                    <SearchResultCard key={index} result={result} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="investors">
              <div className="space-y-4">
                {mockResults
                  .filter((result) => result.category === "investors")
                  .map((result, index) => (
                    <SearchResultCard key={index} result={result} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="news">
              <div className="space-y-4">
                {mockResults
                  .filter((result) => result.category === "news")
                  .map((result, index) => (
                    <SearchResultCard key={index} result={result} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <div className="rounded-lg border bg-card p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Search className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-bold">Search Our Website</h3>
          <p className="mb-6 text-gray-600">
            Enter a search term above to find information about our company, businesses, sustainability initiatives,
            investor resources, and more.
          </p>
        </div>
      )}
    </PageLayout>
  )
}

interface SearchResult {
  title: string
  description: string
  url: string
  category: string
}

function SearchResultCard({ result }: { result: SearchResult }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-1 text-sm capitalize text-primary">{result.category}</div>
        <h3 className="mb-2 text-lg font-semibold">
          <Link href={result.url} className="hover:underline">
            {result.title}
          </Link>
        </h3>
        <p className="text-gray-600">{result.description}</p>
        <div className="mt-2 text-sm text-gray-400">{result.url}</div>
      </CardContent>
    </Card>
  )
}
