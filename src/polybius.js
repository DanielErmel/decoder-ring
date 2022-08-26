const polybiusModule = (function () {
  function polybius(input, encode = true) {
    //converts all letters into a matrix, including space
    let grid = [
    ['a', 'b', 'c', 'd', 'e'],
    ['f', 'g', 'h', "(i/j)", 'k'],
    ['l', 'm', 'n', 'o', 'p'],
    ['q', 'r', 's', 't', 'u'],
    ['v', 'w', 'x', 'y', 'z', " "]
  ];

  if (encode){
    // split the input into individual characters
    let inputArray = input.split("");
    let formedInputArray = inputArray.map((string) => {
      let lowerCase = string.toLowerCase();
      //converts i's and j's into one entity (i/j)
      if (lowerCase === "i" || lowerCase === "j"){
        return "(i/j)";
      }
      return lowerCase;
    });

    // locate coordinates to create polybius pairs
    let xCoordinate = [];
    let yCoordinate = formedInputArray.map((char) => {
      for (let i=0; i<grid.length; i++){
        const row = grid[i];
        if (row.find((letter) => letter === char)) {
          // add x coordinate, 1 compensates for index starting at 0 vs 1.
          xCoordinate.push(i+1);
          // add y coordinate, 1 compensates for index starting at 0 vs 1.
        return row.indexOf(char) + 1;
        }
      }
    });

    // add y and x coordinates in that order and adds them to new message
    result = xCoordinate.reduce((phrase, xNum, index) => {
      let pair = `${yCoordinate[index]}${xNum}`;
      if (pair === "65"){
        pair = " ";
      }
      phrase.push(pair);
      return phrase;
    }, []);
  }

// convert to decoder
  if (!encode) {
    // change space back into a two digit number so it too has an even amount of characters representing it
    let spaceTwice = input.replace(" ", 65);
    // check for even vs odd
    if (spaceTwice.length % 2 !== 0){
      return false;
    }
    // global search
    let coordinate = spaceTwice.match(/..?/g);
    // find matching letter location and add it back to phrase
    result = coordinate.map((yx) => {
      let row = yx.split("")[1] - 1;
      let column = yx.split("")[0] - 1;
      return grid[row][column];
    });

  }
  return result.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
