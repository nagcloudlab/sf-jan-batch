"use strict"


// const getPrice = function () {
//     return 100 + 200;
// }

// or

// const getPrice = () => {
//     return 100 + 200;
// }

//------------------------------------------------------------

// const getPrice = (count) => {
//     return (100 + 200) * count;
// }

// or

// const getPrice = count => {
//     return (100 + 200) * count;
// }

//------------------------------------------------------------


// const getPrice = (count, tax) => {
//     return (100 + 200) * count + tax;
// }

// or


// const getPrice = (count, tax) => (100 + 200) * count + tax;

//------------------------------------------------------------


// const getPrice = (count, tax) => {
//     let cost = (100 + 200) * count + tax;
//     let discount = cost * 0.1;
//     return cost - discount;
// }


//------------------------------------------------------------

// why/where we need arrow-function ?

// use-1 : to make compact function-arg
// use-2 : to capture 'this'

//------------------------------------------------------------

// use-1 : to make compact function-arg


// let numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// numbers.sort(function (x, y) { return x - y });
// numbers.sort((x, y) => { return x - y });
// numbers.sort((x, y) => x - y);
// console.log(numbers);

//------------------------------------------------------------

// use-2 : to capture 'this'


// regular-function
//  - by default bound to undefined in strict-mode, global-obj in non-strict-mode
//  - static / dynamic function-binding possible

// arrow-function
//  - by default bound to parent's 'this'
//  - static / dynamic function-binding not possible

//------------------------------------------------------------


let x = {
    name: "X",
    doWork: function () {
        console.log(this);
        const regularF = function () {
            console.log(this);
        }
        regularF();
        const arrowF = () => {
            console.log(this);
        }
        arrowF();

        let foo = {
            name: "foo"
        }
        let bar = {
            name: "bar"
        }
        foo.regularF = regularF; // static function-binding
        foo.regularF();
        regularF.call(bar); // dynamic function-binding

        foo.arrowF = arrowF; // static function-binding ( but intenal-logic works on creator)
        foo.arrowF();
        arrowF.call(bar); // dynamic function-binding ( but intenal-logic works on creator)
    }
}
// x.doWork()

let y = {
    name: 'Y'
}
// x.doWork.call(y); 


//------------------------------------------------------------
// Quiz
//------------------------------------------------------------


let invoice = {
    num: 123,
    process: function () {
        console.log(`invoice-${this.num} processed partially`);
        return () => {
            console.log(`invoice-${this.num} processed completly`);
        }
    }
}

// const complete = invoice.process();
// complete()



//------------------------------------------------------------



const trainer = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching .js");
        let doAskQ = (q) => {
            console.log(`${this.name} answering ${q}`);
        }
        console.log("teaching ends");
        return doAskQ;
    }
}

const askQ = trainer.doTeach();
askQ('Q1');


//------------------------------------------------------------






