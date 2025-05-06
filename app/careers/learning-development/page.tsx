import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Award, BarChart, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function LearningDevelopmentPage() {
  const learningPrograms = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Technical Excellence",
      description:
        "Specialized training programs to develop and enhance technical skills relevant to your role and industry.",
      image: "/learning-technical.png",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Leadership Development",
      description:
        "Programs designed to build leadership capabilities at all levels, from emerging leaders to executives.",
      image: "/learning-leadership.png",
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Business Acumen",
      description: "Courses to develop understanding of business fundamentals, strategy, and financial performance.",
      image: "/learning-business.png",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Innovation & Digital Skills",
      description: "Training to build capabilities in emerging technologies, digital tools, and innovative thinking.",
      image: "/learning-innovation.png",
    },
  ]

  const developmentOpportunities = [
    {
      title: "Mentoring Program",
      description:
        "Our structured mentoring program connects employees with experienced mentors who provide guidance, support, and insights to help them navigate their career and develop professionally.",
    },
    {
      title: "Global Mobility",
      description:
        "Opportunities for short and long-term international assignments that provide exposure to different markets, cultures, and business practices while developing global leadership capabilities.",
    },
    {
      title: "Stretch Assignments",
      description:
        "Challenging projects and assignments that extend beyond your current role, allowing you to develop new skills, gain visibility, and demonstrate your capabilities.",
    },
    {
      title: "Cross-Functional Experience",
      description:
        "Opportunities to work across different functions and business units, broadening your understanding of the organization and developing versatile skills.",
    },
  ]

  return (
    <PageLayout
      title="Learning & Development"
      subtitle="Grow your skills and advance your career at Hasey Group"
      backLink="/careers"
      backLabel="Back to Careers"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Our Approach to Development</h2>
          <p className="mb-4 text-gray-700">
            At Hasey Group, we believe that continuous learning and development are essential for both individual growth
            and organizational success. We're committed to providing our employees with the resources, opportunities,
            and support they need to develop their skills, advance their careers, and reach their full potential.
          </p>
          <p className="mb-8 text-gray-700">
            Our comprehensive approach to learning and development combines formal training programs, on-the-job
            experiences, coaching and mentoring, and self-directed learning opportunities. We follow the 70-20-10 model,
            recognizing that development happens through a combination of challenging experiences (70%), relationships
            and feedback (20%), and formal training (10%).
          </p>

          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-3 text-xl font-bold">Development Philosophy</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Award className="mt-1 h-5 w-5 text-primary" />
                <span>You own your development, and we provide the resources and support</span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="mt-1 h-5 w-5 text-primary" />
                <span>Learning happens through experiences, relationships, and formal training</span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="mt-1 h-5 w-5 text-primary" />
                <span>Development is an ongoing journey, not a destination</span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="mt-1 h-5 w-5 text-primary" />
                <span>Feedback and reflection are essential for growth</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <Image src="/learning-development.png" alt="Learning and Development" fill className="object-cover" />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Learning Programs</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {learningPrograms.map((program, index) => (
            <div key={index} className="overflow-hidden rounded-lg border shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[200px] md:h-auto">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {program.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{program.title}</h3>
                  <p className="mb-4 text-gray-600">{program.description}</p>
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={`/careers/learning/${program.title.toLowerCase().replace(/\s+/g, "-")}`}
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
        <h2 className="mb-8 text-center text-3xl font-bold">Development Opportunities</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {developmentOpportunities.map((opportunity, index) => (
            <div key={index} className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">{opportunity.title}</h3>
              <p className="text-gray-600">{opportunity.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Learning Resources</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border p-6 text-center shadow-sm">
            <BookOpen className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-2 text-xl font-bold">Hasey Learning Hub</h3>
            <p className="mb-4 text-gray-600">
              Our digital learning platform offering thousands of courses, videos, and resources across a wide range of
              topics.
            </p>
            <Button asChild variant="outline">
              <Link href="/careers/learning/hub">Explore Hub</Link>
            </Button>
          </div>
          <div className="rounded-lg border p-6 text-center shadow-sm">
            <Award className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-2 text-xl font-bold">Certification Programs</h3>
            <p className="mb-4 text-gray-600">
              Support for industry-recognized certifications and professional qualifications relevant to your role.
            </p>
            <Button asChild variant="outline">
              <Link href="/careers/learning/certifications">View Programs</Link>
            </Button>
          </div>
          <div className="rounded-lg border p-6 text-center shadow-sm">
            <Users className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-2 text-xl font-bold">Learning Communities</h3>
            <p className="mb-4 text-gray-600">
              Communities of practice where employees share knowledge, insights, and best practices in specific domains.
            </p>
            <Button asChild variant="outline">
              <Link href="/careers/learning/communities">Join Communities</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-lg bg-gray-100 p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">Employee Success Stories</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image src="/employee-success-1.png" alt="Employee" fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-bold">Sarah Chen</h3>
                <p className="text-sm text-gray-500">Engineer to Technology Director</p>
              </div>
            </div>
            <p className="text-gray-600">
              "The learning and development opportunities at Hasey Group have been instrumental in my career journey.
              From technical training to leadership programs, I've been able to continuously develop my skills and
              advance from an entry-level engineer to a technology director over the past 12 years."
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image src="/employee-success-2.png" alt="Employee" fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-bold">Michael Rodriguez</h3>
                <p className="text-sm text-gray-500">Finance Analyst to Global Operations</p>
              </div>
            </div>
            <p className="text-gray-600">
              "What I value most about Hasey Group is the opportunity for cross-functional experience. Starting in
              finance, I've been able to work in different business units and regions, broadening my skills and
              perspective. The global mobility program was particularly transformative for my career development."
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
