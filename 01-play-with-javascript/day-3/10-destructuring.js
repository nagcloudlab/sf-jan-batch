


// destructuring
// reading data-elements to variables from data-structures like objects and arrays


// const person = {
//     name: 'Nag',
//     age: 34
// };

// let myName = person.name;
// let myAge = person.age;

// or

// let { name: myName, age: myAge } = person;


// let { name: name, age: age } = person;
// or
// let { name, age } = person;

//---------------------------------------------


function Clock(props) {
    let { timeZone } = props; // de-structuring
    return `
        <div className="card">
        <div className="card-header">
            ${timeZone}
        </div>
        <div className="card-body">
            <span className="badge badge-dark">${new Date().toLocaleTimeString("en-US", { timeZone })}</span>
        </div>
    `
}

// India
console.log(Clock({ timeZone: 'Asia/Kolkata' }));
// Dubai
console.log(Clock({ timeZone: 'Asia/Dubai' }));










