import Link from "next/link"
import { ArrowLeft, MapPin, Briefcase, Clock, DollarSign, Users, GraduationCap, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import PageLayout from "@/components/page-layout"

interface JobDetailPageProps {
  params: {
    id: string
  }
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  // In a real application, you would fetch the job details based on the ID
  // For this example, we'll use mock data
  const job = {
    id: params.id,
    title: "Senior Process Engineer",
    location: "Houston, TX",
    department: "Engineering",
    type: "Full-time",
    posted: "June 15, 2023",
    salary: "$120,000 - $150,000",
    description:
      "We are seeking an experienced Process Engineer to join our team in Houston. In this role, you will be responsible for designing, optimizing, and troubleshooting process systems for our energy operations. You will work closely with cross-functional teams to ensure safe, efficient, and sustainable operations.",
    responsibilities: [
      "Design and optimize process systems for energy production and refining operations",
      "Develop process flow diagrams, P&IDs, and other technical documentation",
      "Perform process simulations and analyses to improve efficiency and reduce environmental impact",
      "Troubleshoot process issues and implement solutions",
      "Collaborate with operations, maintenance, and project teams",
      "Ensure compliance with safety, environmental, and regulatory requirements",
      "Mentor junior engineers and contribute to knowledge sharing",
    ],
    qualifications: [
      "Bachelor's degree in Chemical Engineering or related field (Master's preferred)",
      "7+ years of experience in process engineering, preferably in the energy sector",
      "Strong knowledge of process simulation software (e.g., Aspen HYSYS, PRO/II)",
      "Experience with process safety management and risk assessment",
      "Excellent problem-solving and analytical skills",
      "Strong communication and teamwork abilities",
      "Professional Engineer (PE) license preferred",
    ],
    benefits: [
      "Competitive salary and performance-based bonuses",
      "Comprehensive health, dental, and vision insurance",
      "401(k) retirement plan with company match",
      "Generous paid time off and holidays",
      "Professional development and continuing education support",
      "Relocation assistance available",
      "Employee wellness programs",
    ],
  }

  return (
    <PageLayout
      title={job.title}
      subtitle={`${job.department} | ${job.location}`}
      backLink="/careers/opportunities"
      backLabel="Back to Opportunities"
    >
      <div className="mb-8 rounded-lg border p-6 shadow-sm">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium">Location</span>
            </div>
            <p className="mt-1 text-gray-600">{job.location}</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              <span className="font-medium">Department</span>
            </div>
            <p className="mt-1 text-gray-600">{job.department}</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-medium">Job Type</span>
            </div>
            <p className="mt-1 text-gray-600">{job.type}</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              <span className="font-medium">Salary Range</span>
            </div>
            <p className="mt-1 text-gray-600">{job.salary}</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-medium">Team Size</span>
            </div>
            <p className="mt-1 text-gray-600">15-20 people</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span className="font-medium">Experience</span>
            </div>
            <p className="mt-1 text-gray-600">7+ years</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Job Description</h2>
        <p className="text-gray-700">{job.description}</p>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Key Responsibilities</h2>
        <ul className="space-y-2">
          {job.responsibilities.map((responsibility, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="mt-1 h-5 w-5 text-primary" />
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Qualifications</h2>
        <ul className="space-y-2">
          {job.qualifications.map((qualification, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="mt-1 h-5 w-5 text-primary" />
              <span>{qualification}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Benefits</h2>
        <ul className="space-y-2">
          {job.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="mt-1 h-5 w-5 text-primary" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8 rounded-lg bg-gray-100 p-6">
        <h2 className="mb-4 text-2xl font-bold">Apply for this Position</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="mb-1 block text-sm font-medium">
                First Name <span className="text-red-500">*</span>
              </label>
              <Input id="firstName" required />
            </div>
            <div>
              <label htmlFor="lastName" className="mb-1 block text-sm font-medium">
                Last Name <span className="text-red-500">*</span>
              </label>
              <Input id="lastName" required />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                Phone <span className="text-red-500">*</span>
              </label>
              <Input id="phone" required />
            </div>
          </div>
          <div>
            <label htmlFor="resume" className="mb-1 block text-sm font-medium">
              Resume/CV <span className="text-red-500">*</span>
            </label>
            <Input id="resume" type="file" required />
            <p className="mt-1 text-xs text-gray-500">PDF, DOC, or DOCX files only. Maximum size: 5MB.</p>
          </div>
          <div>
            <label htmlFor="coverLetter" className="mb-1 block text-sm font-medium">
              Cover Letter
            </label>
            <Textarea id="coverLetter" rows={5} />
          </div>
          <div className="flex justify-end">
            <Button type="submit" size="lg">
              Submit Application
            </Button>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-between">
        <Button asChild variant="outline">
          <Link href="/careers/opportunities" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Opportunities
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/careers/job/share">Share This Job</Link>
        </Button>
      </div>
    </PageLayout>
  )
}
