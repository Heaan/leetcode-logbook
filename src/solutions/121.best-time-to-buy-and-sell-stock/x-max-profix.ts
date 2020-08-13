const xMaxProfit = (prices: number[]): number => {
  const len = prices.length;
  if (!len) return 0;

  let minPrice: number = prices[0];
  let maxIncome: number = 0;

  for (let i = 1; i < len; i++) {
    const income = prices[i] - minPrice;
    if (income > 0) maxIncome = income > maxIncome ? income : maxIncome;
    minPrice = prices[i] < minPrice ? prices[i] : minPrice;
  }

  return maxIncome;
};

export default xMaxProfit;
