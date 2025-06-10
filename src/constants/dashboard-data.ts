import type { InputField, BusinessSection, SummaryMetric } from "../types/dashboard"

// Update the INPUT_FIELDS values to 0
export const INPUT_FIELDS: InputField[] = [
  { id: "sellingPrice", label: "selling price", value: "0" },
  { id: "leads", label: "leads", value: "0" },
  { id: "confirmationRate", label: "confirmation rate", value: "0", hasPercentage: true },
  { id: "deliveryRate", label: "delivery rate", value: "0", hasPercentage: true },
  { id: "upsellRate", label: "upsell rate", value: "0", hasPercentage: true },
]

export const BUSINESS_SECTIONS: BusinessSection[] = [
  {
    id: "operations",
    title: "Operations",
    icon: "calculator",
    columns: [
      {
        title: "product",
        cards: [
          { label: "cost", value: "8,75", type: "cost" },
          { label: "quantity", value: "88", type: "quantity" },
          { label: "total", value: "770.00 $", type: "total" },
        ],
      },
      {
        title: "ads",
        cards: [
          { label: "cost", value: "5", type: "cost" },
          { label: "leads", value: "350", type: "quantity" },
          { label: "total", value: "1750.00 $", type: "total" },
        ],
      },
      {
        title: "extra expenses",
        cards: [{ label: "extra expenses", value: "40", type: "cost" }],
      },
    ],
  },
  {
    id: "call-center",
    title: "Call Center",
    icon: "phone",
    columns: [
      {
        title: "confirmation",
        cards: [
          { label: "new", value: "0", type: "cost", size: "half" },
          { label: "fee", value: "0", type: "cost", size: "half" },
          { label: "leads", value: "175", type: "quantity" },
          { label: "total", value: "0 $", type: "total" },
        ],
      },
      {
        title: "upsell",
        cards: [
          { label: "fee", value: "0", type: "cost" },
          { label: "leads delivered", value: "0", type: "quantity" },
          { label: "total", value: "0 $", type: "total" },
        ],
      },
      {
        title: "",
        cards: [
          { label: "product cost", value: "0", type: "cost" },
          { label: "price", value: "0", type: "cost" },
        ],
      },
    ],
  },
  {
    id: "shipping",
    title: "shipping",
    icon: "truck",
    columns: [
      {
        title: "delivery",
        cards: [
          { label: "fee", value: "5,99", type: "cost" },
          { label: "leads", value: "88", type: "quantity" },
          { label: "total", value: "527.12 $", type: "total" },
        ],
      },
      {
        title: "return",
        cards: [
          { label: "return", value: "2,99", type: "cost" },
          { label: "leads", value: "87", type: "quantity" },
          { label: "total", value: "260.13 $", type: "total" },
        ],
      },
      {
        title: "fees",
        cards: [
          { label: "vat", value: "0", type: "cost" },
          { label: "cod", value: "0", type: "cost" },
          { label: "total", value: "0 $", type: "total" },
        ],
      },
    ],
  },
]

export const SUMMARY_METRICS: SummaryMetric[] = [
  { label: "Revenue", value: "5280.00 $" },
  { label: "invested capital", value: "2560.00 $" },
  { label: "ads cost per piece sold", value: "19.89 $" },
  { label: "total profit on upsell", value: "0.00 $" },
  { label: "payment", value: "4492.75 $" },
  { label: "net profit", value: "1932.75 $" },
  { label: "R O I", value: "75.50 %" },
]
