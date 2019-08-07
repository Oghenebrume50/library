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

let book1 = new Book("Hobbit", "J.R.R. Tolkien", 295, false);
myLibrary.push(book1);

function toogleForm() {

}

function addBookToLibrary() {
  let addBook = document.getElementById('addBook')
  addBook.addEventListener('click', () => {
    const form = document.createElement('form');

  })
}

function render() {
  x = document.getElementById("form-parent");
  x.style.display = "none";
  myLibrary.forEach((book) => {
    console.log(book.info());
  })
}

function displayForm() {
  var x = document.getElementById("form-parent");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  render();
});