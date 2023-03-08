const getlength = (number) => {
  return number.toString().length;
};
const convertToRoman = (num) => {
  num = num.toString();
  let result = "";
  let {
    one,
    four,
    five,
    nine,
    ten,
    fourth,
    fifty,
    ninety,
    hundred,
    fourH,
    fiveH,
    nineH,
    million,
  } = {
    one: "I",
    four: "IV",
    five: "V",
    nine: "IX",
    ten: "X",
    fourth: "XL",
    fifty: "L",
    ninety: "XC",
    hundred: "C",
    fourH: "CD",
    fiveH: "D",
    nineH: "CM",
    million: "M",
  };

  if (getlength(num) == 1) {
    if (num <= 3) {
      result += one.repeat(num[0]);
    }
    if (num == 4) {
      result += four;
    }
    if (num == 5) {
      result += five;
    }
    if ((num > 5) & (num < 9)) {
      result += five;
      result += one.repeat(num - 5);
    }
    if (num == 9) {
      result += nine;
    }
    return result;
  }
  if (getlength(num) == 2) {
    for (let i = 0; i <= num.length; i++) {
      if (num[0] <= 3) {
        result += ten.repeat(num[0]);
      }
      if (num[0] == 4) {
        result += fourth;
      }
      if (num[0] >= 5 && num[0] < 9) {
        result += fifty;
        result += ten.repeat(num[0] - 5);
      }
      if (num[0] == 9) {
        result += ninety;
      }
      if (num[1] <= 3) {
        result += one.repeat(num[1]);
      }
      if (num[1] == 4) {
        result += four;
      }
      if (num[1] == 5) {
        result += five;
      }
      if ((num[1] > 5) & (num[1] < 9)) {
        result += five;
        result += one.repeat(num[1] - 5);
      }
      if (num[1] == 9) {
        result += nine;
      }
      return result;
    }
  }
  if (getlength(num) == 3) {
    for (let j = 0; j < num.length; j++) {
      if (num[0] <= 3) {
        result += hundred.repeat(num[0]);
      }
      if (num[0] == 4) {
        result += fourH;
      }
      if (num[0] >= 5 && num[0] < 9) {
        result += fiveH;
        result += hundred.repeat(num[0] - 5);
      }
      if (num[0] == 9) {
        result += nineH;
      }
      if (num[1] <= 3) {
        result += ten.repeat(num[1]);
      }
      if (num[1] == 4) {
        result += fourth;
      }
      if (num[1] == 5) {
        result += fifty;
      }
      if ((num[1] > 5) & (num[1] < 9)) {
        result += fifty;
        result += ten.repeat(num[1] - 5);
      }
      if (num[1] == 9) {
        result += ninety;
      }
      if (num[2] <= 3) {
        result += one.repeat(num[2]);
      }
      if (num[2] == 4) {
        result += four;
      }
      if (num[2] == 5) {
        result += five;
      }
      if ((num[2] > 5) & (num[2] < 9)) {
        result += five;
        result += one.repeat(num[2] - 5);
      }
      if (num[2] == 9) {
        result += nine;
      }
      return result;
    }
  }
  if (getlength(num) == 4) {
    for (let k = 0; k < num.length; k++) {
      if (num[0] <= 3) {
        result += million.repeat(num[0]);
      }
      if (num[0] == 4) {
        result += fourH;
      }
      if (num[1] <= 3) {
        result += hundred.repeat(num[1]);
      }
      if (num[1] == 4) {
        result += fourH;
      }
      if (num[1] == 5) {
        result += fiveH;
      }
      if (num[1] > 5 && num[1] < 9) {
        result += fiveH;
        result += hundred.repeat(num[1] - 5);
      }
      if (num[1] == 9) {
        result += nineH;
      }

      if (num[2] <= 3) {
        result += ten.repeat(num[2]);
      }
      if (num[2] == 4) {
        result += fourth;
      }
      if (num[2] >= 5 && num[2] < 9) {
        result += fifty;
        result += ten.repeat(num[2] - 5);
      }
      if (num[2] == 9) {
        result += ninety;
      }
      if (num[3] <= 3) {
        result += one.repeat(num[3]);
      }
      if (num[3] == 4) {
        result += four;
      }
      if (num[3] == 5) {
        result += five;
      }
      if ((num[3] > 5) & (num[3] < 9)) {
        result += five;
        result += one.repeat(num[3] - 5);
      }
      if (num[3] == 9) {
        result += nine;
      }
      return result;
    }
  }
};

console.log(convertToRoman(3888));
