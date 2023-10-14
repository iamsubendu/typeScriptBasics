Typescript
Built on top of javascript
Address shortcoming of JS
TS is superset of JS
i.e, it has everything of JS and also
have additional features

benefits:-
1.Static typing(c++,c3,java)
=>defined variable can't change its type
2.Code completion
3.Refactoring
4.Shorthand notations

Drawbacks:-
1.Compilation
=>browser don't understand typescript
So,its first translated to JS and this process
is called
Transpilation

TS use ES5 features of JS

npm i -g typescript
tsc -v => to check typescript version
tsc fileName.ts => to compile to JS
tsc --init=> to create config file
tsc => will compile all files
node filename.js -=> to run a js file
create react typescript => npx create-react-app folderName --template typescript 

in config:-
"target": "ES2016" => can change by pressing ctrl + space
// "rootDir": "./", => uncomment this and use accordingly
// "outDir": "./", => uncomment this to add all compiled js files here
// "removeComments": true, => removes all comments in complied JS file
// "noEmitOnError": true, => if error on our code,TS files will still be
complied to JS files,so uncomment to make it not happen
// "sourceMap": true, =>this enables how each line of TS code maps
generated JS code
if used, compile again
// "noUnusedParameters": true, => uncomment so that it gives waring
any parameter is not used
// "noImplicitReturns": true, => uncomment so it won't return
undefined or anything by own
// "noUnusedLocals": true, => uncomment for not using any defined
variables


Type System
Typescript dataTypes can be categorized also
Static,generic and Decorators
UserDefined- Number,Void(Undefined),Boolean,String,Null

UseDefined data type- Array,Class,Touple,Enum,Interface,Functions

============================================================================

Array
Identically typed elements
var list : number[] = [1,2,3]
var list : Array<number> = [1,2,3]

============================================================================

Class
Serve as a model for building objects that can be used as reusable components
class Student{
    roll: number;
    name: string;
    constructor(_roll; number,_name: string){
        this.roll = _roll;
        this.name = _name;
    }
    showDetails(){
        console.log(this.roll + ":" + this.name);
    }
}

============================================================================

Touple
contains 2 sets of values of various data kinds
let a: [string,number];
a = ["hi",0,"hello",1];

============================================================================

Enum
It is a way to define a set of named numeric values. 
Enums are useful for representing a fixed set of values, 
such as days of the week, months, or any other situation 
where you have a known and finite list of options.

enum DaysOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

let today: DaysOfWeek = DaysOfWeek.Wednesday;
console.log("Today is " + DaysOfWeek[today]);
// Today is Wednesday

============================================================================

Interface
an interface is a powerful way to define the shape or 
structure of an object, allowing you to specify the 
properties it should have and their data types. 
Interfaces help ensure that objects conform to a 
specific structure, which can improve code quality 
and maintainability.

// Define an interface
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    email?: string; // Optional property
}

// Create an object that adheres to the interface
const person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

// Access properties of the object
console.log(`Name: ${person.firstName} ${person.lastName}`);
console.log(`Age: ${person.age}`);

// Optional property
if (person.email) {
    console.log(`Email: ${person.email}`);
}

============================================================================

Functions
Logical building elements of a program

============================================================================

Generic
It allow you to create flexible and reusable components 
and functions by enabling you to define type parameters 
that can be used for various data types. Generics provide 
the ability to create code that works with different data 
types while maintaining type safety.


1. Function-Level Generics:

function identity<T>(arg: T): T {
    return arg;
}

let result = identity<string>("Hello, TypeScript");
console.log(result); // Output: Hello, TypeScript

if you specify T as a number (identity<number>), for example, 
TypeScript will ensure that you only use number-related 
operations on the generic value, and it will catch 
type-related errors at compile time.



2. Class-Level Generics:
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const numberBox = new Box<number>(42);
console.log(numberBox.getValue()); // Output: 42

const stringBox = new Box<string>("TypeScript");
console.log(stringBox.getValue()); // Output: TypeScript




3. Interface-Level Generics:
interface KeyValuePair<T> {
    key: string;
    value: T;
}

const numberPair: KeyValuePair<number> = { key: "count", value: 42 };
const stringPair: KeyValuePair<string> = { key: "message", value: "Hello" };



============================================================================

Decorator
It allow you to add metadata and behavior to classes, methods, 
properties, or parameters. They provide a way to annotate and 
modify the structure of classes or class members at design time. 
Decorators are used in various contexts, such as in web frameworks 
like Angular and libraries like MobX. 
In TypeScript, decorators 
are applied using the @ symbol followed by a decorator function.



Class Decorators:

function MyDecorator(constructor: Function) {
    // Modify the class or do something with it
}

@MyDecorator
class MyClass {
    // Class content
}

Class decorators are applied to classes and can be used 
to modify the class definition or to perform some actions
when the class is defined. A class decorator is a function 
that takes the constructor as its sole argument.





Method Decorators:

function MyMethodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // Modify the method behavior or do something with it
}

class MyClass {
    @MyMethodDecorator
    myMethod() {
        // Method content
    }
}






Property Decorators:

function MyPropertyDecorator(target: any, propertyKey: string) {
    // Modify the property or do something with it
}

class MyClass {
    @MyPropertyDecorator
    myProperty: string;
}





Parameter Decorators:

function MyParameterDecorator(target: any, parameterIndex: number) {
    // Modify the parameter or do something with it
}

class MyClass {
    constructor(@MyParameterDecorator param: string) {
        // Constructor content
    }
}


============================================================================


Function overload
allows you to provide multiple type signatures for a 
single function. This enables you to specify different 
parameter and return types for the same function based 
on the number or types of arguments provided. Overloading 
is particularly useful when you have a function that can 
behave differently based on different input types or combinations.

// Function overload signatures
function greet(name: string): string;
function greet(name: string, age: number): string;

// Actual function implementation
function greet(name: string, age?: number): string {
    if (age !== undefined) {
        return `Hello, ${name}! You are ${age} years old.`;
    } else {
        return `Hello, ${name}!`;
    }
}

// Function calls
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob", 30)); // Output: Hello, Bob! You are 30 years old.



============================================================================


Iteration

const numbers: number[] = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


const numbers: number[] = [1, 2, 3, 4, 5];

for (const num of numbers) {
    console.log(num);
}


const numbers: number[] = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
    console.log(num);
});


const person = {
    name: "Alice",
    age: 30,
};

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key, person[key]);
    }
}


const numbers: number[] = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);



const numbers: number[] = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);


const numbers: number[] = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);//0 + 1 + 2 + 3 + 4 + 5 = 15



The reduce method is called on the numbers array. It takes two arguments:

A callback function that is executed for each element in the array.
 In this case, the callback function takes 
 two parameters: acc (accumulator) and num (the current element).

An initial value for the accumulator, which is set to 0.

The callback function iterates over each element in the array. It adds the current 
element (num) to the accumulator (acc) at each step.



============================================================================


Namespaces

Namespaces are a way to group related code into a named scope, 
providing a form of modularization for your code. Namespaces are 
especially useful when working with larger applications or libraries.


namespace MyNamespace {
  export const myVariable = 42;

  export function myFunction() {
    console.log('Hello from myFunction');
  }
}


const value = MyNamespace.myVariable;
MyNamespace.myFunction();


namespace OuterNamespace {
  export const outerVar = 42;

  export namespace InnerNamespace {
    export const innerVar = 'Nested';
  }
}

const outerValue = OuterNamespace.outerVar;
const innerValue = OuterNamespace.InnerNamespace.innerVar;



============================================================================



