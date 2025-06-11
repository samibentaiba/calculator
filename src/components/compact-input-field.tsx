"use client"

import React, { useEffect, useState } from "react"
import type { InputField as InputFieldType, DashboardInputs } from "../types/dashboard"

interface CompactInputFieldProps {
  field: InputFieldType
  value: number
  onChange: (key: keyof DashboardInputs, value: number) => void
}

export function CompactInputField({ field, value, onChange }: CompactInputFieldProps) {
  const [inputValue, setInputValue] = useState("")

  // Sync input value when external value updates
  useEffect(() => {
    if (typeof value === "number" && !Number.isNaN(value)) {
      setInputValue(value.toString())
    }
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value

    // Allow only digits with optional one comma or dot
    if (/^[0-9]*[.,]?[0-9]*$/.test(raw)) {
      setInputValue(raw)

      const sanitized = raw.replace(",", ".")
      const num = Number.parseFloat(sanitized)

      if (!Number.isNaN(num)) {
        onChange(field.id as keyof DashboardInputs, num)
      }
    }
  }

  const inputClasses =
    "w-full h-7 text-sm font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded focus:border-blue-500 dark:focus:border-blue-400 transition-colors"

  return (
    <div className="space-y-1 ">
      <label className="text-xs font-medium text-gray-700 dark:text-gray-300 capitalize block truncate">
        {field.label}
      </label>
      {field.hasPercentage ? (
        <div className="relative">
          <input
            type="text"
            inputMode="decimal"
            value={inputValue}
            onChange={handleChange}
            className={`${inputClasses} pr-5 p-1`}
            placeholder="NaN"
          />
          <span className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 text-xs">
            %
          </span>
        </div>
      ) : (
        <input
          type="text"
          inputMode="decimal"
          value={inputValue}
          onChange={handleChange}
          className={`${inputClasses} p-1`}
          placeholder="NaN"
        />
      )}
    </div>
  )
}
