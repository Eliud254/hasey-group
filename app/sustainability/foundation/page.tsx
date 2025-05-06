import Image from "next/image"
import Link from "next/link"
import { ArrowRight, HeartHandshake, GraduationCap, Heart, Globe, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function FoundationPage() {
  const initiatives = [
    {
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      title: "Education for All",
      description:
        "Providing access to quality education and digital skills training for underserved communities worldwide.",
      image: "/placeholder.svg?height=300&width=500&query=education classroom diverse students",
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "Community Health",
      description: "Supporting healthcare access, disease prevention, and wellness programs in vulnerable communities.",
      image: "/placeholder.svg?height=300&width=500&query=community health clinic",
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: "Environmental Conservation",
      description: "Protecting biodiversity, restoring ecosystems, and promoting environmental education.",
      image: "/placeholder.svg?height=300&width=500&query=environmental conservation volunteers",
    },
  ]

  const events = [
    {
      date: "June 5, 2023",
      title: "World Environment Day Initiatives",
      description: "Global employee volunteer events focused on environmental conservation and education.",
      location: "Multiple locations worldwide",
    },
    {
      date: "September 15-22, 2023",
      title: "Global Education Week",
      description: "Series of events, workshops, and fundraising activities supporting education initiatives.",
      location: "All Hasey Group offices",
    },
    {
      date: "November 10, 2023",
      title: "Annual Hasey Foundation Gala",
      description: "Fundraising event celebrating the Foundation's impact and announcing new initiatives.",
      location: "New York, USA",
    },
  ]

  return (
    <PageLayout
      title="Hasey Foundation"
      subtitle="Creating positive change through strategic philanthropy and community investment"
      backLink="/sustainability"
      backLabel="Back to Sustainability"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">About the Foundation</h2>
          <p className="mb-4 text-gray-700">
            Established in 1995, the Hasey Foundation is our primary vehicle for philanthropic initiatives and community
            investment. The Foundation works to create positive, lasting change in communities around the world through
            strategic partnerships, employee engagement, and targeted investments.
          </p>
          <p className="mb-8 text-gray-700">
            With a focus on education, healthcare, and environmental conservation, the Foundation leverages Hasey
            Group's resources, expertise, and global presence to address pressing social and environmental challenges
            and empower communities to thrive.
          </p>

          <div className="rounded-lg bg-blue-600 p-6 text-white">
            <h3 className="mb-3 text-xl font-bold">Foundation Impact</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <HeartHandshake className="mt-1 h-5 w-5 text-blue-200" />
                <span>$250+ million invested in community initiatives since 1995</span>
              </li>
              <li className="flex items-start gap-2">
                <HeartHandshake className="mt-1 h-5 w-5 text-blue-200" />
                <span>1.5+ million people reached through Foundation programs</span>
              </li>
              <li className="flex items-start gap-2">
                <HeartHandshake className="mt-1 h-5 w-5 text-blue-200" />
                <span>500+ partner organizations across 30 countries</span>
              </li>
              <li className="flex items-start gap-2">
                <HeartHandshake className="mt-1 h-5 w-5 text-blue-200" />
                <span>200,000+ volunteer hours contributed by employees annually</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <Image
            src="/placeholder.svg?height=1000&width=800&query=foundation charity work diverse volunteers"
            alt="Hasey Foundation"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Focus Areas</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {initiatives.map((initiative, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-[200px]">
                <Image
                  src={initiative.image || "/placeholder.svg"}
                  alt={initiative.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                    {initiative.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{initiative.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 text-gray-600">{initiative.description}</p>
                <Button asChild variant="outline" size="sm">
                  <Link
                    href={`/sustainability/foundation/${initiative.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-1"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-lg bg-gray-100 p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">Upcoming Events</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {events.map((event, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-medium text-gray-500">{event.date}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
              <p className="mb-3 text-gray-600">{event.description}</p>
              <p className="text-sm text-gray-500">{event.location}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/sustainability/foundation/events" className="flex items-center gap-1">
              View All Events <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
