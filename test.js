const book = document.querySelector("#title");
const author = document.querySelector("#author");
const btn = document.querySelector("#btn");
const list = document.querySelector("#book-list")

btn.addEventListener("click", function(){
    if (book.value == ""){
        alert("input the correct value");
    }else{
        const listRow = document.createElement("tr");
        
        const newTitle = document.createElement("th");
        newTitle.innerHTML = book.value;
        listRow.appendChild(newTitle);

        const newAuthor= document.createElement("th");
        newAuthor.innerHTML = author.value;
        listRow.appendChild(newAuthor);

        list.appendChild(listRow);
    }

});