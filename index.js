let inputVal ='';

document.querySelector('#item').addEventListener('change', function(event){
    inputVal = event.target.value;
})

document.querySelector('form').addEventListener('submit', addTodo)

function addTodo(event){
event.preventDefault()
event.stopPropagation();
const item = document.createElement('li');
item.innerText = inputVal;
item.addEventListener('click', completeTodo)
console.log(item.innerText);

const button = document.createElement('button')
button.innerText = 'x';
button.addEventListener('click', removeTodo)
item.appendChild(button)

const list = document.querySelector('ul');
if(inputVal)list.appendChild(item);

document.querySelector('#item').value = '';
inputVal = '';
}

function removeTodo(event){
    event.target.parentNode.remove()
}

function completeTodo(event){
   
    if (event.target.getAttribute("aria-checked") !== 'true'){
         event.target.setAttribute("aria-checked", "true")

         const complete = document.getElementById('completed-message')
        //  complete.style.visibility = 'visible';
        complete.classList.toggle('hidden');
         setTimeout(function(){
        //  complete.style.visibility = 'hidden';
        complete.classList.toggle('hidden');

         }, 2000)
        }
    else{
        
    event.target.setAttribute("aria-checked", "false");
    }
//    checked = 
//    console.log(checked);

//    checked === "true" ? checked.setAttribute("false") : checked.setAttribute("true");
   
}



let count=0;
const counter = document.getElementById('counter')


function increase(){
count ++
counter.innerText = count;
console.log(count)
}

function decrease(){
count --
counter.innerText = count;
console.log(count)

}

function reset(){
    count = 0;
    counter.innerText = count;
}

