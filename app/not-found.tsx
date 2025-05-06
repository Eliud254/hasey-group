import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-16 text-center">
      <div className="mx-auto max-w-md">
        <h1 className="mb-2 text-9xl font-bold text-gray-300">404</h1>
        <h2 className="mb-4 text-3xl font-bold text-gray-900">Page Not Found</h2>
        <p className="mb-8 text-gray-600">
          We're sorry, the page you requested could not be found. Please check the URL or navigate back to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild>
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" /> Return to Homepage
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
