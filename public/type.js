"use strict";
{
    function setTheme() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return [r, g, b]; // return a tuple
        //...
    }
    const colorOne = setTheme();
    const colorTwo = setTheme();
    console.log(colorOne, colorTwo);
    // an object of type User
    const userOne = { name: 'John Doe', score: 99 };
    // a function that excepts an object of type User
    function logUser(user) {
        console.log(` ${user.name} has a score of ${user.score}`);
    }
    // pass in an userOne(object) of type User
    logUser(userOne);
    // create a new object of type User
    logUser({ name: 'Jane Fro', score: 100 });
    //! Union types
    let myId; // myId can be either a string or a number
    myId = 10;
    myId = '10';
    // myId = true; // error
    let email = null; // email can be either a string or null: null=null means that the variable is empty
    email = 'test@test.com';
    email = null;
    let userId; // uThis is how union types are similar to interfaces
    userId = 103422323;
    userId = '103422323';
    //userId = true; // error
    // Where unison types are not useful
    function swapIdType(id) {
        //.we can only use values that are common to both types
        // return parseInt(id);
        // we cant user parseInt() because it only accepts a string
        return id;
    }
    console.log(swapIdType('123'));
    //! type guards
    //Are used to narrow down the type of an object within a conditional block
    // a function that accepts a string or a number
    function swapIdTypeGuard(id) {
        if (typeof id === 'string') {
            return parseInt(id); // Now we can use parseInt() because we know that id is a string
        }
        else {
            return id.toString(); // Now we can use toString() because we know that id is a number
        }
    }
    const idOne = swapIdTypeGuard(14);
    const idTwo = swapIdTypeGuard('14');
    console.log(idOne, idTwo);
}
