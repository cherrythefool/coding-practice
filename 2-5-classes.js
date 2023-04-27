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

// Write the code that makes a black coffee object

// Write the code that outputs the black coffee's profile

// Write the code that makes a coffee object with 1 cream and 2 sugars

// Write the code that outputs the 1 cream and 2 sugars coffee profile

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

// Latte Maker: create a class for Latte

// Write a Latte class that takes a flavor, a milk type, and a number of shots

// Write a method for your Latte class that outputs the latte's profile

// Write the code that makes a regular, single shot latte

// Log the regular, single shot latte's profile

// Write the code that makes a double shot, hazelnut latte with almond milk.

// Log the double shot, hazelnut latte with almond milk's profile.

// Volume of a Cylinder: create a class for Cylinder

// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)

// Write the code that rounds the volume of the cylinder to four decimal places

// Write the code that creates three unique cylinder objects
