"use client"

import { RotateCcw, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { UIModeToggle } from "./ui-mode-toggle"
import type { UIMode } from "../hooks/use-ui-mode"

interface DashboardHeaderProps {
  onReset: () => void
  uiMode: UIMode
  onModeChange: (mode: UIMode) => void
}

export function DashboardHeader({ onReset, uiMode, onModeChange }: DashboardHeaderProps) {
  const isProductivity = uiMode === "productivity"

  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 ${
        isProductivity ? "p-2 sm:p-3" : "p-4 sm:p-6"
      } bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700`}
    >
      <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
        <div
          className={`${
            isProductivity ? "w-8 h-8" : "w-10 h-10 sm:w-12 sm:h-12"
          } bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
        >
          <BarChart3 className={`${isProductivity ? "w-4 h-4" : "w-5 h-5 sm:w-6 sm:h-6"} text-white`} />
        </div>
        <div className="min-w-0 flex-1">
          <h1
            className={`${
              isProductivity ? "text-lg" : "text-xl sm:text-2xl"
            } font-bold text-gray-900 dark:text-white truncate`}
          >
            Cod Simulation
          </h1>
          {!isProductivity && (
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              Track your business metrics and calculate ROI in real-time
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        <UIModeToggle uiMode={uiMode} onModeChange={onModeChange} />
        <Button
          onClick={onReset}
          variant="outline"
          size={isProductivity ? "sm" : "sm"}
          className="flex items-center gap-2 text-xs sm:text-sm hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-950/20 dark:hover:border-red-800 dark:hover:text-red-400 transition-colors"
        >
          <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden xs:inline">Reset All</span>
          <span className="xs:hidden">Reset</span>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  )
}
