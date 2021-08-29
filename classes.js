class Book {
    constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    }

getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

getAge() {
    const years = new Date().getFullYear() - this.year; 

    return `${this.title}  is ${this.year} years old`;
}

revise(newyear) {
    this.newyear = newyear;
    this.revised = true;
}

    static topBookStore() {
        return 'Barnes & Noble';
    }
};
// instantiate object

const book1 = new Book('Book One', 'stephen', '2018');
// console.log(book1);
// book1.revise('2018')
// console.log(book1)

 console.log(Book.topBookStore());