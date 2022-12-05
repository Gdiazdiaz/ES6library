const contact = document.querySelector('#contact');
const addBook = document.querySelector('#add-book');
const bookList = document.querySelector('#book-list');
const bookListButton = document.querySelector('.booklist');
const addBookButton = document.querySelector('.addbook');
const contactButton = document.querySelector('.contact');
const library = document.querySelector('.books-container');
const logo = document.querySelector('.nav-logo');
const form = document.querySelector('#form');
import listOfBooks from './modules/bookList.js';
console.log(listOfBooks);

const openBookList = () => {
    bookList.style.display = 'flex';
    addBook.style.display = 'none';
    contact.style.display = 'none';
  }

const openAddBook = () => {
    bookList.style.display = 'none';
    addBook.style.display = 'block';
    contact.style.display = 'none';
    
  }

const openContact = () => {
    bookList.style.display = 'none';
    addBook.style.display = 'none';
    contact.style.display = 'block';
  }

bookListButton.addEventListener('click', openBookList);
addBookButton.addEventListener('click', openAddBook);
contactButton.addEventListener('click', openContact);
logo.addEventListener('click', openAddBook);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.querySelector('#book-title').value;
    let author = document.querySelector('#book-author').value;
    let id = Math.random() * 100000;
    addBookTo(title, author, id);
});

class Book {
    constructor(title, author, id){
        this.title = title;
        this.author = author;
        this.id = id;
    }
}

const addBookTo = (title, author, id) => {
    let newBook = new Book(title, author, id);
    listOfBooks.push(newBook);
    console.log(newBook);
    localStorage.setItem('listOfBooks', JSON.stringify(listOfBooks));
    displayBooks();
}

const deleteBook = (id) => {
    let i = 0;
    let current;
    while(listOfBooks[i].id != id){
        current = listOfBooks[i];
        i++;
    }
    console.log(listOfBooks[i]);
}

const displayBooks = () => {
    let bookgenerator = '';
    listOfBooks.forEach((book) => {
      bookgenerator += `<div class="book">
      <p class="book-text">"${book.title}" by ${book.author}</p>
      <button type="button" class="book-button" id="${book.id}" onClick=deleteBook>Remove</button>
  </div>`;
    });
    library.innerHTML = bookgenerator;
}

window.onload = () => {
    displayBooks();
}