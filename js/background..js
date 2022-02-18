const images = [
    "bg-drawingRoom.jpg",
    "bg-houseInterior.jpg",
    "bg-office.jpg"];    
const chosenImage = images[Math.floor(Math.random() * images.length)];
const prependBody = document.body.firstChild;

const randomImg = document.createElement("img");
const Blur = document.createElement("div");

randomImg.src = `/img/${chosenImage}`;
randomImg.id = "BgImg";

Blur.id = "Blur";

document.body.insertBefore(Blur, prependBody);
document.body.insertBefore(randomImg, prependBody);