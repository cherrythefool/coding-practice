//higher order functions are built-ins that take a fx as an argument

//goals: 
//--know that .map() and .filter() are array methods
//--explain difference between a regular and higher-order function
//--explain the difference between a regular built-in method and higher order function
//--properly use .map() and .filter() with expected outcomes, and use required and optional parameters

//vocab
//--higher-order function - built-in method, takes a function as an argument, often used on arrays and execute argument once per array item.
//--.map() - .map(value, index, array)
//--.filter() - .filter(value, index, array)
//--type coercion
//--falsy
//--truthy

//.map() will do something to each item in an array and return an array of the same length.
// .filter() will make a decision about each item in an array and return a subset based on the criteria given.

// 💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// output: [30, 90, 150, 40, 100]
const mult10 = (array) => {
    return array.map(value => value*10)
}

console.log(mult10(arr1));

// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
const arrdiv2 = [3, 9, 15, 4, 10]
// output: [1.5, 4.5, 7.5, 2, 5]
const div2 = (array) => {
    return array.map((value) => value / 2)
}
console.log(div2(arrdiv2));

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// output: [7, 3, 5, 13]
const bitOdd = (array) => {
    return array.filter(value => value % 2 !== 0)
}
console.log(bitOdd(arr2));

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// output: ["a", "wonderful", "ain't", "passing", "craze"]
const skipAFew = (string) => {
    return string.split(" ").filter((value) => value.length % 2 !== 0)
}
console.log(skipAFew(pumbaa))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// output: "nicework"
const lettersOnly = (array) => {
    return array.filter(value => typeof(value) === "string").join("")
}
console.log(lettersOnly(comboArr));

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// output: [58, "abcd", true]
const truthyOnly = (array) => {
    return array.filter(Boolean)
}
console.log(truthyOnly(filterArrayValues))

// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]

const wackyCase = (array) => {
    return array.map((value) => {
        return value.split("").map((letter, index) => {
            return index % 2 ===0 ? letter.toUpperCase() : letter.toLowerCase()
        }).join("")
    })
}

console.log(wackyCase(makesWackyWords));

// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// output: "jvscrpt s wsm"
const vowels = ["a", "e", "i", "o", "u"]
const noMcDonalds = (string) => {
    return string.split("").filter((char) => !vowels.includes(char)).join("")
}
console.log(noMcDonalds(str))

// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
const stringOfNumbers = "4574328"
// output: [7, 8, 2, 1, 5, 4]?????????????

const coords = (string) => {
    return string.split("").map(value => parseInt(value))
}
console.log(coords(stringOfNumbers));

// 🏔 Stretch Goals

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
const arrr1 = [3, 7, 10, 5, 4, 3]
const arrr2 = [7, 8, 2, 1, 5, 4]
// output: [3, 7, 10, 5, 4, 8, 2, 1] 

const uniqueMerger = (array1, array2) => {
    const merging = array1.concat(array2)
    return merging.filter((value, index) => 
        merging.indexOf(value) === index)
  
}
console.log(uniqueMerger(arrr1, arrr2));

// Create a function that takes in an array of mixed data types and returns the first value that is a string. HINT: look into the JavaScript .find() method.
const allTheData = [7, null, true, 2, "yo!", false, 4, "hello!"]
// output: "yo!"


const firstChairViolin = (array) => {
    return array.find((value) => typeof value === "string")
}
console.log(firstChairViolin(allTheData))

