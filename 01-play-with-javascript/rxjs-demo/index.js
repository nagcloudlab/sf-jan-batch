

const rx = require('rxjs');
const { filter, debounceTime, throttleTime } = require('rxjs/operators');
const { BehaviorSubject } = rx;

const stream$ = new BehaviorSubject(0);

let i = 0;
const intervalId = setInterval(() => {
    i++;
    if (i === 3) {
        stream$.complete();
        clearInterval(intervalId)
    }
    console.log("propagating new value...");
    stream$.next(stream$.getValue() + 1);
}, 1000);


stream$
    //.pipe(filter((result) => result % 2 === 0))
    .subscribe((result) => {
        console.log("result-: " + result);
    });