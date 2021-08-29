function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    
  }
    
  //getSummary
  Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }


  // getage
  Book.prototype.getAge = function() {
      const years = new Date().getFullYear - this.year;
      return `${this.title} is ${this.year} years old`;
    }
// Revise / change year
  Book.prototype.revise = function(newyear) {
   this.year = newyear;
   this.revised = true;
  }
  // instatiate an object
  const book1 = new Book('Book one', 'steven', '2014');
  const book2 = new Book('Book Two', 'steven', '2016');

  console.log(book1);
  book2.revise('2019');
  console.log(book2);