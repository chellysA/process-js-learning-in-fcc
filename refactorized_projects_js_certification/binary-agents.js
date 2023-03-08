const binaryAgent = (str) => {
  str = str.split(" ");
  let potencia = [128, 64, 32, 16, 8, 4, 2, 1];
  let comp = [];
  let string = "";
  for (let j = 0; j < str.length; j++) {
    comp = str[j].split("");
    let charCodeActual = 0;
    for (let i = 0; i < comp.length; i++) {
      if (comp[i] == 1) {
        charCodeActual += potencia[i];
      }
    }
    string += String.fromCharCode(charCodeActual);
  }
  return string;
};

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);
