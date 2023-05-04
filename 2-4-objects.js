// Objects area a data type containing a collection of key:value pairs. Can be stored info or stored methods, objects are the intersection of data and behavior.

//goals:
//--create an object and know it's parts
//--create an object with a method
//--use dot notation to use object properties
//--destructure an object and access a value with destructured key
//--be able to iterate through an array with a higher-order function

//vocabulary
//--key:value pairs
//--methods
//--dot notation
//--this
//--destructuring


// 💻 Challenges
// Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent"
}

// Write the code that accesses the first name of the person object.

console.log(person.firstName);

// Write the code that accesses the last name of the person object.

console.log(person.lastName);

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

person.homePlanet = "Earth"
console.log(person);

// Update the person object with a method that logs "Arthur Dent is from planet Earth".

console.log(`${person.firstName} ${person.lastName} is from planet ${person.homePlanet}`);

// Consider this variable:

const product = {
  name: "chair",
  price: 24.99
}

// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".

const describeProduct = (product) => {
  return `The product is a ${product.name}. It costs $${product.price}`
}

console.log(describeProduct(product));

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

const totalWithTax = (object) => {
  return `The total price of the ${object.name} with tax is $${(object.price*1.07).toFixed(2)}.`
}
console.log(totalWithTax(product))

// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}

// Write the code that accesses the ingredients property.

console.log(lunch.ingredients);

// Write the code that access the third ingredient of the lunch object.

console.log(lunch.ingredients[2]);

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

const objectAcesser = (object) => {
  return `The ingredients for a ${object.name} ${object.type} are ${object.ingredients[0]}, ${object.ingredients[1]}, and ${object.ingredients[2]}.`
}
console.log(objectAcesser(lunch));

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

lunch.assembler = function () {
  return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}.`
}
console.log(lunch.assembler());

// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]

// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.

const catFilter = animals.filter(value => value.type === "cat")
console.log(catFilter);

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.

const names = animals.map(value => value.name)
console.log(names);

// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.

const oldNames = (object) => {
  return object.filter((value) => value.age > 10).map(value => value.name)
}

console.log(oldNames(animals));

// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.

const zooTour = (object) => {
  return object.map(value => `This is a ${value.type} named ${value.name}. This ${value.type} is ${value.age} years old.`)
}

console.log(zooTour(animals))

// Consider this variable:

const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}

// Write the code that destructures the author object so that the following code snippet will run successfully:
const { name, genre } = author

console.log(`${name} is a ${genre} author`)

// output: "H. G. Wells is a science fiction author"

// Consider this variable:

const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire"
}

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water"
}

// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:

const describePokemon = (pokemon) => {
  const { species, pokemon_type } = pokemon
  return `${species} is a ${pokemon_type} pokemon`
}
console.log(describePokemon(pokeOne))
// output: "Charmandar is a Fire pokemon"
console.log(describePokemon(pokeTwo))
// output: "Magikarp is a Water pokemon"

// Consider this variable:

const triangleDimensions = {
  base: 2,
  height: 5
}

// Modify the triangleDimensions object to have a method that returns the area of the triangle.

triangleDimensions.area = function () {
  return this.base * this.height / 2
}
console.log(triangleDimensions.area());
// Write the code that will update the base to be the value of 6.
triangleDimensions.base = 6
console.log(triangleDimensions);

// 🏔 Stretch Goals
// Consider this variable:

const learn = {
  cohorts: {
    2021: ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
    2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf"],
    2023: ["Alpha", "Bravo", "Charlie"]
  }
}
// Write the code that logs the name of your cohort.

console.log(learn.cohorts[2023][2]);

// Write the code that uses destructuring to log the name of your cohort.

const { cohorts: {2023: cohorts} } = learn
console.log();
// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
// output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot", "2022 Golf"]
