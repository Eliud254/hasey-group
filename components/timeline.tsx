import { Clock } from "lucide-react"

interface TimelineEvent {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gray-200 md:before:mx-auto md:before:right-0 md:before:left-0">
      {events.map((event, index) => (
        <div
          key={index}
          className="relative flex flex-col items-start md:flex-row md:items-center md:justify-center md:space-x-4 md:even:flex-row-reverse md:even:space-x-reverse"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white md:absolute md:left-1/2 md:-translate-x-1/2">
            <Clock className="h-5 w-5" />
          </div>

          <div className="ml-12 w-full md:ml-0 md:w-5/12">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <span className="block text-sm font-semibold text-primary">{event.year}</span>
              <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
