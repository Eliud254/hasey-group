import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface BusinessCardProps {
  icon: ReactNode
  title: string
  description: string
  href: string
}

export default function BusinessCard({ icon, title, description, href }: BusinessCardProps) {
  return (
    <Card className="group rounded-lg border p-4 md:p-6 shadow-sm transition-all hover:shadow-md">
      <CardContent className="p-0">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="mb-2 text-lg md:text-xl font-bold">{title}</h3>
        <p className="mb-4 text-sm md:text-base text-gray-600">{description}</p>
        <Button asChild variant="outline" size="sm" className="relative z-10">
          <Link href={href} className="flex items-center gap-1">
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
