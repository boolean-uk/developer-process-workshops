const {
  balance,
  calculateInterest,
  calculateTax,
} = require("../src/question-2");

describe("calculateInterest()", () => {
  it("returns 1", () => {
    expect(calculateInterest(100, 1)).toEqual(1);
  });
});

describe("calculateTax()", () => {
  describe("the sum is below the tax free treshold", () => {
    it("returns 0", () => {
      expect(calculateTax(100, 150, 3)).toEqual(0);
    });
  });

  describe("the sum is over the tax free treshold", () => {
    it("returns 5", () => {
      expect(calculateTax(100, 50, 10)).toEqual(5);
    });
  });
});

describe("balance()", () => {
  it("must be approximately 10201", () => {
    expect(balance(10000, 1, 20000, 1, 2)).toEqual(10201);
  });

  it("must be approximately 25905", () => {
    expect(balance(25000, 2, 20000, 1, 2)).toEqual(25904.5);
  });
  it("must be approximately 20598", () => {
    expect(balance(19800, 2, 20000, 1, 2)).toEqual(20597.96);
  });
});
