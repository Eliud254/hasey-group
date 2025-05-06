import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Globe, BarChart3, Lightbulb, Leaf, Users, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import NewsCard from "@/components/news-card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import HeroSlider from "@/components/hero-slider"

export default function Home() {
  const businessVerticals = [
    {
      title: "Energy",
      description: "Exploration, production, refining, and marketing of oil and gas resources.",
      href: "/businesses/energy",
      image: "/images/energy.jpeg",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "Infrastructure",
      description: "Development and operation of ports, roads, and critical infrastructure.",
      href: "/businesses/infrastructure",
      image: "/images/infrastructure.jpeg",
      icon: <BarChart3 className="h-6 w-6" />,
    },
    {
      title: "Innovation",
      description: "Research and development in emerging technologies and digital solutions.",
      href: "/businesses/innovation",
      image: "/images/innovation.jpeg",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: "Sustainability",
      description: "Renewable energy, green initiatives, and sustainable business practices.",
      href: "/businesses/sustainability",
      image: "/images/sustainability.jpeg",
      icon: <Leaf className="h-6 w-6" />,
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Hasey Group</h2>
              <div className="mt-6 max-w-xl space-y-6 text-lg text-gray-600">
                <p>
                  Founded in 2016, Hasey Group has grown from a small trading company to a global conglomerate with
                  interests spanning energy, petrochemicals, infrastructure, telecommunications, and retail.
                </p>
                <p>
                  Our journey is defined by bold vision, strategic investments, and an unwavering commitment to
                  excellence. Today, we stand as one of the world's leading integrated energy and materials companies,
                  driving innovation and sustainable growth.
                </p>
                <div className="pt-4">
                  <Button variant="default" className="gap-2 relative z-10" asChild>
                    <Link href="/about">
                      Learn More About Us <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl lg:w-1/2">
              <Image src="/images/about-corporate.png" alt="Hasey Group Headquarters" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Business Verticals */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-2">Our Business Verticals</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Diversified operations across key sectors of the global economy
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessVerticals.map((vertical) => (
              <div
                key={vertical.title}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <div className="relative h-48">
                  <Image
                    src={vertical.image || "/placeholder.svg"}
                    alt={vertical.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      {vertical.icon}
                    </div>
                    <h3 className="text-xl font-bold">{vertical.title}</h3>
                  </div>

                  {/* Description is now visible by default */}
                  <p className="text-gray-600 mb-4">{vertical.description}</p>

                  <Button asChild variant="outline" className="w-full">
                    <Link href={vertical.href} className="flex items-center justify-center gap-1">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Featured Project: <br />
                <span className="text-primary">Offshore Energy Platform</span>
              </h2>
              <div className="mt-6 max-w-xl space-y-6 text-lg text-gray-300">
                <p>
                  Our state-of-the-art offshore energy platform represents the pinnacle of engineering excellence and
                  operational efficiency in the energy sector.
                </p>
                <p>
                  Utilizing cutting-edge technology and sustainable practices, this platform produces over 200,000
                  barrels of oil equivalent per day while maintaining the highest environmental standards.
                </p>
                <ul className="space-y-2 pt-4">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-primary" />
                    <span>Advanced safety systems with 99.9% reliability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-primary" />
                    <span>Carbon capture technology reducing emissions by 40%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-primary" />
                    <span>Digital twin technology for predictive maintenance</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button variant="default" className="gap-2 relative z-10" asChild>
                    <Link href="/projects">
                      Explore Our Projects <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl lg:w-1/2">
              <Image src="/images/featured-project.png" alt="Offshore Energy Platform" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest News</h2>
            <Link href="/news" className="flex items-center gap-1 text-primary hover:underline">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <NewsCard
              image="/images/news-1.png"
              category="Sustainability"
              date="April 15, 2023"
              title="Hasey Group Commits to Net Zero Emissions by 2040"
              excerpt="Ambitious climate action plan unveiled at annual sustainability summit..."
              href="/news/net-zero-emissions"
            />
            <NewsCard
              image="/images/news-2.png"
              category="Innovation"
              date="March 22, 2023"
              title="New R&D Center Opens in Singapore"
              excerpt="State-of-the-art facility to focus on next-generation energy solutions..."
              href="/news/rd-center-singapore"
            />
            <NewsCard
              image="/images/news-3.png"
              category="Business"
              date="February 10, 2023"
              title="Hasey Group Acquires TechEnergy Solutions"
              excerpt="Strategic acquisition to strengthen digital transformation capabilities..."
              href="/news/techenergy-acquisition"
            />
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-gradient-to-r from-blue-900 to-teal-700 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Commitment to Sustainability</h2>
            <p className="mt-4 text-lg text-gray-100">
              Building a better future through responsible business practices
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Environmental Stewardship</h3>
                <p className="text-gray-200">
                  Reducing our environmental footprint through innovative technologies and sustainable practices across
                  all operations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Community Development</h3>
                <p className="text-gray-200">
                  Empowering communities through education, healthcare, and infrastructure development initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Circular Economy</h3>
                <p className="text-gray-200">
                  Implementing circular business models to minimize waste and maximize resource efficiency throughout
                  our value chain.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="gap-2 border-blue-500 text-white bg-blue-500/30 hover:bg-blue-500/50 relative z-10"
              asChild
            >
              <Link href="/sustainability">
                View Sustainability Report <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Partners Say</h2>
            <p className="mt-4 text-lg text-gray-600">Building strong relationships with stakeholders worldwide</p>
          </div>

          <div className="mt-16">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4 text-4xl text-gray-300">"</div>
                      <p className="mb-6 text-gray-700">
                        Hasey Group has been an exceptional partner in our joint venture. Their technical expertise and
                        commitment to excellence have been instrumental in the success of our projects.
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                        <div>
                          <p className="font-semibold">Sarah Johnson</p>
                          <p className="text-sm text-gray-500">CEO, Global Energy Partners</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4 text-4xl text-gray-300">"</div>
                      <p className="mb-6 text-gray-700">
                        Working with Hasey Group on sustainable infrastructure projects has been a rewarding experience.
                        Their innovative approach and focus on sustainability align perfectly with our values.
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                        <div>
                          <p className="font-semibold">Michael Chen</p>
                          <p className="text-sm text-gray-500">Director, EcoSolutions International</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4 text-4xl text-gray-300">"</div>
                      <p className="mb-6 text-gray-700">
                        Hasey Group's commitment to safety and operational excellence sets them apart in the industry.
                        They consistently deliver projects on time and exceed quality expectations.
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                        <div>
                          <p className="font-semibold">David Rodriguez</p>
                          <p className="text-sm text-gray-500">Operations Manager, Marine Logistics Co.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Partner With Us?</h2>
              <p className="mt-4 max-w-2xl text-lg text-gray-300">
                Contact our team to discuss how Hasey Group can help drive your business forward.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 relative z-10" asChild>
                <Link href="/contact">
                  <Phone className="h-4 w-4" /> Contact Us
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-blue-500 text-white bg-blue-500/30 hover:bg-blue-500/50 relative z-10"
                asChild
              >
                <Link href="/investors">Investor Relations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
