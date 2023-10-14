let sales = 1234;
let course = 'Typescript';
let isPublished = true;
let level;
//if we don't set it to anything,
//it will be set as of any Type

// let numbers = [1, 2, '3'];
//=> valid in js as JS arrays are dynamic
// let numbers: number[] = [1, 2, '3'];
//=> if function return accepts
// only numbers it will throw error
let numbers: number[] = [1, 2, 3];
console.log(numbers);
let user: [number, string] = [1, 'Bad'];
console.log(user);
// user.push(1);
//=> don't throws error,but it should in future
//===============================================
// const small = 1;
// const medium = 2;
// const large = 3;
//PascalCase=> first letter capital
// enum Size {
//   Small = 1,
//   Medium = 2,
//   Large = 3,
// }
// let mySize = Size.Medium;
// console.log(mySize);
const enum Size {
  // to create more optimized code in JS

  Small = 1,
  Medium = 2,
  Large = 3,
}
let mySize = Size.Medium;
console.log(mySize);
//================================================
function calculateTax(income: number, taxYear = 2022): number {
  //   let x;
  // return a;
  if (taxYear < 5000) return income * 10;
  return 0;
}
const data = calculateTax(1200, 2023);
console.log(data);
//=================================================
let employee = { id: 1 };
// employee.name="JS"
let es: {
  id: number;
  name: string;
} = {
  id: 1,
  name: 'JS',
};
console.log(es);
es.id = 3;
console.log(es);
let ed: {
  id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: 'JS',
  retire: (date: Date) => {
    console.log(date);
  },
};
console.log(ed);
//=====
type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void;
};

let e1: Employee = {
  id: 2,
  name: 'JS',
  retire: (date: Date) => {
    console.log(date);
  },
};
console.log(e1);
//====================================================
function kgToLbs(weight: number | string): number {
  //narrowing
  if (typeof weight === 'number') return weight * 2;
  else return parseInt(weight) * 3;
}
const res1 = kgToLbs(10);
const res2 = kgToLbs('30kg');
console.log(res1, res2);
//=======
//type intersection
type Draggable = {
  drag: () => void;
  //drag is a func with no parameter and returns void
};
type Resizable = {
  resize: () => void;
};
type uiWidget = Draggable & Resizable;
let testBox: uiWidget = {
  drag: () => {},
  resize: () => {},
};
console.log(testBox);
//============================================
// limiting values - Literable types
let quantity: 50 | 100;
// quantity = 51;
quantity = 50;
//============================================
//nullable type
function greet(name: string) {
  console.log(name.toUpperCase());
}
//const d1 = greet(null);
const d1 = greet('sd');
function greet1(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log('Hello');
}
const d2 = greet1(null);
const d3 = greet1('sd');
const d4 = greet1(undefined);
//============================================
type Customer = {
  birthday: Date;
};
function getCustomer(id: number): Customer | null | undefined {
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
// if (c2 !== null && c2 !== undefined) console.log(c2.birthday);
//optional property access operator
console.log(c1?.birthday);
//============================================
//optional element access operator
//c1?.[0]
//optional call
let log: any = null;
// let d = log('a');
//this will make crash because log is null
let d = log?.('a');
console.log(d);
