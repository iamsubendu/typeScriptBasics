//create reusable module

import { genericFunction, GenericClass } from './utils';

const result = genericFunction('Hello, TypeScript');
console.log(result); // Output: Hello, TypeScript

const instance = new GenericClass<number>(42);
console.log(instance.getValue()); // Output: 42
