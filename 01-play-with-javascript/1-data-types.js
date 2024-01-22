"use strict";

// data types

// everything is an object

// 1. literals style objects
// 2. constructor style objects

//--------------------------------------------

// 1. string

// literal style
var myName = "Nag";
var myFullName = 'nagabhushanam';
var myAddress = `
    address-line-1
    address-line-2
`
var dynamicString = `the sum of 1 and 2 is ${1 + 2}`

// constructor style
// var myName = new String("Nag");

//--------------------------------------------
// 2. number

// literal style
var count = 12;
var cost = 12.12;

// constructor style
// var count = new Number(12);

//--------------------------------------------
// 3. boolean

// literal style
var isFound = true;
isFound = false;

// imp-note-1 : falsy values : false,0,"",null,undefined,NAN
// imp-note-2 : any other values are truthy
// reference : https://dorey.github.io/JavaScript-Equality-Table/

// constructor style
// var isFound = new Boolean(false);

//--------------------------------------------
// 4. undefined

// any variable declared but not initilized with value
var v;

//--------------------------------------------
// 5. null

// any variable declared and initilized with null value
var person = null;

//--------------------------------------------
// 6. object

// literal style object
// var person1 = {
//     name: 'Nag',
//     age: 41,
// };

// or

// constructor style object
// var person1 = new Object();
// person1.name = 'Nag';
// person1.age = 41;


// imp-note : 

// -> we can add new property to object dynamically i.e extensible
// -> we can delete existing property from object dynamically i.e configurable
// -> we can update existing property from object dynamically i.e mutable


// Object.preventExtensions(person2);
// Object.seal(person1);// Object.preventExtensions + existing property configurable false
// Object.freeze(person1);// Object.seal + existing property mutable false

// person1.address = "chennai";
// delete person1.age;
// person1.name = "Nagabhushanam N";

//--------------------------------------------
// how to access obj's properties ?

// 2 ways

//1. '.' notation

// person1.name = "Nagabhushanam N";
// console.log(person1.name);

//2. '[]' notation

// person1['name'] = "Nagabhushanam N";
// console.log(person1['name']);

// person2['full-name'] = "Nagabhushanam N";
// console.log(person1['full-name']);

// var propName = "name";
// console.log(person1[propName]);

//--------------------------------------------

// 7. array

// literal style 
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// constructor style
// var arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);


//--------------------------------------------

// 8. regexp

// literal style
var aadharPattern = /^\d{4}-\d{4}-\d{4}$/;

// constructor style
// var aadharPattern = new RegExp('^\\d{4}-\\d{4}-\\d{4}$');

//--------------------------------------------

// 9. function

// literal style
var add = function (a, b) {
    return a + b;
}

// constructor style
// var add = new Function("a", "b", "return a+b");

//--------------------------------------------

// 10. date
var date = new Date();


//--------------------------------------------
// can we create out own constructor function to create objects ? Yes

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function () {
    console.log('im ' + this.name);
}
Person.prototype.sayAge = function () {
    console.log('im ' + this.age + " old");
}

var p1 = new Person('Nag', 41);
var p2 = new Person('Ria', 8);


//--------------------------------------------


var foo = {
    x: 12,
    y: 13
}

var bar = {
    z: 20
}

// bar.__proto__ = foo;
Object.setPrototypeOf(bar, foo);

//--------------------------------------------

var i = {
    x: 20
}

var j = Object.create(i);
j.y = 30;

j.x = 0;

console.log(j.x);
console.log(i.x);

//--------------------------------------------


