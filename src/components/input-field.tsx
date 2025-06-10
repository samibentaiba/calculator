"use client"

import React, { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { InputField as InputFieldType, DashboardInputs } from "../types/dashboard"

interface InputFieldProps {
  field: InputFieldType
  value: number
  onChange: (key: keyof DashboardInputs, value: number) => void
}

export function InputField({ field, value, onChange }: InputFieldProps) {
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

  return (
    <div className="space-y-2">
      <Label className="text-sm text-gray-600">{field.label}</Label>
      {field.hasPercentage ? (
        <div className="relative">
          <Input
            type="text"
            inputMode="decimal"
            value={inputValue}
            onChange={handleChange}
            className="h-12 pr-8"
            placeholder="NaN"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
        </div>
      ) : (
        <Input
          type="text"
          inputMode="decimal"
          value={inputValue}
          onChange={handleChange}
          className="h-12"
          placeholder="NaN"
        />
      )}
    </div>
  )
}
