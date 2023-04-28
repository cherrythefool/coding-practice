// Functions can take any kind of data as an input. Functions can be used with data sets and do iterations. Functions can be combined with loops and arrays in powerful ways

//goals: 
//--know how to pass an array into a fx with an argument
//--know how to make a function which uses a for loop to act on an array

//💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// const testArr1 = [3, 9, 15, 4, 10]
// output: [9, 27, 45, 12, 30]

//input: array of numbers
//output: array of tripled numbers
//process: create a function which accepts an array, iterates through each value in the array, triples those values, and returns an array with the tripled values

// const triple = (array) => {
//     let tripled = []
//     for (let i = 0; i < array.length; i++) {
//         tripled.push(array[i]*3)
//     }
//     return tripled
// }

// console.log(triple(testArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// output: [-7, 3, 5, 13]

//in: array of numbers
//out: array of odd numbers
//process: create a function which iterates through an array and pushes only odd numbers to a new array, returning the new array

//create a function to return an array of only odds
// const aBitOdd = (array) => {
    //create an array to hold odd #s only
    // let evenOdder = []
    // iterate through loop
    // for (let i = 0; i < array.length; i++){
        // pick out odd #s
        // if (array[i] % 2 !== 0){
            //push odd numbers into new array
            // evenOdder.push(array[i])
        // }
    // }
    // return evenOdder
// }

// console.log(aBitOdd(testArr2));

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// const comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// output: "nicework"
//in - array of various datatypes. out - string of only letters from array. Iterate through array, determining if datatype is a string. Push string datatypes to new array. return new array

//create a fx to pick and return letters from mixed array
// const returnLetters = (array) => {
    //create new array to hold letters
    // let mailBox = []
    //iterate through array
    // for (let i = 0; i < array.length; i++){
        // if (typeof array[i] === "string"){
            // mailBox.push(array[i])
        // }
    // }
    // return mailBox.join("")
// }
// 
// console.log(returnLetters(comboArr));


// Create a function that takes in an array of numbers and returns the sum.
// const addThese1 = [1, 2, 3, 4]
// output: 10
// const addThese2 = []
// output: 0

//in - array of #s
//out - sum of array
//process - iterate through array, adding each value to the previous to obtain total sum
// let sum = 0
// const summingItUp = (array) => {
//     for (let i = 0; i < array.length; i++){
//     sum += array[i]
//         }
//     return sum
// }

// console.log(summingItUp(addThese1));


// Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// output: 1

//in - array of numbers
//out - index of largest numnber
//process - create a function which iterates through an array, determining which number is largest, then identifies and returns its index location. 

// let biggestWin = 0
// const highNum = (array) => {
    // for (let i = 0; i<array.length; i++){
        // if (array[i]>biggestWin){
            // biggestWin = array[i]
        // }
    // }
    // return array.lastIndexOf(biggestWin)
// }

// console.log(highNum(indexHighestNumber));

// 🏔 Stretch Goals
// Create a function that takes in two arrays and returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3, 3]
// const arr2 = [7, 8, 2, 3, 1, 5, 4]
// output: [3, 7, 10, 5, 4, 8, 2, 1]
  
//in - two arrays
//out - one array, no duplicate values
//process - make a function named combineArrs. It will add all values of two arrays into one array except for values which already exist in new array. Then, it will return the new array.


// const combineArrs = (array1, array2) => {
//     let noDupesArr = []
//     for (let i = 0; i < array1.length; i++){
//         if (!noDupesArr.includes(array1[i])){
//             noDupesArr.push(array1[i])
//         }
//     }
//     for (let i = 0; i < array2.length; i++){
//         if (!noDupesArr.includes(array2[i])){
//             noDupesArr.push(array2[i])
//         }
//     }
// return noDupesArr
// }
// console.log(combineArrs(arr1, arr2));

// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// const arrayLength = 6
// const arrayValue = 0
// output: [0, 0, 0, 0, 0, 0]

// const arrayLength = 4
// const arrayValue = 11
// output: [11, 11, 11, 11]

// const createArray = (num1, num2) => {
//     let newArray = []
//     for (i = 0; i < num1; i++){
//         newArray.push(num2)
//     }
//     return newArray
// }
// console.log(createArray(arrayLength, arrayValue));

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// const addUp1 = 4
// 1 + 2 + 3 + 4 = 10
// output: 10

// const addUp2 = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// output: 55

// const addUp3 = 600
// output: 180300

// const addIt = (number) => {
//     let adder = 0
//     for (let i = 0; i < number+1; i++){
//         adder += i
//     }
//     return adder
// }

// console.log(addIt(addUp3));

// 🏔 Epic Goals
// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".

//in - number
//out - comparatively answers higher or lower
//process - create a function called high low which compares an input number to a pre-determined answer, determines its relation to the answer, and outputs "higher" if the input > answer and "lower" if input < answer

document.getElementById("idHere").value

const answer = Math.floor(Math.random()*100) + 1
let guesscount = 0

const tooManyGuesses = () => {
    if (guesscount >=7){
        return confirm("Too many guesses, start over!"), window.location.reload()
    }
}

const highLow = (number) => {
    tooManyGuesses(highLow)
    guesscount += 1
    if (number === answer){
        return document.getElementById(button).value(`Wow, you won! Your choice of ${number} matched the answer exactly!`), setTimeout(window.location.reload(), 30)
    } else if (number < answer){
        return document.getElementById(button).value(`Your choice, ${number} is lower than the answer.`)
    } else if (number > answer){
        return document.getElementById(button).value(`Your choice, ${number} is higher than the answer.`)
    } else {
        return document.getElementById(button).value(`I'm not sure how you got here, was your choice (${number}) a number in integer form?`), setTimeout(window.location.reload(), 30)
    }
}


// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.