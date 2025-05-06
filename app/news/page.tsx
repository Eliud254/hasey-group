import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import NewsCard from "@/components/news-card"
import PageLayout from "@/components/page-layout"

export default function NewsPage() {
  const featuredNews = [
    {
      id: 1,
      title: "Hasey Group Commits to Net Zero Emissions by 2040",
      category: "Sustainability",
      date: "April 15, 2023",
      image: "/images/news-1.png",
      excerpt:
        "Ambitious climate action plan unveiled at annual sustainability summit, outlining comprehensive strategy to achieve net zero emissions across all operations by 2040.",
      slug: "net-zero-emissions",
    },
    {
      id: 2,
      title: "New R&D Center Opens in Singapore",
      category: "Innovation",
      date: "March 22, 2023",
      image: "/images/news-2.png",
      excerpt:
        "State-of-the-art facility to focus on next-generation energy solutions and digital technologies, creating 200 high-skilled jobs in the region.",
      slug: "rd-center-singapore",
    },
    {
      id: 3,
      title: "Hasey Group Acquires TechEnergy Solutions",
      category: "Business",
      date: "February 10, 2023",
      image: "/images/news-3.png",
      excerpt:
        "Strategic acquisition to strengthen digital transformation capabilities and expand clean energy technology portfolio.",
      slug: "techenergy-acquisition",
    },
  ]

  const recentNews = [
    {
      id: 4,
      title: "Hasey Group Launches Renewable Energy Fund",
      category: "Finance",
      date: "January 28, 2023",
      image: "/media-press.png",
      excerpt: "New $500 million fund to accelerate investments in renewable energy projects across emerging markets.",
      slug: "renewable-energy-fund",
    },
    {
      id: 5,
      title: "Annual Sustainability Report Released",
      category: "Sustainability",
      date: "January 15, 2023",
      image: "/media-publication.png",
      excerpt:
        "Report highlights significant progress on environmental goals, with 25% reduction in carbon emissions since 2018.",
      slug: "sustainability-report-2022",
    },
    {
      id: 6,
      title: "Hasey Group Partners with MIT for Clean Energy Research",
      category: "Innovation",
      date: "December 10, 2022",
      image: "/media-event.png",
      excerpt:
        "Five-year research partnership to develop breakthrough technologies for renewable energy storage and distribution.",
      slug: "mit-partnership",
    },
    {
      id: 7,
      title: "New Infrastructure Project Breaks Ground in Brazil",
      category: "Projects",
      date: "November 25, 2022",
      image: "/business-infrastructure-highway.png",
      excerpt:
        "Major transportation infrastructure project to improve connectivity and support economic development in the region.",
      slug: "brazil-infrastructure",
    },
    {
      id: 8,
      title: "Hasey Group Named Among World's Most Ethical Companies",
      category: "Recognition",
      date: "November 8, 2022",
      image: "/governance-ethics.png",
      excerpt:
        "Recognized for leadership in ethical business practices, governance, and corporate social responsibility.",
      slug: "ethical-companies-award",
    },
    {
      id: 9,
      title: "Q3 Financial Results Exceed Expectations",
      category: "Financial",
      date: "October 27, 2022",
      image: "/investors-chart.png",
      excerpt:
        "Strong performance across all business segments drives 12% year-over-year revenue growth and 15% increase in operating income.",
      slug: "q3-financial-results",
    },
  ]

  return (
    <PageLayout title="News & Media" subtitle="Latest updates, press releases, and media coverage">
      {/* Featured News */}
      <div className="mb-16">
        <h2 className="mb-8 text-2xl font-bold">Featured News</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredNews.map((news) => (
            <NewsCard
              key={news.id}
              image={news.image}
              category={news.category}
              date={news.date}
              title={news.title}
              excerpt={news.excerpt}
              href={`/news/${news.slug}`}
            />
          ))}
        </div>
      </div>

      {/* News Search */}
      <div className="mb-16 rounded-lg bg-gray-100 p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">Search News & Media</h2>
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <Input type="text" placeholder="Search by keyword or topic" className="h-12" />
            </div>
            <Button size="lg" className="h-12">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              Press Releases
            </Button>
            <Button variant="outline" size="sm">
              Sustainability
            </Button>
            <Button variant="outline" size="sm">
              Innovation
            </Button>
            <Button variant="outline" size="sm">
              Business Updates
            </Button>
            <Button variant="outline" size="sm">
              Financial News
            </Button>
          </div>
        </div>
      </div>

      {/* News Categories */}
      <div className="mb-16">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mx-auto grid max-w-md grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="press">Press Releases</TabsTrigger>
            <TabsTrigger value="media">Media Coverage</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recentNews.map((news) => (
                <div key={news.id} className="overflow-hidden rounded-lg border shadow-sm">
                  <div className="relative h-48">
                    <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {news.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" /> {news.date}
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{news.title}</h3>
                    <p className="mb-4 text-gray-600">{news.excerpt}</p>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/news/${news.slug}`} className="flex items-center gap-1">
                        Read More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="press" className="mt-8">
            <div className="text-center">
              <h3 className="text-xl font-bold">Press Releases</h3>
              <p className="mt-2 text-gray-600">View our official company announcements and press releases.</p>
              <Button className="mt-4" asChild>
                <Link href="/news/press-releases">View All Press Releases</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="media" className="mt-8">
            <div className="text-center">
              <h3 className="text-xl font-bold">Media Coverage</h3>
              <p className="mt-2 text-gray-600">Browse recent media coverage featuring Hasey Group.</p>
              <Button className="mt-4" asChild>
                <Link href="/news/media-coverage">View Media Coverage</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="events" className="mt-8">
            <div className="text-center">
              <h3 className="text-xl font-bold">Events</h3>
              <p className="mt-2 text-gray-600">Explore upcoming and past events featuring Hasey Group.</p>
              <Button className="mt-4" asChild>
                <Link href="/news/events">View Events</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Media Resources */}
      <div className="rounded-lg bg-gray-900 p-8 text-white">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Media Resources</h2>
            <p className="mb-4 text-gray-300">
              Access our comprehensive media library, including high-resolution images, videos, logos, executive
              biographies, and fact sheets for media and publication use.
            </p>
            <p className="mb-6 text-gray-300">
              For media inquiries, interview requests, or additional information, please contact our Media Relations
              team.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/news/media-library">Media Library</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact?department=media">Contact Media Relations</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-xl">
            <Image src="/media-interview.png" alt="Media Resources" fill className="object-cover" />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
