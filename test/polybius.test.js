const expect = require("chai").expect;
const {polybius} = require("../src/polybius");

describe("polybius", () => {
    it("is a function", () => {
        expect(polybius).to.be.a("function");
    });
});
describe("encode", () => {
    it("should encode a message by translating each letter to number pairs", () => {
        const input = "thinkful";
        const expected = "4432423352125413";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it("should translate both 'i' and 'j' to 42", () => {
        const input = "jill";
        const expected = "42421313";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
        const input = "hello world";
        const expected = "3251131343 2543241341";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
});
describe("decode", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
        const input = "3251131343";
        const expected = "hello";
        const actual = polybius(input, false);
        expect(actual).to.equal(expected);
    });
    it("should translate 42 to both 'i' and 'j'", () => {
        const input = "4432423352125413";
        const expected = "th(i/j)nkful";
        const actual = polybius(input, false);
        expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
        const input = "3251131343 2543241341";
        const expected = "hello world";
        const actual = polybius(input, false);
        expect(actual).to.equal(expected);
    });
    it("should return false if the length of all numbers is odd", () => {
        const input = "32244";
        //const expected = false;
        const actual = polybius(input, false);
        expect(actual).to.be.false;
    });
});
