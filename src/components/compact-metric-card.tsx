"use client"

import React, { useEffect, useState } from "react"
import type { MetricCard as MetricCardType, DashboardInputs } from "../types/dashboard"

interface CompactMetricCardProps {
  card: MetricCardType
  value?: number
  onChange?: (key: keyof DashboardInputs, value: number) => void
  isHalf?: boolean
}

const CARD_COLORS = {
  cost: "bg-emerald-500 hover:bg-emerald-600 text-white",
  quantity: "bg-blue-600 hover:bg-blue-700 text-white",
  total: "bg-blue-600 hover:bg-blue-700 text-white",
  fee: "bg-emerald-500 hover:bg-emerald-600 text-white",
  other: "bg-emerald-500 hover:bg-emerald-600 text-white",
} as const

function isFormattedCurrency(value: string) {
  return (
    typeof value === "string" && /^\d+([.,]\d{1,2})? \$?$/.test(value.trim())
  )
}

export function CompactMetricCard({ card, value, onChange }: CompactMetricCardProps) {
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    if (typeof value === "number" && !Number.isNaN(value)) {
      setInputValue(value.toString())
    }
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value

    if (/^[0-9]*[.,]?[0-9]*$/.test(raw)) {
      const sanitized = raw.replace(",", ".")
      setInputValue(raw)

      const parsed = parseFloat(sanitized)

      if (!Number.isNaN(parsed) && card.isEditable && card.inputKey && onChange) {
        onChange(card.inputKey, parsed)
      }
    }
  }

  const cardColor = CARD_COLORS[card.type]

  if (card.isEditable && card.inputKey && value !== undefined) {
    return (
      <div
        className={`${cardColor} p-2 rounded text-center transition-colors h-14 flex flex-col justify-center`}
      >
        <div className="text-xs font-medium uppercase tracking-wide opacity-90 truncate">{card.label}</div>
        <input
          type="text"
          inputMode="decimal"
          value={inputValue}
          onChange={handleChange}
          className="bg-transparent text-center text-sm font-bold text-white border-none outline-none w-full placeholder-white/70"
          placeholder="NaN"
        />
      </div>
    )
  }

  return (
    <div
      className={`${cardColor} p-2 rounded text-center transition-colors h-14 flex flex-col justify-center`}
    >
      <div className="text-xs font-medium uppercase tracking-wide opacity-90 truncate">{card.label}</div>
      <div className="text-sm font-bold truncate">
        {isFormattedCurrency(card.value)
          ? card.value.toString()
          : Math.floor(Number(card.value))}
      </div>
    </div>
  )
}
