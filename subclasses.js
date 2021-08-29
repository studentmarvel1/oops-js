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


// subclass
  
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate Magazine
const mag1 = new Magazine('Mag One', 'steven', '2020', 'jan');
console.log(mag1.getSummary())