const balance = (openingSum, interestRate, taxFreeLimit, taxRate, numMonths) => {
  let total = openingSum

  for (let i=1; i<=numMonths; i++) {
    // calculate interest
    const interest = total*interestRate/100
    // calculate tax
    const tax = calculateTax(total, taxRate, taxFreeLimit)
    total += (interest - tax)
  }

  return total
}

const calculateTax = (amount, taxRate, taxFreeLimit) => {
  if (amount <= taxFreeLimit) return 0
  const taxableAmount = amount - taxFreeLimit
  return taxableAmount*taxRate/100
}

module.exports = balance
