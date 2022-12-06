import {contact, addBook, bookList, bookListButton, addBookButton, contactButton, library, logo, form} from './modules/consts.js';
import listOfBooks from './modules/bookList.js';

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
    form.reset();
});

import Book from './modules/book.js'

const addBookTo = (title, author, id) => {
    let newBook = new Book(title, author, id);
    listOfBooks.push(newBook);
    console.log(newBook);
    localStorage.setItem('listOfBooks', JSON.stringify(listOfBooks));
    displayBooks();
}

const deleteBook = (id) =>{
    console.log(id);
    const resultBooks = listOfBooks.filter((book) => book.id !== id);
    localStorage.setItem('listOfBooks', JSON.stringify(resultBooks));
    window.location.reload();
}

let displayBooks = () => {
    let bookgenerator = '';
    listOfBooks.forEach((book) => {
      bookgenerator += `<div class="book">
      <p class="book-text">"${book.title}" by ${book.author}</p>
      <button type="button" class="book-button" id="${book.id}">Remove</button>
  </div>`;
  library.addEventListener('DOMSubtreeModified', () => {
    document.querySelectorAll('.book-button').forEach((bookBtn) => {
        bookBtn.addEventListener('click', () => deleteBook(book.id))
      })
  })
    });
    library.innerHTML = bookgenerator;
}

window.onload = () => {
    displayBooks();
}

