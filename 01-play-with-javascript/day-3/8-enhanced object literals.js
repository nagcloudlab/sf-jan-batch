

let myName = "Nag";
let myAge = 41;

// ES5
let person1 = {
    myName: myName,
    myAge: myAge,
    sayName: function () {
        //..
    },
    staticPropertyName: 123
}
// ES6
let person2 = {
    myName,
    myAge,
    sayName() {
        //..
    },
    [myName + '-' + myAge]: 'some value',
    [1 + 2 + 3 + 4]: 'ten',
    "say Name"() {
        //..
    }
}
