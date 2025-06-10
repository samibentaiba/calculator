"use client";

import React, { useState, useEffect } from "react";
import type {
  MetricCard as MetricCardType,
  DashboardInputs,
} from "../types/dashboard";
import {
  CARD_STYLES,
  CARD_BASE_STYLES,
  CARD_LABEL_STYLES,
  CARD_VALUE_STYLES,
} from "../constants/styles";

interface EditableMetricCardProps {
  card: MetricCardType;
  value?: number;
  onChange?: (key: keyof DashboardInputs, value: number) => void;
}

function isFormattedCurrency(value: string) {
  return (
    typeof value === "string" && /^\d+([.,]\d{1,2})? \$?$/.test(value.trim())
  );
}

export function EditableMetricCard({
  card,
  value,
  onChange,
}: EditableMetricCardProps) {
  const cardClasses = `${CARD_BASE_STYLES} ${CARD_STYLES[card.type]}`;
  const [inputValue, setInputValue] = useState("");

  // sync inputValue when value prop changes
  useEffect(() => {
    if (typeof value === "number" && !Number.isNaN(value)) {
      setInputValue(value.toString());
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value;

    // Allow only digits and one decimal point
    if (/^[0-9]*[.,]?[0-9]*$/.test(raw)) {
      // Replace comma with dot
      const sanitized = raw.replace(",", ".");
      setInputValue(raw);

      const parsed = parseFloat(sanitized);

      if (!Number.isNaN(parsed) && card.isEditable && card.inputKey && onChange) {
        onChange(card.inputKey, parsed);
      }
    }
  };

  if (card.isEditable && card.inputKey && value !== undefined) {
    return (
      <div className={cardClasses}>
        <div className={CARD_LABEL_STYLES} aria-hidden="true">{card.label}</div>
        <input
          type="text"
          inputMode="decimal"
          value={inputValue}
          onChange={handleChange}
          className="bg-transparent text-center text-xl font-bold text-white border-none outline-none w-full placeholder-white/70"
          placeholder="NaN"
        />
      </div>
    );
  }

  return (
    <div className={cardClasses}>
      <div className={CARD_LABEL_STYLES} aria-hidden="true">{card.label}</div>
      <div className={CARD_VALUE_STYLES}>
        {isFormattedCurrency(card.value)
          ? card.value.toString()
          : Math.floor(Number(card.value))}
      </div>
    </div>
  );
}
