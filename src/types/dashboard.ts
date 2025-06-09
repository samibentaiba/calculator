
export interface InputField {
  id: string
  label: string
  value: string
  hasPercentage?: boolean
}

export interface MetricCard {
  label: string
  value: string
  type: "cost" | "quantity" | "total" | "fee" | "other"
  size?: "full" | "half"
}

export interface BusinessSection {
  id: string
  title: string
  icon: "calculator" | "phone" | "truck"
  columns: BusinessColumn[]
}

export interface BusinessColumn {
  title: string
  cards: MetricCard[]
}

export interface SummaryMetric {
  label: string
  value: string
}
