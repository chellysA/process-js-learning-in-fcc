const rot13 = (str) => {
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let result = "";
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      result += " ";
    }
    if (str[i].match(/\W/g)) {
      result += str[i];
    }
    for (let j = 0; j < alphabet.length; j++) {
      if (str[i] == alphabet[j]) {
        counter = alphabet.indexOf(alphabet[j]);
        if (alphabet.length - counter <= 13) {
          counter = alphabet.length - 1 - counter;
          result += alphabet[12 - counter];
        } else if (alphabet.length - counter >= 13) {
          counter = alphabet.indexOf(alphabet[j]);
          result += alphabet[counter + 13];
        }
      }
    }
  }
  if (result.match(/\s+/)) {
    result = result.replace(/(\s+)/g, " ");
  }
  return result;
};
console.log(rot13("SERR PBQR PNZC!"));
