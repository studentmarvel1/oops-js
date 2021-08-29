function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    
  }
    
  //getSummary
  Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
  };


  function Magazine(title, author, year, month) {
      Book.call(this, title, author, year);

      this.month = month;
  }


  // inherit prototype
 Magazine.prototype = Object.create(Book.prototype);



  // Instantiate objective
  const mag1 = new Magazine('Mag one', 'steve', '2020', 'oct');
  const mag2 = new Magazine('Mag Two', 'Evans', '2018', 'oct');

  Magazine.prototype.constructor = Magazine;

 

console.log(mag1.getSummary());






