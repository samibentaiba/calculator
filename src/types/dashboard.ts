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
  isEditable?: boolean
  inputKey?: keyof DashboardInputs
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

export interface DashboardInputs {
  sellingPrice: number
  leads: number
  confirmationRate: number
  deliveryRate: number
  upsellRate: number
  productCost: number
  adsCost: number
  extraExpenses: number
  deliveryFee: number
  returnFee: number
  confirmationNewFee: number
  confirmationFee: number
  upsellFee: number
  upsellProductCost: number
  upsellPrice: number
  vatFee: number
  codFee: number
}

export interface CalculatedValues {
  confirmationLeads: number
  productQuantity: number
  productTotal: number
  adsTotal: number
  deliveryTotal: number
  revenue: number
  adsCostPerPieceSold: number
  investedCapital: number
  returnLeads: number
  returnTotal: number
  netProfit: number
  payment: number
  roi: number
  confirmationTotal: number
  upsellTotal: number
  feesTotal: number
}
