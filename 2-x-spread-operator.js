
//Spread syntax is new with the JS ES6 update from 2015 (also called ECMAScript 2015). It allows a dynamic number of arguments to be passed in a function

// 💻 Challenges
// Consider this function:

const combineArrays = (arrOne, arrTwo) => {
  return arrOne.concat(arrTwo)
}

console.log(combineArrays([2, 4, 2], [4, 6, 11]))
// Refactor this function to use the spread operator to combine the arrays.

// Consider this function:

const combineAndFilterOdd = (arrOne, arrTwo, arrThree) => {
  return arrOne
    .concat(arrTwo)
    .concat(arrThree)
    .filter((num) => num % 2 !== 0)
}

console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6]))
// Refactor this function to use the spread operator to combine the array arguments.

// 🏔 Stretch Goals
// Recall the combineAndFilterOdd() function from the previous exercise. Refactor the function to take any number of arguments.