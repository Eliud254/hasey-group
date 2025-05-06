import Image from "next/image"
import Link from "next/link"
import { Download, Search, Grid, List, ImageIcon, FileText, Film } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PageLayout from "@/components/page-layout"

export default function MediaLibraryPage() {
  const images = [
    {
      id: "img-001",
      title: "Offshore Energy Platform",
      category: "Operations",
      date: "June 2023",
      thumbnail: "/images/featured-project.png",
      download: "/downloads/offshore-platform-hires.jpg",
    },
    {
      id: "img-002",
      title: "Corporate Headquarters - Nairobi",
      category: "Facilities",
      date: "May 2023",
      thumbnail: "/images/about-corporate.png",
      download: "/downloads/corporate-hq-hires.jpg",
    },
    {
      id: "img-003",
      title: "Renewable Energy Farm",
      category: "Sustainability",
      date: "April 2023",
      thumbnail: "/wind-solar-synergy.png",
      download: "/downloads/renewable-farm-hires.jpg",
    },
    {
      id: "img-004",
      title: "Research & Development Center",
      category: "Innovation",
      date: "March 2023",
      thumbnail: "/innovation-lab.png",
      download: "/downloads/rd-center-hires.jpg",
    },
    {
      id: "img-005",
      title: "Executive Leadership Team",
      category: "Leadership",
      date: "February 2023",
      thumbnail: "/team-collaboration.png",
      download: "/downloads/leadership-team-hires.jpg",
    },
    {
      id: "img-006",
      title: "Manufacturing Facility",
      category: "Operations",
      date: "January 2023",
      thumbnail: "/modern-production-space.png",
      download: "/downloads/manufacturing-facility-hires.jpg",
    },
  ]

  const documents = [
    {
      id: "doc-001",
      title: "Annual Report 2022",
      category: "Financial",
      date: "March 2023",
      fileSize: "15.8 MB",
      fileType: "PDF",
      download: "/downloads/annual-report-2022.pdf",
    },
    {
      id: "doc-002",
      title: "Sustainability Report 2022",
      category: "Sustainability",
      date: "April 2023",
      fileSize: "12.5 MB",
      fileType: "PDF",
      download: "/downloads/sustainability-report-2022.pdf",
    },
    {
      id: "doc-003",
      title: "Corporate Fact Sheet",
      category: "Corporate",
      date: "May 2023",
      fileSize: "3.2 MB",
      fileType: "PDF",
      download: "/downloads/corporate-fact-sheet.pdf",
    },
    {
      id: "doc-004",
      title: "Investor Presentation Q2 2023",
      category: "Financial",
      date: "June 2023",
      fileSize: "8.5 MB",
      fileType: "PDF",
      download: "/downloads/investor-presentation-q2-2023.pdf",
    },
  ]

  const videos = [
    {
      id: "vid-001",
      title: "Corporate Overview",
      category: "Corporate",
      date: "June 2023",
      duration: "3:45",
      thumbnail: "/video-corporate.png",
      download: "/downloads/corporate-overview-video.mp4",
    },
    {
      id: "vid-002",
      title: "Sustainability Initiatives",
      category: "Sustainability",
      date: "May 2023",
      duration: "5:20",
      thumbnail: "/video-sustainability.png",
      download: "/downloads/sustainability-initiatives-video.mp4",
    },
    {
      id: "vid-003",
      title: "Innovation Showcase",
      category: "Innovation",
      date: "April 2023",
      duration: "4:15",
      thumbnail: "/video-innovation.png",
      download: "/downloads/innovation-showcase-video.mp4",
    },
  ]

  return (
    <PageLayout
      title="Media Library"
      subtitle="Access high-resolution images, videos, and documents for media use"
      backLink="/news"
      backLabel="Back to News & Media"
    >
      <div className="mb-8">
        <div className="rounded-lg bg-gray-100 p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="md:col-span-2">
              <Input placeholder="Search media library..." />
            </div>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="operations">Operations</SelectItem>
                  <SelectItem value="facilities">Facilities</SelectItem>
                  <SelectItem value="sustainability">Sustainability</SelectItem>
                  <SelectItem value="innovation">Innovation</SelectItem>
                  <SelectItem value="leadership">Leadership</SelectItem>
                  <SelectItem value="corporate">Corporate</SelectItem>
                  <SelectItem value="financial">Financial</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button className="w-full gap-2">
                <Search className="h-4 w-4" /> Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <Tabs defaultValue="images" className="w-full">
          <div className="mb-6 flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="images" className="gap-2">
                <ImageIcon className="h-4 w-4" /> Images
              </TabsTrigger>
              <TabsTrigger value="documents" className="gap-2">
                <FileText className="h-4 w-4" /> Documents
              </TabsTrigger>
              <TabsTrigger value="videos" className="gap-2">
                <Film className="h-4 w-4" /> Videos
              </TabsTrigger>
            </TabsList>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Grid className="h-4 w-4" /> Grid
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <List className="h-4 w-4" /> List
              </Button>
            </div>
          </div>

          <TabsContent value="images">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((image) => (
                <div key={image.id} className="overflow-hidden rounded-lg border shadow-sm">
                  <div className="relative h-[200px]">
                    <Image
                      src={image.thumbnail || "/placeholder.svg"}
                      alt={image.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 text-lg font-bold">{image.title}</h3>
                    <div className="mb-3 flex items-center justify-between">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {image.category}
                      </span>
                      <span className="text-xs text-gray-500">{image.date}</span>
                    </div>
                    <Button asChild variant="outline" size="sm" className="w-full gap-1">
                      <Link href={image.download} download>
                        <Download className="h-4 w-4" /> Download High-Res
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="documents">
            <div className="rounded-lg border shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Title</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Category</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">File Size</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Type</th>
                      <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {documents.map((document) => (
                      <tr key={document.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{document.title}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{document.category}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{document.date}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{document.fileSize}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{document.fileType}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
                          <Button asChild variant="ghost" size="sm" className="gap-1">
                            <Link href={document.download} download>
                              <Download className="h-4 w-4" /> Download
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

          <TabsContent value="videos">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => (
                <div key={video.id} className="overflow-hidden rounded-lg border shadow-sm">
                  <div className="relative h-[200px]">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Button variant="outline" className="border-white bg-black/50 text-white hover:bg-black/70">
                        Play
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 text-lg font-bold">{video.title}</h3>
                    <div className="mb-3 flex items-center justify-between">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {video.category}
                      </span>
                      <span className="text-xs text-gray-500">{video.duration}</span>
                    </div>
                    <Button asChild variant="outline" size="sm" className="w-full gap-1">
                      <Link href={video.download} download>
                        <Download className="h-4 w-4" /> Download Video
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="rounded-lg bg-gray-100 p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">Media Usage Guidelines</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold">Terms of Use</h3>
            <p className="mb-4 text-gray-600">
              All materials in this media library are the property of Hasey Group and are protected by copyright laws.
              These materials may be used for editorial purposes with proper attribution to Hasey Group.
            </p>
            <Button asChild variant="outline">
              <Link href="/news/media-terms">View Full Terms</Link>
            </Button>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold">Brand Guidelines</h3>
            <p className="mb-4 text-gray-600">
              Our brand guidelines provide information on the proper use of Hasey Group logos, colors, typography, and
              other brand elements.
            </p>
            <Button asChild variant="outline">
              <Link href="/news/brand-guidelines">Download Guidelines</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
