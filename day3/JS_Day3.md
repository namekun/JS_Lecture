# JS_Day3

### 본격적인 예제

#### 시계를 만들어보자

*index.html*

```html
<!DOCTYPE <!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>First</title>
    <link rel="stylesheet" type="text/css" media="screen" href="index.css" />
</head>

<body>
    <div class="js-clock">
        <h1>00:00</h1>
    </div>
    <script src="clock.js"></script>
</body>

</html>
```

*clock.js*

```js
const clockContainer = document.querySelector(".js-clock"),
    ClockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    ClockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
    getTime();
}

init();
```

---

위와 같이만 한다면 실시간으로 변하지 못하는 것을 알 수 있다.

이제 실시간으로 변하게 해보자

실시간으로 변하게 할때는 `setInterval`이라는 함수를 사용한다.

사용법은 `setInterval(함수, 실행할 시간간격(밀리세컨드))`으로 만들어준다.

```js
...
function init() {
    getTime();
    setInterval(getTime, 1000);
}
...
```

*   이렇게 하면 1초에 다시 함수를 생성해서 사용하게되서, 실시간으로 시간이 변하는 것처럼 보일 수 있다.

---

#### 삼항연산자

삼항연산자는 if문을 짧게 줄여서 쓸수있는 방법이다.

*clock.js*

```js
...
    ClockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
}
...
```

* `조건 ? 조건에 해당될때 사용할 것 : 해당되지않을때 사용할 것`

---

### Local Storage

로컬 저장소는 자바스크립트에서 가져온 value를 내 컴퓨터에 저장하는 방법이다.

chrome의 검사를 통해 application 탭을 들어가보면, local  storage에 저장되는 값이 무엇인지 알 수 있다.

함수로는 값을 저장하는  `localStorage.setItem()`, 값을 가져오는 `localStorage.getItem()`등이 있다.

이제 이걸 통해서 값을 받아서 저장할 것이다. 아래는 값을 받아와서, 이름을 쓰고, 그 뒤에 toDo리스트까지 받는 코드이다.

*toDo.js*

```js
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

// localStorage에 값들을 저장하는 메서드
function saveToDos() {
  //  JSON.stringify 메소드는 자바스크립트 값을 json 문자열로 변환하게 한다.
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// ToDo를 나타내는 메서드
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  span.innerText = text;
  // li에 더해주는 것.
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  // toDos에 넣고
  toDos.push(toDoObj);
  // 저장하자
  saveToDos();
}

// ToDo입력창에 입력하고, enter를 쳤을때 벌어지는 일
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

// 새로고침등을 했을때, 로컬스토리지에서 값을 불러오는 메소드
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
      // JSON.parse를 통해 값을 자른다.
    const parsedToDos = JSON.parse(loadedToDos);
    // 반복문 forEach에는 function도 들어갈 수 있다.
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();

```

이렇게 하면, chrome의 LocalStorage에 값들이 저장되는 것, 그리고 새로고침을 했을 때 다시 값들을 불러오는 것을 볼 수 있다.

---

### removeToDoList

이번엔 ToDoList중에 하나를 삭제해보자

위에서 버튼까지는 다 만들어놓았으니, 기능만 구현하면된다!

우선 function을 만들고, 

```js
...
function deleteToDo(event) {
  // 클릭된게 몇번째 li인지 알 수 있게 해주는 것
  // event.target.parentNode
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
}
...
```

그 뒤에 버튼에 삭제기능을 달아주도록 한다.

```js
...
// click했을 때, 이벤트를 실행해라
delBtn.addEventListener("click", deleteToDo);
...
```

여기까지만 하면 x버튼을 눌렀을때 삭제는 잘 되지만, 로컬 스토리지에서의 삭제까지는 되지 않아, 새로고침만 해도 다시 원상복귀가 된다. 어찌해야할까

를 고민하기전에 `filter` 함수에 대해 할고 가자

`filter`는 array의 모든 아이템을 통해 함수를 실행(하나하나씩)하고, 그리고 true인 아이템들만 가지고 새로운 array를 만든다. 사용법은 `filter(조건)`.

예를 들어서 다음과 같은 조건을 만든다고 하자

```js
...
function filterFx(toDo) {
  return toDo.id === 1;
}
...
```

이 조건을 `filter`함수에 사용하고, 콘솔에 찍어보면

```javascript
...
function deleteToDo(event) {
  // 클릭된게 몇번째 li인지 알 수 있게 해주는 것
  // console.dir(event.target.parentNode);
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(filterFx);
  console.log(cleanToDos);
}
...

```

id 가 1인 원소만 찍혀 나온다.

이제 진짜로 삭제를 해보자. 우리는 li에 없는 id인 toDos를 체크하면된다. 여기에 체크된 것들이 우리가 지울 것이기 때문. 다음과 같이 코드를 바꿔주자

```js
...
let toDos = [];

function deleteToDo(event) {
  // 클릭된게 몇번째 li인지 알 수 있게 해주는 것
  // console.dir(event.target.parentNode);
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}
...
```

아래 코드 중에 `toDos = claenToDos;`부분이 있기에 `const`였던 `toDos`를 변경이 가능한 `let`으로 바꿔주었다.

또한 필터조건에 `toDo.id`가 String형태인 `li.id`를 `parseInt`를 통해서 바꾼뒤에, 같은 것이 없다면 그대로 지워주기로하였다.

오늘은 여기까지