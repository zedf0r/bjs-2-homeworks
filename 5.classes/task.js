class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    set state(value) {
        if (value <= 0) {
            this._state = 0;
        } else if (value >= 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }
    
    get state() {
        return this._state
    }

    fix() {
        this.state = this.state * 1.5;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const foundBook = this.books.find(book => book[type] === value);
        return foundBook || null
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(book => book.name === bookName);
        if (bookIndex !== -1) {
            return this.books.splice(bookIndex, 1)[0];
        } else {
            return null;
        }
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return
        }

        if (!this.marks[subject]) {
            this.marks[subject] = [];
        }

        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (!this.marks[subject]) {
            return 0
        }

        return this.marks[subject].reduce(((acc, mark, index, arr) => {
            const sum = acc + mark;

            if (index === arr.length - 1) {
                return sum / arr.length
            }
            return sum
        }
        ), 0);
    }

    getAverage() {

        const allSubject = Object.keys(this.marks)
        let result = [];
        
        for (let i = 0; i < allSubject.length; i++) {
            for (let j = 0; j < this.marks[allSubject[i]].length; j++) {
                result.push(this.marks[allSubject[i]][j])
            }
        }
        const total = result.reduce(((sum, mark) => sum + mark), 0)
        
        if (allSubject.length) {
            return total / result.length;
        }

        return 0
    }
}
