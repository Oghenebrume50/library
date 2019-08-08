const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function changeReadStatus() {
  this.read = !this.read;
}

Book.prototype.changeReadStatus = changeReadStatus;

function createBook() {
  const bookTitle = document.getElementById('bookTitle').value;
  const bookAuthor = document.getElementById('bookAuthor').value;
  const bookPages = document.getElementById('bookPages').value;
  const bookRead = document.getElementById('bookRead').checked;
  if (!bookTitle || !bookAuthor || !bookPages) {
    alert('please fill all fields');
    return '';
  }
  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  return newBook;
}

function readLibrary() {
  const table = document.getElementsByTagName('table')[0];
  table.innerHTML = '';
  const tHead = document.createElement('tr');

  const titleHead = document.createElement('th');
  titleHead.innerText = 'Title';

  const authorHead = document.createElement('th');
  authorHead.innerText = 'Author';

  const pagesHead = document.createElement('th');
  pagesHead.innerText = 'Pages';

  const readHead = document.createElement('th');
  readHead.innerText = 'Reading Status';

  const deleteColumnHead = document.createElement('th');
  deleteColumnHead.innerText = 'Delete';

  tHead.appendChild(titleHead);
  tHead.appendChild(authorHead);
  tHead.appendChild(pagesHead);
  tHead.appendChild(readHead);
  tHead.append(deleteColumnHead);

  table.appendChild(tHead);

  myLibrary.forEach((book, index) => {
    const tr = document.createElement('tr');
    const title = document.createElement('td');
    title.innerText = book.title;
    const author = document.createElement('td');
    author.innerText = book.author;
    const pages = document.createElement('td');
    pages.innerText = book.pages;
    const read = document.createElement('td');
    read.innerText = book.read ? 'already read this' : 'not read yet';
    const readStatus = document.createElement('button');
    readStatus.setAttribute('onclick', `editBookStatus(${index})`);
    readStatus.innerText = 'Change Status';
    read.append(readStatus);
    const deleteColumn = document.createElement('td');
    const deleteBook = document.createElement('button');
    deleteBook.setAttribute('onclick', `removeBook(${index})`);
    deleteBook.innerText = 'Delete';
    deleteColumn.append(deleteBook);

    tr.appendChild(title);
    tr.appendChild(author);
    tr.appendChild(pages);
    tr.appendChild(read);
    tr.append(deleteColumn);

    table.appendChild(tr);
  });
}

function removeBook(val) {
  myLibrary.splice(val, 1);
  readLibrary();
}

function editBookStatus(index) {
  const bookI = myLibrary.slice(index, index + 1)[0];
  bookI.changeReadStatus();
  myLibrary.splice(index, 1, bookI);
  readLibrary();
}

function addBookToLibrary(newBook) {
  if (newBook) {
    myLibrary.push(newBook);
  }
  readLibrary();
}

function hideForm() {
  const form = document.getElementById('form-parent');
  form.style.display = 'none';
}

function render() {
  hideForm();
  const addBook = document.getElementById('addBook');
  addBook.addEventListener('click', () => {
    addBookToLibrary(createBook());
    hideForm();
  });
}

function displayForm() {  // eslint-disable-line no-unused-vars
  const form = document.getElementById('form-parent');
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  render();
});
