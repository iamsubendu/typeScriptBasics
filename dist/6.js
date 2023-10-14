"use strict";
class Book {
    constructor(ISBN, title) {
        if (ISBN > 0 && !isNaN(ISBN)) {
            this._ISBN = ISBN;
        }
        else {
            throw new Error('ISBN must be a positive number.');
        }
        if (title && typeof title === 'string') {
            this._title = title;
        }
        else {
            throw new Error('Title must be a valid string.');
        }
    }
    get ISBN() {
        return this._ISBN;
    }
    set ISBN(ISBN) {
        if (ISBN > 0 && !isNaN(ISBN)) {
            this._ISBN = ISBN;
        }
        else {
            throw new Error('ISBN must be a positive number.');
        }
    }
    get title() {
        return this._title;
    }
    set title(title) {
        if (title && typeof title === 'string') {
            this._title = title;
        }
        else {
            throw new Error('Title must be a valid string.');
        }
    }
}
try {
    const validBook = new Book(123456, 'Example Book');
    console.log('Valid Book - ISBN:', validBook.ISBN, 'Title:', validBook.title);
    validBook.ISBN = 789012;
    validBook.title = 'New Title';
    console.log('Updated Book - ISBN:', validBook.ISBN, 'Title:', validBook.title);
}
catch (error) {
    console.error('Error:', error.message);
}
try {
    const invalidBook = new Book(-1, 'String');
    console.log('Invalid Book - ISBN:', invalidBook.ISBN, 'Title:', invalidBook.title);
}
catch (error) {
    console.error('Error:', error.message);
}
//# sourceMappingURL=6.js.map