//! Basic Types:


// 1. Number
// Define a variable 'age' of type number and assign it the value 25.
let age: number = 25;

// 2. String
let firstName: string = "John";

// 3. Boolean
let isStudent: boolean = true;

// 4. Array
let numbers: number[] = [1, 2, 3];

// 5. Tuple: Array with fixed number of elements
// Tuple: Fixed-size array with specific types for each position.
let person: [string, number] = ["Alice", 30];

// Array union type to allow elements of different types
let mixedArray: (number | string | object | boolean | number[] | Function)[] = [
    1,
    'two',
    { key: 'value' },
    true,
    [3, 4, 5],
    (x: number, y: number) => x + y,
  ];

// 6. a Enum is a way of giving more friendly names to sets of numeric values.
//  an enum is a data type that consists of a set of named values, each associated with a numeric value.
// enum is used specifically for creating a set of related named constants with numeric values
enum Color {
  Red,
  Green,
  Blue,
}

let chosenColor: Color = Color.Green;

// 7. Any
let unknownValue: any = 10;
unknownValue = "Hello";

// 8. Void
function sayHello(): void {
  console.log("Hello!");
}

// 9. Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;



//! Functions:

// Function with types
function add(x: number, y: number): number {
    return x + y;
  }
  
  let result: number = add(3, 5);
  console.log(result);
  

  // Interfaces:

interface Person {
    name: string;
    age: number;
  }
  
  // Using interface
  let user: Person = {
    name: "Alice",
    age: 25,
  };


  // Classes:

  class Animal {
    // Fields
    private _name: string;
  
    // Constructor
    constructor(name: string) {
      this._name = name;
    }
  
    // Method
    makeSound(): void {
      console.log("Some generic sound");
    }
  
    // Getter
    get name(): string {
      return this._name;
    }
  
    // Setter
    set name(newName: string) {
      this._name = newName;
    }
  }
  
  // Creating an instance of the class
  let myPet = new Animal("Fluffy");
  
  // Accessing methods and properties
  myPet.makeSound();
  console.log(myPet.name);
  myPet.name = "Mittens";
  console.log(myPet.name);


  //Compiling and Running TypeScript Code:
  // tsc app.ts


  //This will generate a file named app.js. Now, you can run the JavaScript code using Node.js:
    // node app.js