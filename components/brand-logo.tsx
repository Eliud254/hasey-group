import Image from "next/image"
import { cn } from "@/lib/utils"

interface BrandLogoProps {
  name: string
  logo: string
  size?: "sm" | "md" | "lg"
  className?: string
}

export function BrandLogo({ name, logo, size = "md", className }: BrandLogoProps) {
  const sizeClasses = {
    sm: "h-8 w-5",
    md: "h-12 w-10",
    lg: "h-16 w-16",
  }

  return (
    <div className={cn("relative overflow-hidden rounded-full border bg-white p-1", sizeClasses[size], className)}>
      <Image src={logo || "/placeholder.svg"} alt={`${name} logo`} fill className="object-contain" />
    </div>
  )
}
