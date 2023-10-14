// Add validations to library found in Oops
// 1.ISBN must be positive number
// 2.title must be valid string
// 3.Book must not be null

class Book {
  private _ISBN: number;
  private _title: string;

  constructor(ISBN: number, title: string) {
    if (ISBN > 0 && !isNaN(ISBN)) {
      this._ISBN = ISBN;
    } else {
      throw new Error('ISBN must be a positive number.');
    }

    if (title && typeof title === 'string') {
      this._title = title;
    } else {
      throw new Error('Title must be a valid string.');
    }
  }

  get ISBN(): number {
    return this._ISBN;
  }

  set ISBN(ISBN: number) {
    if (ISBN > 0 && !isNaN(ISBN)) {
      this._ISBN = ISBN;
    } else {
      throw new Error('ISBN must be a positive number.');
    }
  }

  //     get ISBN(): number: This is a getter method for retrieving
  // the value of the ISBN property.It returns the value of the
  // private property _ISBN, which is of type number.

  // set ISBN(ISBN: number): This is a setter method for setting
  // the value of the ISBN property.It takes a number as an argument
  // and enforces validation rules.If the provided ISBN is a positive
  // number, it sets the private property _ISBN to that value.
  // If the ISBN is not valid, it throws an error.

  // the get and set methods are used because the ISBN and
  // title properties are defined as private.When you define
  // a property as private in a TypeScript class, it means that
  // the property is not accessible or modifiable from outside
  // the class. To provide controlled access to private properties,
  // you typically use getter and setter methods.

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    if (title && typeof title === 'string') {
      this._title = title;
    } else {
      throw new Error('Title must be a valid string.');
    }
  }
}

try {
  // Create a valid book
  const validBook = new Book(123456, 'Example Book');
  console.log('Valid Book - ISBN:', validBook.ISBN, 'Title:', validBook.title);

  // Attempt to change ISBN and title
  validBook.ISBN = 789012; // Valid ISBN
  validBook.title = 'New Title'; // Valid title

  console.log(
    'Updated Book - ISBN:',
    validBook.ISBN,
    'Title:',
    validBook.title
  );
} catch (error: any) {
  console.error('Error:', error.message);
}

try {
  const invalidBook = new Book(-1, 'String');
  console.log(
    'Invalid Book - ISBN:',
    invalidBook.ISBN,
    'Title:',
    invalidBook.title
  );
} catch (error: any) {
  console.error('Error:', error.message);
}
