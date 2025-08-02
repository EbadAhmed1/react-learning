
//Scope of let,var,const

/* function main() {

 //   var x = 10;

 //   var x = 20;
 //     let x = 10;
      const x = 10;
 //       x = 20;

    if(true) {
        // var x = 30;
        // let x = 20;
        const x = 30;
    }

    console.log(x);
}

main(); 

function main() {
    const book = { title: "Hello World "};

    book.title = "Hello world 1";

    console.log(book);
}

main();

const addTrad = function (a,b) {
    return a + b;
};

//Arrow Function
const add = (a,b) => {
    console.log("Starting sum");
    return a+b;
}

const test = () => console.log("test");

console.log(addTrad(1,2));

const ids = [1,2,3,4,5];

ids.forEach((id) => {
    id++;
    console.log(id);
});

//Function as a declaration or expression

// if used as a declaration it could be called before initialization
test(); 
const test = () => {
    console.log("Hello World");
};

// Rest Operator

function test(firstArgument, secondArgument, ...otherArguments){
    console.log(firstArgument);
    console.log(otherArguments);
}
test("Peter","Max","Schwimdazt");

*/

//Spread Operator ...

//spread just array

const fruits = ["apple", "banana"];
const moreFruits = ["cherry", "melon"];

const allFruits = [...fruits, ...moreFruits, "cherry"];

console.log(allFruits);



