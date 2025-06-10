"use client"

import { RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SectionResetButtonProps {
  onReset: () => void
  sectionName: string
}

export function SectionResetButton({ onReset, sectionName }: SectionResetButtonProps) {
  return (
    <Button
      onClick={onReset}
      variant="ghost"
      size="sm"
      className="flex items-center gap-2 text-xs text-gray-500 hover:text-red-600 hover:bg-red-50 dark:text-gray-400 dark:hover:text-red-400 dark:hover:bg-red-950/20 transition-colors"
    >
      <RotateCcw className="h-3 w-3" />
      Reset
    </Button>
  )
}
