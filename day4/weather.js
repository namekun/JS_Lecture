const weather = document.querySelector(".js-weather");

const COORDS = "coords";
const API_KEY = "";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temp = json.main.temp;
      const place = json.name;
      weather.innerText = `현재 위치는 ${place}이고, 지금은 ${temp}도 입니다. `;
    });
}

// 위도 경도를 저장해주는 function
function savaCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

//좌표를 가져오는데 성공했을 때, 처리하는 함수
function handleGeoSuccess(position) {
  // 위도를 가져오는 부분.
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    // 자바스크립트에서 객체의 key의 이름과 객체의 변수 이름이 같다면 아래처럼 해도 된다.
    latitude,
    longitude
  };
  savaCoords(coordsObj);
  getWeather(latitude, longitude);
}

// 좌표를 가져오는데 실패했을 때, 처리하는 함수
function handleGeoError() {
  console.log("Can't get geoLocation");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    // get Weather
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
