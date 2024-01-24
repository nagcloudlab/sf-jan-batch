"use strict";

// function

// function is like a machine, it takes input and gives output
// function is a first class citizen in javascript (function is a value)

// we can create a function by two ways

// 1. function declaration
// 2. function expression

//-------------------------------------------------------------

// 1. function declaration

// -> function-object created at scope-creation phase
// -> always get hoisted with function-object

// function add(x, y) {
//     return x + y;
// }

//-------------------------------------------------------------

// 2. function expression

// -> function-object created at scope-execution phase

// const add = function (x, y) {
//     return x + y;
// }

//-------------------------------------------------------------
// function parameters
//-------------------------------------------------------------

// function func(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(arguments[3]);
// }

// func()
// func(1)
// func(1, 2)
// func(1, 2, 3)
// func(1, 2, 3, 4)


//-------------------------------------------------------------

// E.x

// function sum() {
//     let r = 0,
//         len = arguments.length,
//         i = 0;
//     while (i < len) {
//         r += arguments[i];
//         i++;
//     }
//     return r;
// }

//-------------------------------------------------------------

// can we overload functions in javascript by params ? No

// function getCoffee(type) {
//     if (arguments.length === 0) return "no coffee";
//     return type + " coffee";
// }

// console.log(getCoffee());
// console.log(getCoffee("black"));
// console.log(getCoffee("cold"));

//-------------------------------------------------------------
// function return
//-------------------------------------------------------------


// function func() {
//     // return undefined
// }


//-------------------------------------------------------------
// functional programming principles
//-------------------------------------------------------------

// 1. function as a value
// 2. function as a parameter
// 3. function as a return

//-------------------------------------------------------------
// 1. function as a value
//-------------------------------------------------------------
// function greet() {
//     console.log("Hello...");
// }

// // greet();

// let sayHello = greet;
// sayHello();
// sayHello();

//-------------------------------------------------------------
// 2. function as a parameter
//-------------------------------------------------------------

function greet(f) {
    console.log("😊😊😊😊😊😊😊😊");
    if (f) {
        f()
    }
    else {
        console.log("Hello...");
    }
    console.log("😊😊😊😊😊😊😊😊");
}

// greet()

//-----------------------------
// some-module
//-----------------------------

const custGreet = function () {
    const hour = new Date().getHours();
    if (hour > 6 && hour < 12) {
        console.log("Good Morning");
    } else if (hour > 12 && hour < 18) {
        console.log("Good Noon");
    }
    else {
        console.log("Good Evening");
    }
}
// greet(custGreet);

//-------------------------------------------------------------

const nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]; // un-typed array

// sorting algorithm
// step-1 : compare 2 values
// step-2 : based on compare result, return 1 or -1 or 0 , swap

const compareFn = function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") return 0;
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}
nums.sort(compareFn)

// console.log(nums);

//-------------------------------------------------------------
// 3. function as a return
//-------------------------------------------------------------

function teach() {
    console.log("teaching...");
    let learn = function () {
        console.log("learning...");
    }
    // learn();
    console.log("teaching ends...");
    return learn;
}

// let learnFunc = teach();
// learnFunc();
// learnFunc();

//-------------------------------------------------------------


//author: dev-1

// function hello() {
//     console.log("Hello...");
//     console.log("😊");
// }

// hello()

// // author: dev-2 ( nag )

// function hi() {
//     console.log("Hi...");
//     console.log("😊");
// }

// hi()

// function hey() {
//     console.log("Hey...");
//     console.log("😊");
// }

// hey()

//-------------------------------------------------------------
// design issues
//-------------------------------------------------------------

// -> code tangling / tight-coupling
// -> code scattering / duplication

// design solution : higher-order functions
//-------------------------------------------------------------



function hello() {
    console.log("Hello...");
}

function hi() {
    console.log("Hi...");
}

function hey() {
    console.log("Hey...");
}

// HOF
function withEmoji(f) {
    return function () {
        f();
        console.log("😊");
    }
}


// hello()
// withEmoji(hello)()
// withEmoji(hi)()


//-------------------------------------------------------------
// function closure
//-------------------------------------------------------------

// closure is a function along with its lexical scope

// A closure is a function having access to the parent scope,
// even after the parent function has closed.

function teach(sub) {
    console.log(`teaching ${sub}`);
    let notes = `${sub}-notes`;
    let fun = "bla bla bla";
    function learn() {
        console.log("learning with " + notes);
    }
    //learn(); // learn-scope <-- teach-scope
    console.log("teaching ends");
    return learn;
}

// const learnFn = teach(".js")
// learnFn(); // learn-scope <-- teach-scope


//-------------------------------------------------------------
// why / where we need closures ?
//-------------------------------------------------------------

// use-1 : to abstract public behav of any module
// use-2 : while executing func async, to access parent-scoped data

//-------------------------------------------------------------

// use-1 : to abstract public behav of any module

// E.g counter-module

//   - increment
//   - get


// Self-executable function 
// IIFE ( Immediatly Invokable Function Expression )
// IIFE  ==> module design pattern

let value = 100;

const counter = (function (intialCount) {
    console.log("init()");
    let c = 10 * intialCount
    let count = c; // private
    // public
    function increment() {
        count++;
    }
    function get() {
        return count;
    }
    return {
        increment: increment,
        get: get
    }
})(value);

// ------------------------------------------------

// use-2 : while executing func async, to access parent-scoped data











