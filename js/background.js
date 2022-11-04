const images =["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg" ];
const randomImage = images[Math.floor(Math.random()*images.length)]; 

const bgImage = document.createElement("img");
const imageUrl = `img/${randomImage}`;
bgImage.src = imageUrl;
// console.log(bgImage);
document.body.style.backgroundImage = `url(${imageUrl})`;

const form = document.querySelector('#login-form')