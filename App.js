Object creation and access question 2 
let book = {
    title: 'Do it Today',
    Author: 'Darius Foroux',
    Year: 2018,
   
}
console.log(book)
console.log(book.title)
console.log(book.Author)



object method question 2
let book1 = {
    title: 'Thermodynamics',
    author: 'Mike Pauken',
    getDetails: function() {
        return `This is the Book Title: ${this.title} and Author name: ${this.author}`;
    }
    
};
console.log(book1.getDetails());

let book1year = {
    title: 'Thermodynamics',
    author: 'Mike Pauken'
};

function updatedYear(year) {
    book1year.year = year;
    return book1year.year; 
}

console.log(updatedYear(2018)); 
Nested Objects
let library = {
    name : 'Diganta',
    Book: {
        book1: 'English First paper',
        Grade: 60
    },
    name2 : 'Moumita',
    Book2: {
        book2: 'English second Paper',
        Grade: 80
    }
    
}

console.log(library)

const Library ={
    name: 'Diganta',
    Book1 : {
        Title: 'Selfish Giant'
    },
    name1 : 'Mouitaa',
    Book2 : {
        Title: 'NSV'
    }
}

const namelibrary = Library.name;
const boooktitle = Library.Book1;
const bookk2title = Library.Book2;


console.log('Library name :', namelibrary);
console.log('Book 1 Title:', boooktitle);
console.log('Book 2 Title:', bookk2title);


The this keyword

let objects1 = {
    bOok: 'hello2',
    tittle: "Developer",
    year : 20000,
    randome1: function(){
        return `This is the title :${this.tittle}, and this is the year : ${this.year}`
    }
}
console.log(objects1.randome1())

Object iteration

const book = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction'
 };
 for (let key in book) {
    console.log(key + ': ' + book[key]);
  }



const book = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction'
  };
  
  const keys = Object.keys(book);
  console.log(keys); 
  
  
  const book1 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction'
  };
  
  const values = Object.values(book);
  console.log(values);
  

Features Request

let Book = {
    title : 'How we get a job',
    Author: 'Diganta gowala',
    log: function(){
        return ` This is the tittle of my property: ${this.title}, and ${this.Author}`
    }
}
console.log(Book);
console.log(Book.Author)


const library = {
    name: 'Central Library',
    location: '123 Library Street, Booktown',
    established: 1985,
    books: [
      {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        year: 1951
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960
      },
      {
        title: '1984',
        author: 'George Orwell',
        year: 1949
      }
    ]
  };
  
 
  console.log('Library name :' + library.name);
  console.log(`Location` + library.location);
  console.log('Established Year: ' + library.established);
  console.log('Books in Library:');

  library.books.forEach((book, index) => {
    console.log(`  Book ${index + 1}:`);
    console.log(`    Title: ${book.title}`);
    console.log(`    Author: ${book.author}`);
    console.log(`    Year: ${book.year}`);
  });

 

// Define an array of objects
const library = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925
    },
    {
      title: '1984',
      author: 'George Orwell',
      year: 1949
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960
    }
  ];
  
  // Using for...in loop to iterate over properties of each object
  console.log('Using for...in loop:');
  library.forEach((book, index) => {
    console.log(`Book ${index + 1}:`);
    for (let key in book) {
      console.log(`  ${key}: ${book[key]}`);
    }
  });
  
  // Using Object.keys() to iterate over properties of each object
  console.log('\nUsing Object.keys():');
  library.forEach((book, index) => {
    console.log(`Book ${index + 1}:`);
    Object.keys(book).forEach(key => {
      console.log(`  ${key}: ${book[key]}`);
    });
  });
  
  // Using Object.values() to iterate over properties of each object
  console.log('\nUsing Object.values():');
  library.forEach((book, index) => {
    console.log(`Book ${index + 1}:`);
    Object.values(book).forEach(value => {
      console.log(`  ${value}`);
    });
  });
  