import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react"
import PageLayout from "@/components/page-layout"
import ContactForm from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <PageLayout title="Contact Us" subtitle="Get in touch with our team for inquiries, support, or information">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">Send Us a Message</h2>
            <p className="text-gray-600">
              Fill out the form below and a member of our team will get back to you as soon as possible.
            </p>
          </div>

          <ContactForm />
        </div>

        <div>
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>
            <p className="text-gray-600">
              You can reach us through the following channels or visit our offices during business hours.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Global Headquarters</h3>
                    <address className="mt-2 space-y-1 text-sm text-gray-600 not-italic">
                      <p>Hasey Group Tower</p>
                      <p>Upperhill, Nairobi</p>
                      <p>Kenya</p>
                    </address>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">
                      <Link href="tel:+12125551234" className="hover:underline">
                        +1 (212) 555-1234
                      </Link>
                    </p>
                    <p className="text-sm text-gray-500">For general inquiries</p>

                    <p className="mt-2 text-gray-600">
                      <Link href="tel:+18005551000" className="hover:underline">
                        +1 (800) 555-1000
                      </Link>
                    </p>
                    <p className="text-sm text-gray-500">Customer support (toll-free)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">
                      <Link href="mailto:info@haseygroup.com" className="hover:underline">
                        info@haseygroup.com
                      </Link>
                    </p>
                    <p className="text-sm text-gray-500">For general inquiries</p>

                    <p className="mt-2 text-gray-600">
                      <Link href="mailto:support@haseygroup.com" className="hover:underline">
                        support@haseygroup.com
                      </Link>
                    </p>
                    <p className="text-sm text-gray-500">For customer support</p>

                    <p className="mt-2 text-gray-600">
                      <Link href="mailto:media@haseygroup.com" className="hover:underline">
                        media@haseygroup.com
                      </Link>
                    </p>
                    <p className="text-sm text-gray-500">For media inquiries</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-gray-600">Saturday: Closed</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Regional Offices</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>
                        <Link href="/contact/london" className="hover:underline">
                          London, UK
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact/singapore" className="hover:underline">
                          Singapore
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact/dubai" className="hover:underline">
                          Dubai, UAE
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact/sao-paulo" className="hover:underline">
                          São Paulo, Brazil
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Our Locations</h2>
        <div className="h-[400px] overflow-hidden rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1620160263896!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </PageLayout>
  )
}
