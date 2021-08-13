const authorName = document.getElementById("name")
const authorAge = document.getElementById("age")
const addButton = document.getElementById("add")

addButton.onclick = function(){
    const nm = authorName.value;
    const ag = authorAge.value;
    
    console.log(nm);
    console.log(ag);
}