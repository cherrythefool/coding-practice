// 💻 Challenges
// Write a function named marco that returns "polo".
const marco = () => {console.log("polo")}
marco()

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {console.log(`Welcome, ${name}!`)}

greeting("Petr")

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) => {
    if (number % 2 === 0) {
        return console.log("even");
    } else if (number % 2 !== 0) {
        return console.log("odd");
    } else {return console.log("hmmm... something went wrong. Make sure to input a number data type.");}
}

oddOrEven(100)

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number) => {
    return console.log(number*3);
}

triple(10)

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

const multiply = (num1, num2) => {
    console.log(num1*num2);
}
multiply(7, 3)

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

const divisibleBy = (num1, num2) => {
    if (num1 % num2 === 0) {
        return console.log(`${num1} is evenly divisible by ${num2}`)
    } else {
        return console.log(`these don't appear to evenly divide in this way`);
    }
}
divisibleBy(9, 4)

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (number) => {
    if (number <= 100 && number >= 90 ){
        console.log("A");
    } else if (number < 90 && number >= 80){
        console.log("B");
    } else if (number < 80 && number >= 70){
        console.log("C")
    } else if (number < 70 && number >= 60){
        console.log("D");
    } else if (number < 60 && number >= 0) {
        console.log("F");
    } else {
        console.log("no grade available");
    }
}
assignGrade(100)

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

const isLonger = (string1, string2) =>
    string1.length > string2.length ? string1 : string2.length > string1.length ? string2 : "They are the same length"

console.log(isLonger("hello", "hello world"))


// const isLonger = (string1, string2) => {
//     if (string1.length > string2.length){
//         return string1
//     } else if (string2.length > string1.length){
//         return string2
//     } else {
//         return "They are the same length"}
// }

console.log(isLonger("green", "hello"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

const greaterNum = (number1, number2) =>
    number1 > number2 ? number1 : number2 > number1 ? number2 : "neither is greater, they are either equivalent or not both numbers"

console.log(greaterNum(5, "anchovies"));

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

const yelling = (string) => {
    return string.toUpperCase()
}

console.log(yelling("why are we yelling?!"))

// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.

const helloWorld = (langCode) => {
    if (langCode === "cs"){
        return "Ahoj, světe!"
    } else if(langCode === "es"){
        return "¡Hola, mundo!"
    } else if(langCode === "fr"){
        return "Bonjour, monde!"
    } else if(langCode === "de"){
        return "Hallo, Welt!"
    } else if(langCode === "ar"){
        return "مرحباً بالعالم!"
    } else if(langCode === "ja"){
        return "こんにちは、世界!"
    } else if(langCode === "zhCN"){
        return "你好，世界!"
    } else if(langCode === "hi"){
        return "नमस्ते दुनिया!"
    } else return "Hello, world!"
}
    
console.log(helloWorld("ar"))
    
// The Pluralizer
// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

const pluralizer = (number, string) => {
    if (number === 1) {
        return string
    } else if (string === "goose") {
        return "geese"
    } else if (string === "child") {
        return "children"
    } else if (string === "person") {
        return "people"
    } else if (string === "foot") {
        return "feet"
    } else if (string === "tooth") {
        return "teeth"
    } else if (string === "species" || string === "moose" || string === "sheep" || string === "bison" || string === "deer" || string === "reindeer" || string === "cod" || string === "fish" || string === "series" || string === "aircraft") {
        return string
    } else {
        return string.concat("s")
    }
}

console.log(pluralizer(5, "cat"))
// // output: "5 cats"

console.log(pluralizer(1, "dog"))
// // output: "1 dog"

console.log(pluralizer(9, "dog"))
// // output: "9 dogs"

console.log(pluralizer(1, "person"))
// // output: "1 person"

console.log(pluralizer(3, "person"))
// // output: "3 people"