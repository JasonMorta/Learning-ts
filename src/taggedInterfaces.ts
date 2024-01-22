{


// tagged interfaces
type Id = string | number; // type alias


interface User {
    type: 'user'; // literal type
    name: string;
    id: Id;
}

interface Member {
    type: 'member'; // This allows us to have different types of users
    name: string;
    id: Id;
    isAdmin: boolean;
}

//check the type of the user using a tagged interface

function redirect(value: User | Member) {
    if (value.type === 'user') {
        console.log('redirect to user dashboard');
    } else if (value.type === 'member') {
        console.log('redirect to admin dashboard');
    }
}

const userOne: User = {name: 'John Doe', id: 1, type: 'user'};
const userTwo: Member = {name: 'Jane Doe', id: 2, type: 'member', isAdmin: true};

redirect(userOne);
redirect(userTwo);



}