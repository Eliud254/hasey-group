import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Filter, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PageLayout from "@/components/page-layout"

export default function ProjectsPage() {
  const featuredProject = {
    id: "offshore-platform",
    title: "Offshore Energy Platform",
    description:
      "Our state-of-the-art offshore energy platform represents the pinnacle of engineering excellence and operational efficiency in the energy sector. Utilizing cutting-edge technology and sustainable practices, this platform produces over 200,000 barrels of oil equivalent per day while maintaining the highest environmental standards.",
    image: "/offshore-platform.png",
    category: "Energy",
    location: "Gulf of Mexico",
    year: "2022",
    highlights: [
      "Advanced safety systems with 99.9% reliability",
      "Carbon capture technology reducing emissions by 40%",
      "Digital twin technology for predictive maintenance",
      "Renewable energy integration for operational power needs",
    ],
  }

  const projects = [
    {
      id: "solar-farm",
      title: "Solar Energy Farm",
      description: "Large-scale solar installation providing clean energy to thousands of homes and businesses.",
      image: "/solar-farm.png",
      category: "Renewable Energy",
      location: "Arizona, USA",
      year: "2021",
    },
    {
      id: "advanced-refinery",
      title: "Advanced Refinery",
      description: "Next-generation refining facility with industry-leading efficiency and environmental standards.",
      image: "/advanced-refinery.png",
      category: "Energy",
      location: "Rotterdam, Netherlands",
      year: "2020",
    },
    {
      id: "smart-city",
      title: "Smart City Infrastructure",
      description: "Integrated urban development with smart technology for efficient resource management.",
      image: "/smart-city.png",
      category: "Infrastructure",
      location: "Singapore",
      year: "2022",
    },
    {
      id: "hydrogen-plant",
      title: "Green Hydrogen Production",
      description: "Facility producing green hydrogen using renewable energy and advanced electrolysis.",
      image: "/hydrogen-plant.png",
      category: "Renewable Energy",
      location: "Denmark",
      year: "2023",
    },
    {
      id: "data-center",
      title: "Sustainable Data Center",
      description: "Energy-efficient data center powered by renewable sources with advanced cooling systems.",
      image: "/data-center.png",
      category: "Technology",
      location: "Ireland",
      year: "2021",
    },
    {
      id: "port-expansion",
      title: "Deep Water Port Expansion",
      description: "Major port expansion increasing capacity while implementing sustainable practices.",
      image: "/port-expansion.png",
      category: "Infrastructure",
      location: "Brazil",
      year: "2022",
    },
  ]

  return (
    <PageLayout title="Our Projects" subtitle="Innovative solutions driving global progress">
      {/* Featured Project */}
      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Featured Project</h2>
        <div className="overflow-hidden rounded-xl bg-gray-900 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-[300px] lg:h-auto">
              <Image
                src={featuredProject.image || "/placeholder.svg"}
                alt={featuredProject.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="mb-2 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                  {featuredProject.category}
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                  {featuredProject.location}
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">{featuredProject.year}</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold">{featuredProject.title}</h3>
              <p className="mb-6 text-gray-300">{featuredProject.description}</p>

              <h4 className="mb-3 text-lg font-semibold">Key Highlights</h4>
              <ul className="mb-8 space-y-2">
                {featuredProject.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ChevronRight className="mt-1 h-5 w-5 text-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
                <Link href={`/projects/${featuredProject.id}`} className="flex items-center gap-1">
                  View Project Details <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Filters */}
      <div className="mb-12">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h2 className="text-2xl font-bold">All Projects</h2>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" /> Filter Projects
          </Button>
        </div>

        <Tabs defaultValue="all" className="mt-6">
          <TabsList className="mx-auto grid max-w-md grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="energy">Energy</TabsTrigger>
            <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
            <TabsTrigger value="technology">Technology</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {project.category}
                      </span>
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                    <p className="mb-4 text-gray-600">{project.description}</p>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/projects/${project.id}`} className="relative z-20 flex items-center gap-1">
                        View Details <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="energy" className="mt-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "Energy" || project.category === "Renewable Energy")
                .map((project) => (
                  <div
                    key={project.id}
                    className="group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="relative h-48">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {project.category}
                        </span>
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                      <p className="mb-4 text-gray-600">{project.description}</p>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/projects/${project.id}`} className="relative z-20 flex items-center gap-1">
                          View Details <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="infrastructure" className="mt-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "Infrastructure")
                .map((project) => (
                  <div
                    key={project.id}
                    className="group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="relative h-48">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {project.category}
                        </span>
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                      <p className="mb-4 text-gray-600">{project.description}</p>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/projects/${project.id}`} className="relative z-20 flex items-center gap-1">
                          View Details <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="technology" className="mt-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "Technology")
                .map((project) => (
                  <div
                    key={project.id}
                    className="group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="relative h-48">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {project.category}
                        </span>
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                      <p className="mb-4 text-gray-600">{project.description}</p>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/projects/${project.id}`} className="relative z-20 flex items-center gap-1">
                          View Details <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  )
}
