const title = document.querySelector('#title')
const author = document.querySelector('#author')
const addbutton = document.querySelector('#addbutton')
const booklist = document.querySelector('#book-list')

addbutton.addEventListener('click', function(e){
    e.preventDefault();

if(title.value ==""){
    alert('please input valid data')
}
else {
    const newRow = document.createElement('tr');

    const newtitle = document.createElement('th')
    newtitle.innerHTML = title.value;
    newRow.appendChild(newtitle)

    const newAuthor = document.createElement('th');
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);


    booklist.appendChild(newRow);
    }
});
