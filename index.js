import {
  addBookButton, contactButton, library, logo, form, dtContainer,
  contact, addBook, bookList, bookListButton,
} from './modules/consts.js';
import listOfBooks from './modules/bookList.js';
import { DateTime } from './modules/luxon.js';

import Book from './modules/book.js';

const dt = DateTime.now();
let dategenerator = '';
dategenerator += `<h2>${dt.month}-${dt.day}-${dt.year} // ${dt.hour}:${dt.minute}</h2>`;
dtContainer.innerHTML = dategenerator;

const openBookList = () => {
  bookList.style.display = 'flex';
  addBook.style.display = 'none';
  contact.style.display = 'none';
};

const openAddBook = () => {
  bookList.style.display = 'none';
  addBook.style.display = 'block';
  contact.style.display = 'none';
};

const openContact = () => {
  bookList.style.display = 'none';
  addBook.style.display = 'none';
  contact.style.display = 'block';
};

bookListButton.addEventListener('click', openBookList);
addBookButton.addEventListener('click', openAddBook);
contactButton.addEventListener('click', openContact);
logo.addEventListener('click', openAddBook);

const deleteBook = (id) => {
  const resultBooks = listOfBooks.filter((book) => book.id !== id);
  localStorage.setItem('listOfBooks', JSON.stringify(resultBooks));
  window.location.reload();
};

const displayBooks = () => {
  let bookgenerator = '';
  listOfBooks.forEach((book) => {
    bookgenerator += `<div class="book">
      <p class="book-text">"${book.title}" by ${book.author}</p>
      <button type="button" class="book-button" id="${book.id}">Remove</button>
  </div>`;
    library.addEventListener('DOMSubtreeModified', () => {
      document.querySelectorAll('.book-button').forEach((bookBtn) => {
        bookBtn.addEventListener('click', () => deleteBook(book.id));
      });
    });
  });
  library.innerHTML = bookgenerator;
};

const addBookTo = (title, author, id) => {
  const newBook = new Book(title, author, id);
  listOfBooks.push(newBook);
  localStorage.setItem('listOfBooks', JSON.stringify(listOfBooks));
  displayBooks();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;
  const id = Math.random() * 100000;
  addBookTo(title, author, id);
  form.reset();
});
window.onload = () => {
  displayBooks();
};