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

// let add = function (x, y) {
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

// function getCoffee() {
//     return "plain coffee";
// }

function getCoffee(type) {
    if (arguments.length === 0) return "plain coffee";
    return type + " coffee";
}

console.log(getCoffee());
console.log(getCoffee("black"));
console.log(getCoffee("cold"));

//-------------------------------------------------------------