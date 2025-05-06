import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function LifeAtHaseyPage() {
  const coreValues = [
    {
      title: "Integrity",
      description:
        "We conduct our business with the highest ethical standards, transparency, and accountability. We honor our commitments and take responsibility for our actions.",
      image: "/team-collaboration.png",
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, constantly raising the bar for quality and performance. We are committed to operational excellence and continuous improvement.",
      image: "/engineering-excellence.png",
    },
    {
      title: "Innovation",
      description:
        "We embrace innovation and creative thinking to develop solutions for tomorrow's challenges. We encourage entrepreneurial spirit and bold ideas that drive progress.",
      image: "/innovation-lab.png",
    },
    {
      title: "Sustainability",
      description:
        "We are committed to sustainable practices that benefit our communities and protect our planet. We integrate environmental, social, and governance considerations into our business decisions.",
      image: "/sustainability-team.png",
    },
  ]

  const employeeStories = [
    {
      name: "David Chen",
      title: "Project Manager",
      location: "Singapore",
      story:
        "I joined Hasey Group as a junior engineer and have had the opportunity to grow into a project management role, leading teams across multiple countries. The company's commitment to employee development and global mobility has been instrumental in my career growth.",
      image: "/employee-story-1.png",
    },
    {
      name: "Maria Rodriguez",
      title: "Digital Transformation Lead",
      location: "London, UK",
      story:
        "What I appreciate most about working at Hasey Group is the culture of innovation. I've been able to lead digital transformation initiatives that are reshaping how we operate, with full support from leadership to explore new technologies and approaches.",
      image: "/employee-story-2.png",
    },
    {
      name: "Ahmed Hassan",
      title: "Sustainability Specialist",
      location: "Dubai, UAE",
      story:
        "Being part of Hasey Group's sustainability team has allowed me to work on meaningful projects that are making a real difference. From renewable energy initiatives to community development programs, I'm proud of the positive impact we're creating.",
      image: "/employee-story-3.png",
    },
  ]

  return (
    <PageLayout
      title="Life at Hasey Group"
      subtitle="Experience our culture, values, and work environment"
      backLink="/careers"
      backLabel="Back to Careers"
    >
      <div className="mb-16">
        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <Image src="/office-culture.png" alt="Hasey Group Office Culture" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h2 className="mb-4 text-3xl font-bold">Our Culture</h2>
            <p className="max-w-2xl text-lg">
              At Hasey Group, we foster a culture of collaboration, innovation, and excellence. We believe in creating
              an environment where diverse perspectives are valued, bold ideas are encouraged, and everyone has the
              opportunity to make a meaningful impact.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Core Values</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {coreValues.map((value, index) => (
            <div key={index} className="overflow-hidden rounded-lg border shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[200px] md:h-auto">
                  <Image src={value.image || "/placeholder.svg"} alt={value.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">A Day in the Life</h2>
        <div className="relative h-[400px] overflow-hidden rounded-xl">
          <Image src="/day-in-life.png" alt="A Day in the Life at Hasey Group" fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button size="lg" className="gap-2">
              <Link href="/careers/day-in-life-video">Watch Video</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Employee Stories</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {employeeStories.map((story, index) => (
            <div key={index} className="overflow-hidden rounded-lg border shadow-sm">
              <div className="relative h-[200px]">
                <Image src={story.image || "/placeholder.svg"} alt={story.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">{story.name}</h3>
                <p className="mb-4 text-sm text-gray-500">
                  {story.title}, {story.location}
                </p>
                <p className="text-gray-600">{story.story}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Offices</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg shadow-sm">
            <div className="relative h-[200px]">
              <Image src="/office-new-york.png" alt="New York Office" fill className="object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold">New York, USA</h3>
              <p className="text-gray-600">Global Headquarters</p>
              <p className="font-semibold">Nairobi, Kenya</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-sm">
            <div className="relative h-[200px]">
              <Image src="/office-london.png" alt="London Office" fill className="object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold">London, UK</h3>
              <p className="text-gray-600">European Headquarters</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-sm">
            <div className="relative h-[200px]">
              <Image src="/office-singapore.png" alt="Singapore Office" fill className="object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold">Singapore</h3>
              <p className="text-gray-600">Asia Pacific Headquarters</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-gray-100 p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">Employee Programs</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold">Wellness Program</h3>
            <p className="mb-4 text-gray-600">
              Our comprehensive wellness program supports physical, mental, and financial wellbeing through various
              initiatives and resources.
            </p>
            <Button asChild variant="outline">
              <Link href="/careers/wellness-program" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold">Volunteer Program</h3>
            <p className="mb-4 text-gray-600">
              Our volunteer program provides opportunities to give back to communities through paid volunteer time and
              organized initiatives.
            </p>
            <Button asChild variant="outline">
              <Link href="/careers/volunteer-program" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold">Employee Resource Groups</h3>
            <p className="mb-4 text-gray-600">
              Our ERGs foster community, provide support, and promote diversity and inclusion across the organization.
            </p>
            <Button asChild variant="outline">
              <Link href="/careers/resource-groups" className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
