
//Spread syntax is new with the JS ES6 update from 2015 (also called ECMAScript 2015). It allows a dynamic number of arguments to be passed in a function

// 💻 Challenges
// Consider this function:

// const combineArrays = (arrOne, arrTwo) => {
//   return arrOne.concat(arrTwo)
// }

// Refactor this function to use the spread operator to combine the arrays.
const combineArrays = (arr1, arr2) => {
  return [...arr1, ...arr2]
}
console.log(combineArrays([2, 4, 2], [4, 6, 11]))

// Consider this function:

// const combineAndFilterOdd = (arrOne, arrTwo, arrThree) => {
//   return arrOne
//     .concat(arrTwo)
//     .concat(arrThree)
//     .filter((num) => num % 2 !== 0)
// }

// console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6]))

// Refactor this function to use the spread operator to combine the array arguments.

const combineAndFilterOdd = (arrOne, arrTwo, arrThree) => {
  return [...arrOne, ...arrTwo, ...arrThree]
    .filter((num) => num % 2 !== 0)
}

console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6]))


// 🏔 Stretch Goals
// Recall the combineAndFilterOdd() function from the previous exercise. Refactor the function to take any number of arguments.

const combineAndFilterOddMany = (arr1, ...arrays) => {
  return arr1.concat(...arrays).filter((num) => num % 2 !== 0)
}

console.log(combineAndFilterOddMany([3, 2, 5], [5, 8, 7], [4, 5, 6],[2, 5, 4, 8], [9, 13, 15]));