const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    // check for alphabet length
    if (!alphabet || alphabet.length !== 26) {
      return false;
    };
    // variables
    const alpha = "abcdefghijklmnopqrstuvwxyz".split(""); 
    const subAlphaArray = alphabet.toLowerCase().split("");
    const inputArray = input.toLowerCase().split("");
   
    // check for unique characters in alphabet, and if the length is correct
  const uniqueCharacters = subAlphaArray.filter((character, index, self) => self.indexOf(character) === index);
    if (uniqueCharacters.length !== alphabet.length) {
      return false;
    }
  
    // process for if encode is true
  if(encode) {
    let result = [];
    // code each character into the new alphabet
    const encode = (character) => {
      const itemIndex = alpha.indexOf(character);
      const encodedCharacter = subAlphaArray[itemIndex];
      result.push(encodedCharacter);
    };
    // account for spaces
    inputArray.forEach((character) => {
      character === " " ? result.push(" ") : encode(character)
    });
    return result.join("");
}
  // process for if encode is false
  if(!encode) {
    let result = [];
    //decode each character into the normal alphabet
    const decode = (character) => {
      const itemIndex = subAlphaArray.indexOf(character);
      const decodedCharacter = alpha[itemIndex];
      result.push(decodedCharacter);
    };
    // account for spaces
    inputArray.forEach((character) => {
      character === " " ? result.push(" ") : decode(character)
    });
    return result.join("");
  }
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
