import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Heart, Users, Globe, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"

export default function WhyHaseyPage() {
  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Comprehensive Benefits",
      description:
        "We offer competitive compensation, health and wellness programs, retirement plans, and flexible work arrangements to support your wellbeing and work-life balance.",
      image: "/careers-benefits.png",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Inclusive Culture",
      description:
        "We foster a diverse and inclusive environment where different perspectives are valued, and everyone has the opportunity to contribute and grow.",
      image: "/careers-team.png",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Opportunities",
      description:
        "With operations in over 30 countries, we offer opportunities to work on international projects and gain global experience throughout your career.",
      image: "/careers-global.png",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Innovation & Impact",
      description:
        "Join a team that's driving innovation and making a meaningful impact on industries that power our world and shape our future.",
      image: "/careers-innovation.png",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Recognition & Rewards",
      description:
        "We recognize and reward excellence through performance-based incentives, spot bonuses, and formal recognition programs.",
      image: "/careers-recognition.png",
    },
  ]

  const testimonials = [
    {
      quote:
        "Working at Hasey Group has given me the opportunity to collaborate with talented professionals from around the world and contribute to projects that are shaping the future of energy.",
      name: "Sarah Chen",
      title: "Senior Engineer",
      location: "Houston, TX",
      image: "/diverse-professional-woman.png",
    },
    {
      quote:
        "What I value most about Hasey Group is the culture of innovation and continuous learning. I've been able to develop new skills and advance my career while working on meaningful projects.",
      name: "Michael Rodriguez",
      title: "Technology Specialist",
      location: "Singapore",
      image: "/diverse-professional-man.png",
    },
    {
      quote:
        "The inclusive culture at Hasey Group creates an environment where diverse perspectives are valued and everyone has the opportunity to make an impact. It's truly a collaborative and supportive workplace.",
      name: "Aisha Patel",
      title: "Sustainability Manager",
      location: "London, UK",
      image: "/diverse-professional-woman-2.png",
    },
  ]

  return (
    <PageLayout
      title="Why Hasey Group"
      subtitle="Discover the benefits of building your career with us"
      backLink="/careers"
      backLabel="Back to Careers"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Join Our Team</h2>
          <p className="mb-4 text-gray-700">
            At Hasey Group, we believe that our success is driven by our people. We're committed to creating an
            environment where talented individuals can thrive, grow, and make a meaningful impact.
          </p>
          <p className="mb-8 text-gray-700">
            Whether you're an experienced professional or just starting your career, Hasey Group offers challenging
            opportunities across a wide range of disciplines and locations. Join us and be part of a team that's
            powering progress and shaping tomorrow.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-bold">Challenging Work</h3>
                <p className="text-gray-600">
                  Tackle complex challenges and contribute to projects that are shaping the future of energy,
                  infrastructure, and technology.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-bold">Career Growth</h3>
                <p className="text-gray-600">
                  Access clear pathways for advancement and development opportunities to help you reach your full
                  potential.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-bold">Global Impact</h3>
                <p className="text-gray-600">
                  Be part of a global organization that's making a positive impact on communities and the environment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <Image src="/diverse-team-meeting.png" alt="Hasey Group Team Meeting" fill className="object-cover" />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Benefits & Rewards</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                {benefit.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Employee Testimonials</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg border p-6 shadow-sm">
              <div className="mb-6 text-4xl text-gray-300">"</div>
              <p className="mb-6 text-gray-700">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.title}, {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-lg bg-primary p-8 text-white">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Ready to Join Our Team?</h2>
            <p className="mb-6">
              Explore our current opportunities and take the first step toward a rewarding career at Hasey Group.
            </p>
            <Button asChild variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20">
              <Link href="/careers/opportunities" className="flex items-center gap-1">
                View Open Positions <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Students & Recent Graduates</h2>
            <p className="mb-6">
              Discover our internships, co-op programs, and entry-level opportunities for students and recent graduates.
            </p>
            <Button asChild variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20">
              <Link href="/careers/campus-recruitment" className="flex items-center gap-1">
                Learn About Campus Programs <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
