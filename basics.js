// 
// const s = 'Hello';
// console.log(typeof s);


// const s2 = new String('oops');
// console.log(typeof s2);

// console.log(window);
//  alert(1);

// console.log(navigator.appVersion);
// const book1 = {
//     title: 'Book One',
//      author: 'stephen',
//      year: '2021',
//      getSummary: function() {
//          return `${this.title} was written by ${this.author} in ${this.year}`;
//      }
//     };
//     const book2 = {
//         title: 'Book Two',
//          author: 'steve',
//          year: '2021',
//          getSummary: function() {
//              return `${this.title} was written by ${this.author} in ${this.year}`;
//          }
//         };  
//     // console.log(book1.getSummary());

//     console.log(Object.keys(book2));

  // Constructor
  function Book(title, author, year) {
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





















