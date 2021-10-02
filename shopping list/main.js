const text = document.getElementById('text');
text.innerHTML = "add text";

const hello = document.querySelector('h1');
hello.textContent= 'select tag';

const newid = document.getElementById('new');
const newText = document.createElement('h1');
newText.innerHTML = "creating and placing new nodes";
newid.appendChild(newText);

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(e){
    alert('hello world')
});

// shopping list

const item = document.getElementById('item');
const list = document.getElementById('list');
const btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    let myItem = item.value;
    item.value =' ';

const li = document.createElement('li');
const span = document.createElement('span');
const del = document.createElement('button');

li.appendChild(span)
span.textContent = myItem;
li.appendChild(del);
del.textContent ='Delete';
list.appendChild(li);

del.addEventListener('click', function(e){
    list.removeChild(li);
});
input.focus();
});