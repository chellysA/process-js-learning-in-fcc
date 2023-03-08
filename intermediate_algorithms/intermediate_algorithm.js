//////sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function comparison(a, b) {
  return a < b ? -1 : 1;
}

function sumAll(arr) {
  let arrSort = arr.sort(comparison);
  let newArr = [];
  let sum = 0;
  for (let i = arrSort[0]; i <= arrSort[1]; i++) {
    newArr.push(i);
    sum = newArr.reduce((sum, value) => sum + value, 0);
  }
  return sum;
}
console.log(sumAll([10, 5]));

//refactorized

const comparison = (a, b) => (a < b ? -1 : 1);
const sumAll = (arr) => {
  arr = arr.sort(comparison);
  let sum = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
};
console.log(sumAll([10, 5]));

////////////////////////////////////////Diff an array/////////////////////////////////////////

const diffArray = (arr1, arr2) => {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    let isSome = arr2.some((value) => value == arr1[i]);
    if (isSome == false) {
      newArr.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    let isSome = arr1.some((value) => value == arr2[j]);
    if (isSome == false) {
      newArr.push(arr2[j]);
    }
  }
  return newArr;
};

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

////////////////////////////////////seek and destroy//////////////////////////////////////////

function destroyer(arr) {
  for (let i = 1; i < arguments.length; i++) {
    arr = arr.filter((value) => value !== arguments[i]);
  }
  return arr;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

////////////////////////////////////Wherefore art thou///////////////////////////////////////
//Make a function that looks through an array of objects

const whatIsInAName = (collection, source) => {
  let sourceKeys = Object.keys(source);
  const findAllKeys = (item) => {
    let bool = false;
    for (let i = 0; i < sourceKeys.length; i++) {
      if (item[sourceKeys[i]] == source[sourceKeys[i]]) {
        return (bool = true);
      } else {
        return bool;
      }
    }
  };
  const result = collection.filter((currentEl) => findAllKeys(currentEl));
  return result;
};

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);

/////////////////////////////////////Spinal tap case/////////////////////////////////////////

const spinalCase = (str) => {
  let result = str
    .replace(/[\W_]+/g, " ")
    .split(" ")
    .map((currentEl) => {
      return currentEl[0].toUpperCase() + currentEl.slice(1);
    })
    .join("")
    .match(/[A-Z]?[^A-Z]*/g)
    .join("-")
    .slice(0, -1)
    .toLowerCase();

  return result;
};

console.log(spinalCase("AllThe-small Things"));

///////////////////////////////////////pig latin/////////////////////////////////////////////

function translatePigLatin(str) {
  let cluster;
  let consonant = "";
  let restWord = "";
  let result = "";

  if (str == str.toLowerCase()) {
    for (let i = 0; i < str.length; i++) {
      if (str[0] == str.match(/[aeiou]/)) {
        result = str.concat("way");
        return result;
      }
      if (str[i] == str[i].match(/[^aeiou]/)) {
        result = consonant += str[i];
        result = result.concat("ay");
      }
      if (str[i] == str[i].match(/[aeiou]/)) {
        cluster = str.slice(0, consonant.length);
        restWord = str.slice(consonant.length);
        result = restWord.concat(cluster);
        return `${result}ay`;
      }
    }
    return result;
  }
}

console.log(translatePigLatin("eight"));

////////refactorized///////
const translatePigLatin = (str) => {
  let cluster;
  let consonant = "";
  let restWord = "";
  let result = "";

  if (str.toLowerCase()) {
    for (let i = 0; i < str.length; i++) {
      if (str[0] == str.match(/[aeiou]/)) {
        result = str.concat("way");
        return result;
      }
      if (str[i].match(/[^aeiou]/)) {
        result = consonant += str[i];
        result = result.concat("ay");
      }
      if (str[i].match(/[aeiou]/)) {
        cluster = str.slice(0, consonant.length);
        restWord = str.slice(consonant.length);
        result = restWord.concat(cluster);
        return `${result}ay`;
      }
    }
    return result;
  }
};

console.log(translatePigLatin("eight"));

////////////////////////////////////////Search and replace///////////////////////////////////

function myReplace(str, before, after) {
  let newStr = str.split(" ");
  let result;
  let firstLetter = after[0];
  let restW = after.slice(1);
  if (before[0].match(/[A-Z]/) && after[0].match(/[a-z]/)) {
    after = firstLetter.toUpperCase().concat(restW);
  } else if (before[0].match(/[a-z]/) && after[0].match(/[A-Z]/)) {
    after = firstLetter.toLowerCase().concat(restW);
  }

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] == before) {
      newStr[i] = after;
      result = newStr.join(" ");
      return result;
    }
  }
}

//////////// refactorized //////
const myReplace = (str, before, after) => {
  let newStr = str.split(" ");
  let result;
  let [firstLetter] = after;
  let [first, ...rest] = after;
  rest = rest.join("");
  if (before[0].match(/[A-Z]/) && firstLetter.match(/[a-z]/)) {
    after = firstLetter.toUpperCase().concat(rest);
  } else if (before[0].match(/[a-z]/) && firstLetter.match(/[A-Z]/)) {
    after = firstLetter.toLowerCase().concat(rest);
  }
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] == before) {
      newStr[i] = after;
      return (result = newStr.join(" "));
    }
  }
};

console.log(myReplace("I think we should look Up there", "Up", "down"));

console.log(myReplace("I think we should look Up there", "Up", "down"));

///////////////////////////////////////DNA pairing////////////////////////////////////////////

function pairElement(str) {
  let arrs;
  let result = [];
  for (let i = 0; i < str.length; i++) {
    arrs = str[i].split();
    result.push(arrs);
    if (result[i] == "C") {
      result[i].push("G");
    }
    if (result[i] == "G") {
      result[i].push("C");
    }
    if (result[i] == "A") {
      result[i].push("T");
    }
    if (result[i] == "T") {
      result[i].push("A");
    }
  }
  return result;
}

console.log(pairElement("GCG"));

/////////////////refactorized//////
const pairElement = (str) => {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(Array(2).fill(str[i]));
  }
  return result;
};

console.log(pairElement("ATT"));

///////////////////////////////////Sorted Union///////////////////////////////////////////////
function uniteUnique(arr) {
  let arrToConvert = [];
  let newArr = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    arrToConvert.push(arguments[i]);
  }

  for (let j = 0; j < arrToConvert.length; j++) {
    newArr = newArr.concat(arrToConvert[j]);
  }
  result = newArr.filter(function (item, index) {
    return newArr.indexOf(item) == index;
  });
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

////////////refactorized//////
const uniteUnique = (...arr) => {
  let newArr = [];
  arr.forEach((value) => (newArr = newArr.concat(value)));
  let result = newArr.filter((item, index) => newArr.indexOf(item) == index);
  return result;
};
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//////////////////////////////Sum All Odd Fibonacci Numbers//////////////////////////////////

const sumFibs = (num) => {
  let newArr = [1, 1];
  let [inicio, final] = newArr;
  let sum = 0;
  let result;
  for (let i = final; i <= newArr.length; i++) {
    sum = newArr[i] + newArr[i - 1];
    newArr.push(sum);
    if (sum > num) {
      newArr.pop();
      break;
    }
  }
  result = newArr.filter((value) => value % 2 !== 0);
  result = result.reduce((sum, value) => sum + value);
  return result;
};

console.log(sumFibs(4));

///////////////////////////////////////sum all primes/////////////////////////////////////////

const sumPrimes = (num) => {
  let newArr = [];
  for (let number = 0; number <= num; number++) {
    let flag = false;
    if (number > 1) {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
          flag = true;
        }
      }
      if (!flag) {
        newArr.push(number);
      }
    }
  }
  return newArr.reduce((sum, value) => sum + value);
};

console.log(sumPrimes(977));

///////////////////////////////////////Drop it///////////////////////////////////////////////
const dropElements = (arr, func) => {
  for (let i = 0; i < arr.length; ) {
    if (!func(arr[i])) {
      arr.shift();
      i = 0;
      if (arr.length == 0) {
        return arr;
      }
    } else {
      return arr;
    }
  }
};

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
);

/////////////////////////////////////Recursion///////////////////////////////////////////////
const steamrollArray = (arr) => {
  let newArr = [];
  arr.forEach((value) => {
    if (!Array.isArray(value)) {
      newArr.push(value);
    } else {
      const steam = steamrollArray(value);
      newArr = newArr.concat(steam);
    }
  });
  return newArr;
};

console.log(steamrollArray([1, [2], [3, [[4]]]]));

/////////////////////////////////Everything be true/////////////////////////////////////////

const truthCheck = (collection, pre) => {
  let button = true;
  collection.forEach(function (value) {
    if (value[pre]) {
      return button;
    } else {
      return (button = false);
    }
  });
  return button;
};

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "name"
  )
);

/////////////////////////////////common multiple////////////////////////////////////////////

const comparison = (a, b) => (a < b ? -1 : 1);

// funcion que ordena de menor a mayor
const smallestCommons = (arr) => {
  let sortedArr = arr.sort(comparison); //array ordenado
  let [inicio, final] = sortedArr;
  let range = [];
  let primes = [];
  let result = [];
  // encontrando los numeros primos desde el 2 hasta el mas alto ([1])
  for (let number = 2; number <= sortedArr[1]; number++) {
    let flag = false;
    if (number > 1) {
      for (let t = 2; t <= Math.sqrt(number); t++) {
        if (number % t == 0) {
          flag = true;
        }
      }
      if (!flag) {
        primes.push(number);
      }
    }
  }
  let currentIndexPrime = 0;
  // se establece en una variable el primer numero primo a usar
  for (let i = inicio; i <= final; i++) {
    range.push(i);
    // iteramos para crear el rango de numeros a trabajar
  }
  for (let j = 0; range.length > 0; ) {
    //iteramos hasta que el rango sea 1
    let someDivisibleXcurrentPrime = false; //creamos un switch para accionar cuando se requiera
    for (let l = 0; l < range.length; l++) {
      //iteramos por el rango
      if (primes[currentIndexPrime] / range[l] == 1) {
        //la primera condicion elimina al primer numero dividido que da 1
        range.splice(l, 1);
        someDivisibleXcurrentPrime = true; //boton pasa a true por que ha encontrado al menos 1 que es divisible
      }
      if (range[l] % primes[currentIndexPrime] == 0) {
        //si alguno de los numeros es divisible por la indice primo actual, el boton vuelve a true y se cambia el numero por su resultado dividido
        someDivisibleXcurrentPrime = true;
        range[l] = range[l] / primes[currentIndexPrime];
      }
    }
    if (someDivisibleXcurrentPrime) {
      //si a este punto el boton es true entonces empuja el numero primo usado
      result.push(primes[currentIndexPrime]);
    } else {
      //si el boton es falso cambiamos al siguiente numero primo
      currentIndexPrime++;
    }
  }
  //multiplicamos los valores primos resultantes de la evaluacion del rango para obtener el resultado y fin.
  return result.reduce((sum, value) => sum * value);
};

console.log(smallestCommons([23, 18]));
