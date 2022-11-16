// EXERCISE 1
function fullName (){
    let firstName = "Stanley"
    let space = " "
    let lastName = "David"
    let fullName = firstName + space + lastName
    return fullName
}
console.log (fullName())

let addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(2, 3));

let areaOfRectangle = (length, breath) => length * breath;
console.log(areaOfRectangle(5, 20));

let perimeterOfRectangle = (length, breath) => 2 * (length + breath);
console.log(perimeterOfRectangle(5, 20));

let volumeOfRectPrism = (length, width, height) => length * width * height;
console.log(volumeOfRectPrism(5, 2, 3));

let areaOfCircle = (radius) => Math.PI * Math.pow(radius, 2);
console.log(areaOfCircle(3));

let circumOfCircle = (r) => 2 * Math.PI * r;
console.log(circumOfCircle(5));

let density = (m, v) => m / v;
console.log(density(20, 5));

let speed = (d, t) => d / t;
console.log(speed(10, 2));

let weight = (m, g = 9.8) => m * g;
console.log(weight(5));

let convertCelsiusToFahrenheit = (temp) => (temp * 9) / 5 + 32;
console.log(convertCelsiusToFahrenheit(32));

function checkBmi(bmi) {
  if (bmi < 18.5) {
    return "underweight";
  } else if (bmi <= 24.9) {
    return "normal Weight";
  } else if (bmi <= 29.9) {
    return "Overweight";
  } else {
    return "obese";
  }
}
console.group(checkBmi(35));

function checkSeason(month) {
  mot = month.toLowerCase();
  switch (mot) {
    case "january":
    case "february":
    case "march":
      return "autumn";
      break;
    case "april":
    case "may":
    case "june":
      return "winter";
      break;
    case "july":
    case "august":
    case "september":
      return "spring";
      break;
    case "october":
    case "november":
    case "december":
      return "summer";
      break;
  }
}
console.log(checkSeason("december"));

let findMax = (...args) => Math.max(...args);
console.log(findMax(0, 10, 5));
10;
console.log(findMax(0, -10, -2));
0;

// level2
let solveLinEquation = (a, x, b, y, c) => a * x + b * y + c;

function solveQuadratic(a = 5, x = 1, b = 2, c = 3) {
  return a * Math.pow(x, 2) + b * x + c;
}
console.log(solveQuadratic());
console.log(solveQuadratic(1, 4, 4));
console.log(solveQuadratic(1, -1, -2));
console.log(solveQuadratic(1, 7, 12));
console.log(solveQuadratic(1, 0, -4));
console.log(solveQuadratic(1, -1, 0));

function printArray(arr) {
  let arr1 = "";
  for (let i = 0; i < arr.length; i++) {
    arr1 = arr[i];
  }
  return arr1;
}
console.log(printArray(2, 5, 6, 2, 7, 8, 9, 10));

function showDateTime() {
  let date = new Date();
  let d = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  return d;
}
console.log(showDateTime());

function swapValues(v, w) {
  return `x => ${w} y=>${v}`;
}
console.log(swapValues(5, 2));

function reverseArray(arr) {
  let revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["A", "B", "C"]));

function capitalizeArray(arr) {
  let capArr = [];
  for (let i = 0; i < arr.length; i++) {
    capArr.push(arr[i].toUpperCase());
  }
  return capArr;
}
console.log(capitalizeArray(["a", "b", "c", "d", "e"]));

function addItem(item) {
  let arr = [];
  arr.push(item);
  return arr;
}
console.log(addItem("akara"));

function removeItem(index) {
  let arr = [2, 5, 3, 4, 8];
  arr.splice(index, 1);
  return arr;
}
console.log(removeItem(2));

function sumOfNumbers(arr) {
  let s = arr.sort((a, b) => {
    return a - b;
  });
  for (let i = s[0] + 1; i < s[1]; i++) {
    s.push(i);
  }
  return s.reduce((sum, item) => {
    return (sum += item);
  });
}
console.log(sumOfNumbers([1, 5]));

function sumOffOdds(arr) {
  let s = arr.sort((a, b) => {
    return a - b;
  });
  let odd = [];
  for (let i = s[0]; i <= s[1]; i++) {
    if (i % 2 === 1) {
      odd.push(i);
    }
  }
  return odd.reduce((sum, item) => {
    return (sum += item);
  });
}
console.log(sumOffOdds([1, 5]));

function sumOffEven(arr) {
  let s = arr.sort((a, b) => {
    return a - b;
  });
  let even = [];
  for (let i = s[0]; i <= s[1]; i++) {
    if (i % 2 === 0) {
      even.push(i);
    }
  }
  return even.reduce((sum, item) => {
    return (sum += item);
  });
}
console.log(sumOffEven([1, 5]));

function evenAndOdds(num) {
  let even = [];
  let odd = [];
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }
  return `evensAndOdds ${num};
  The number of odds are ${odd.length}.
  The number of evens are ${even.length}.`;
}
console.log(evenAndOdds(100));

function sumArgs() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumArgs(2, 3, 4, 5, 6));

// random user ip
let randomUserIp = () =>
  `${Math.floor(Math.random() * 255) + 1}.${Math.floor(
    Math.random() * 255
  )}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
console.log(randomUserIp());

// random mac address
function randomMacAddress() {
  let macChar = "0123456789ABCDEF";
  let length = macChar.length;
  let macFormat = "XX:XX:XX:XX:XX:XX";
  return macFormat.replace(/X/g, function () {
    return macChar.charAt(Math.floor(Math.random() * length));
  });
}
console.log(randomMacAddress());

// random hexadecimal generator
function randomHexaNumberGenerator() {
  let hexChar = "0123456789ABCDEF";
  let length = hexChar.length;
  let hexFormat = "#xxxxxx";
  return hexFormat.replace(/x/g, function () {
    return hexChar.charAt(Math.floor(Math.random() * length));
  });
}
console.log(randomHexaNumberGenerator());

// random user id
function userIdGenerator() {
  let idChar = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let length = idChar.length;
  let idFormat = "xxxxxxx";
  return idFormat.replace(/x/g, function () {
    return idChar.charAt(Math.floor(Math.random() * length));
  });
}
console.log(userIdGenerator());

// level 3
// let userX = prompt("enter desired length of id");
// let userY = prompt("enter the number of ids you will like to generate");

function userIdGeneratedByUser(userX, userY) {
  let idChar = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let length = idChar.length;
  let x = "x";
  let idFormat = x.repeat(userX);
  let idPile = "";
  let id = "";
  for (let i = 0; i <= userY; i++) {
    id = idFormat.replace(/x/g, function () {
      return idChar.charAt(Math.floor(Math.random() * length));
    });
    idPile += "\n" + id;
  }
  return idPile;
}
console.log(userIdGeneratedByUser(10, 5));

function randomRGBGenerator() {
  let RGBFormat = "RGB(x,x,x)";
  return RGBFormat.replace(/x/g, function () {
    return Math.floor(Math.random() * 255);
  });
}
console.log(randomRGBGenerator());

function arrayOfHexaColors(num) {
  let hexChar = "0123456789ABCDEF";
  let length = hexChar.length;
  let hexFormat = "#xxxxxx";
  let arr = [];
  for (let i = 0; i <= num; i++) {
    arr.push(
      hexFormat.replace(/x/g, function () {
        return hexChar.charAt(Math.floor(Math.random() * length));
      })
    );
  }
  return arr;
}
console.log(arrayOfHexaColors(5));

function arrayOfRGBColors(num) {
  let RGBFormat = "RGB(x,x,x)";
  let arr = [];
  for (let i = 0; i <= num; i++) {
    arr.push(
      RGBFormat.replace(/x/g, function () {
        return Math.floor(Math.random() * 255);
      })
    );
  }
  return arr;
}

console.log(arrayOfRGBColors(5));

function generateColors(color, num) {
  let hexChar = "0123456789ABCDEF";
  let length = hexChar.length;
  let hexFormat = "#xxxxxx";
  let RGBFormat = "RGB(x,x,x)";
  let arr = [];
  for (let i = 0; i <= num; i++) {
    if (color == "hexa") {
      arr.push(
        hexFormat.replace(/x/g, function () {
          return hexChar.charAt(Math.floor(Math.random() * length));
        })
      );
    } else {
      arr.push(
        RGBFormat.replace(/x/g, function () {
          return Math.floor(Math.random() * 255);
        })
      );
    }
  }
  return arr;
}

console.log(generateColors("rgb", 5));

function factorial(num) {
  let factorial = 1;
  for (i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorial(5));

function isEmpty(arr) {
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEmpty([2]));

let sum = (...args) => {
  let sum = 0;
  for (let elem of args) {
    sum += elem;
  }
  return sum;
};
console.log(sum(2, 5, 4, 6, 8, 9));

// que 12
function sumOfArrayItems(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      sum += arr[i];
    } else {
      return `can not sum ${arr[i]} because it is not a number`;
    }
  }
  return sum;
}
console.log(sumOfArrayItems([2, 3, 4, 5]));

function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      sum += arr[i];
    } else {
      return `can not sum ${arr[i]} because it is not a number`;
    }
  }
  let average = sum / arr.length;
  return average;
}
console.log(average([2, 3, 4, 5]));

function modifyArray(arr) {
  if (arr.length > 5) {
    arr[4] = arr[4].toUpperCase();
  } else {
    return "not found";
  }
  return arr;
}
console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);
console.log(
  modifyArray(["Google", "Facebook", "Apple", "Amazon", "Microsoft", "IBM"])
);
console.log(modifyArray(["Google", "Facebook", "Apple", "Amazon"]));

// function isPrime(num) {
//   let s = Math.sqrt(num);
//   for (let i = 2; i < s; i++) {
//     if (num % i === 0) {
//       return false;
//     } else {
//       return num > 1;
//     }
//   }
// }
// console.log(isPrime(4));

//que 16 NOT SOLVED
let unique = (arr) => {
  return new Set(arr).size === arr.length;
};
console.log(unique([2, 3, 5]));

// que 17
function check(arr) {
  let newArr = arr.map((elem) => typeof elem);
  if (newArr.length !== arr.length) {
    return false;
  } else {
    return true;
  }
}
console.log(check([1, 2, 3]));

// que 18
function isValidVariable(input) {
  let regex = /[^a-z0-9$_]/gi;
  if (regex.test(input)) {
    return "invalid variable";
  } else {
    return "variable is valid";
  }
}
console.log(isValidVariable("she"));

// que 19
function sevenRandom() {
  let arr = [];
  for (let i = 0; i <= 7; i++) {
    arr.push(Math.floor(Math.random() * 1) + i);
  }
  return arr;
}
console.log(sevenRandom());

// que 20
function reverseCountries(countries) {
  let rev = [];
  for (let i = countries.length - 1; i >= 0; i--) {
    rev.push(countries[i]);
  }
  return rev;
}
console.log(reverseCountries(["nigeria", "italy", "france"]));