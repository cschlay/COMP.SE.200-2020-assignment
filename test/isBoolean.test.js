import isBoolean from "../src/isBoolean.js";
import chai from "chai";

describe("isBoolean.js", () => {
    it("negative test on isBoolean", () => {
      chai.expect(isBoolean(null)).to.equal(false);
    });
  });
  describe("isBoolean.js", () => {
    it("positive test on isBoolean", () => {
      chai.expect(isBoolean(true)).to.equal(true);
    });
  });