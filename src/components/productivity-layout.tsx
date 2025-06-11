"use client"
import { CompactInputField } from "./compact-input-field"
import { CompactBusinessSection } from "./compact-business-section"
import { CompactSummaryPanel } from "./compact-summary-panel"
import { INPUT_FIELDS } from "../constants/dashboard-data"
import type { BusinessSection as BusinessSectionType, SummaryMetric, DashboardInputs } from "../types/dashboard"

interface ProductivityLayoutProps {
  inputs: DashboardInputs
  updateInput: (key: keyof DashboardInputs, value: number) => void
  businessSections: BusinessSectionType[]
  summaryMetrics: SummaryMetric[]
  getSectionResetFunction: (sectionId: string) => (() => void) | undefined
}

export function ProductivityLayout({
  inputs,
  updateInput,
  businessSections,
  summaryMetrics,
  getSectionResetFunction,
}: ProductivityLayoutProps) {
  const operationsSection = businessSections.find((section) => section.id === "operations")
  const callCenterSection = businessSections.find((section) => section.id === "call-center")
  const shippingSection = businessSections.find((section) => section.id === "shipping")

  return (
    <div className="h-[calc(100vh-120px)] overflow-hidden flex flex-col gap-3">
      {/* Input Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Key Inputs</h2>
        <div className="grid grid-cols-5 gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          {INPUT_FIELDS.map((field) => (
            <CompactInputField
              key={field.id}
              field={field}
              value={inputs[field.id as keyof typeof inputs]}
              onChange={updateInput}
            />
          ))}
        </div>
      </div>

      {/* 2x2 Grid Layout */}
      <div className="grid grid-cols-2 grid-rows-2 gap-3 flex-1">
        {operationsSection && (
          <CompactBusinessSection
            section={operationsSection}
            inputs={inputs}
            onChange={updateInput}
            onReset={getSectionResetFunction(operationsSection.id)}
          />
        )}

        {callCenterSection && (
          <CompactBusinessSection
            section={callCenterSection}
            inputs={inputs}
            onChange={updateInput}
            onReset={getSectionResetFunction(callCenterSection.id)}
          />
        )}

        {shippingSection && (
          <CompactBusinessSection
            section={shippingSection}
            inputs={inputs}
            onChange={updateInput}
            onReset={getSectionResetFunction(shippingSection.id)}
          />
        )}

        <CompactSummaryPanel metrics={summaryMetrics} />
      </div>
    </div>
  )
}
