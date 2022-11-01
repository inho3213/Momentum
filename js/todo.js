const toDoForm = document.querySelector('#todo-form');
const toDoList = document.querySelector('#todo-list');
const toDoInput = toDoForm.querySelector("input");

let toDos =[];

function paintToDo(newTodo){
    const list = document.createElement("li");
    list.id = newTodo.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");
    btn.innerText = '❌';
    btn.addEventListener('click', (event)=>{
        const del = event.target.parentElement;
        del.remove();
        toDos = toDos.filter((toDo) => toDo.id !== parseInt(del.id));
        saveToDos();
    })
    list.appendChild(span); //span 태그를 list 태그 안으로 넣음    
    list.appendChild(btn);
    span.innerText = newTodo.text;
    toDoList.appendChild(list);
}

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
    // 어떤 형태든 string으로 만들어줌 stringify
}

toDoForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const newTodo = toDoInput.value;
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };

    toDoInput.value = "";
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
});

const savedToDos = localStorage.getItem("todos");

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    // string을 array로 변환!
    toDos = parsedToDos; //저장되어있는 것들 복원한다고 생각
    parsedToDos.forEach(paintToDo); 
}