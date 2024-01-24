{

    
//! type aliases

// define a tuple type. Tuple's are fixed length arrays where each element has a fixed type
type rgb = [number, number, number];

function setTheme(): rgb {

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return [r, g, b];// return a tuple
    //...
}

const colorOne = setTheme();
const colorTwo = setTheme();

console.log(colorOne, colorTwo);

//type tha describes a object

type User = {
    name: string;
    score: number;
}

// an object of type User
const userOne: User = { name: 'John Doe', score: 99 };

// a function that excepts an object of type User

function logUser(user: User): void {
    console.log(` ${user.name} has a score of ${user.score}`);
}

// pass in an userOne(object) of type User
logUser(userOne);

// create a new object of type User
logUser({ name: 'Jane Fro', score: 100 });


//! Union types

let myId: string | number; // myId can be either a string or a number

myId = 10;

myId = '10';

// myId = true; // error

let email: string | null = null; // email can be either a string or null: null=null means that the variable is empty


email = 'test@test.com'
email = null;
//email = 99; // error


// type aliases - create a new name for a type
type Id = string | number; // type alias
let userId: Id; // uThis is how union types are similar to interfaces

userId = 103422323;
userId = '103422323';
//userId = true; // error


// Where unison types are not useful

function swapIdType(id: Id): Id {
    //.we can only use values that are common to both types
    // return parseInt(id);
    // we cant user parseInt() because it only accepts a string

    return id
}

console.log(swapIdType('123'));



//! type guards
//Are used to narrow down the type of an object within a conditional block

// a function that accepts a string or a number
function swapIdTypeGuard(id: Id): Id {
    
    if (typeof id === 'string') {
        return parseInt(id); // Now we can use parseInt() because we know that id is a string
    } else {
        return id.toString();// Now we can use toString() because we know that id is a number
    }

}
const idOne = swapIdTypeGuard(14);

const idTwo = swapIdTypeGuard('14');

console.log(idOne, idTwo)


}