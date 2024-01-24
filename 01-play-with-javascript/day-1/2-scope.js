"use strict"


// scope / execution context

// => stack-frame with args, local-var to execute function

// by default, one global-scope in javascript-runtime

// phase-1 : creation / push

// -> any variable declared with 'var' keyword, will get hoisted with default value ( undefined ),

// phase-2 : execution / pop

//  -> instructions will get execute in sequence

//-----------------------------------------------------------------------

// debugger
// console.log(v);
// var v = 12;
// console.log(v);


//-----------------------------------------------------------------------

// each function invocation also creates new-scope,
// which is child of in-which scope that function has declared/created

//-----------------------------------------------------------------------

// var v = 12;
// function f1() {
//     console.log(v);
//     var v = 13;
// }
// f1(); // f1-scope  <-- global-scope


//-----------------------------------------------------------------------

// Quiz-1

// var v = 12;
// function f1() {
//     function f2() {
//         console.log(v);
//     }
//     f2(); // f2-scope <-- f1-scope
//     //var v = 13;
// }
// f1(); // f1-scope  <-- global-scope

//-----------------------------------------------------------------------

// Quiz-2

// var v = 12;
// var v = 13;

//-----------------------------------------------------------------------

// Quiz-3

// var v = 12
// if (true) {
//     var v = 13
// }
// console.log(v);

// no-block-scope in 'es5', 

//-----------------------------------------------------------------------

// Problems with 'var' keyword

// => always get hoist
// => can re-declare same variable within scope
// => no block-scope

// soln : using 'let' & 'const' keywords ( from es6 )

//-----------------------------------------------------------------------

// let v = 12;
// console.log(v);

//-----------------------------------------------------------------------

// let v = 12;
// let v = 13;

//-----------------------------------------------------------------------   

// let v = 12
// if (true) {
//     let v = 13
// }
// console.log(v)

//-----------------------------------------------------------------------   

// const v = 12;
// v = 13; // error

//-----------------------------------------------------------------------   

// Quiz-4

// const person = {
//     name: 'Nag'
// };

// person.name = "Nag N";

// // person = null // error

//-----------------------------------------------------------------------

// take-away

// use 'let' for mutable reference
// use 'const' for immutable reference
// avoid 'var' keyword

//-----------------------------------------------------------------------

// for (let i = 0; i < 2; i++) {
//     for (let i = 0; i < 2; i++) {
//         console.log("salesforce");
//     }
// }

//-----------------------------------------------------------------------

// mutable types vs immutable types

/*
    a. mutable
        - object
        - array
        - function

    b. immutable
        - all primitives
          e.g string, number, boolean, undefined

*/


// const n1 = 12
// n1 = 13; // error

// const o = {
//     x: 1
// }
// o.x = 2; // no error

//-----------------------------------------------------------------------   

// let i = 10
// const j = i // value copy

//-----------------------------------------------------------------------   


// let v = 0;
// function f() {
//     v = 12
// }
// f()
// console.log(v);


//-----------------------------------------------------------------------


