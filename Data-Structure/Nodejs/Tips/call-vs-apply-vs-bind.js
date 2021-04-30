/*
https://medium.com/@leonardobrunolima/javascript-tips-apply-vs-call-vs-bind-d738a9e8b4e1

let customer1 = { name: 'Leo', email: 'leo@gmail.com' };
function greeting(text) {
    console.log(`${text} ${this.name}`);
}

Call : invokes the function and allows you to pass in arguments one by one using commas.

greeting.call(customer1, 'Hello'); // Hello Leo


function greeting(text, text2) {
   console.log(`${text} ${this.name}, ${text2}`);
}

Apply : invokes the function and allows you to pass in arguments as an array.

greeting.apply(customer1, ['Hello', 'How are you?']); // output Hello Leo, How are you?


Bind : method returns a new function.
Bind : allowing you to pass in a `this` array and any number of arguments. 
Bind : Use it when you want that function to later be called with a certain context like events.

let helloLeo = greeting.bind(customer1);
helloLeo('Hello'); // Hello Leo

*/