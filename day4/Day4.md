# Day4

### 1. Background Photo

* 이미지 파일들의 이름을 편하게 1, 2, 3...이런식으로 저장한다.

* 랜덤 넘버를 불러와서 이미지 이름을 통해서 가져온다.

* 랜덤 넘버를 부르는 방식은 다음과 같다.(ex) 1~4)

  *bg.js*

  ```js
  const number = Math.floor(Math.random() * IMG_NUM);
  ```

  여기서 `Math.ceil`은 올림, `Math.floor`은 버림이다

* 아래의 코드를 통해서 기존의 `index.html`에 이미지를 불러와보자

  *bg.js*

  ```js
  const body = document.querySelector("body");
  const IMG_NUM = 4;
  
  function paintImg(imgNumber) {
      const img = new Image();
      img.src = `js-background/${imgNumber + 1}.jpg`;
      body.appendChild(img);
  }
  
  function genRandom() {
      const number = Math.floor(Math.random() * IMG_NUM);
      return number;
  }
  
  function init() {
      const randomNumber = genRandom();
      paintImg(randomNumber);
  }
  
  init();
  ```

* 이렇게 불러온 백그라운드 이미지 위에 우리가 기존에 만들었던 시계, ToDoList를 올려본다.

  *index.css*

  ```css
  @keyframes fadeIn {
      from {
          opacity: 0;
      }
      to {
          opacity: 1;
      }
  }
  
  .bgImg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      animation: fadeIn .5s linear;
  }
  ```

  추가로 FadeIn 효과도 넣어주었다.

---

### GetWeatherData

* 현재 내위치를 알기위해서 필요한 API인 `navigator`을 사용해보도록 한다.

* 사용하는 법은 다음과 같다.

  ```js
  function askForCoords() {    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  }
  ```

  `navigator`을 통해서 `geolocation`함수를 가져오고, 그 안에서 또 현재 위치를 받아오는 `getCurrentPosition(성공시 발생하는 부분, 실패시 발생하는 부분)`을 사용한다.

  위에서 성공시, 그리고 실패시 사용하는 부분은 우선 다음과 같이 작성하였다.

  ```js
  //좌표를 가져오는데 성공했을 때, 처리하는 함수
  function handleGeoSuccess(position) {
      console.log(position);
  }
  
  // 좌표를 가져오는데 실패했을 때, 처리하는 함수
  function handleGeoError() {
      console.log("Can't get geoLocation");
  }
  ```

* 이제 우리는 위도와 경도를 가져온 정보에서 골라낸뒤, 그것을 `localStorage`에 저장할 것이다. 

* 저장하는 코드는 다음과 같이 변경해주면된다.

  ```js
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
  }
  ```

* 이제 본격적으로 날씨 API를 사용해보자 . 여기서 사용하는 API는 OpenWeatherMap이다.

* api에서 제공해주는 기본 url을 javascript에서 호출해보자

  여기서는 fetch라는 것을 사용해본다.

  `fetch()`안에는 가져올 데이터가 백틱(\`\`) 들어가면된다. 앞에 `https://`를 넣어주고,  아래 필요한 함수에서 parsing해줘서 사용한다.

  ```js
  function getWeather(lat, lng) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
  }
  ...
  function loadCoords() {
      const loadedCoords = localStorage.getItem(COORDS);
      if (loadedCoords === null) {
          askForCoords();
      } else {
          // get Weather
          const parseCoords = JSON.parse(loadedCoords);
          console.log(parseCoords)
      }
  }
  ```

* `index.html`에서 새로고침하면 request한 내용과 response를 볼 수 있다...API가 안좋은가 Bucheon이라니..

* 화씨가 아닌 섭씨로 받으려면 다음과 같이 `&units=metric` 코드를 추가해주자.

  ```js
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
  ```

* 이제 `fetch`에서 `body`에 있는 데이터를 가져온다. 이때는 `then()`을 사용한다.

  ```js
  function getWeather(lat, lon) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function (response) {
          return response.json();
      }).then(function (json) {
          console.log(json);
      });
  }
  ```
