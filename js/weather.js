//const 
function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "3181c1637851fbfa6141249ff3d49eab";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const location = document.querySelector("#weather span:first-child");
        const temperature = document.querySelector("#weather span:nth-child(2)");
        const weather = document.querySelector("#weather span:last-child");

        location.innerText = `지역: ${data.name}`;
        temperature.innerText = `${data.main.temp}°C`;
        weather.innerText = `날씨: ${data.weather[0].main}`;

    });
}
function onGeoError() {
    console.log("I can't find you");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

/*
{
"coord": { "lon": 126.9662, "lat": 37.48 },
"weather": [{ "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d" }],
"base": "stations",
"main": { "temp": 273.08, "feels_like": 271.25 "temp_min": 272.61, "temp_max": 274.18, "pressure": 1033, "humidity": 27 },
"visibility": 10000, "wind": { "speed": 1.54, "deg": 210 },
"clouds": { "all": 20 },
"dt": 1645152647, "sys": { "type": 1, "id": 8096, "country": "KR", "sunrise": 1645136323, "sunset": 1645175628 },
"timezone": 32400,
"id": 6800035,
"name": "Banpobondong",
"cod": 200
}
*/