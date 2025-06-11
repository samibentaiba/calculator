"use client";

import type {
  BusinessSection as BusinessSectionType,
  DashboardInputs,
} from "../types/dashboard";
import { CompactMetricCard } from "./compact-metric-card";
import { Calculator, Phone, Truck, RotateCcw } from "lucide-react";

interface CompactBusinessSectionProps {
  section: BusinessSectionType;
  inputs?: DashboardInputs;
  onChange?: (key: keyof DashboardInputs, value: number) => void;
  onReset?: () => void;
}

const SECTION_ICONS = {
  calculator: Calculator,
  phone: Phone,
  truck: Truck,
} as const;

export function CompactBusinessSection({
  section,
  inputs,
  onChange,
  onReset,
}: CompactBusinessSectionProps) {
  const IconComponent = SECTION_ICONS[section.icon];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-gray-200 dark:border-gray-700 h-full overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-2 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded flex items-center justify-center">
            <IconComponent className="w-3 h-3 text-white" />
          </div>
          <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">
            {section.title}
          </h3>
        </div>
        {onReset && (
          <button
            onClick={onReset}
            className="text-xs text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors p-1"
            title={`Reset ${section.title}`}
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="grid grid-cols-3 gap-2 flex-1 overflow-auto">
        {section.columns.map((column, columnIndex) => (
          <div key={columnIndex} className="space-y-1">
            {column.title && (
              <h4 className="text-xs font-medium text-gray-600 dark:text-gray-400 capitalize truncate">
                {column.title}
              </h4>
            )}
            <div className="space-y-2">
              {column.cards.some((card) => card.size === "half") ? (
                <div className="space-y-2">
                  {/* Half-size cards */}
                  <div className="grid grid-cols-2 gap-2">
                    {column.cards
                      .filter((card) => card.size === "half")
                      .map((card, cardIndex) => (
                        <CompactMetricCard
                          key={cardIndex}
                          card={card}
                          value={
                            card.inputKey && inputs
                              ? inputs[card.inputKey]
                              : undefined
                          }
                          onChange={onChange}
                        />
                      ))}
                  </div>
                  {/* Full-size cards */}
                  {column.cards
                    .filter((card) => card.size !== "half")
                    .map((card, cardIndex) => (
                      <CompactMetricCard
                        key={cardIndex}
                        card={card}
                        value={
                          card.inputKey && inputs
                            ? inputs[card.inputKey]
                            : undefined
                        }
                        onChange={onChange}
                      />
                    ))}
                </div>
              ) : (
                column.cards.map((card, cardIndex) => (
                  <CompactMetricCard
                    key={cardIndex}
                    card={card}
                    value={
                      card.inputKey && inputs
                        ? inputs[card.inputKey]
                        : undefined
                    }
                    onChange={onChange}
                  />
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
