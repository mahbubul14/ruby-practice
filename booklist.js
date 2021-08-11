const title = document.querySelector('#title')
const author = document.querySelector('#author')
const btn = document.querySelector('#btn')
const bookList = document.querySelector("#book-list")

btn.addEventListener('click', function(e){
    e.preventDefault();

    if(title.value == "" && author.value == ""){
        alert('please input value')
    }else {
        const newRow = document.createElement('tr');

        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        bookList.appendChild(newRow);
    }
});