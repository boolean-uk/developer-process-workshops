// function to calculate interest
// function to calculate tax - tax is paid only on money over the tax free limit
// iterate for num of months

const balance = (
  openingSum,
  interestRate,
  taxFreeLimit,
  taxRate,
  numMonths
) => {
  let calculatedSum = openingSum;
  for (let i = 0; i < numMonths; i++) {
    const interest = calculateInterest(calculatedSum, interestRate);
    const tax = calculateTax(calculatedSum, taxFreeLimit, taxRate);

    calculatedSum += interest;
    calculatedSum -= tax;
  }
  return calculatedSum;
};

const calculateInterest = (sum, interestRate) => sum * (interestRate / 100);

const calculateTax = (sum, taxFreeLimit, taxRate) => {
  const taxableSum = sum - taxFreeLimit;

  if (taxableSum <= 0) return 0;

  return taxableSum * (taxRate / 100);
};

module.exports = {
  balance,
  calculateInterest,
  calculateTax,
};
