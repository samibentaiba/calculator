"use client"

import { Monitor, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { UIMode } from "../hooks/use-ui-mode"

interface UIModeToggleProps {
  uiMode: UIMode
  onModeChange: (mode: UIMode) => void
}

export function UIModeToggle({ uiMode, onModeChange }: UIModeToggleProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          {uiMode === "productivity" ? <Zap className="h-4 w-4" /> : <Monitor className="h-4 w-4" />}
          <span className="hidden sm:inline">{uiMode === "productivity" ? "Productivity" : "Guest Mode"}</span>
          <span className="sm:hidden">{uiMode === "productivity" ? "Pro" : "Guest"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onModeChange("guest")} className="cursor-pointer">
          <Monitor className="mr-2 h-4 w-4" />
          <div>
            <div className="font-medium">Guest Mode</div>
            <div className="text-xs text-gray-500">Full featured dashboard</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onModeChange("productivity")} className="cursor-pointer">
          <Zap className="mr-2 h-4 w-4" />
          <div>
            <div className="font-medium">Productivity Mode</div>
            <div className="text-xs text-gray-500">Compact, no-scroll layout</div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
