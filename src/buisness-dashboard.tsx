
import { InputField } from "./components/input-field"
import { BusinessSection } from "./components/business-section"
import { SummaryPanel } from "./components/summary-panel"
import { INPUT_FIELDS, BUSINESS_SECTIONS, SUMMARY_METRICS } from "./constants/dashboard-data"

export default function Component() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Top Input Row */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        {INPUT_FIELDS.map((field) => (
          <InputField key={field.id} field={field} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column - Business Sections */}
        <div className="lg:col-span-3 space-y-8">
          {BUSINESS_SECTIONS.map((section) => (
            <BusinessSection key={section.id} section={section} />
          ))}
        </div>

        {/* Right Column - Summary */}
        <SummaryPanel metrics={SUMMARY_METRICS} />
      </div>
    </div>
  )
}
