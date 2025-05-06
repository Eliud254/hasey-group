import Image from "next/image"
import { Shield, Target, Lightbulb, Heart, Users, Globe } from "lucide-react"
import PageLayout from "@/components/page-layout"

export default function ValuesPage() {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Integrity",
      description:
        "We conduct our business with the highest ethical standards, transparency, and accountability. We honor our commitments and take responsibility for our actions.",
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, constantly raising the bar for quality and performance. We are committed to operational excellence and continuous improvement.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description:
        "We embrace innovation and creative thinking to develop solutions for tomorrow's challenges. We encourage entrepreneurial spirit and bold ideas that drive progress.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Sustainability",
      description:
        "We are committed to sustainable practices that benefit our communities and protect our planet. We integrate environmental, social, and governance considerations into our business decisions.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Respect",
      description:
        "We treat everyone with dignity and respect, valuing diverse perspectives and fostering an inclusive environment where all individuals can thrive and contribute.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Citizenship",
      description:
        "We act as responsible global citizens, contributing positively to the communities where we operate and working collaboratively to address global challenges.",
    },
  ]

  return (
    <PageLayout
      title="Values & Culture"
      subtitle="The principles that guide our actions and decisions"
      backLink="/about"
      backLabel="Back to About"
    >
      <div className="mb-12">
        <p className="mx-auto max-w-3xl text-center text-lg text-gray-700">
          At Hasey Group, our values are more than words—they are the foundation of our culture and the principles that
          guide our actions every day. They define who we are, how we work, and what we stand for as an organization.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => (
          <div key={index} className="rounded-lg border p-8 shadow-sm transition-all hover:shadow-md">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              {value.icon}
            </div>
            <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Culture</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="relative h-[400px] overflow-hidden rounded-xl">
            <Image src="/about-values-culture.png" alt="Hasey Group Culture" fill className="object-cover" />
          </div>
          <div>
            <p className="mb-4 text-lg text-gray-700">
              Our culture is built on collaboration, innovation, and a shared commitment to excellence. We foster an
              environment where diverse perspectives are valued, bold ideas are encouraged, and everyone has the
              opportunity to make a meaningful impact.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              We believe that our people are our greatest asset, and we invest in their development, well-being, and
              success. Through continuous learning, mentorship, and challenging opportunities, we help our employees
              reach their full potential.
            </p>
            <p className="text-lg text-gray-700">
              As a global organization, we celebrate diversity and create an inclusive workplace where everyone feels
              respected, valued, and empowered to contribute. We recognize that our differences make us stronger and
              drive innovation and creativity.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
