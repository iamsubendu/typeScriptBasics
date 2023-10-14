"use strict";
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
}
const numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log('Number Stack (Peek):');
console.log('Top item:', numberStack.peek());
console.log('\nNumber Stack (Pop):');
while (!numberStack.isEmpty()) {
    console.log(numberStack.pop());
}
const stringStack = new Stack();
stringStack.push('one');
stringStack.push('two');
stringStack.push('three');
console.log('\nString Stack (Peek):');
console.log('Top item:', stringStack.peek());
console.log('\nString Stack (Pop):');
while (!stringStack.isEmpty()) {
    console.log(stringStack.pop());
}
//# sourceMappingURL=7.js.map