import Image from "next/image"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function HistoryPage() {
  const milestones = [
    {
      year: "2016",
      title: "Foundation",
      description: "Hasey Group was founded as a small trading company in Nairobi by Robert Hasey.",
      image: "/1970s-office-scene.png",
    },
    {
      year: "2018",
      title: "Energy Expansion",
      description:
        "Entered the energy sector with the acquisition of Eastern Petroleum, marking the beginning of our energy business.",
      image: "/offshore-dawn-1980s.png",
    },
    {
      year: "2019",
      title: "International Growth",
      description: "Expanded operations to Europe and Asia, establishing a global presence in key markets.",
      image: "/placeholder.svg?height=300&width=500&query=global business expansion 1990s",
    },
    {
      year: "2020",
      title: "Sustainability Focus",
      description: "Established our first sustainability framework and committed to reducing environmental impact.",
      image: "/placeholder.svg?height=300&width=500&query=renewable energy solar panels",
    },
    {
      year: "2021",
      title: "Technology Ventures",
      description: "Launched Hasey Technology Ventures to invest in emerging technologies and digital solutions.",
      image: "/placeholder.svg?height=300&width=500&query=technology office 2000s",
    },
    {
      year: "2022",
      title: "New Leadership",
      description: "Jonathan R. Hasey appointed as Chairman and CEO, ushering in a new era of innovation and growth.",
      image: "/placeholder.svg?height=300&width=500&query=modern corporate boardroom",
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Achieved presence in over 30 countries with more than 25,000 employees worldwide.",
      image: "/placeholder.svg?height=300&width=500&query=sustainable business green technology",
    },
    {
      year: "2024",
      title: "Net Zero Commitment",
      description: "Announced ambitious climate action plan with commitment to achieve net zero emissions by 2040.",
      image: "/placeholder.svg?height=300&width=500&query=corporate anniversary celebration",
    },
  ]

  return (
    <PageLayout
      title="Our History"
      subtitle="Five decades of innovation, growth, and excellence"
      backLink="/about"
      backLabel="Back to About"
    >
      <div className="mb-12">
        <p className="mx-auto max-w-3xl text-center text-lg text-gray-700">
          Since our founding in 2016, Hasey Group has evolved from a small trading company to a global enterprise
          spanning multiple industries. Our journey reflects our commitment to innovation, strategic vision, and
          adaptability in a changing world.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-200"></div>
        <div className="space-y-16">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`relative flex flex-col gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className="md:w-1/2">
                <div className="relative h-[250px] overflow-hidden rounded-xl">
                  <Image
                    src={
                      milestone.year === "2016"
                        ? "/about-history-1970s.png"
                        : milestone.year === "2018"
                          ? "/about-history-1980s.png"
                          : milestone.year === "2019"
                            ? "/about-history-1990s.png"
                            : milestone.year === "2020"
                              ? "/about-history-2000s.png"
                              : milestone.year === "2021"
                                ? "/about-history-2008.png"
                                : milestone.year === "2022"
                                  ? "/about-history-2015.png"
                                  : milestone.year === "2023"
                                    ? "/about-history-2020.png"
                                    : "/placeholder.svg"
                    }
                    alt={milestone.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-white md:top-1/2 md:-translate-y-1/2">
                  {index + 1}
                </div>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {milestone.year}
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <Button>Download Company History PDF</Button>
      </div>
    </PageLayout>
  )
}
