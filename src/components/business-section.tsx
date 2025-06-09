
import type { BusinessSection as BusinessSectionType } from "../types/dashboard"
import { SectionIcon } from "./section-icon"
import { BusinessColumn } from "./business-column"
import { SECTION_TITLE_STYLES } from "../constants/styles"

interface BusinessSectionProps {
  section: BusinessSectionType
}

export function BusinessSection({ section }: BusinessSectionProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center gap-2">
        <SectionIcon icon={section.icon} />
        <h2 className={SECTION_TITLE_STYLES}>{section.title}</h2>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
        {section.columns.map((column, index) => (
          <BusinessColumn key={index} column={column} />
        ))}
      </div>
    </div>
  )
}
