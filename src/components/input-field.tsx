"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { InputField as InputFieldType, DashboardInputs } from "../types/dashboard"

interface InputFieldProps {
  field: InputFieldType
  value: number
  onChange: (key: keyof DashboardInputs, value: number) => void
}

export function InputField({ field, value, onChange }: InputFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numValue = Number.parseFloat(e.target.value) || 0
    onChange(field.id as keyof DashboardInputs, numValue)
  }

  // Ensure value is always a number (default to 0)
  const safeValue = typeof value === "number" ? value : 0

  return (
    <div className="space-y-2">
      <Label className="text-sm text-gray-600">{field.label}</Label>
      {field.hasPercentage ? (
        <div className="relative">
          <Input
            type="number"
            value={safeValue}
            onChange={handleChange}
            className="h-12 pr-8"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
        </div>
      ) : (
        <Input
          type="number"
          value={safeValue}
          onChange={handleChange}
          className="h-12"
        />
      )}
    </div>
  )
}
