const clock = document.querySelector('#clock');

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    //padStart(a , b) : string이 a글자여야하고, 글자수 a 아니면 앞에 그만큼 'b' 추가함

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);