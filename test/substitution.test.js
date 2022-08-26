const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("substitution", () => {
    it("should return false if the substitution alphabet is missing", () => {
        const input = "thinkful";
        //const expected = false;
        const actual = substitution(input);
        expect(actual).to.be.false;
    });
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const input = "thinkful";
        const actual = substitution(input, "short");
        expect(actual).to.be.false;
    });
    it("should return false if the substitution alphabet does not contain unique characters", () => {
        const input = "thinkful";
        const actual = substitution(input, "abcabcabcabcbcbabcbaabcbac");
        expect(actual).to.be.false;
    });
});
describe("encoding a message", () => {
    it("should encode a message by using the given substitution alphabet", () => {
        const input = "thinkful";
        const subAlph = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "jrufscpw";
        const actual = substitution(input, subAlph);
        expect(actual).to.equal(expected);
    });
    it("should work with any kind of key with unique characters", () => {
        const input = "message";
        const subAlph = "$wae&zrdxtfcygvuhbijnokmpl"
        const expected = "y&ii$r&"
        const actual = substitution(input, subAlph);
        expect(actual).to.equal(expected);
    });
    it("should preserve spaces", () => {
        const input = "you are an excellent spy";
        const subAlph = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution(input, subAlph);
        expect(actual).to.equal(expected);
    });
});
describe("decoding a message", () => {
    it("should decode a message by using the given substitution alphabet", () => {
        const input = "jrufscpw";
        const subAlph = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "thinkful";
        const actual = substitution(input, subAlph, false);
        expect(actual).to.equal(expected);
    });
    it("should work with any kind of key with unique characters", () => {
        const input = "y&ii$r&";
        const subAlph = "$wae&zrdxtfcygvuhbijnokmpl";
        const expected = "message";
        const actual = substitution(input, subAlph, false);
        expect(actual).to.equal(expected);
    });
    it("should preserve spaces", () => {
        const input = "elp xhm xf mbymwwmfj dne";
        const subAlph = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "you are an excellent spy";
        const actual = substitution(input, subAlph, false);
        expect(actual).to.equal(expected);
    });
});
