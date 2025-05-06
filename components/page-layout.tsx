import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface PageLayoutProps {
  title: string
  subtitle?: string
  backLink?: string
  backLabel?: string
  children: React.ReactNode
}

export default function PageLayout({
  title,
  subtitle,
  backLink,
  backLabel,
  children,
}: PageLayoutProps) {
  return (
    <div className="container py-12">
      {backLink && (
        <Link
          href={backLink}
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="h-4 w-4" />
          {backLabel || "Back"}
        </Link>
      )}

      <div className="mb-12">
        <h1 className="mb-2 text-4xl font-bold">{title}</h1>
        {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
      </div>

      {children}
    </div>
  )
}
