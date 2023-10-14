"use strict";
let sales = 1234;
let course = 'Typescript';
let isPublished = true;
let level;
let numbers = [1, 2, 3];
console.log(numbers);
let user = [1, 'Bad'];
console.log(user);
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 5000)
        return income * 10;
    return 0;
}
const data = calculateTax(1200, 2023);
console.log(data);
let employee = { id: 1 };
let es = {
    id: 1,
    name: 'JS',
};
console.log(es);
es.id = 3;
console.log(es);
let ed = {
    id: 1,
    name: 'JS',
    retire: (date) => {
        console.log(date);
    },
};
console.log(ed);
let e1 = {
    id: 2,
    name: 'JS',
    retire: (date) => {
        console.log(date);
    },
};
console.log(e1);
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2;
    else
        return parseInt(weight) * 3;
}
const res1 = kgToLbs(10);
const res2 = kgToLbs('30kg');
console.log(res1, res2);
let testBox = {
    drag: () => { },
    resize: () => { },
};
console.log(testBox);
let quantity;
quantity = 50;
function greet(name) {
    console.log(name.toUpperCase());
}
const d1 = greet('sd');
function greet1(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hello');
}
const d2 = greet1(null);
const d3 = greet1('sd');
const d4 = greet1(undefined);
function getCustomer(id) {
    return id === 0
        ? null
        : {
            birthday: new Date(),
        };
}
let c1 = getCustomer(0);
console.log(c1);
let c2 = getCustomer(2);
console.log(c2);
console.log(c1 === null || c1 === void 0 ? void 0 : c1.birthday);
let log = null;
let d = log === null || log === void 0 ? void 0 : log('a');
console.log(d);
//# sourceMappingURL=2.js.map