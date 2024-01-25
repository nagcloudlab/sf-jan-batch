
//---------------------------------------------------
// DOM Api
//---------------------------------------------------

const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');

const primaryBtn = document.querySelector('.btn-primary');
const dangerBtn = document.querySelector('.btn-danger');

primaryBtn.addEventListener('click', e => {
    e.stopPropagation();
    cardBody.innerHTML += '<p>Primary button clicked</p>';
})
dangerBtn.addEventListener('click', e => {
    e.stopPropagation();
    if (card.style.display === 'none') {
        card.style.display = 'block';
    }
    else {
        card.style.display = 'none';
    }
})


//---------------------------------------------------
// DOM Api  + XHR ( XmlHttpRequest ) Api
//---------------------------------------------------

// const top5TodosBtn = document.querySelector('#top5-todos-btn');
// const todosBody = document.querySelector('#todos-body');
// const statusMessageSpan = document.querySelector('#status-message');

// top5TodosBtn.addEventListener('click', e => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos?_limit=5', true);
//     xhr.send();
//     statusMessageSpan.innerText = "loading todos..."
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             statusMessageSpan.innerText = "";
//             const todos = JSON.parse(xhr.responseText);
//             const todoRows = todos.map(todo => {
//                 return `<tr>
//                                 <td>${todo.id}</td>
//                                 <td>${todo.title}</td>
//                                 <td>${todo.completed}</td>
//                             </tr>`
//             });
//             todosBody.innerHTML = todoRows.join('');
//         }
//     }
// })


//---------------------------------------------------
// DOM Api  + Fetch Api
//---------------------------------------------------


const top5TodosBtn = document.querySelector('#top5-todos-btn');
const todosBody = document.querySelector('#todos-body');
const statusMessageSpan = document.querySelector('#status-message');

async function fetchTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const todos = await response.json();
    return todos;
}

top5TodosBtn.addEventListener('click', e => {
    statusMessageSpan.innerText = "loading todos..."
    fetchTodos()
        .then(todos => {
            statusMessageSpan.innerText = "";
            const todoRows = todos.map(todo => {
                return `<tr>
                                <td>${todo.id}</td>
                                <td>${todo.title}</td>
                                <td>${todo.completed}</td>
                            </tr>`
            });
            todosBody.innerHTML = todoRows.join('');
        })
        .catch(err => {
            statusMessageSpan.innerText = err.message;
        })
})


//---------------------------------------------------
// DOM Api  + Timer Api
//---------------------------------------------------

const timeNowSpan = document.querySelector('#time-now');

setInterval(() => {
    const now = new Date();
    timeNowSpan.innerText = now.toLocaleTimeString();
}, 1000); // time-event


//---------------------------------------------------


const myWorker = new Worker("worker.js");
myWorker.onmessage = function (e) {
    console.log('message from worker', e.data);
}