const reverseString = require("../src/question-3");

describe("reverseString()", () => {
  describe("there is nothing to reverse", () => {
    it("returns the same if the passed string is empty or has one character", () => {
      expect(reverseString("")).toEqual("");
      expect(reverseString("d")).toEqual("d");
    });
  });

  describe("the string is longer than 1 character", () => {
    it("returns edcba", () => {
      expect(reverseString("abcde")).toEqual("edcba");
    });

    it("returns tsct", () => {
      expect(reverseString("tcst")).toEqual("tsct");
    });

    it("returns racecar", () => {
      expect(reverseString("racecar")).toEqual("racecar");
    });
  });
});
