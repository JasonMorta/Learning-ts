{
    interface Author {
    name: string;
    avatar: string;
}

const authorOne: Author = { name: 'John Doe', avatar: 'https://example.com/avatar.png' };


interface Post {
    title: string;
    body: string;
    tags: string[];
    created_at: Date;
    author: Author;
}

// when using th e'Post' interface, we must provide all the properties that are defined in the interface.
// This object must have all the properties defined in the interface
const newPost: Post = {
    title: 'My first⚡ post',
    body: 'Lorem ipsum dolor sit amet',
    tags: ['gaming', 'ipsum', 'doslor'],
    created_at: new Date(),
    //author: authorOne
    author: { name: 'John Fro', avatar: 'https://example.com/avatar.png' }
}

//function argument types
// The argument must be of type Post(interface) when passing it to the function
function createPost(post: Post): void { // void means that the function does not return anything
    console.log(`Createde Post: ${post.title} by ${post.author.name}`);
}

createPost(newPost);// must pass in an object of type Post(interface)


// with arrays

// Each object added to the array must be of type Post(interface - structure)
let posts: Post[] = [];

posts.push(newPost);
}