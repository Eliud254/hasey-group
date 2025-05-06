import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  categories: string[]
  location: string
  year: string
  url: string
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  categories,
  location,
  year,
  url,
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Badge key={index} variant="secondary" className="bg-white/90 text-gray-800">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{location}</span>
          <span className="text-sm text-muted-foreground">{year}</span>
        </div>

        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-gray-600">{description}</p>

        <Link href={url} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
          View Project <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
