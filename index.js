//You are given an array of numbers. Your task is to use iteration methods
// to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
******************************************************************/

function greaterThanOrEqualTo25(x) {
  return x >= 25;
}
const numbersGreaterThan = numbers.filter(greaterThanOrEqualTo25);
console.log(numbersGreaterThan);
/*****************************************************************
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

function numbersThatAreDivisibleBy5(x) {
  if (x % 5 == 0) {
    return x;
  }
}
const numbersThatAreDivisibleBy = numbers.filter(numbersThatAreDivisibleBy5);
console.log(numbersThatAreDivisibleBy);
/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
******************************************************************/
function eachNumberSquared(x) {
  return x * x;
}
const eachNumberSquaredList = numbers.map(eachNumberSquared);
console.log(eachNumberSquaredList);
/*****************************************************************
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
function numberMultipliedBy2(x) {
  return x * 2;
}
const numberMultipliedBy = numbers.map(numberMultipliedBy2);
console.log(numberMultipliedBy);
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.


******************************************************************/

function greaterThanOrEqualTo20(x) {
  return x >= 20;
}

console.log(numbers.filter(greaterThanOrEqualTo20).map(eachNumberSquared));
//note eachNumberSquared
/*****************************************************************

Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
function numberMultipliedBy3(x) {
  return x * 3;
}

console.log(
  numbers.filter(numbersThatAreDivisibleBy5).map(numberMultipliedBy3)
);
