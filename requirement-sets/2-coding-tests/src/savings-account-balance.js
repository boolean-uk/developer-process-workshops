function balance (openingSum, interestRate, taxFreeLimit, taxRate, numMonths) {
  let interest = 0
  let tax = 0
  let currentBalance = openingSum

  for (let month = 1; month <= numMonths; month++) {
    tax = 0
    interest = currentBalance * interestRate / 100
    if (currentBalance >= taxFreeLimit) {
      tax = (currentBalance - taxFreeLimit) * taxRate / 100
    }
    currentBalance += interest - tax
  }
  return currentBalance
}

module.exports = {
  balance
}
