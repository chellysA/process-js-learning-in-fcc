//////////Reverse a String
//Reverse the provided string and return the reversed string.

const reverseString = (str) => {
  str = str.split("").reverse().join("");
  return str;
};

console.log(reverseString("hello"));

//////////////////////////////////Find the Longest Word in a String/////////////////////////

const findLongestWordLength = (str) => {
  let words = str.split(" ");
  let result = 0;
  for (let i = 0; i <= words.length; i++) {
    if (words[i]?.length > result) {
      result = words[i].length;
    }
  }
  return result;
};

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

/////////////////////////////////Factorialize a Number///////////////////////////////////////
//Return the factorial of the provided integer.

const factorialize = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

console.log(factorialize(5));

////////////////////////Return Largest Numbers in Arrays//////////////////////////////////////

const largestItem = (arr) => {
  let result = arr[0];
  for (let i = 0; i <= arr?.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
};

function largestOfFour(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(largestItem(arr[i]));
  }
  return result;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

////////////////////////////////confirm the ending///////////////////////////////////////////

function confirmEnding(str, target) {
  if (str.slice(str.length - target.length) === target) {
    return true;
  }
  return false;
}

console.log(confirmEnding("Bastian", "n"));

//or

const confirmEnding = (str, target) => {
  let result;
  for (let i = -1; i >= -target.length; i--) {
    if (target[target.length + i] === str[str.length + i]) {
      result = true;
    } else {
      return false;
    }
  }
  return result;
};

console.log(confirmEnding("Bastian", "tyan"));

/////////////////////////////Repeat a String Repeat a String/////////////////////////////////

function repeatStringNumTimes(str, num) {
  let i = 1;
  let newStr = "";
  while (i <= num) {
    newStr += str;
    i += 1;
  }
  return newStr;
}

console.log(repeatStringNumTimes("abc", 3));

//or

const repeatStringNumTimes = (str, num) => {
  str = str.repeat(num);
  return str;
};

console.log(repeatStringNumTimes("abc", 3));

//////////////////////////////////////Truncate a String///////////////////////////////////////
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

const truncateString = (str, num) => {
  let result = "";
  if (num >= str.length) {
    return str;
  }
  for (let i = 0; i < num; i++) {
    result += str[i];
  }
  return `${result}...`;
};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

/////////////////////////////////////////Finders Keepers//////////////////////////////////////
//Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

const findElement = (arr, func) => {
  let num = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      return num;
    }
  }
};

console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0));

////////////////////////////////////////Boo who//////////////////////////////////////////////
//Check if a value is classified as a boolean primitive. Return true or false.
//Boolean primitives are true and false.

const booWho = (bool) => {
  if (typeof bool === "boolean") {
    return true;
  } else {
    return false;
  }
};

console.log(booWho([1, 2, 3]));

//////////////////////////////////Title Case a Sentence//////////////////////////////////////
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  let words = str.split(" ");
  let firstLetter = "";
  let restWord = "";
  let result = "";
  let finalStr = "";
  for (let i = 0; i <= words.length; i++) {
    if (typeof words[i] === "string") {
      firstLetter = words[i][0].toUpperCase();
      restWord = words[i].slice(1);
      restWord = restWord.toLowerCase();
      result += firstLetter + restWord + " ";
      finalStr = result.substr(0, result.length - 1);
    }
  }
  return finalStr;
}

console.log(titleCase("sHoRt AnD sToUt"));

//refactor
function titleCase(str) {
  let words = str.toLowerCase().split(" ");
  let firstLetter = "";
  let restWord = "";
  let result = "";
  for (let i = 0; i <= words.length; i++) {
    if (typeof words[i] === "string") {
      firstLetter = words[i][0].toUpperCase();
      restWord = words[i].slice(1);
      result += firstLetter + restWord + " ";
    }
  }
  finalStr = result.substr(0, result.length - 1);
  return finalStr;
}

console.log(titleCase("sHoRt AnD sToUt"));

//or

const titleCase = (str) => {
  str = str.toLowerCase().split(" ");
  let [...words] = str;
  let result = "";
  let firstLetter = "";
  let restWord = "";
  for (let i = 0; i <= words.length; i++) {
    if (typeof words[i] === "string") {
      firstLetter = words[i][0].toUpperCase();
      restWord = words[i].slice(1);
      result += firstLetter + restWord;
      if (i !== words.length - 1) {
        result += " ";
      }
    }
  }
  return result;
};

console.log(titleCase("sHoRt AnD sToUt"));

////////////////////////////////////Slice and Splice//////////////////////////////////////////
//You are given two arrays and an index
//Copy each element of the first array into the second array, in order.
//Begin inserting elements at index n of the second array.
//Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    newArr.splice(n, 0, arr1[i]);
    n++;
    console.log(newArr);
  }
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//or

function frankenSplice(arr1, arr2, n) {
  let slice = arr1.slice();
  let slice2 = arr2.slice();
  for (let i = 0; i < slice.length; i++) {
    slice2.splice(n, 0, slice[i]);
    n++;
  }

  return slice2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//or

const frankenSplice = (arr1, arr2, n) => {
  let newArr = [];
  if (arr2.length == 0) {
    return arr1;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (i !== n) {
      newArr.push(arr2[i]);
    } else {
      for (let j = 0; j < arr1.length; j++) {
        newArr.push(arr1[j]);
      }
      newArr.push(arr2[i]);
    }
  }
  return newArr;
};

console.log(frankenSplice([1, 2, 3, 4], [], 0));

////////////////////////////////////Falsy Bouncer/////////////////////////////////////////////
//Remove all falsy values from an array. Return a new array; do not mutate the original array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//Hint: Try converting each value to a Boolean.

const bouncer = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(bouncer([false, null, 0, NaN, undefined, "", 8]));

//////////////////////////////////////Where do I Belong//////////////////////////////////////
//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
//For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
//Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

const getIndexToIns = (arr, num) => {
  arr.push(num);
  let newArr = arr.sort((a, b) => a - b);
  for (let i = 0; i <= newArr.length; i++) {
    if (newArr[i] >= num) {
      return i;
    }
  }
};

console.log(getIndexToIns([2, 5, 10], 15));

///////////////////////////////////////Mutations/////////////////////////////////////////////
//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
  let result;
  let string1 = arr[0];
  let string2 = arr[1];
  for (let i = 0; i < string2.length; i++) {
    let re = RegExp(string2[i], "i");
    result = re.test(string1);
    if (result === false) {
      return result;
    }
  }
  return result;
}

console.log(mutation(["hello", "neo"]));

//or

const mutation = (arr) => {
  let [inicio, final] = arr;
  for (let i = 0; i < final.length; i++) {
    let re = RegExp(final[i], "i");
    if (re.test(inicio) === false) {
      return false;
    }
  }
  return true;
};

console.log(mutation(["hello", "neo"]));

///////////////////////////////////////////Chunky Monkey/////////////////////////////////////
//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; ) {
    let divArr = arr.slice(i, size + i);
    newArr.push(divArr);
    i += size;
  }

  return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));

//or

const chunkArrayInGroups = (arr, size) => {
  let result = [];
  for (let i = 0; i <= arr.length; i++) {
    result.push(arr.splice(0, size));
    i = 0;
  }
  return result;
};

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
