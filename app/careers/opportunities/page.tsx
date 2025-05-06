import Link from "next/link"
import { Search, MapPin, Briefcase, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PageLayout from "@/components/page-layout"

export default function OpportunitiesPage() {
  const jobListings = [
    {
      id: "ENG-2023-056",
      title: "Senior Process Engineer",
      location: "Houston, TX",
      department: "Engineering",
      type: "Full-time",
      posted: "June 15, 2023",
    },
    {
      id: "TECH-2023-089",
      title: "Data Scientist",
      location: "Singapore",
      department: "Technology",
      type: "Full-time",
      posted: "June 12, 2023",
    },
    {
      id: "OPS-2023-042",
      title: "Sustainability Specialist",
      location: "London, UK",
      department: "Operations",
      type: "Full-time",
      posted: "June 10, 2023",
    },
    {
      id: "BUS-2023-031",
      title: "Business Development Manager",
      location: "Dubai, UAE",
      department: "Business",
      type: "Full-time",
      posted: "June 8, 2023",
    },
    {
      id: "FIN-2023-027",
      title: "Financial Analyst",
      location: "New York, NY",
      department: "Finance",
      type: "Full-time",
      posted: "June 5, 2023",
    },
    {
      id: "MKT-2023-019",
      title: "Digital Marketing Specialist",
      location: "London, UK",
      department: "Marketing",
      type: "Full-time",
      posted: "June 3, 2023",
    },
    {
      id: "ENG-2023-055",
      title: "Mechanical Engineer",
      location: "Houston, TX",
      department: "Engineering",
      type: "Full-time",
      posted: "June 1, 2023",
    },
    {
      id: "TECH-2023-088",
      title: "Software Developer",
      location: "Singapore",
      department: "Technology",
      type: "Full-time",
      posted: "May 30, 2023",
    },
    {
      id: "HR-2023-015",
      title: "Talent Acquisition Specialist",
      location: "New York, NY",
      department: "Human Resources",
      type: "Full-time",
      posted: "May 28, 2023",
    },
    {
      id: "OPS-2023-041",
      title: "Project Manager",
      location: "London, UK",
      department: "Operations",
      type: "Full-time",
      posted: "May 25, 2023",
    },
  ]

  const internships = [
    {
      id: "INT-2023-012",
      title: "Engineering Intern",
      location: "Houston, TX",
      department: "Engineering",
      duration: "Summer 2023",
      posted: "June 1, 2023",
    },
    {
      id: "INT-2023-011",
      title: "Technology Intern",
      location: "Singapore",
      department: "Technology",
      duration: "Summer 2023",
      posted: "May 28, 2023",
    },
    {
      id: "INT-2023-010",
      title: "Business Intern",
      location: "London, UK",
      department: "Business",
      duration: "Summer 2023",
      posted: "May 25, 2023",
    },
    {
      id: "INT-2023-009",
      title: "Finance Intern",
      location: "New York, NY",
      department: "Finance",
      duration: "Summer 2023",
      posted: "May 22, 2023",
    },
  ]

  return (
    <PageLayout
      title="Career Opportunities"
      subtitle="Explore current openings and find your next role at Hasey Group"
      backLink="/careers"
      backLabel="Back to Careers"
    >
      <div className="mb-8">
        <div className="rounded-lg bg-gray-100 p-6">
          <h2 className="mb-4 text-xl font-bold">Search Jobs</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="md:col-span-2">
              <Input placeholder="Search by keyword or job ID" />
            </div>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="asia">Asia Pacific</SelectItem>
                  <SelectItem value="middle-east">Middle East</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="operations">Operations</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button className="gap-2">
              <Search className="h-4 w-4" /> Search
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mx-auto grid max-w-md grid-cols-3">
            <TabsTrigger value="all">All Positions</TabsTrigger>
            <TabsTrigger value="professional">Professional</TabsTrigger>
            <TabsTrigger value="internships">Internships</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="rounded-lg border shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Position</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Location</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Department</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Type</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Posted</th>
                      <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {jobListings.map((job) => (
                      <tr key={job.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          <Link href={`/careers/job/${job.id}`} className="hover:text-primary hover:underline">
                            {job.title}
                          </Link>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-gray-400" /> {job.location}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4 text-gray-400" /> {job.department}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{job.type}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-gray-400" /> {job.posted}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
                          <Button asChild variant="ghost" size="sm" className="text-primary">
                            <Link href={`/careers/job/${job.id}`}>View</Link>
                          </Button>
                        </td>
                      </tr>
                    ))}
                    {internships.map((internship) => (
                      <tr key={internship.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          <Link href={`/careers/job/${internship.id}`} className="hover:text-primary hover:underline">
                            {internship.title}
                          </Link>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-gray-400" /> {internship.location}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4 text-gray-400" /> {internship.department}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">Internship</td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-gray-400" /> {internship.posted}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
                          <Button asChild variant="ghost" size="sm" className="text-primary">
                            <Link href={`/careers/job/${internship.id}`}>View</Link>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="professional" className="mt-6">
            <div className="rounded-lg border shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Position</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Location</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Department</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Type</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Posted</th>
                      <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {jobListings.map((job) => (
                      <tr key={job.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          <Link href={`/careers/job/${job.id}`} className="hover:text-primary hover:underline">
                            {job.title}
                          </Link>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-gray-400" /> {job.location}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4 text-gray-400" /> {job.department}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{job.type}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-gray-400" /> {job.posted}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
                          <Button asChild variant="ghost" size="sm" className="text-primary">
                            <Link href={`/careers/job/${job.id}`}>View</Link>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="internships" className="mt-6">
            <div className="rounded-lg border shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Position</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Location</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Department</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Duration</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Posted</th>
                      <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {internships.map((internship) => (
                      <tr key={internship.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          <Link href={`/careers/job/${internship.id}`} className="hover:text-primary hover:underline">
                            {internship.title}
                          </Link>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-gray-400" /> {internship.location}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4 text-gray-400" /> {internship.department}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{internship.duration}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-gray-400" /> {internship.posted}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
                          <Button asChild variant="ghost" size="sm" className="text-primary">
                            <Link href={`/careers/job/${internship.id}`}>View</Link>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
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

      <div className="mt-16 rounded-lg bg-gray-100 p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">Job Alerts</h2>
        <p className="mx-auto mb-6 max-w-2xl text-center text-gray-700">
          Stay updated on new opportunities that match your interests. Sign up for job alerts to receive notifications
          when relevant positions become available.
        </p>
        <div className="mx-auto max-w-md">
          <div className="grid grid-cols-1 gap-4">
            <Input placeholder="Email Address" type="email" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Job Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="operations">Operations</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full">Subscribe to Job Alerts</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
