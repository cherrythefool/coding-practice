// Jest testing is automated QA for coding, designed to ensure correctness. Made by fb, also used by twitter, spotify, airbnb

//goals
//--understand purpose of test driven
//--how to name a jest file
//--define jest test anatomy and write a basic jest test for a prompt
//--identify that test input/output is in a test envionment, and different from development environment

//vocab
//--test driven development (TDD)
//--red-green-refactor
//--Jest
//--dependencies
//--yarn
//--package manager

// 💻 Challenges
// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe("tired", () => {
    it("returns a conditional result", () => {
        expect(tired("yes")).toEqual("drink coffee")
        expect(tired("no")).toEqual("keep working")
    })
})

// Create the function that will make the test pass.

const tired = (string) => {
    if (string === "yes"){
        return "drink coffee"
    } else if (string === "no"){
        return "keep working"
    } else {
        return "error encountered"
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("stressed", () => {
    it("returns relax or keep going conditionally", () => {
        expect(stressed("yes")).toEqual("relax")
        expect(stressed("no")).toEqual("keep going")
    })
})

// Create the function that will make the test pass.

const stressed = (string) => {
    let stressing = string
    return stressing === "yes" ? "relax" : "keep going"
    }

// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("inBudget", () => {
    it("determines if price is lower than $300", () => {
        expect(inBudget(207)).toEqual(true)
        expect(inBudget(5600)).toEqual(false)
    })
})

// Create the function that will make the test pass.

const inBudget = (price) => {
    return price < 300 ? true : false
}

// Write the test for a function that takes in two numbers and returns the smaller number.

describe("smaller", () => {
    it("determines the smaller of two input numbers", () => {
        expect(smaller(1, 5)).toEqual(1)
        expect(smaller(10000, 59487343)).toEqual(10000)
        expect(smaller(1, 1)).toEqual("the numbers are the same")
        expect(smaller(undefined, NaN)).toEqual("unknown error! make sure inputs are both datatype number")
    })
})

// Create the function that will make the test pass.

const smaller = (number1, number2) => {
    return number1 > number2 ? number2 : number2 > number1 ? number1 : number1 === number2 ? "the numbers are the same" : "unknown error! make sure inputs are both datatype number"
}

// Write the test for a function that takes in one numbers and returns whether the number is odd.

describe("howOddIsIt", () => {
    it("returns whether a number is odd", () => {
        expect(howOddIsIt(3)).toEqual("odd")
        expect(howOddIsIt(2)).toEqual("not odd")
    })
})

// Create the function that will make the test pass.

const howOddIsIt = (number) => {
    return number % 2 !== 0 ? "odd" : "not odd"
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

describe("whatColorFruit", () => {
    it("returns the color of a fruit", () => {
        expect(whatColorFruit("banana")).toEqual("yellow")
        expect(whatColorFruit("grape")).toEqual("purple")
        expect(whatColorFruit("apple")).toEqual("red")
        expect(whatColorFruit("cherry")).toEqual("thefool")
        expect(whatColorFruit("orange")).toEqual("not found at this time")
    })
})

// Create the function that will make the test pass.

const whatColorFruit = (fruit) => {
    return fruit === "banana" ? "yellow" : fruit === "apple" ? "red" : fruit === "grape" ? "purple" : fruit === "cherry" ? "thefool" : "not found at this time"
}

// Write the test for a function called rick that returns "Morty".

describe("rick", () => {
    it("returns Morty", () => {
        expect(rick()).toEqual("Morty")
    })
})

// Create the function that will make the test pass.

const rick = () => {
    return "Morty"
}

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

describe("greeter", () => {
    it("returns a greeting with an input name", () => {
        expect(greeter("Petr")).toEqual("Welcome, Petr!")
    })
})

// Create the function that will make the test pass.

const greeter = (name) => {
    return `Welcome, ${name}!`
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.

describe("oddOrEven", () => {
    it("returns whether an input number is odd or even", () => {
        expect(oddOrEven(7)).toEqual("odd")
        expect(oddOrEven(6)).toEqual("even")
        expect(oddOrEven(undefined)).toEqual("hmmm, error! do you have the right datatype?")
    })
})

// Create the function that will make the test pass.

const oddOrEven = (number) => {
    return number % 2 === 0 ? "even" : number % 2 === 1 || number % 2 === -1 ? "odd" : "hmmm, error! do you have the right datatype?"
}
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.

describe("doubler", () => {
    it("returns the input number times 2", () => {
        expect(doubler(2)).toEqual(4)
        expect(doubler(undefined)).toEqual("try a number!")
    })
})

// Create the function that will make the test pass.

const doubler = (number) => {
    return number ? number*2 : "try a number!"
}

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

describe("multiply", () => {
    it("returns the result of multiplying 2 input numbers", () => {
        expect(multiply(2, 8)).toEqual(16)
        expect(multiply(NaN, "5")).toEqual("try inputting two numbers")
    })
})

// Create the function that will make the test pass.

const multiply = (number1, number2) => {
    if ((typeof number1 === "number") && (typeof number2 === "number")){
        return number1*number2
    } else {
        return "try inputting two numbers"
    }
}
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

describe("divisibleBy", () => {
    it("returns whether the first input number is evenly divisible by the second", () => {
        expect(divisibleBy(10, 5)).toEqual("10 is evenly divisible by 5")
        expect(divisibleBy(9, 5)).toEqual("9 is not evenly divisible by 5")
        expect(divisibleBy(NaN, undefined)).toEqual("NaN is not evenly divisible by undefined")
    })
})

// Create the function that will make the test pass.

const divisibleBy = (number1, number2) => {
    return number1 % number2 === 0 ? `${number1} is evenly divisible by ${number2}` : `${number1} is not evenly divisible by ${number2}`
}
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".

describe("fizzbuzz", () => {
    it("returns either a number, or fizz for multiples of 3, buzz for multiples of 5, or fizzbuzz for multiples of 3 and 5", () => {
        expect(fizzbuzz(15)).toEqual("fizzbuzz")
        expect(fizzbuzz(5)).toEqual("buzz")
        expect(fizzbuzz(3)).toEqual("fizz")
        expect(fizzbuzz(7)).toEqual(7)
    })
})

// Create the function that will make the test pass.

const fizzbuzz = (number) => {
    return number % 3 ===0 && number % 5 === 0 ? "fizzbuzz" : number % 3 === 0 ? "fizz" : number % 5 === 0 ? "buzz" : number
}