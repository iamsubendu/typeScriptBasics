// Create a stack class with push and pop operations
// that works for any data type using generics

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

console.log('Number Stack (Peek):');
console.log('Top item:', numberStack.peek()); // Peek at the top item

console.log('\nNumber Stack (Pop):');
while (!numberStack.isEmpty()) {
  console.log(numberStack.pop());
}

const stringStack = new Stack<string>();
stringStack.push('one');
stringStack.push('two');
stringStack.push('three');

console.log('\nString Stack (Peek):');
console.log('Top item:', stringStack.peek()); // Peek at the top item

console.log('\nString Stack (Pop):');
while (!stringStack.isEmpty()) {
  console.log(stringStack.pop());
}

// The Stack class is defined with a generic type parameter
//  T, which allows you to specify the data type when
//  creating an instance of the class.

// The push method adds an item of type T to the stack.

// The pop method removes and returns an item of type
// T from the stack.It returns undefined if the stack is empty.

// The peek method returns the top item of the stack without removing it.

// The isEmpty method checks if the stack is empty.

// The size method returns the number of items in the stack.

// The clear method clears the stack.
