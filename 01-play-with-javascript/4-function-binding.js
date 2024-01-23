"use strict";


// function is first class citizen in javascript
// function relates input to an output
// - pure function
// - reducer function

// function add(x, y) {
//     return x + y;
// }

// add(12, 13); // 25


// -------------------------------------------------------

// function binding

// 1. static binding
// 2. dynamic binding

// -------------------------------------------------------

// this keyword => current context/scope's owner ( object )

//--------------------------------------------------------
// 1. static binding

// Quiz

function sayNameForAll() {
    console.log('im ' + this.name);
}

let p1 = {
    name: 'Nag',
    sayName: sayNameForAll
};

let p2 = {
    name: 'Ria',
};
p2.sayName = sayNameForAll;



// --------------------------------------------------------
// 2. dynamic binding
// --------------------------------------------------------

//---------------------------------
// salesforce training module
//---------------------------------
function doTraining(sub, duration, location) {
    console.log(`
    the trainer ${this.name}, teaching ${sub} for ${duration} days @ ${location}
    `);
}
//---------------------------------
// the skill enhancer ( TSE )
//---------------------------------
let tnr = {
    name: 'Nag'
};
Object.preventExtensions(tnr);

//---------------------------------

// tnr.doTraining = doTraining; // error
// tnr.doTraining('.js', 4, 'online');

//---------------------------------

// way-1 : bind() ( bind once, run many times )

// const nagTnrDoTraining = doTraining.bind(tnr, '.js', 4);
// nagTnrDoTraining("online")
// nagTnrDoTraining("classroom")


// way-2 : call()  ( bind + run )

// doTraining.call(tnr, '.js', 4, 'online');

// way-3 : apply() ( bind + run )

// doTraining.apply(tnr, ['.js', 4, 'online']);


//---------------------------------

// constructor function

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

const p11 = new Person('Nag', 36);
const p22 = new Person('Ria', 3);


// --------------------------------------------------------
// Quiz-1
//---------------------------------------------------------

const myName = "GLOBAL";

const p = {
    myName: "Nag",
    sayName() {
        console.log("im " + myName);
        console.log("im " + p.myName); // not recommended
        console.log("im " + this.myName); // recommended
    }
}
p.sayName(); // ??

// --------------------------------------------------------


// --------------------------------------------------------
// Quiz-2
//---------------------------------------------------------


const trainer = {
    name: "Nag",
    doTeach: function () {
        console.log("the trainer " + this.name + " teaching .js");
        const self = this;
        const askQuestion = function (q) {
            console.log("the trainer " + self.name + " answering " + q);
        }
        console.log("teaching ends");
        return askQuestion;
    }
}

let askQuestion = trainer.doTeach();
askQuestion("Q1");

// way-1 : static function binding
// trainer.askQuestion = askQuestion;
// trainer.askQuestion("Q1");

// // way-2 : dynamic function binding
askQuestion.call(trainer, "Q2");

let newTrainer = { name: 'Ria' };
askQuestion = trainer.doTeach.call(newTrainer);
askQuestion("Q3");




