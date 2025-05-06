import Link from "next/link"
import { ChevronRight, Filter, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PageLayout from "@/components/page-layout"

export default function PressReleasesPage() {
  const pressReleases = [
    {
      id: "net-zero-emissions",
      date: "April 15, 2023",
      category: "Sustainability",
      title: "Hasey Group Commits to Net Zero Emissions by 2040",
      excerpt:
        "In a landmark announcement at our annual sustainability summit, Hasey Group has unveiled an ambitious climate action plan that commits to achieving net zero carbon emissions across all operations by 2040.",
    },
    {
      id: "rd-center-singapore",
      date: "March 22, 2023",
      category: "Innovation",
      title: "New R&D Center Opens in Singapore",
      excerpt:
        "Hasey Group today announced the opening of a state-of-the-art research and development center in Singapore, focused on next-generation energy solutions and digital technologies.",
    },
    {
      id: "techenergy-acquisition",
      date: "February 10, 2023",
      category: "Business",
      title: "Hasey Group Acquires TechEnergy Solutions",
      excerpt:
        "Hasey Group announced today that it has completed the acquisition of TechEnergy Solutions, a leading provider of digital transformation solutions for the energy sector.",
    },
    {
      id: "quarterly-results",
      date: "January 25, 2023",
      category: "Financial",
      title: "Hasey Group Reports Strong Q4 and Full Year 2022 Results",
      excerpt:
        "Hasey Group today reported financial results for the fourth quarter and full year ended December 31, 2022, exceeding analyst expectations with record revenue and significant growth across all business segments.",
    },
    {
      id: "community-initiative",
      date: "December 12, 2022",
      category: "Community",
      title: "Hasey Foundation Launches $50M Education Initiative",
      excerpt:
        "The Hasey Foundation, the philanthropic arm of Hasey Group, today announced a $50 million commitment to support STEM education and digital skills training in underserved communities globally.",
    },
    {
      id: "hydrogen-partnership",
      date: "November 8, 2022",
      category: "Partnership",
      title: "Hasey Group Forms Strategic Partnership for Green Hydrogen Development",
      excerpt:
        "Hasey Group today announced a strategic partnership with leading technology providers to accelerate the production and distribution of green hydrogen for industrial and transportation applications.",
    },
    {
      id: "board-appointment",
      date: "October 15, 2022",
      category: "Corporate",
      title: "Hasey Group Appoints New Board Member",
      excerpt:
        "Hasey Group today announced the appointment of Dr. Amara Okafor to its Board of Directors, bringing extensive expertise in technology innovation and sustainable business practices.",
    },
    {
      id: "sustainability-award",
      date: "September 22, 2022",
      category: "Recognition",
      title: "Hasey Group Receives Global Sustainability Leadership Award",
      excerpt:
        "Hasey Group has been recognized with the Global Sustainability Leadership Award for its innovative approaches to reducing environmental impact while driving business growth.",
    },
  ]

  return (
    <PageLayout
      title="Press Releases"
      subtitle="Official announcements and news from Hasey Group"
      backLink="/news"
      backLabel="Back to News & Media"
    >
      <div className="mb-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 gap-4">
            <div className="flex-1">
              <Input placeholder="Search press releases..." />
            </div>
            <Button variant="outline" className="flex items-center gap-1">
              <Filter className="h-4 w-4" /> Filter
            </Button>
          </div>
          <div className="flex gap-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="sustainability">Sustainability</SelectItem>
                <SelectItem value="innovation">Innovation</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="financial">Financial</SelectItem>
                <SelectItem value="community">Community</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="2023">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="mb-8 rounded-lg border shadow-sm">
        <div className="divide-y">
          {pressReleases.map((release, index) => (
            <div key={index} className="p-6 hover:bg-gray-50">
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" /> {release.date}
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4 text-primary" />
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {release.category}
                  </span>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">
                <Link href={`/news/${release.id}`} className="hover:text-primary hover:underline">
                  {release.title}
                </Link>
              </h3>
              <p className="mb-4 text-gray-600">{release.excerpt}</p>
              <Button asChild variant="ghost" size="sm" className="text-primary">
                <Link href={`/news/${release.id}`} className="flex items-center gap-1">
                  Read Full Release <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button variant="outline" disabled>
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Page 1 of 5</span>
        </div>
        <Button variant="outline">Next</Button>
      </div>
    </PageLayout>
  )
}
