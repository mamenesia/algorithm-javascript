function maxStockProfit(priceArr) {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;

  let changeBuyPrice = true;

  for(var i = 0; i < priceArr.length; i++) {
    if(changeBuyPrice) buyPrice = priceArr[i];
    sellPrice = priceArr[i+1];

    if(sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      let tempProfit = sellPrice - buyPrice;
      if(tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }

  return maxProfit;
}

maxStockProfit([32, 46, 26, 38, 40, 48, 42]);