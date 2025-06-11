import type { SummaryMetric } from "../types/dashboard"
import { TrendingUp, DollarSign, Target, PieChart, Calculator, BarChart3 } from "lucide-react"

interface CompactSummaryPanelProps {
  metrics: SummaryMetric[]
}

const METRIC_ICONS = {
  revenue: DollarSign,
  roi: TrendingUp,
  profit: Target,
  capital: Calculator,
  default: PieChart,
} as const

function getMetricIcon(label: string) {
  const lowerLabel = label.toLowerCase()
  if (lowerLabel.includes("revenue")) return METRIC_ICONS.revenue
  if (lowerLabel.includes("roi")) return METRIC_ICONS.roi
  if (lowerLabel.includes("profit")) return METRIC_ICONS.profit
  if (lowerLabel.includes("capital")) return METRIC_ICONS.capital
  return METRIC_ICONS.default
}

export function CompactSummaryPanel({ metrics }: CompactSummaryPanelProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-blue-950 text-white p-3 rounded-lg shadow-lg h-full">
      {/* Header */}
      <div className="mb-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center">
            <BarChart3 className="w-2.5 h-2.5" />
          </div>
          <h3 className="text-sm font-bold">Financial Summary</h3>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="flex flex-col gap-2 h-[calc(100%-32px)]">
        {/* First row - 4 metrics */}
        <div className="grid grid-cols-4 gap-2 flex-1">
          {metrics.slice(0, 4).map((metric, index) => {
            const IconComponent = getMetricIcon(metric.label)
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center hover:bg-white/5 p-1.5 rounded transition-colors bg-white/5"
              >
                <div className="text-blue-200 bg-white/10 p-1 rounded flex-shrink-0 mb-1">
                  <IconComponent className="h-3 w-3" />
                </div>
                <div>
                  <div className="text-xs font-medium text-blue-100 capitalize truncate mb-1">{metric.label}</div>
                  <div className="text-sm font-bold truncate">{metric.value}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Second row - 3 metrics */}
        <div className="grid grid-cols-3 gap-2 flex-1">
          {metrics.slice(4).map((metric, index) => {
            const IconComponent = getMetricIcon(metric.label)
            return (
              <div
                key={index + 4}
                className="flex flex-col items-center justify-center text-center hover:bg-white/5 p-1.5 rounded transition-colors bg-white/5"
              >
                <div className="text-blue-200 bg-white/10 p-1 rounded flex-shrink-0 mb-1">
                  <IconComponent className="h-3 w-3" />
                </div>
                <div>
                  <div className="text-xs font-medium text-blue-100 capitalize truncate mb-1">{metric.label}</div>
                  <div className="text-sm font-bold truncate">{metric.value}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
