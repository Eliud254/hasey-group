import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, GraduationCap, Heart, Home, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function SocialPage() {
  const initiatives = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Education",
      description:
        "We support educational initiatives that provide access to quality education, STEM programs, and skills development for underserved communities around the world.",
      image: "/community-education.png",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Health & Wellbeing",
      description:
        "Our health initiatives focus on improving access to healthcare, promoting wellness, and supporting medical research in the communities where we operate.",
      image: "/community-health.png",
    },
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Community Development",
      description:
        "We invest in infrastructure, economic opportunities, and social programs that strengthen communities and improve quality of life.",
      image: "/community-development.png",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Humanitarian Relief",
      description:
        "We provide support during natural disasters and humanitarian crises, leveraging our resources and expertise to help affected communities recover and rebuild.",
      image: "/community-humanitarian.png",
    },
  ]

  return (
    <PageLayout
      title="Social Responsibility"
      subtitle="Creating positive impact for people and communities"
      backLink="/sustainability"
      backLabel="Back to Sustainability"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Our Social Commitment</h2>
          <p className="mb-4 text-gray-700">
            At Hasey Group, we believe that our success is intrinsically linked to the wellbeing of the communities
            where we operate. Our social responsibility initiatives focus on creating positive, lasting impact through
            strategic community investments, employee engagement, and responsible business practices.
          </p>
          <p className="mb-8 text-gray-700">
            We work closely with local stakeholders to understand community needs and develop programs that address
            specific challenges while building on local strengths and capabilities. Our approach emphasizes partnership,
            sustainability, and measurable outcomes.
          </p>

          <div className="rounded-lg bg-blue-50 p-6">
            <h3 className="mb-3 text-xl font-bold text-blue-800">Our Social Impact</h3>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start gap-2">
                <Users className="mt-1 h-5 w-5 text-blue-600" />
                <span>Over 1 million people reached through community programs</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="mt-1 h-5 w-5 text-blue-600" />
                <span>$50 million invested in education initiatives globally</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="mt-1 h-5 w-5 text-blue-600" />
                <span>100,000+ volunteer hours contributed by employees annually</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="mt-1 h-5 w-5 text-blue-600" />
                <span>200+ community partnerships across 30 countries</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <Image
            src="/placeholder.svg?height=1000&width=800&query=diverse community development project"
            alt="Community Development"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Focus Areas</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {initiatives.map((initiative, index) => (
            <div key={index} className="overflow-hidden rounded-lg border shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[200px] md:h-auto">
                  <Image
                    src={initiative.image || "/placeholder.svg"}
                    alt={initiative.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {initiative.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{initiative.title}</h3>
                  <p className="mb-4 text-gray-600">{initiative.description}</p>
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={`/sustainability/social/${initiative.title.toLowerCase()}`}
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

      <div className="mt-16 rounded-lg bg-gray-100 p-8">
        <h2 className="mb-6 text-center text-2xl font-bold">Hasey Foundation</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative h-[300px] overflow-hidden rounded-xl">
            <Image
              src="/placeholder.svg?height=600&width=800&query=charitable foundation work"
              alt="Hasey Foundation"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-gray-700">
              The Hasey Foundation is our primary vehicle for philanthropic initiatives and community investment.
              Established in 1995, the Foundation focuses on education, healthcare, and community development programs
              that create sustainable, positive change.
            </p>
            <p className="mb-6 text-gray-700">
              Through strategic partnerships with non-profit organizations, academic institutions, and community groups,
              the Foundation leverages resources and expertise to address complex social challenges and empower
              communities.
            </p>
            <Button asChild>
              <Link href="/sustainability/foundation" className="flex items-center gap-1">
                Learn More About the Foundation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
