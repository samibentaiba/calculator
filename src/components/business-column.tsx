"use client"

import type { BusinessColumn as BusinessColumnType, DashboardInputs } from "../types/dashboard"
import { EditableMetricCard } from "./editable-metric-card"
import { COLUMN_TITLE_STYLES } from "../constants/styles"

interface BusinessColumnProps {
  column: BusinessColumnType
  inputs?: DashboardInputs
  onChange?: (key: keyof DashboardInputs, value: number) => void
}

export function BusinessColumn({ column, inputs, onChange }: BusinessColumnProps) {
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
                <EditableMetricCard
                  key={index}
                  card={card}
                  value={card.inputKey && inputs ? inputs[card.inputKey] : undefined}
                  onChange={onChange}
                />
              ))}
          </div>
          {column.cards
            .filter((card) => card.size !== "half")
            .map((card, index) => (
              <EditableMetricCard
                key={index}
                card={card}
                value={card.inputKey && inputs ? inputs[card.inputKey] : undefined}
                onChange={onChange}
              />
            ))}
        </div>
      ) : (
        <div className="space-y-2">
          {column.cards.map((card, index) => (
            <EditableMetricCard
              key={index}
              card={card}
              value={card.inputKey && inputs ? inputs[card.inputKey] : undefined}
              onChange={onChange}
            />
          ))}
        </div>
      )}
    </div>
  )
}
