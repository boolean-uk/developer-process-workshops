const movePiece = require("./index");

describe("movePiece()", () => {
  it("moves to 2 2 E", () => {
    expect(movePiece("MRMLMRM")).toEqual("2 2 E");
  });

  it("moves to 3 2 N", () => {
    expect(movePiece("RMMMLMM")).toEqual("3 2 N");
  });

  it("moves to 0 4 N, does not step outside the board", () => {
    expect(movePiece("MMMMM")).toEqual("0 4 N");
  });
});
