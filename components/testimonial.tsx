import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
  imageSrc?: string
}

export default function Testimonial({ quote, author, role, company, imageSrc }: TestimonialProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="mb-4 flex justify-start">
          <QuoteIcon className="h-8 w-8 text-primary/30" />
        </div>

        <blockquote className="mb-6 text-lg italic text-gray-700">"{quote}"</blockquote>

        <div className="flex items-center">
          {imageSrc && (
            <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={author}
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div>
            <div className="font-semibold">{author}</div>
            <div className="text-sm text-muted-foreground">
              {role}, {company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
