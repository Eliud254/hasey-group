import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface SocialLink {
  platform: "linkedin" | "twitter"
  url: string
}

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  imageSrc: string
  socialLinks?: SocialLink[]
  detailsUrl?: string
}

export default function TeamMember({ name, role, bio, imageSrc, socialLinks, detailsUrl }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-64 w-full overflow-hidden sm:h-72">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="mb-3 text-sm text-muted-foreground">{role}</p>
        <p className="mb-4 line-clamp-3 text-sm">{bio}</p>

        <div className="flex items-center justify-between">
          {detailsUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={detailsUrl}>View Profile</Link>
            </Button>
          )}

          {socialLinks && socialLinks.length > 0 && (
            <div className="flex space-x-2">
              {socialLinks.map((link, index) => (
                <Button key={index} variant="ghost" size="icon" asChild>
                  <Link href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.platform === "linkedin" ? <Linkedin className="h-4 w-4" /> : <Twitter className="h-4 w-4" />}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
