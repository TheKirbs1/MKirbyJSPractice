// let feelsLikeHitByTrain = true;
// let youWereHitByTrain = false;

// if (feelsLikeHitByTrain === true) {
//   if (youWereHitByTrain === true) {
//     console.log("You were hit by a train dawg, seek help!!");
//   } else {
//     console.log("You have the flu");
//   }
// } else {
//   console.log("You don't have the flu");
// }

//-----------------------------------------------------------------
// let age = 12;

// if (age < 18) {
//   console.log("You can't drive");
// } else if (age >= 18) {
//   console.log("Hit the road Jack");
// }

//------------------------------------------------------------------------
// Think of a function as a black Box
// You feed it inputs (arguments) and it will provide you an output (result)
// Parameter is a placeholder for your arguement
// Parameters are on an as needed basis

//keyword  func name  (param1, param2)   func body
// function product(factor1, factor2) {
//   return factor1 * factor2;
// }

// let myProduct = 0;
// myProduct = product(12, 10);

// console.log(myProduct);
// let product = function(factor1, factor2) {
//   return factor1 * factor2;
// };
///-----------------------------------------------
// let myProduct = 0;
// myProduct = product(12, 10);

// console.log(myProduct);

//--------------------------------------------------------------
//arrow function
//() => {}
// let product = () => {
//   console.log(12 * 10);
// };
// product();

//function can be used as arguments in other functions
//they are called first calss arguments
//   function sum(a, b) {
//     return a + b;
//   }
// );
// function multiply(a, b) {
//   return a * b;
// }

// console.log(multiply(sum(3, 5), sum(1, 1)));

// // the executions go from inside to outside
// // first, the sum of 3+5 and 1+1 will be calculated
// // then, their respective results will be multiplied
// let firstSum = sum(3, 5);
// let secondSum = sum(1, 1);
// console.log(multiply(firstSum, secondSum));

//--------------------------------------------
function getAverage(array) {
  let sum = array.reduce((a, b) => a + b, 0);
  return sum / array.length;
}

function getYoungest(array) {
  // This function now expects an array of objects with an 'age' property
  return array.reduce((a, b) => (a.age < b.age ? a : b));
}

function getPersonInfo(name, people) {
  return people.find(person => person.name === name);
}

let average = getAverage([2, 4, 5, 12, 7]);

// Corrected: Use the 'people' array for getYoungest
let people = [
  { name: "John", age: 20 },
  { name: "Mary", age: 21 }
];
let youngest = getYoungest(people);

let john = getPersonInfo("John", people);
let mary = getPersonInfo("Mary", people);

console.log({ average, youngest, john, mary });
