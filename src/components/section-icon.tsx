
import { Calculator, Phone, Truck } from "lucide-react"
import { ICON_STYLES } from "../constants/styles"

interface SectionIconProps {
  icon: "calculator" | "phone" | "truck"
}

export function SectionIcon({ icon }: SectionIconProps) {
  const IconComponent = {
    calculator: Calculator,
    phone: Phone,
    truck: Truck,
  }[icon]

  return (
    <div className={ICON_STYLES}>
      <IconComponent className="w-6 h-6 text-white" />
    </div>
  )
}
