const bookListButton = document.querySelector('.booklist');
const bookList = document.querySelector('#book-list');
const addBookButton = document.querySelector('.addbook');
const addBook = document.querySelector('#add-book');
const contactButton = document.querySelector('.contact');
const contact = document.querySelector('#contact');
const logo = document.querySelector('.nav-logo');

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