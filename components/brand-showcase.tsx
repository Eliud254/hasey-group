import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface Brand {
  name: string
  logo: string
  description?: string
  website?: string
}

interface BrandShowcaseProps {
  title: string
  brands: Brand[]
  className?: string
}

export function BrandShowcase({ title, brands, className }: BrandShowcaseProps) {
  return (
    <div className={cn("py-8", className)}>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <div key={brand.name} className="bg-white rounded-lg shadow-sm border p-6 flex flex-col items-center">
            <div className="relative h-24 w-full mb-4">
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} logo`}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{brand.name}</h3>
            {brand.description && <p className="text-gray-600 text-center mb-4">{brand.description}</p>}
            {brand.website && (
              <Link
                href={brand.website}
                className="text-primary hover:underline text-sm mt-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
