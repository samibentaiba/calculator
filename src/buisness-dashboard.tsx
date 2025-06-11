"use client"

import { InputField } from "./components/input-field"
import { BusinessSection } from "./components/business-section"
import { SummaryPanel } from "./components/summary-panel"
import { DashboardHeader } from "./components/dashboard-header"
import { SectionHeader } from "./components/section-header"
import { INPUT_FIELDS } from "./constants/dashboard-data"
import { useDashboardCalculations } from "./hooks/use-dashboard-calculations"
import { formatCurrency, formatPercentage, formatNumber } from "./lib/calculations"
import type { BusinessSection as BusinessSectionType, SummaryMetric } from "./types/dashboard"

export default function Component() {
  const {
    inputs,
    calculatedValues,
    updateInput,
    resetAllInputs,
    resetOperationsInputs,
    resetCallCenterInputs,
    resetShippingInputs,
  } = useDashboardCalculations()

  // Generate business sections with calculated values and editable green cards
  const businessSections: BusinessSectionType[] = [
    {
      id: "operations",
      title: "Operations",
      icon: "calculator",
      columns: [
        {
          title: "product",
          cards: [
            {
              label: "cost",
              value: formatNumber(inputs.productCost),
              type: "cost",
              isEditable: true,
              inputKey: "productCost",
            },
            { label: "quantity", value: calculatedValues.productQuantity.toString(), type: "quantity" },
            { label: "total", value: formatCurrency(calculatedValues.productTotal), type: "total" },
          ],
        },
        {
          title: "ads",
          cards: [
            {
              label: "cost",
              value: formatNumber(inputs.adsCost),
              type: "cost",
              isEditable: true,
              inputKey: "adsCost",
            },
            { label: "leads", value: inputs.leads.toString(), type: "quantity" },
            { label: "total", value: formatCurrency(calculatedValues.adsTotal), type: "total" },
          ],
        },
        {
          title: "extra expenses",
          cards: [
            {
              label: "extra expenses",
              value: formatNumber(inputs.extraExpenses),
              type: "cost",
              isEditable: true,
              inputKey: "extraExpenses",
            },
          ],
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
            {
              label: "new",
              value: formatNumber(inputs.confirmationNewFee),
              type: "cost",
              size: "half",
              isEditable: true,
              inputKey: "confirmationNewFee",
            },
            {
              label: "fee",
              value: formatNumber(inputs.confirmationFee),
              type: "cost",
              size: "half",
              isEditable: true,
              inputKey: "confirmationFee",
            },
            { label: "leads", value: calculatedValues.confirmationLeads.toString(), type: "quantity" },
            { label: "total", value: formatCurrency(calculatedValues.confirmationTotal), type: "total" },
          ],
        },
        {
          title: "upsell",
          cards: [
            {
              label: "fee",
              value: formatNumber(inputs.upsellFee),
              type: "cost",
              isEditable: true,
              inputKey: "upsellFee",
            },
            { label: "leads delivered", value: "0", type: "quantity" },
            { label: "total", value: formatCurrency(calculatedValues.upsellTotal), type: "total" },
          ],
        },
        {
          title: "additional",
          cards: [
            {
              label: "product cost",
              value: formatNumber(inputs.upsellProductCost),
              type: "cost",
              isEditable: true,
              inputKey: "upsellProductCost",
            },
            {
              label: "price",
              value: formatNumber(inputs.upsellPrice),
              type: "cost",
              isEditable: true,
              inputKey: "upsellPrice",
            },
          ],
        },
      ],
    },
    {
      id: "shipping",
      title: "Shipping",
      icon: "truck",
      columns: [
        {
          title: "delivery",
          cards: [
            {
              label: "fee",
              value: formatNumber(inputs.deliveryFee),
              type: "cost",
              isEditable: true,
              inputKey: "deliveryFee",
            },
            { label: "leads", value: calculatedValues.productQuantity.toString(), type: "quantity" },
            { label: "total", value: formatCurrency(calculatedValues.deliveryTotal), type: "total" },
          ],
        },
        {
          title: "return",
          cards: [
            {
              label: "return",
              value: formatNumber(inputs.returnFee),
              type: "cost",
              isEditable: true,
              inputKey: "returnFee",
            },
            { label: "leads", value: calculatedValues.returnLeads.toString(), type: "quantity" },
            { label: "total", value: formatCurrency(calculatedValues.returnTotal), type: "total" },
          ],
        },
        {
          title: "fees",
          cards: [
            {
              label: "vat",
              value: formatNumber(inputs.vatFee),
              type: "cost",
              isEditable: true,
              inputKey: "vatFee",
            },
            {
              label: "cod",
              value: formatNumber(inputs.codFee),
              type: "cost",
              isEditable: true,
              inputKey: "codFee",
            },
            { label: "total", value: formatCurrency(calculatedValues.feesTotal), type: "total" },
          ],
        },
      ],
    },
  ]

  // Generate summary metrics with calculated values
  const summaryMetrics: SummaryMetric[] = [
    { label: "Revenue", value: formatCurrency(calculatedValues.revenue) },
    { label: "invested capital", value: formatCurrency(calculatedValues.investedCapital) },
    { label: "ads cost per piece sold", value: formatCurrency(calculatedValues.adsCostPerPieceSold) },
    { label: "total profit on upsell", value: formatCurrency(calculatedValues.upsellTotal) },
    { label: "payment", value: formatCurrency(calculatedValues.payment) },
    { label: "net profit", value: formatCurrency(calculatedValues.netProfit) },
    { label: "R O I", value: formatPercentage(calculatedValues.roi) },
  ]

  // Map reset functions to sections
  const getSectionResetFunction = (sectionId: string) => {
    switch (sectionId) {
      case "operations":
        return resetOperationsInputs
      case "call-center":
        return resetCallCenterInputs
      case "shipping":
        return resetShippingInputs
      default:
        return undefined
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
        <DashboardHeader onReset={resetAllInputs} />

        {/* Input Section */}
        <div className="mb-6 sm:mb-8">
          <SectionHeader
            title="Key Inputs"
            description="Enter your primary business metrics to calculate performance indicators"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
            {INPUT_FIELDS.map((field) => (
              <InputField
                key={field.id}
                field={field}
                value={inputs[field.id as keyof typeof inputs]}
                onChange={updateInput}
              />
            ))}
          </div>
        </div>

        {/* Main Content Grid - Business Sections + Summary Panel */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 sm:gap-8">
          {/* Left Column - Business Sections */}
          <div className="xl:col-span-3 space-y-6 sm:space-y-8">
            {businessSections.map((section) => (
              <BusinessSection
                key={section.id}
                section={section}
                inputs={inputs}
                onChange={updateInput}
                onReset={getSectionResetFunction(section.id)}
              />
            ))}
          </div>

          {/* Right Column - Summary Panel */}
          <div className="xl:col-span-1">
            <div className="xl:sticky xl:top-6">
              <SummaryPanel metrics={summaryMetrics} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
