import add from "../src/add.js";
import chai from "chai";

describe("add.js", () => {
  it("adds positive integers", () => {
    chai.expect(add(9.5, 100)).to.equal(109.5);
  });
});
