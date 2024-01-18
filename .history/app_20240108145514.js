// Basic Types:
// 1. Number
var age = 25;
// 2. String
var firstName = "John";
// 3. Boolean
var isStudent = true;
// 4. Array
var numbers = [1, 2, 3];
// 5. Tuple
var person = ["Alice", 30];
// 6. Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var chosenColor = Color.Green;
// 7. Any
var unknownValue = 10;
unknownValue = "Hello";
// 8. Void
function sayHello() {
    console.log("Hello!");
}
// 9. Null and Undefined
var nullValue = null;
var undefinedValue = undefined;
// Functions:
// Function with types
function add(x, y) {
    return x + y;
}
var result = add(3, 5);
console.log(result);
// Using interface
var user = {
    name: "Alice",
    age: 25,
};
// Classes:
var Animal = /** @class */ (function () {
    // Constructor
    function Animal(name) {
        this._name = name;
    }
    // Method
    Animal.prototype.makeSound = function () {
        console.log("Some generic sound");
    };
    Object.defineProperty(Animal.prototype, "name", {
        // Getter
        get: function () {
            return this._name;
        },
        // Setter
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
// Creating an instance of the class
var myPet = new Animal("Fluffy");
// Accessing methods and properties
myPet.makeSound();
console.log(myPet.name);
myPet.name = "Mittens";
console.log(myPet.name);
//Compiling and Running TypeScript Code:
// tsc app.ts
//This will generate a file named app.js. Now, you can run the JavaScript code using Node.js:
// node app.js
