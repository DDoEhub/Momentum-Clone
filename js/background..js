const images = [
    "bg-drawingRoom.jpg",
    "bg-houseInterior.jpg",
    "bg-office.jpg"];    
const chosenImage = images[Math.floor(Math.random() * images.length)];

const randomImg = document.createElement("img");

randomImg.src = `img/${chosenImage}`;

document.body.appendChild(randomImg);