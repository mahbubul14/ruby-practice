let nMenu = document.createElement('li');
nMenu.textContent = 'hello';
menu.appendChild(nMenu);

const email= document.querySelector('#mail');

email.addEventListener("input", function(event){
    if (email.validity.typeMismatch){
        email.setCustomValidity("Input valid email address");
    } else {
        email.setCustomValidity("");
    }
});