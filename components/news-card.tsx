import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface NewsCardProps {
  image: string
  category: string
  date: string
  title: string
  excerpt: string
  href: string
}

export default function NewsCard({ image, category, date, title, excerpt, href }: NewsCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md h-full flex flex-col">
      <div className="relative h-48 sm:h-56">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-4 md:p-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{category}</span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <h3 className="mb-2 flex-1 text-lg md:text-xl font-bold">{title}</h3>
        <p className="mb-4 text-sm md:text-base text-gray-600">{excerpt}</p>
        <Button asChild variant="outline" size="sm">
          <Link href={href} className="flex items-center gap-1">
            Read More <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
