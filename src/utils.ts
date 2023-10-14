export function genericFunction<T>(input: T): T {
  // Your generic function implementation
  return input;
}

export class GenericClass<T> {
  constructor(private value: T) {}

  getValue(): T {
    return this.value;
  }
}
