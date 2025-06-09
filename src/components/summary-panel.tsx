
import type { SummaryMetric } from "../types/dashboard"

interface SummaryPanelProps {
  metrics: SummaryMetric[]
}

export function SummaryPanel({ metrics }: SummaryPanelProps) {
  return (
    <div className="bg-blue-900 text-white p-6 rounded-lg h-fit">
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index} className={index < metrics.length - 1 ? "border-b border-blue-700 pb-4" : ""}>
            <div className="text-lg font-medium">{metric.label}</div>
            <div className="text-2xl font-bold">{metric.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
