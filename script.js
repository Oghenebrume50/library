let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    return `The ${title} by ${author}, ${pages} pages, ${read? "already read this" : "not read yet" }`
  }
}

let book1  = new Book("Hobbit", "J.R.R. Tolkien", 295, false);
myLibrary.push(book1);

function toogleForm() {

}

function addBookToLibrary(){
  let addBook = document.getElementById('addBook')
  addBook.addEventListener('click', () => {
    const form = document.createElement('form');

  })
}

function render () {
  
  myLibrary.forEach((book) => {
    console.log(book.info());
  })
}

document.addEventListener('DOMContentLoaded', () => {
  render();
});