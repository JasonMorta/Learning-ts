"use strict";
{
    //check the type of the user using a tagged interface
    function redirect(value) {
        if (value.type === 'user') {
            console.log('redirect to user dashboard');
        }
        else if (value.type === 'member') {
            console.log('redirect to admin dashboard');
        }
    }
    const userOne = { name: 'John Doe', id: 1, type: 'user' };
    const userTwo = { name: 'Jane Doe', id: 2, type: 'member', isAdmin: true };
    redirect(userOne);
    redirect(userTwo);
}
