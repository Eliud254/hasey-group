import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import PageLayout from "@/components/page-layout"
import TeamMember from "@/components/team-member"

export default function LeadershipPage() {
  const executiveTeam = [
    {
      name: "Alexandra Chen",
      role: "Chief Executive Officer",
      bio: "Alexandra has over 25 years of experience in the energy and infrastructure sectors. She joined Hasey Group in 2010 and has been instrumental in driving the company's strategic transformation and sustainable growth initiatives.",
      imageSrc: "/alexandra-chen.jpg",
      socialLinks: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "twitter", url: "https://twitter.com" },
      ],
      detailsUrl: "/about/leadership/alexandra-chen",
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Financial Officer",
      bio: "Michael brings extensive financial expertise with a 20-year track record in corporate finance, M&A, and capital markets. He has been with Hasey Group since 2015, leading our financial strategy and investor relations.",
      imageSrc: "/michael-rodriguez.jpg",
      socialLinks: [{ platform: "linkedin", url: "https://linkedin.com" }],
      detailsUrl: "/about/leadership/michael-rodriguez",
    },
    {
      name: "David Park",
      role: "Chief Technology Officer",
      bio: "David is a technology visionary with expertise in digital transformation, AI, and sustainable tech solutions. He joined Hasey Group in 2018 to lead our technology strategy and innovation initiatives.",
      imageSrc: "/david-park.jpg",
      socialLinks: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "twitter", url: "https://twitter.com" },
      ],
      detailsUrl: "/about/leadership/david-park",
    },
    {
      name: "Sarah Johnson",
      role: "Chief Sustainability Officer",
      bio: "Sarah is a recognized sustainability leader with 15 years of experience in environmental strategy and ESG. She joined Hasey Group in 2019 to drive our commitment to sustainable business practices.",
      imageSrc: "/sarah-johnson.jpg",
      socialLinks: [{ platform: "linkedin", url: "https://linkedin.com" }],
      detailsUrl: "/about/leadership/sarah-johnson",
    },
    {
      name: "Robert Williams",
      role: "Chief Operating Officer",
      bio: "Robert has over 20 years of operational leadership experience across multiple industries. He joined Hasey Group in 2012 and oversees our global operations and supply chain management.",
      imageSrc: "/robert-williams.jpg",
      socialLinks: [{ platform: "linkedin", url: "https://linkedin.com" }],
      detailsUrl: "/about/leadership/robert-williams",
    },
    {
      name: "Lisa Chen",
      role: "Chief Human Resources Officer",
      bio: "Lisa is a people-focused leader with extensive experience in talent management and organizational development. She joined Hasey Group in 2017 to lead our global HR strategy.",
      imageSrc: "/lisa-chen.jpg",
      socialLinks: [{ platform: "linkedin", url: "https://linkedin.com" }],
      detailsUrl: "/about/leadership/lisa-chen",
    },
    {
      name: "James Wilson",
      role: "President, Energy Division",
      bio: "James has 25 years of experience in the energy sector. He joined Hasey Group in 2014 and leads our global energy business, including exploration, production, and renewable energy initiatives.",
      imageSrc: "/james-wilson.jpg",
      socialLinks: [{ platform: "linkedin", url: "https://linkedin.com" }],
      detailsUrl: "/about/leadership/james-wilson",
    },
    {
      name: "Maria Gonzalez",
      role: "President, Infrastructure Division",
      bio: "Maria brings 18 years of infrastructure development expertise. She joined Hasey Group in 2016 and oversees our global infrastructure projects and operations.",
      imageSrc: "/maria-gonzalez.jpg",
      socialLinks: [{ platform: "linkedin", url: "https://linkedin.com" }],
      detailsUrl: "/about/leadership/maria-gonzalez",
    },
  ]

  const boardMembers = [
    {
      name: "Dr. Richard Thompson",
      role: "Chairman of the Board",
      bio: "Dr. Thompson has served as Chairman since 2018. He brings extensive experience in corporate governance and strategic leadership from his career in the energy and technology sectors.",
      imageSrc: "/richard-thompson.jpg",
      detailsUrl: "/about/leadership/richard-thompson",
    },
    {
      name: "Eleanor Wu",
      role: "Vice Chair",
      bio: "Eleanor has been a board member since 2015 and Vice Chair since 2020. She brings valuable insights from her background in international finance and sustainable investment.",
      imageSrc: "/eleanor-wu.jpg",
      detailsUrl: "/about/leadership/eleanor-wu",
    },
    {
      name: "Dr. Samuel Okafor",
      role: "Board Member",
      bio: "Dr. Okafor joined our board in 2019. He is a renowned expert in energy transition and brings valuable perspective from his academic and industry experience.",
      imageSrc: "/samuel-okafor.jpg",
      detailsUrl: "/about/leadership/samuel-okafor",
    },
    {
      name: "Jennifer Martinez",
      role: "Board Member",
      bio: "Jennifer joined our board in 2017. She brings extensive experience in digital transformation and technology innovation from her executive roles in the tech industry.",
      imageSrc: "/jennifer-martinez.jpg",
      detailsUrl: "/about/leadership/jennifer-martinez",
    },
  ]

  return (
    <PageLayout
      title="Leadership"
      subtitle="Meet the team driving Hasey Group's vision and strategy"
      backLink="/about"
      backLabel="Back to About"
    >
      <div className="grid gap-12">
        <section>
          <h2 className="mb-6 text-2xl font-bold">Executive Leadership Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {executiveTeam.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                imageSrc={member.imageSrc}
                socialLinks={member.socialLinks}
                detailsUrl={member.detailsUrl}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold">Board of Directors</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {boardMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                imageSrc={member.imageSrc}
                detailsUrl={member.detailsUrl}
              />
            ))}
          </div>
        </section>

        <section>
          <div className="rounded-xl bg-gray-50 p-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold">Leadership Philosophy</h2>
              <p className="mb-6 text-gray-600">
                At Hasey Group, our leadership team is guided by a commitment to integrity, innovation, and sustainable
                growth. We believe in leading by example, fostering a culture of collaboration, and creating long-term
                value for all our stakeholders.
              </p>
              <p className="text-gray-600">
                Our diverse leadership team brings together a wealth of experience and perspectives, enabling us to
                navigate complex challenges and seize opportunities in a rapidly evolving global landscape.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold">Corporate Governance</h2>
          <p className="mb-6 text-gray-700">
            Hasey Group is committed to the highest standards of corporate governance. Our governance framework is
            designed to ensure effective oversight, transparency, and accountability in all our operations.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold">Board Structure</h3>
                <p className="text-gray-600">
                  Our Board of Directors consists of experienced leaders with diverse backgrounds and expertise. The
                  Board is supported by specialized committees focused on audit, compensation, governance, and
                  sustainability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold">Governance Policies</h3>
                <p className="text-gray-600">
                  We maintain comprehensive governance policies that guide our business conduct, risk management,
                  executive compensation, and stakeholder engagement practices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-bold">Ethics & Compliance</h3>
                <p className="text-gray-600">
                  Our robust ethics and compliance program ensures that we operate with integrity and adhere to all
                  applicable laws and regulations across our global operations.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/investors/corporate-governance">Learn More About Our Governance</Link>
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
