
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { InputField as InputFieldType } from "../types/dashboard"

interface InputFieldProps {
  field: InputFieldType
}

export function InputField({ field }: InputFieldProps) {
  return (
    <div className="space-y-2">
      <Label className="text-sm text-gray-600">{field.label}</Label>
      {field.hasPercentage ? (
        <div className="relative">
          <Input defaultValue={field.value} className="h-12 pr-8" />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
        </div>
      ) : (
        <Input defaultValue={field.value} className="h-12" />
      )}
    </div>
  )
}
