import type { DashboardInputs, CalculatedValues } from "../types/dashboard";

export function calculateDashboardValues(
  inputs: DashboardInputs
): CalculatedValues {
  // Figure 2: confirmation leads = leads × confirmation rate
  const confirmationLeads = inputs.leads * inputs.confirmationRate;

  // Figure 1: Product Quantity = confirmation leads × delivery rate
  const productQuantity = confirmationLeads * inputs.deliveryRate;

  // Figure 3: product total = product quantity × product cost
  const productTotal = productQuantity * inputs.productCost;

  // Figure 4: ads total = leads × ads cost
  const adsTotal = inputs.leads * inputs.adsCost;

  // Figure 5: delivery total = product quantity × delivery fee
  const deliveryTotal = productQuantity * inputs.deliveryFee;

  // Figure 6: revenu (ras el mal) = product quantity × selling price
  const revenue = productQuantity * inputs.sellingPrice;

  // Figure 7: ads costs per piece sold = ads total / product quantity
  const adsCostPerPieceSold =
    productQuantity > 0 ? adsTotal / productQuantity : 0;

  // Figure 8: invested capital = product total + ads total + extra expenses
  const investedCapital = productTotal + adsTotal + inputs.extraExpenses;

  // Figure 11: return leads = confirmation leads - product quantity
  const returnLeads = confirmationLeads - productQuantity;

  // Figure 12: return total = return leads × return return
  const returnTotal = returnLeads * inputs.returnFee;

  // Figure 9: revenue = invested capital - delivery total - return total
  const netProfit = revenue - investedCapital - deliveryTotal - returnTotal;
  // Figure 10: payment = net profile + invested capital
  const payment = netProfit + investedCapital;

  // Figure 13: R.O.I = net profile / invested capital × 100
  const roi = investedCapital > 0 ? (netProfit / investedCapital) * 100 : 0;

    // Additional calculations for call center
  const confirmationTotal =
    (inputs.confirmationNewFee + inputs.confirmationFee) * confirmationLeads;
  const upsellTotal = inputs.upsellFee * 0; // No upsell leads currently
  const feesTotal = inputs.vatFee + inputs.codFee;

  return {
    confirmationLeads,
    productQuantity,
    productTotal,
    adsTotal,
    deliveryTotal,
    revenue,
    adsCostPerPieceSold,
    investedCapital,
    returnLeads,
    returnTotal,
    netProfit,
    payment,
    roi,
    confirmationTotal,
    upsellTotal,
    feesTotal,
  };
}

export function formatCurrency(value: number): string {
  return `${value.toFixed(2)} $`;
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(2)} %`;
}

export function formatNumber(value: number): string {
  return value.toFixed(2);
}
