const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

// loginButton.addEventListener('click', ()=>{
//     const username = loginInput.value;
//     // if(username === ""){
//     //     alert('please write your name');
//     // } else if(username.length > 15) {
//     //     alert('Your name is too long!');
//     // }
    
// });

const greeting = document.querySelector('#greeting');

loginForm.addEventListener('submit', (event)=>{
    const username = loginInput.value;
    localStorage.setItem("username", username);
    event.preventDefault(); //submit 했을때 자동으로 새로고침 하는거 막으려고 넣음
    loginForm.classList.add('hidden');
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove('hidden');
})

const savedUsername = localStorage.getItem('username');
if(savedUsername === null){
    loginForm.classList.remove('hidden');
}else{
    greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove('hidden');
}