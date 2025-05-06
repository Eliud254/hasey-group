"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define the slide data
const slides = [
  {
    id: 1,
    image: "/images/hero-corporate-hq.png",
    title: "A Diversified Global Enterprise",
    description:
      "Hasey Group brings together industry-leading companies across energy, infrastructure, technology, and manufacturing sectors to drive innovation and sustainable growth.",
    primaryCta: { text: "Our Companies", href: "/companies" },
    secondaryCta: { text: "Group Overview", href: "/about/overview" },
  },
  {
    id: 2,
    image: "/images/hero-energy.png",
    title: "Powering Industries, Empowering Communities",
    description:
      "From renewable energy solutions to advanced petrochemicals, our energy division delivers reliable, sustainable power to businesses and communities worldwide.",
    primaryCta: { text: "Energy Solutions", href: "/businesses/exploration-production" },
    secondaryCta: { text: "Sustainability Initiatives", href: "/sustainability/environment" },
  },
  {
    id: 3,
    image: "/images/hero-infrastructure.png",
    title: "Building Tomorrow's Infrastructure",
    description:
      "Our infrastructure companies develop and operate critical facilities, transportation networks, and urban developments that connect people and enable commerce.",
    primaryCta: { text: "Infrastructure Projects", href: "/businesses/infrastructure" },
    secondaryCta: { text: "Global Presence", href: "/about/global-presence" },
  },
  {
    id: 4,
    image: "/images/hero-technology.png",
    title: "Innovating for the Digital Future",
    description:
      "Hasey Group's technology ventures are pioneering digital transformation solutions, AI applications, and smart systems for industries of tomorrow.",
    primaryCta: { text: "Technology Ventures", href: "/businesses/innovation" },
    secondaryCta: { text: "Research & Development", href: "/businesses" },
  },
  {
    id: 5,
    image: "/images/hero-manufacturing.png",
    title: "Excellence in Manufacturing",
    description:
      "Our manufacturing facilities combine precision engineering, advanced materials, and sustainable practices to deliver high-quality products across multiple industries.",
    primaryCta: { text: "Manufacturing Capabilities", href: "/businesses" },
    secondaryCta: { text: "Our Companies", href: "/companies" },
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setCurrentSlide(index)
      setTimeout(() => setIsTransitioning(false), 500) // Match this with the CSS transition time
    },
    [isTransitioning],
  )

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }, [currentSlide, goToSlide])

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 7000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                priority
                className="object-cover brightness-[0.7] transition-transform duration-10000 ease-out scale-[1.03] transform-gpu"
                style={{
                  transform: index === currentSlide ? "scale(1)" : "scale(1.03)",
                }}
              />
            </div>

            {/* Content */}
            <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4 md:px-6">
              <div className="max-w-3xl">
                <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="mb-6 text-lg text-white/90 md:text-xl">{slide.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link href={slide.primaryCta.href}>{slide.primaryCta.text}</Link>
                  </Button>
                  {slide.secondaryCta && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white bg-white/20 text-white hover:bg-white/30"
                      asChild
                    >
                      <Link href={slide.secondaryCta.href}>{slide.secondaryCta.text}</Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-primary" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
