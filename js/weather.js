const API_KEY = "a63392f97ed66da319f1d8eeef498aef"

function onGeoSucess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
        const city = document.querySelector('#weather span:first-child');
        const weather = document.querySelector('#weather span:last-child');

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(){
    alert("현재 사용자의 위치를 찾을 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);

//openweathermap.org 사용