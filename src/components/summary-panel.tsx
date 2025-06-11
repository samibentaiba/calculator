import type { SummaryMetric } from "../types/dashboard"
import { TrendingUp, DollarSign, Target, PieChart, Calculator, BarChart3 } from "lucide-react"

interface SummaryPanelProps {
  metrics: SummaryMetric[]
}

const getMetricIcon = (label: string) => {
  if (label.toLowerCase().includes("revenue")) return <DollarSign className="h-4 w-4 sm:h-5 sm:w-5" />
  if (label.toLowerCase().includes("roi")) return <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
  if (label.toLowerCase().includes("profit")) return <Target className="h-4 w-4 sm:h-5 sm:w-5" />
  if (label.toLowerCase().includes("capital")) return <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
  return <PieChart className="h-4 w-4 sm:h-5 sm:w-5" />
}

export function SummaryPanel({ metrics }: SummaryPanelProps) {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-blue-950 text-white p-4 sm:p-6 rounded-xl shadow-lg">
      <div className="mb-4 sm:mb-6">
        <div className="flex items-center gap-2 sm:gap-3 mb-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold">Financial Summary</h3>
        </div>
        <p className="text-blue-100 text-xs sm:text-sm">Key performance indicators and metrics</p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={`${
              index < metrics.length - 1 ? "border-b border-blue-500/30 pb-3 sm:pb-4" : ""
            } flex items-center gap-2 sm:gap-3 hover:bg-white/5 p-2 rounded-lg transition-colors`}
          >
            <div className="text-blue-200 bg-white/10 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
              {getMetricIcon(metric.label)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs sm:text-sm font-medium text-blue-100 capitalize truncate">{metric.label}</div>
              <div className="text-lg sm:text-xl font-bold truncate">{metric.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
