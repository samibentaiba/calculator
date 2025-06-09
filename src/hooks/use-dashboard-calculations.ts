"use client"

import { useState, useMemo } from "react"
import type { DashboardInputs } from "../types/dashboard"
import { calculateDashboardValues } from "../utils/calculations"

export function useDashboardCalculations() {
  const [inputs, setInputs] = useState<DashboardInputs>({
    sellingPrice: 60,
    leads: 350,
    confirmationRate: 50,
    deliveryRate: 50,
    upsellRate: 0,
    productCost: 8.75,
    adsCost: 5,
    extraExpenses: 40,
    deliveryFee: 5.99,
    returnFee: 2.99,
    confirmationNewFee: 0,
    confirmationFee: 0,
    upsellFee: 0,
    upsellProductCost: 0,
    upsellPrice: 0,
    vatFee: 0,
    codFee: 0,
  })

  const calculatedValues = useMemo(() => {
    return calculateDashboardValues(inputs)
  }, [inputs])

  const updateInput = (key: keyof DashboardInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [key]: value }))
  }

  return {
    inputs,
    calculatedValues,
    updateInput,
  }
}
