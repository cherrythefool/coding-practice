//Classes are the blueprint or templates for objects. Classes are reusable and customizable, much like functions.

//goals:
//--know the purpose of constructor method
//--use .new to create a class instance
//--use dot notation to target specific values and methods
//--show how to set default values to constructor arguments and explain in the context of a class

//vocab:
//--class
//--object
//--constructor
//--this
//--new
//--PascalCase

// 💻 Challenges
// Coffee marker: copy the given Coffee class into a text editor
class Coffee {
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile() {
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
  }

  creams() {
    if (this.cream > 1) {
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars() {
    if (this.sugar > 1) {
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}

// Write the code that makes a black coffee object

const black = new Coffee("black", 0, 0)

// Write the code that outputs the black coffee's profile

console.log(black.coffeeProfile())

// Write the code that makes a coffee object with 1 cream and 2 sugars

const sweet = new Coffee("sweet", 1, 2)

// Write the code that outputs the 1 cream and 2 sugars coffee profile
console.log(sweet.coffeeProfile());
// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots

class Latte {
  constructor(flavor, milkType, espressos) {
    this.flavor = flavor.toLowerCase()
    this.milkType = milkType.toLowerCase()
    this.espressos = espressos
  }

  latteProfile() {
    return `A ${this.flavor} latte with ${this.milkType} milk, ${this.shots()}`
  }

  shots() {
    if (this.espressos > 1) {
      return `${this.espressos} shots`
    } else {
      return `${this.espressos} shot`
    }
  }
}

// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte

const regular = new Latte("regular", "regular", 1)

// Log the regular, single shot latte's profile

console.log(regular.latteProfile());

// Write the code that makes a double shot, hazelnut latte with almond milk.

const nutty = new Latte("hazelnut", "almond", 2)

// Log the double shot, hazelnut latte with almond milk's profile.

console.log(nutty.latteProfile());

// Volume of a Cylinder: create a class for Cylinder

// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places

class CylinderCalculator {
  constructor(radius, height) {
    this.pi = 3.141592653589793232646
    this.radius = radius
    this.height = height
  }
  
  volumeResponse() {
    return `A cylinder with a height of ${this.height} and a radius of ${this.radius} has a volume of ${(this.height*this.pi*this.radius*this.radius).toFixed(4)}`
  }
}

// Write the code that creates three unique cylinder objects

const threeByTenCyl = new CylinderCalculator(3, 10)
const fourByTwoCyl = new CylinderCalculator(4, 2)
const fiveByOneCyl = new CylinderCalculator(5, 1)
console.log(threeByTenCyl.volumeResponse(), fourByTwoCyl.volumeResponse(), fiveByOneCyl.volumeResponse());