const Time = require("../src/question-4");

describe("Time", () => {
  describe("normalizeTime()", () => {
    it("returns [2, 40, 0]", () => {
      expect(
        Time.normalizeTime({ hours: 1, minutes: 100, seconds: 0 })
      ).toEqual([2, 40, 0]);
    });
  });

  describe("timeString()", () => {
    it("returns a string in the format hh:mm:ss", () => {
      const time = new Time(1, 30, 20);

      expect(time.timeString()).toEqual("01:30:20");
    });
  });

  describe("scale()", () => {
    it("increases time correctly given a number of seconds", () => {
      const time = new Time(1, 30, 20);
      time.scale(400);

      expect(time.timeString()).toEqual("01:37:00");
    });
  });
});
