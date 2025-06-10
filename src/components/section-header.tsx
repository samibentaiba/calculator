interface SectionHeaderProps {
  title: string
  description?: string
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
      {description && <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>}
    </div>
  )
}
