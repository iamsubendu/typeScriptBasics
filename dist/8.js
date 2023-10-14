"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const result = (0, utils_1.genericFunction)('Hello, TypeScript');
console.log(result);
const instance = new utils_1.GenericClass(42);
console.log(instance.getValue());
//# sourceMappingURL=8.js.map