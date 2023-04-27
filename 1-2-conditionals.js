// // // 💻 Challenges
// // // Write the code that will log true or false for the following:
// // // Does 5 evaluate to the same as "5"?
// // console.log(5 == "5");

// // // Is 34 divided by 3 greater than 67 divided by 2?
// // console.log(34 / 3 > 67 / 2);

// // // Does 5 strictly equal "5"?
// // console.log(5 === "5");

// // // Does !3 strictly equal 3?
// // console.log(!3 === 3);

// // var lrn = "LEARN"
// // var std = "Student"
// // // Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
// // console.log(lrn.length === 5 && std.length ===7);

// // // Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
// // console.log(lrn.length === 5 || std.length === 10);

// // // Does "LEARN" contain the subset "RN"?
// // console.log(lrn.includes("RN"));

// // // Does "LEARN" contain the subset "rn"?
// // console.log(lrn.includes("rn"));

// // // Does "LEARN"[0] strictly equal "l"?
// // console.log(lrn[0] === "l");

// // // Modify the code from the previous question to return true.
// // console.log(lrn[0] === "L");

// // // Make sure you try different options and change the variables to ensure properly working code.
// // // Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
// // var item = 101
// // if (item <= 100) {
// //     console.log("in budget");
// // } else {
// //     console.log("sorry! not today");
// // }

// // // Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
// // var hungry = "yes"
// // if (hungry === "yes") {
// //     console.log("go eat! take a break")
// // } else if (hungry === "no") {
// //     console.log("keep coding")
// // } else {
// //     console.log("please simply choose yes or no")
// // }

// // // Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
// // var trafficLight = "green"
// // if (trafficLight === "green") {
// //     console.log("go")
// // } else if (trafficLight === "yellow") {
// //     console.log("slow down")
// // } else if (trafficLight === "red") {
// //     console.log("stop")
// // } else {
// //     console.log("try red, yellow or green")
// // }

// // Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

// var a = 2
// var b = 3

// if (a > b) {
//     console.log(a);
// } else if (b > a) {
//     console.log(b);
// } else if (a === b) {
//     console.log("the numbers are the same");
// } else {
//     console.log("well how'd you do that? make sure 'a' and 'b' both have a value");
// }

// // Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

// if (a % 2 != 0) {
//     console.log("odd");
// } else if (a % 2 === 0) {
//     console.log("even");
// } else if (a === 0) {
//     console.log("your variable is 'zero'");
// } else {
//     console.log("well how'd you get here? nice");
// }

// // 🏔 Stretch Goals
// // Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

// var grade = 0

// if (grade >= 100){
//     console.log("perfect score!");
// } else if (grade < 100 && grade >= 90 ){
//     console.log("A");
// } else if (grade < 90 && grade >= 80){
//     console.log("B");
// } else if (grade < 80 && grade >= 70){
//     console.log("C")
// } else if (grade < 70 && grade >= 60){
//     console.log("D");
// } else if (grade < 60 && grade > 0) {
//     console.log("F");
// } else {
//     console.log("no grade available");
// }

// // Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

// var variable = "what type of variable am I?"
// console.log(typeof variable);


// // Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

// var password = "we"

// if (password.length >= 12 && password.includes("!") === true){
//     console.log("That is a mighty strong password!");
// } else if (password.length >= 8 || password.includes("!") === true){
//     console.log("That password is strong enough.");
// } else {
//     console.log("That is not a valid password.");
// }