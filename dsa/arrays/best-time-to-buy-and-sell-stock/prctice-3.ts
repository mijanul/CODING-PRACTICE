function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);

    let profit = prices[i] - minPrice;

    maxProfit = Math.max(profit, maxProfit);
  }

  return maxProfit;
}

export {};

console.log(maxProfit([10, 1, 5, 6, 7, 1])); // 6
