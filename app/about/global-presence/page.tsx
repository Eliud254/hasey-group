import Image from "next/image"
import { MapPin } from "lucide-react"
import PageLayout from "@/components/page-layout"

export default function GlobalPresencePage() {
  const regions = [
    {
      name: "North America",
      countries: ["United States", "Canada", "Mexico"],
      headquarters: "New York, USA",
      employees: "8,500+",
      operations: "Energy, Infrastructure, Technology, Manufacturing",
      image: "/placeholder.svg?height=300&width=500&query=north america map business",
    },
    {
      name: "Europe",
      countries: ["United Kingdom", "Germany", "France", "Netherlands", "Spain", "Italy"],
      headquarters: "London, UK",
      employees: "6,200+",
      operations: "Energy, Infrastructure, Retail, Technology",
      image: "/placeholder.svg?height=300&width=500&query=europe map business",
    },
    {
      name: "Asia Pacific",
      countries: ["China", "Japan", "Singapore", "India", "Australia", "South Korea"],
      headquarters: "Singapore",
      employees: "7,300+",
      operations: "Energy, Manufacturing, Technology, Telecommunications",
      image: "/placeholder.svg?height=300&width=500&query=asia pacific map business",
    },
    {
      name: "Middle East & Africa",
      countries: ["UAE", "Saudi Arabia", "Qatar", "South Africa", "Egypt"],
      headquarters: "Dubai, UAE",
      employees: "2,100+",
      operations: "Energy, Infrastructure, Retail",
      image: "/placeholder.svg?height=300&width=500&query=middle east africa map business",
    },
    {
      name: "Latin America",
      countries: ["Brazil", "Colombia", "Chile", "Argentina", "Peru"],
      headquarters: "São Paulo, Brazil",
      employees: "1,900+",
      operations: "Energy, Infrastructure, Manufacturing",
      image: "/placeholder.svg?height=300&width=500&query=latin america map business",
    },
  ]

  return (
    <PageLayout
      title="Global Presence"
      subtitle="Operations spanning 30+ countries across six continents"
      backLink="/about"
      backLabel="Back to About"
    >
      <div className="mb-12">
        <p className="mx-auto max-w-3xl text-center text-lg text-gray-700">
          Hasey Group maintains a strong global presence, with operations in over 30 countries across six continents.
          Our global scale allows us to serve diverse markets, leverage international expertise, and create value for
          stakeholders worldwide.
        </p>
      </div>

      <div className="mb-16">
        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <Image src="/global-business-network.png" alt="Hasey Group Global Operations" fill className="object-cover" />
        </div>
      </div>

      <div className="space-y-16">
        {regions.map((region, index) => (
          <div key={index} className="rounded-lg border shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-[300px]">
                <Image src={region.image || "/placeholder.svg"} alt={region.name} fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold">{region.name}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Countries of Operation</h4>
                    <p className="text-gray-600">{region.countries.join(", ")}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Regional Headquarters</h4>
                    <p className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4 text-primary" /> {region.headquarters}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Employees</h4>
                    <p className="text-gray-600">{region.employees}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Business Operations</h4>
                    <p className="text-gray-600">{region.operations}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
