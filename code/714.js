/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
// 卖出价格-买入价格>fee的时候，应该执行交易，
// 如果不执行交易，而且，当天价格比买入价格低，我们可以更新买入或者卖出价格
// 重点在于 如果今天价格更好的更新操作
var maxProfit = function (prices, fee) {
    let day=0;
    let profit = 0;
    let buy = Infinity;
    let sell = -Infinity;
    while(day<prices.length)
    {
        let today=prices[day];
        if(day==prices.length-1&& buy!=Infinity)
        {
            sell=Math.max(sell,today);
            profit+=Math.max(0,sell-buy-fee);
            //最后一个，只要盈利，都卖了。
        }
        else if(sell-today>=fee &&buy!=Infinity)
        {
            profit+=Math.max(0,sell-buy-fee);
            buy=today;
            sell=-Infinity;
        }
        else if(today<buy)
        {
            buy=today;
        }
        else {
            sell=Math.max(sell,today);
        }
        day++;
    }
    return profit;
}
console.log(maxProfit([1, 3, 2, 8, 4, 9],2));