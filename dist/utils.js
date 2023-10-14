"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericClass = exports.genericFunction = void 0;
function genericFunction(input) {
    return input;
}
exports.genericFunction = genericFunction;
class GenericClass {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
exports.GenericClass = GenericClass;
//# sourceMappingURL=utils.js.map