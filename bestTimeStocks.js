/*
? Say you have an array for which the ith element is the price of a given stock on day i.
? If you were only permitted to complete at most one transaction (ie buy one and sell one share of the stock), 
? design an algorithm to find the maximum profit.

* Note that you cannot sell a stock before you buy  it.
*/

// each index === 1 day
// the value of a given index === value of the stock on that day

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // console.log('everything is fine')
  let profit = 0
  let val = prices[0]
  console.log(`initial val => ${val}`)

  prices.forEach((_, index) => {
    console.log(`price[index] ==> ${prices[index]}`)
    // checks if current value > previous value
    if (prices[index] > prices[index - 1]) {
      // if true, add profit to an array and move onto the next index
      profit = Math.max(profit, prices[index] - val)
      console.log(`profit ==> ${profit}`)
      console.log(`------------move onto next index---------------`)
    } else {
      // if false, update val - Math.min() will update val to the smallest value
      val = Math.min(val, prices[index])
      console.log(`updated val => ${val}`)
      console.log(`prices[index] ==> ${prices[index]}`)
      console.log(`------------move onto next index---------------`)
    }
  })
  // Math.max() will return the largest value
  return profit
}

const input1 = [7, 1, 5, 3, 6, 4]
const input2 = [7, 6, 4, 3, 1]

console.log(`function result1 ==> ${maxProfit(input1)}`)
console.log(`function result2 ==> ${maxProfit(input2)}`)
// console.log(maxProfit(input2))
