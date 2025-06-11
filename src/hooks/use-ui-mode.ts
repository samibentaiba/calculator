"use client"

import { useState } from "react"

export type UIMode = "productivity" | "guest"

export function useUIMode() {
  const [uiMode, setUIMode] = useState<UIMode>("guest")

  const toggleUIMode = () => {
    setUIMode((prev) => (prev === "productivity" ? "guest" : "productivity"))
  }

  return {
    uiMode,
    setUIMode,
    toggleUIMode,
    isProductivityMode: uiMode === "productivity",
    isGuestMode: uiMode === "guest",
  }
}
