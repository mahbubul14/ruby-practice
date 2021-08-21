let text =document.querySelector("#text");
let btn = document.querySelector("#btn");
let result = document.querySelector(("#result"));

function display(){

    newText = document.createElement('p');
    newText.innerHTML =text.value;
    result.appendChild(newText);
}

btn.addEventListener('click', display);

// function display(){
//     alert('It was clicked!');
// }
// btn.addEventListener('click', display);



// const newLine = document.querySelector("#line")
// const first = document.createElement("div")
// first.innerHTML = "hello"
// newLine.appendChild(first);