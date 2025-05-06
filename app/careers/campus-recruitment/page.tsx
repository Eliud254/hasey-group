import Image from "next/image"
import Link from "next/link"
import { ArrowRight, GraduationCap, Calendar, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function CampusRecruitmentPage() {
  const programs = [
    {
      title: "Summer Internship Program",
      description:
        "A 10-12 week program for undergraduate and graduate students to gain hands-on experience in their field of study while working on meaningful projects.",
      eligibility: "Current undergraduate or graduate students",
      timeline: "Applications open in September for the following summer",
      image: "/campus-internship.png",
    },
    {
      title: "Co-op Program",
      description:
        "A 6-month program that integrates classroom learning with practical work experience, allowing students to apply academic knowledge in a professional setting.",
      eligibility: "Students enrolled in co-op programs at partner universities",
      timeline: "Spring (Jan-Jun) and Fall (Jul-Dec) sessions available",
      image: "/campus-coop.png",
    },
    {
      title: "Graduate Development Program",
      description:
        "A two-year rotational program for recent graduates to gain exposure to different areas of our business while developing leadership and technical skills.",
      eligibility: "Recent graduates (within the last 12 months)",
      timeline: "Program starts each September, applications open in January",
      image: "/campus-graduate.png",
    },
    {
      title: "PhD Fellowship Program",
      description:
        "A program supporting doctoral candidates conducting research in areas aligned with our strategic priorities, including renewable energy, digital transformation, and sustainable materials.",
      eligibility: "Current PhD candidates in relevant fields",
      timeline: "Applications accepted on a rolling basis",
      image: "/campus-phd.png",
    },
  ]

  const campusEvents = [
    {
      name: "Fall Career Fair",
      university: "Massachusetts Institute of Technology",
      date: "September 15, 2023",
      location: "Cambridge, MA",
    },
    {
      name: "Engineering Career Expo",
      university: "University of Texas at Austin",
      date: "September 20, 2023",
      location: "Austin, TX",
    },
    {
      name: "Technology Career Fair",
      university: "Stanford University",
      date: "September 25, 2023",
      location: "Stanford, CA",
    },
    {
      name: "Business & Engineering Recruitment Day",
      university: "Imperial College London",
      date: "October 5, 2023",
      location: "London, UK",
    },
    {
      name: "STEM Career Fair",
      university: "National University of Singapore",
      date: "October 12, 2023",
      location: "Singapore",
    },
  ]

  return (
    <PageLayout
      title="Campus Recruitment"
      subtitle="Launch your career with opportunities for students and recent graduates"
      backLink="/careers"
      backLabel="Back to Careers"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Start Your Journey with Us</h2>
          <p className="mb-4 text-gray-700">
            At Hasey Group, we're committed to developing the next generation of talent. Our campus recruitment programs
            offer students and recent graduates the opportunity to gain valuable experience, develop professional
            skills, and contribute to meaningful work that shapes the future of energy, infrastructure, and technology.
          </p>
          <p className="mb-8 text-gray-700">
            Whether you're looking for an internship, co-op placement, or your first role after graduation, we offer a
            variety of programs designed to help you launch and grow your career in a supportive, innovative
            environment.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold">Meaningful Work</h3>
                <p className="text-gray-600">
                  Contribute to real projects that address global challenges and shape the future of industries.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold">Mentorship & Support</h3>
                <p className="text-gray-600">
                  Learn from experienced professionals who are invested in your growth and development.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold">Career Development</h3>
                <p className="text-gray-600">
                  Access learning resources, networking opportunities, and pathways to full-time employment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <Image src="/campus-students.png" alt="Campus Recruitment" fill className="object-cover" />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Programs</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {programs.map((program, index) => (
            <div key={index} className="overflow-hidden rounded-lg border shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[200px] md:h-auto">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold">{program.title}</h3>
                  <p className="mb-4 text-gray-600">{program.description}</p>
                  <div className="mb-2">
                    <span className="font-medium">Eligibility:</span> {program.eligibility}
                  </div>
                  <div className="mb-4">
                    <span className="font-medium">Timeline:</span> {program.timeline}
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={`/careers/campus/${program.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center gap-1"
                    >
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Campus Events</h2>
        <div className="rounded-lg border shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Event</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">University</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {campusEvents.map((event, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{event.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{event.university}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-gray-400" /> {event.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-gray-400" /> {event.location}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-lg bg-primary p-8 text-white">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Apply Now</h2>
            <p className="mb-6">
              Ready to start your journey with Hasey Group? Explore our current opportunities for students and recent
              graduates.
            </p>
            <Button asChild variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20">
              <Link href="/careers/opportunities?category=campus" className="flex items-center gap-1">
                View Campus Opportunities <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Partner with Us</h2>
            <p className="mb-6">
              Interested in establishing a campus partnership with Hasey Group? Contact our university relations team to
              learn more.
            </p>
            <Button asChild variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20">
              <Link href="/careers/campus/partnerships" className="flex items-center gap-1">
                University Partnerships <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
