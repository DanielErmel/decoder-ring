const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar()", () => {
    it("is a function", () => {
        expect(caesar).to.be.a("function");
    });
    it("should return false if the shift amount is 0", () => {
        const input = "thinkful";
        const actual = caesar(input);
        expect(actual).to.be.false
    });
    it("should return false if the shift amount is above 25", () => {
        const input = "thinkful";
        const actual = caesar(input, 99);
        expect(actual).to.be.false
    });
    it("should return false if the shift amount is less than -25", () => {
        const input = "thinkful";
        const actual = caesar(input, -26);
        expect(actual).to.be.false
    });
});
describe("encoding a message", () => {
    it("should encode a message by shifting the letters", () => {
        const input = "thinkful";
        const expected = "wklqnixo";
        const actual = caesar(input, 3);
        expect(actual).to.equal(expected);
    });
    it("should leave spaces and other symbols as is", () => {
        const input = "This is a secret message!";
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar(input, 8);
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const input = "This Is A Secret Message!";
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar(input, 8);
        expect(actual).to.equal(expected); 
    });
    it("should appropriately handle letters at the end of the alphabet", () => {
        const input = "zebra magazine";
        const expected = "cheud pdjdclqh";
        const actual = caesar(input, 3);
        expect(actual).to.equal(expected);
    });
    it("should allow for a negative shift that will shift to the left", () => {
        const input = "thinkful";
        const expected = "qefkhcri";
        const actual = caesar(input, -3);
        expect(actual).to.equal(expected); 
    });
});
describe("decoding a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
        const input = "wklqnixo";
        const expected = "thinkful";
        const actual = caesar(input, 3, false)
        expect(actual).to.equal(expected); 
    });
    it("should leave spaces and other symbols as is", () => {
        const input = "BPQA qa I amkzmb umaaiom!";
        const expected = "this is a secret message!";
        const actual = caesar(input, 8, false)
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const input = "BPQA qa I amkzmb umaaiom!";
        const expected = "this is a secret message!";
        const actual = caesar(input, 8, false)
        expect(actual).to.equal(expected);
    });
    it("should appropriately handle letters at the end of the alphabet", () => {
        const input = "cheud pdjdclqh";
        const expected = "zebra magazine";
        const actual = caesar(input, 3, false);
        expect(actual).to.equal(expected);
    });
    it("should allow for a negative shift that will shift to the left", () => {
        const input = "qefkhcri";
        const expected = "thinkful";
        const actual = caesar(input, -3, false)
        expect(actual).to.equal(expected);
    });
});