
import type { BusinessColumn as BusinessColumnType } from "../types/dashboard"
import { MetricCard } from "./metric-card"
import { COLUMN_TITLE_STYLES } from "../constants/styles"

interface BusinessColumnProps {
  column: BusinessColumnType
}

export function BusinessColumn({ column }: BusinessColumnProps) {
  const hasHalfSizeCards = column.cards.some((card) => card.size === "half")

  return (
    <div className="space-y-2">
      {column.title && <h3 className={COLUMN_TITLE_STYLES}>{column.title}</h3>}

      {hasHalfSizeCards ? (
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {column.cards
              .filter((card) => card.size === "half")
              .map((card, index) => (
                <MetricCard key={index} card={card} />
              ))}
          </div>
          {column.cards
            .filter((card) => card.size !== "half")
            .map((card, index) => (
              <MetricCard key={index} card={card} />
            ))}
        </div>
      ) : (
        <div className="space-y-2">
          {column.cards.map((card, index) => (
            <MetricCard key={index} card={card} />
          ))}
        </div>
      )}
    </div>
  )
}
