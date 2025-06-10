"use client"

import { RotateCcw, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

interface DashboardHeaderProps {
  onReset: () => void
}

export function DashboardHeader({ onReset }: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8 p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
          <BarChart3 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Business Dashboard</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Track your business metrics and calculate ROI in real-time
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button
          onClick={onReset}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-950/20 dark:hover:border-red-800 dark:hover:text-red-400 transition-colors"
        >
          <RotateCcw className="h-4 w-4" />
          Reset All
        </Button>
        <ThemeToggle />
      </div>
    </div>
  )
}
