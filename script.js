'use strict';

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `The ${title} by ${author}, ${pages} pages, ${read ? "already read this" : "not read yet"}`
  }
}



function createBook() {
  const bookTitle = document.getElementById('bookTitle').value;
  const bookAuthor = document.getElementById('bookAuthor').value;
  const bookPages = document.getElementById('bookPages').value;
  const bookRead = document.getElementById('bookRead').value;
  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  return newBook;
}

function addBookToLibrary(newBook) {
  console.log("in the function");
  console.log(newBook.title);
  myLibrary.push(newBook);
  console.log("end of function");
  readLibrary();
}

function readLibrary() {
  const table = document.getElementsByTagName('table')[0];
  console.log("reading");
  const book = myLibrary[myLibrary.length - 1];

    console.log(book.info());
    const tr = document.createElement('tr');
    const title = document.createElement('td');
    title.innerText = book.title;
    const author = document.createElement('td');
    author.innerText = book.author;
    const pages = document.createElement('td');
    pages.innerText = book.pages;
    const read = document.createElement('td');
    read.innerText = book.read;

    tr.appendChild(title);
    tr.appendChild(author);
    tr.appendChild(pages);
    tr.appendChild(read);
    table.appendChild(tr);
}

let addBook = document.getElementById('addBook');
addBook.addEventListener('click', () => {
  addBookToLibrary(createBook());
});

function render() {
  let form = document.getElementById("form-parent");
  form.style.display = "none";
}

function displayForm() {
  let form = document.getElementById("form-parent");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  render();
});