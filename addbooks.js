let books = [];

if (storedBooks !== null) {
  document.getElementById('books').innerHTML = '';
  for (let i = 0; i < storedBooks.length; i += 1) {
    const divBooks = document.getElementById('books');
    const book = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const line = document.createElement('hr');
    const button = document.createElement('button');
    title.innerText = storedBooks[i].title;
    author.innerText = storedBooks[i].author;
    button.innerText = 'Remove';
    button.setAttribute('id', storedBooks[i].id);
    button.setAttribute('onclick', 'removeBook(this.id)');
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(button);
    book.appendChild(line);
    divBooks.appendChild(book);
  }
