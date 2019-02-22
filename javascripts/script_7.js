const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log(books.every(book => book.rented > 0));

console.log(books.reduce((acc, curBook) => curBook.rented > acc.rented ? acc = curBook : acc));

console.log(books.reduce((acc, curBook) => curBook.rented < acc.rented ? acc = curBook : acc));

console.log(books.filter(book => book.id === 873495));

books.splice(books.findIndex(book => book.id === 133712), 1);
console.log(books);

console.log(books.sort((a, b) => a.title.localeCompare(b.title, 'en', {'sensitivity': 'base'})));
