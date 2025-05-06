"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from "lucide-react"

interface NewsletterSignupProps {
  title?: string
  description?: string
  buttonText?: string
  dark?: boolean
}

export default function NewsletterSignup({
  title = "Subscribe to Our Newsletter",
  description = "Stay updated with the latest news, insights, and announcements from Hasey Group.",
  buttonText = "Subscribe",
  dark = false,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const textColorClass = dark ? "text-white" : "text-gray-900"
  const descriptionColorClass = dark ? "text-gray-300" : "text-gray-600"

  return (
    <div className="w-full">
      {!isSubmitted ? (
        <>
          <div className="mb-4">
            <h3 className={`text-xl font-bold ${textColorClass}`}>{title}</h3>
            <p className={`mt-2 ${descriptionColorClass}`}>{description}</p>
          </div>

          <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={dark ? "bg-white/10 text-white placeholder:text-gray-400" : ""}
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : buttonText}
            </Button>
          </form>
        </>
      ) : (
        <div className="flex items-center gap-3">
          <CheckCircle2 className={`h-5 w-5 ${dark ? "text-green-400" : "text-green-600"}`} />
          <p className={dark ? "text-white" : "text-gray-900"}>
            Thank you for subscribing! We've sent a confirmation email to <strong>{email}</strong>.
          </p>
        </div>
      )}
    </div>
  )
}
