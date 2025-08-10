import add, {multiply as mul} from './math.js';

// import * as math from "./math.js"; imports all function from math
console.log(add(1,3));


// Template literals, string interpolations and multi-line str
/*const firstName = "John"
const greeting = "Hello " + John; 
const greeting1 = `Hello ${firstName}`; 
console.log(greeting);

const a = 10;
const b = 20;

const desc = `The sum of ${a} and ${b} is ${a+b}`

console.log(desc);

const user = {
    name: "Alice",
    age : 30,
    city: "Wonderland"
}

const desc = `User Information:
Name: ${user.name}
Age: ${user.age}
City: ${user.city}`

console.log(desc);

//Array find()
const todos = [
    { id: 1, task: "Learn JS", completed:false},
    { id: 2, task: "Practice React", completed:true},
    { id: 3, task: "Build a project", completed:false}
];

const todoByid = todos.find((todo) => todo.id === 2 || 
todo.completed == false || todo.task == "Build a project"); // returns the first true statement

console.log(todoByid);*/

//Array filter
const todos = [
    { id: 1, task: "Learn JS", completed:false},
    { id: 2, task: "Practice React", completed:true},
    { id: 3, task: "Build a project", completed:false},
];

const completedTodos = todos.filter(todo => todo.task.includes("project"));

console.log(completedTodos);


//Array For Each

todos.forEach((todo, index) => {
    todo.completed = true;  // modified the existing array
});

console.log(todos)

//Array Map

const mappedTodos = todos.map((todo) => {
    return {id: todo.id, desc: todo.task } // transform it to whatever we like
});
console.log(mappedTodos)

const mappedTodos1 = todos.map((todo) => {
    return {...todo, priority:"High"} // transform it to whatever we like
});
console.log(mappedTodos1)
