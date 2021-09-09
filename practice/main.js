const book = document.getElementById("book");
const author = document.getElementById("author");
const btn = document.getElementById("btn");
const nList = document.getElementById("list");

btn.addEventListener('click',function(books){
    const submit = document.createElement('li');
    submit.innerHTML = book.value + author.value;
    nList.appendChild(submit);
});

localStorage.setItem(books);
localStorage.getItem(books)