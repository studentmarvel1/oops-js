nction Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function() {
      return `${this.title} was written by ${this.author} in ${this.year}`
    }
  }

  // instatiatev an object
  const book1 = new Book('Book one', 'steven', '2014');
  const book2 = new Book('Book Two', 'steven', '2016');

  console.log(book1.getSummary());