const toDoForm = document.querySelector('#todo-form');
const toDoList = document.querySelector('#todo-list');
const toDoInput = toDoForm.querySelector("input");

function paintToDo(newTodo){
    const list = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    btn.innerText = '❌';
    btn.addEventListener('click', (event)=>{
        const del = event.target.parentElement;
        del.remove();
    })
    list.appendChild(span); //span 태그를 list 태그 안으로 넣음    
    list.appendChild(btn);
    span.innerText = newTodo;
    toDoList.appendChild(list);
}

toDoForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
});