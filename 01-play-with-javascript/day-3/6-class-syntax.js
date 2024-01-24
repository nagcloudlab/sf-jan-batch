


//-------------------------------------
// classes
//-------------------------------------


// till ES5,

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }
// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age + " old");
// }

// from Es6 ( ECMASCRIPT-2015)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('Person::constructor()');
    }
    sayName() {
        console.log('im ' + this.name);
    }
    sayAge() {
        console.log('im ' + this.age + " old");
    }
}

// const p1 = new Person('Nag', 33);
// const p2 = new Person('Ria', 2);

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        console.log('Employee::constructor()');
    }
    saySalary() {
        console.log('i get ' + this.salary + " only");
    }
    askForBonus() {
        return this.salary * 0.02;
    }
}

// const e = new Employee('Nag', 33, 1000.00);

class Boss extends Employee {
    // oveeriding
    askForBonus() {
        // const f = () => {
        //     console.log(this);
        // }
        // f()
        return this.salary * 0.2 + super.askForBonus();
    }
}

// const boss = new Boss('Nag', 33, 1000.00);
// boss.askForBonus();



//-------------------------------------

class Abc {
    static staVar = 12; // class variable
    static staMethod() { // class method
        console.log('static method');
        // this logic not specific to instance
    }
}

Abc.staVar = 12;
// Abc.staMethod();



//-------------------------------------

class Emp {
    // id;
    // name;
    // salary;
    address = "universe";
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}

// const emp = new Emp(12, 'Nag', 1000.00);
// console.log(emp);

//-------------------------------------

class A { }
const instance = new A();

//-------------------------------------




class E {
    static tnrName = "Nag";
    id;
    name;
    static doTeach() {

    }
    doListen() {
        console.log('E::doListen()');
    }
}


class TE extends E {
    doListen() {
        console.log('TE::doListen()');
    }
}


TE.tnrName = "Ria";
TE.doTeach()
const te = new TE();
console.log(te.id);
console.log(te.name);
te.doListen();


//-------------------------------------







