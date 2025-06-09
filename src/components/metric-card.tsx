
import type { MetricCard as MetricCardType } from "../types/dashboard"
import { CARD_STYLES, CARD_BASE_STYLES, CARD_LABEL_STYLES, CARD_VALUE_STYLES } from "../constants/styles"

interface MetricCardProps {
  card: MetricCardType
}

export function MetricCard({ card }: MetricCardProps) {
  const cardClasses = `${CARD_BASE_STYLES} ${CARD_STYLES[card.type]}`

  return (
    <div className={cardClasses}>
      <div className={CARD_LABEL_STYLES}>{card.label}</div>
      <div className={CARD_VALUE_STYLES}>{card.value}</div>
    </div>
  )
}
