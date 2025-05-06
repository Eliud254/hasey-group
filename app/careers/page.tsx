import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Briefcase, Globe, Users, Lightbulb, GraduationCap, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import PageLayout from "@/components/page-layout"

export default function CareersPage() {
  // Featured job categories
  const jobCategories = [
    {
      name: "Engineering",
      count: 42,
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      name: "Business & Finance",
      count: 28,
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      name: "Technology",
      count: 35,
      icon: <Search className="h-6 w-6" />,
    },
    {
      name: "Operations",
      count: 23,
      icon: <Users className="h-6 w-6" />,
    },
  ]

  // Featured job openings
  const featuredJobs = [
    {
      title: "Senior Process Engineer",
      location: "Houston, TX",
      department: "Engineering",
      type: "Full-time",
    },
    {
      title: "Data Scientist",
      location: "New York, NY",
      department: "Technology",
      type: "Full-time",
    },
    {
      title: "Financial Analyst",
      location: "London, UK",
      department: "Finance",
      type: "Full-time",
    },
    {
      title: "Operations Manager",
      location: "Singapore",
      department: "Operations",
      type: "Full-time",
    },
    {
      title: "Sustainability Specialist",
      location: "Remote",
      department: "Sustainability",
      type: "Full-time",
    },
    {
      title: "Marketing Coordinator",
      location: "Dubai, UAE",
      department: "Marketing",
      type: "Full-time",
    },
  ]

  return (
    <PageLayout title="Careers" subtitle="Join our global team and help shape the future">
      {/* Hero Section */}
      <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Build Your Career With Us</h2>
          <p className="mb-4 text-gray-700">
            At Hasey Group, we offer exciting career opportunities across multiple industries and locations worldwide.
            Join our diverse team of talented professionals and work on meaningful projects that make a difference.
          </p>
          <p className="mb-8 text-gray-700">
            We value innovation, collaboration, and continuous learning. Our inclusive culture empowers employees to
            grow professionally while contributing to our mission of powering progress and shaping tomorrow.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/careers/opportunities">View All Opportunities</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/careers/why-hasey">Why Hasey Group</Link>
            </Button>
          </div>
        </div>

        <div className="relative h-[400px] overflow-hidden rounded-xl">
          <Image src="/diverse-team-meeting.png" alt="Hasey Group Team" fill className="object-cover" />
        </div>
      </div>

      {/* Search Section */}
      <div className="mb-16 rounded-lg bg-gray-100 p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">Find Your Perfect Role</h2>
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <Input type="text" placeholder="Job title, keyword, or location" className="h-12" />
            </div>
            <Button size="lg" className="h-12">
              Search Jobs
            </Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              Engineering
            </Button>
            <Button variant="outline" size="sm">
              Technology
            </Button>
            <Button variant="outline" size="sm">
              Finance
            </Button>
            <Button variant="outline" size="sm">
              Operations
            </Button>
            <Button variant="outline" size="sm">
              Marketing
            </Button>
          </div>
        </div>
      </div>

      {/* Job Categories */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Explore Job Categories</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {jobCategories.map((category, index) => (
            <div key={index} className="rounded-lg border p-6 text-center shadow-sm transition-all hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                {category.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{category.name}</h3>
              <p className="mb-4 text-gray-600">{category.count} open positions</p>
              <Button asChild variant="outline" size="sm">
                <Link href={`/careers/opportunities?category=${category.name.toLowerCase()}`}>View Jobs</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Jobs */}
      <div className="mb-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Opportunities</h2>
          <Link href="/careers/opportunities" className="flex items-center gap-1 text-primary hover:underline">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredJobs.map((job, index) => (
            <div key={index} className="rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {job.department}
                </span>
                <span className="text-sm text-gray-500">{job.type}</span>
              </div>
              <h3 className="mb-2 text-lg font-bold">{job.title}</h3>
              <p className="mb-4 flex items-center gap-1 text-sm text-gray-600">
                <Globe className="h-4 w-4" /> {job.location}
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href={`/careers/job/${index + 1}`}>View Details</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Why Join Us */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Why Join Hasey Group</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Global Opportunities</h3>
            <p className="text-gray-600">
              Work on international projects and explore career opportunities across our global operations in over 30
              countries.
            </p>
          </div>
          <div className="rounded-lg border p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Lightbulb className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Innovation Culture</h3>
            <p className="text-gray-600">
              Be part of a culture that encourages creative thinking, embraces new ideas, and drives technological
              advancement.
            </p>
          </div>
          <div className="rounded-lg border p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Continuous Learning</h3>
            <p className="text-gray-600">
              Access extensive learning and development programs designed to help you grow professionally and reach your
              full potential.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/careers/why-hasey">Learn More About Working at Hasey</Link>
          </Button>
        </div>
      </div>

      {/* Employee Stories */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Employee Stories</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="overflow-hidden rounded-lg shadow-sm">
            <div className="relative h-[250px]">
              <Image src="/employee-story-1.png" alt="Employee Story" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="mb-1 text-xl font-bold">Sarah Johnson</h3>
              <p className="mb-3 text-sm text-gray-500">Senior Engineer, 5 years at Hasey</p>
              <p className="text-gray-600">
                "Working at Hasey Group has given me the opportunity to work on challenging projects while developing my
                technical and leadership skills."
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-sm">
            <div className="relative h-[250px]">
              <Image src="/employee-story-2.png" alt="Employee Story" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="mb-1 text-xl font-bold">Michael Chen</h3>
              <p className="mb-3 text-sm text-gray-500">Technology Director, 8 years at Hasey</p>
              <p className="text-gray-600">
                "The global exposure and collaborative culture at Hasey Group have been instrumental in my professional
                growth and development."
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-sm">
            <div className="relative h-[250px]">
              <Image src="/employee-story-3.png" alt="Employee Story" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="mb-1 text-xl font-bold">Priya Sharma</h3>
              <p className="mb-3 text-sm text-gray-500">Sustainability Manager, 3 years at Hasey</p>
              <p className="text-gray-600">
                "I'm proud to work for a company that takes its environmental and social responsibilities seriously and
                empowers employees to make a difference."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Campus Recruitment */}
      <div className="rounded-lg bg-gray-900 p-8 text-white">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Campus Recruitment</h2>
            <p className="mb-4 text-gray-300">
              We're always looking for bright, motivated students and recent graduates to join our team. Our campus
              recruitment programs offer exciting opportunities to kickstart your career with meaningful work and
              professional development.
            </p>
            <p className="mb-6 text-gray-300">
              From internships and co-op placements to graduate development programs, we provide pathways for young
              talent to grow and thrive in our global organization.
            </p>
            <Button asChild>
              <Link href="/careers/campus-recruitment">Explore Campus Programs</Link>
            </Button>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-xl">
            <Image src="/campus-students.png" alt="Campus Recruitment" fill className="object-cover" />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
