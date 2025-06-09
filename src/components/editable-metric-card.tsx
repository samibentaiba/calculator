"use client"

import type React from "react"
import type { MetricCard as MetricCardType, DashboardInputs } from "../types/dashboard"
import { CARD_STYLES, CARD_BASE_STYLES, CARD_LABEL_STYLES, CARD_VALUE_STYLES } from "../constants/styles"

interface EditableMetricCardProps {
  card: MetricCardType
  value?: number
  onChange?: (key: keyof DashboardInputs, value: number) => void
}

export function EditableMetricCard({ card, value, onChange }: EditableMetricCardProps) {
  const cardClasses = `${CARD_BASE_STYLES} ${CARD_STYLES[card.type]}`

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (card.isEditable && card.inputKey && onChange) {
      const numValue = Number.parseFloat(e.target.value) || 0
      onChange(card.inputKey, numValue)
    }
  }

  if (card.isEditable && card.inputKey && value !== undefined) {
    return (
      <div className={cardClasses}>
        <div className={CARD_LABEL_STYLES}>{card.label}</div>
        <input
          type="number"
          step="0.01"
          value={value}
          onChange={handleChange}
          className="bg-transparent text-center text-xl font-bold text-white border-none outline-none w-full placeholder-white/70"
          placeholder="0"
        />
      </div>
    )
  }

  return (
    <div className={cardClasses}>
      <div className={CARD_LABEL_STYLES}>{card.label}</div>
      <div className={CARD_VALUE_STYLES}>{card.value}</div>
    </div>
  )
}
