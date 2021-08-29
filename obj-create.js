// object of protos
const bookprotos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year; 
    
        return `${this.title}  is ${this.year} years old`;
    }
   };


   // create object
   const book1 = Object.create(bookprotos);
   book1.title = 'Book One';
   book1.author = 'stephen';
   book1.year = '1998';

   console.log(book1);