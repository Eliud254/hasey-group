import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function MediaCoveragePage() {
  const mediaCoverage = [
    {
      title: "Hasey Group's Ambitious Climate Plan Sets New Industry Standard",
      publication: "Financial Times",
      date: "April 18, 2023",
      excerpt:
        "The energy conglomerate's commitment to net zero emissions by 2040 represents one of the most ambitious climate action plans in the industry, potentially reshaping expectations for corporate sustainability initiatives.",
      image: "/media-publication.png",
      link: "https://www.ft.com",
    },
    {
      title: "Inside Hasey Group's Innovation Hub in Singapore",
      publication: "Tech Innovator",
      date: "March 30, 2023",
      excerpt:
        "An exclusive look at Hasey Group's new R&D center in Singapore, where researchers are developing breakthrough technologies for renewable energy, smart infrastructure, and digital transformation.",
      image: "/careers-innovation.png",
      link: "https://www.techinnovator.com",
    },
    {
      title: "Hasey Group CEO Discusses Strategic Vision and Industry Trends",
      publication: "Bloomberg",
      date: "February 15, 2023",
      excerpt:
        "In an exclusive interview, Hasey Group CEO Jonathan R. Hasey shares insights on the company's growth strategy, sustainability initiatives, and perspective on evolving energy markets.",
      image: "/media-interview.png",
      link: "https://www.bloomberg.com",
    },
    {
      title: "Hasey Group's TechEnergy Acquisition: A Strategic Move in Digital Transformation",
      publication: "Wall Street Journal",
      date: "February 12, 2023",
      excerpt:
        "Analysis of Hasey Group's recent acquisition of TechEnergy Solutions and its implications for the company's digital strategy and competitive positioning in the evolving energy landscape.",
      image: "/media-publication.png",
      link: "https://www.wsj.com",
    },
    {
      title: "How Hasey Group is Redefining Corporate Philanthropy",
      publication: "Forbes",
      date: "December 20, 2022",
      excerpt:
        "The Hasey Foundation's $50 million education initiative represents a new approach to corporate philanthropy, focusing on measurable impact and addressing systemic challenges in education and workforce development.",
      image: "/community-education.png",
      link: "https://www.forbes.com",
    },
    {
      title: "Green Hydrogen: Hasey Group's Bet on the Future of Clean Energy",
      publication: "Clean Energy Review",
      date: "November 15, 2022",
      excerpt:
        "A deep dive into Hasey Group's strategic partnership for green hydrogen development and its potential to accelerate the transition to clean energy in industrial applications.",
      image: "/sustainability-climate.png",
      link: "https://www.cleanenergyreview.com",
    },
  ]

  return (
    <PageLayout
      title="Media Coverage"
      subtitle="News articles and media coverage about Hasey Group"
      backLink="/news"
      backLabel="Back to News & Media"
    >
      <div className="mb-12">
        <p className="mx-auto max-w-3xl text-center text-lg text-gray-700">
          Browse recent news articles, interviews, and features about Hasey Group from leading publications around the
          world. For media inquiries, please contact our media relations team.
        </p>
        <div className="mt-6 text-center">
          <Button asChild>
            <Link href="/news/contact-media">Contact Media Relations</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {mediaCoverage.map((article, index) => (
          <div key={index} className="overflow-hidden rounded-lg border shadow-sm">
            <div className="relative h-[200px]">
              <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium text-primary">{article.publication}</span>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" /> {article.date}
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold">{article.title}</h3>
              <p className="mb-4 text-gray-600">{article.excerpt}</p>
              <Button asChild variant="outline" size="sm">
                <Link href={article.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  Read Article <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>

      <div className="mt-16 rounded-lg bg-gray-100 p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">Featured Interviews</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-bold">CEO Interview: The Future of Energy</h3>
            <p className="mb-4 text-gray-600">
              Jonathan R. Hasey discusses the company's vision for the future of energy and sustainable development.
            </p>
            <Button asChild variant="outline">
              <Link href="/news/ceo-interview" className="flex items-center gap-1">
                Watch Video <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-bold">CTO on Innovation Strategy</h3>
            <p className="mb-4 text-gray-600">
              Dr. Amara Okafor shares insights on Hasey Group's approach to technology innovation and digital
              transformation.
            </p>
            <Button asChild variant="outline">
              <Link href="/news/cto-interview" className="flex items-center gap-1">
                Watch Video <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-bold">CSO on Sustainability Goals</h3>
            <p className="mb-4 text-gray-600">
              David Thompson discusses Hasey Group's sustainability strategy and progress toward environmental goals.
            </p>
            <Button asChild variant="outline">
              <Link href="/news/cso-interview" className="flex items-center gap-1">
                Watch Video <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
