"use client";

import { useState, useMemo } from "react";
import type { DashboardInputs } from "../types/dashboard";
import { calculateDashboardValues } from "../lib/calculations";

export function useDashboardCalculations() {
  const [inputs, setInputs] = useState<DashboardInputs>({
    sellingPrice: 0,
    leads: 0,
    confirmationRate: 0,
    deliveryRate: 0,
    upsellRate: 0,
    productCost: 0,
    adsCost: 0,
    extraExpenses: 0,
    deliveryFee: 0,
    returnFee: 0,
    confirmationNewFee: 0,
    confirmationFee: 0,
    upsellFee: 0,
    upsellProductCost: 0,
    upsellPrice: 0,
    vatFee: 0,
    codFee: 0,
  });

  const calculatedValues = useMemo(() => {
    return calculateDashboardValues(inputs);
  }, [inputs]);

  const updateInput = (key: keyof DashboardInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };
  const resetAllInputs = () => {
    setInputs({
      sellingPrice: 0,
      leads: 0,
      confirmationRate: 0,
      deliveryRate: 0,
      upsellRate: 0,
      productCost: 0,
      adsCost: 0,
      extraExpenses: 0,
      deliveryFee: 0,
      returnFee: 0,
      confirmationNewFee: 0,
      confirmationFee: 0,
      upsellFee: 0,
      upsellProductCost: 0,
      upsellPrice: 0,
      vatFee: 0,
      codFee: 0,
    });
  };
  const resetOperationsInputs = () => {
    setInputs((prev) => ({
      ...prev,
      productCost: 0,
      adsCost: 0,
      extraExpenses: 0,
    }));
  };
  const resetCallCenterInputs = () => {
    setInputs((prev) => ({
      ...prev,
      confirmationsNewFee: 0,
      confirmationFee: 0,
      upsellFee: 0,
      upsellProductCost: 0,
      upsellPrice: 0,
    }));
  };
  const resetShippingInputs = () => {
    setInputs((prev) => ({
      ...prev,
      deliveryFee: 0,
      returnFee: 0,
      vatFee: 0,
      codFee: 0,
    }));
  };
  return {
    inputs,
    calculatedValues,
    updateInput,
    resetAllInputs,
    resetOperationsInputs,
    resetCallCenterInputs,
    resetShippingInputs,
  };
}
