//JavaScript Basics and TDD:


function add (a, b) {
    return a + b
}

function subtract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    return a / b
}

const sumNumbers = numbers => {
    return numbers.reduce((a, b) => a + b);
}

const numbers = [a, b]
    Math.max(...numbers);

const numbers1 = [a, b]
    Math.min(...numbers1);

function reverseString(str) {
    return str;
}

function stringLength(str) {
    return str.length;
}

function capitalizeArray(arr) {
    return arr.map(str => str.toUpperCase())
  }





  //Function and Arrow Functions:

  const sumUp = (x, y) => {
    return (x + y)
  }
  console.log(sumUp(x + y));


const product = (num, num1) => {
    return (num * num1)
}
console.log(product(num * num1));


const squareArray = (arr) => arr.map(num => num ** num);


const countCharacters = (string) => {
    return string.length;
  }




  //Classes (OOP):

  class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

  calculateArea () {
    return this.width * this.height;
  }

  calculatePerimeter () {
    return 2 * (this.width + this.height);
  }
}


class Circle {
    constructor (radius){
        this.radius = radius;
    }

    calculateArea () {
        return this.radius * this.radius;
      }

    calculateCircumference () {
        return ((2)) * (Math.PI) * this.radius;
    }  
}



// Object and Array:

 const person = {
    name: "Ayse Insan",
    age: 30,
    gender: "female"
};

const persons = [
   { name: "Sevinc Insan",
     age: 30,
     gender: "female"
},
{
    name: "Jack Pack",
    age: 34,
    gender: "male"
},
{
    name: "Taylor Maylor",
    age: 32,
    gender: "male"
},

]


function getTotalAge(persons) {
    let totalAge = 0
    persons.forEach(person => {
        totalAge += person.age
    })
    return totalAge;
}


function getAllNames(persons) {
    let allNames = persons
    persons.forEach(person => {
        allNames += person.name
    })
    return allNames;
}


