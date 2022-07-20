const longestSequence = require("../src/question-1");

describe("longestSequence()", () => {
  describe("there is only one character with the longest sequence", () => {
    it("returns an object with the character that has the longest continous sequence and the length of the sequence", () => {
      expect(longestSequence("dghhhmhmx")).toEqual({ h: 3 });
    });

    it("ignores casing", () => {
      expect(longestSequence("dhkkhhKkKt")).toEqual({ k: 3 });
    });
  });

  describe("there are multiple characters with a sequence of the same length", () => {
    it("returns the information for the letter which occurs first alphabetically", () => {
      expect(longestSequence("aBbBbaaaadddadd")).toEqual({ a: 4 });
      expect(longestSequence("ccddaa")).toEqual({ a: 2 });
    });
  });
});
