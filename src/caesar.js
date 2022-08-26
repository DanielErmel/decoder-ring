const caesarModule = (function () {
  // converts all characters to lowercase, then all lowercase letters to unicode
  function uniCode(array) {
    return array.map((letter) => {
      const code = letter.toLowerCase().charCodeAt();
      return code >= 97 && code <= 122 ? code : letter;
    });
  }

  function caesar (input, shift, encode = true) {
    // checks for shift to fall within parameters
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    } 
    // sets decoder to work backwards from encoder
    if (encode === false){
      shift *= -1;
    }
    // splits input into individual characters and puts them into a new array
    let inputArray = input.split("");
    let inputNum = uniCode(inputArray);
    // shift lowercase letters only
    let numberShift = inputNum.map((number) => {
      return typeof number === "number" ? number + shift : number;
    });
    // accounts for numbers shifting past 'a' or 'z'
    let crossOver = numberShift.map((number) => {
      if (typeof number === "number") {
        if (number > 122) {
          return number - 26;
        }
        if (number < 97) {
          return number + 26;
        }
      }
      return number;
    });
    // brings shifted characters back together
    let result = crossOver.map((number) => {
      return typeof number === "number" ? String.fromCharCode(number) : number;
    });
    return result.join("");
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
