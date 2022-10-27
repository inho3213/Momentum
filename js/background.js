const images =["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg" ];
const randomImage = images[Math.floor(Math.random()*images.length)]; 

const backgroundImage = document.createElement("img");
backgroundImage.src = `img/${randomImage}`;

document.body.appendChild(backgroundImage)    //body 부분에 추가하기