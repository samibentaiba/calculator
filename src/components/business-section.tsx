"use client"

import type { BusinessSection as BusinessSectionType, DashboardInputs } from "../types/dashboard"
import { SectionIcon } from "./section-icon"
import { BusinessColumn } from "./business-column"
import { SectionResetButton } from "./section-reset-button"
import { SECTION_TITLE_STYLES, SECTION_CONTAINER_STYLES } from "../constants/styles"

interface BusinessSectionProps {
  section: BusinessSectionType
  inputs?: DashboardInputs
  onChange?: (key: keyof DashboardInputs, value: number) => void
  onReset?: () => void
}

export function BusinessSection({ section, inputs, onChange, onReset }: BusinessSectionProps) {
  const sectionDescriptions = {
    operations: "Track product costs, advertising spend, and operational expenses",
    "call-center": "Monitor confirmation rates, upsell performance, and call center metrics",
    shipping: "Manage delivery costs, returns, and shipping-related fees",
  }

  return (
    <div className={SECTION_CONTAINER_STYLES}>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <SectionIcon icon={section.icon} />
          <div>
            <h3 className={SECTION_TITLE_STYLES}>{section.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {sectionDescriptions[section.id as keyof typeof sectionDescriptions]}
            </p>
          </div>
        </div>

        {onReset && (
          <div className="flex-shrink-0">
            <SectionResetButton onReset={onReset} sectionName={section.title} />
          </div>
        )}
      </div>

      {/* Section Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {section.columns.map((column, index) => (
          <BusinessColumn key={index} column={column} inputs={inputs} onChange={onChange} />
        ))}
      </div>
    </div>
  )
}
