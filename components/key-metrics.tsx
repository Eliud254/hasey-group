import { Card, CardContent } from "@/components/ui/card"

interface Metric {
  value: string
  label: string
  change?: string
  isPositive?: boolean
}

interface KeyMetricsProps {
  title?: string
  subtitle?: string
  metrics: Metric[]
  columns?: 2 | 3 | 4
}

export default function KeyMetrics({ title, subtitle, metrics, columns = 4 }: KeyMetricsProps) {
  const getColumnClass = () => {
    switch (columns) {
      case 2:
        return "grid-cols-1 sm:grid-cols-2"
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      case 4:
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
    }
  }

  return (
    <div className="w-full">
      {title && <h2 className="mb-2 text-2xl font-bold tracking-tight">{title}</h2>}
      {subtitle && <p className="mb-6 text-muted-foreground">{subtitle}</p>}

      <div className={`grid gap-4 ${getColumnClass()}`}>
        {metrics.map((metric, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">{metric.value}</span>
                <span className="mt-1 text-sm text-muted-foreground">{metric.label}</span>
                {metric.change && (
                  <span className={`mt-2 text-sm ${metric.isPositive ? "text-green-600" : "text-red-600"}`}>
                    {metric.isPositive ? "↑" : "↓"} {metric.change}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
