# JS_Day2

### Data type of Java Script

1. JavaScript에서는 매번 한 줄(이걸 `expression`이라고 한다)이 끝날때마다 `;`를 붙여준다.

2. 변수를 선언할때는 생성(Create), 초기화(Initialize), 사용(Use) 이 세 단계로 이루어진다.

   선언할 때는 `let`을 앞에 붙여서 선언해준다.

   ```javascript
   let a = 324; // create & initialize
   let b = a - 45; // create & initialize & Use
   ```

3. 변수는 언제든지 바꿔줄 수 있다.

   ```javascript
   let a = 221;
   let b = a - 5;
   a = 4;// change variable
   console.log(b, a);
   ```

4. 변수 선언할 때, 앞에 `const`를 붙이면, 상수라는 의미이다. 그리고 변하지 않는다. 그리고 항상 우리는 변수를 생성할땐 default로 `const`를 사용하도록 하자.

   ```javascript
   const a = 221;
   let b = a - 5;
   a = 4;
   console.log(b, a);
   ```

   이렇게 실행하면 `TypeError`가 난다. 변할수 없는 값을 변화하려고했기때문.

5. `var`은 `variable` 즉, 변수를 의미하는데 이것도 사실 `let`과 같이 움직인다. 하지만 자바스크립트에서 `var`에만 적용한 규칙때문에 골이 아플것. 그래서 우리는 `const`와 `let`을 사용하도록하자

6. 주석을 달고 싶다면, Java와 같이 `//`를 사용한다. 길게 할때는 역시 똑같이 `/* */`이걸로.

7. 자바스크립트에서 `String`도 그냥  `const`로 통일

8. 그냥 자바스크립트에서 어떤 변수형태를 써도 앞에 형태는 `const`로 통일된다.

9. 데이터를 정렬하는 방법 1 - `Array`

   쉽다. 그냥 java 의  array처럼 해주면된다.

   ```javascript
   // Array
   const something = "something"
   const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun", something];
   console.log(daysOfWeek);
   console.log(daysOfWeek[345]); // undefined
   ```

10. 데이터를 정렬하는 방법 - `Object`

    ```javascript
    //Object
    //const nam = ["hyuk", 27, true, "seoul"];
    //console.log(nam[0]); // not efficient
    const namInfo = {name :"hyuk", 
                      age : 27, 
                      gender : "man",
                      home : "Incheon",
                      isMankind : true};
    console.log(namInfo.home);
    
    // const라도, 안에있는 값은 바꿔줄 수 있다.
    namInfo.home = "Seoul"
    console.log(namInfo.home);
    ```

    * 배열과 다르게, 변수마다 이름을 지정해줘서 사용할때 꺼내온다. 
    * `{}`를 사용한다.
    * 변수 선언이 `const`라도, 안에 값을 바꿔줄 수 있다.

11. DB에서 데이터를 가져온다면, 그때는 `Array`를 사용하고, 데이터를 합쳐서 만들어야할 때는`Object`를 사용하자. `Array`안에 `Object`를 넣을 수 있고, 반대로도 가능하다. 다음과 같은 예제를 보자

    ```javascript
    const MovieLike = {
      action : [{bruce : "diehard", digust : "killbill"}],
      romance : [{good : "notebook", soso : "aboutLove"}],
      humor : [{favorite : "hangout1", soso : "hangout2"}]
    }
    
    console.log(MovieLike.action);
    ```

    여기서 중요한건 `,`! 이걸 빼먹지말도록 합시다...

---

### Function

1. function은 어떤 것을 수행하려는 한 부분으로, 원하는 만큼 사용이 가능하다.한 코드 조각으로 내가 원하는 만큼 사용할 수 있는 코드

2. 함수는 인자 (argumentr)를 받는다. 함수에게 외부에 있는 데이터를 주는 방법이라고 할 수 있다.

   ```javascript
   function sayHello(potato){
     console.log("Hello!", potato);
   }
   
   sayHello("Nicolas");
   ```

3. 자바스크립트에서는 쌍따옴표도 String이고, 그냥 싱글따옴표(?)도 String이다.

   ```javascript
   function sayHello(potato, age){
     console.log('Hello!', potato, ", you have", age, 'years of age!');
   }
   
   sayHello("Nicolas", 15);
   ```

4. 백틱(`)은 위에서 우리가 콤마(,)로 힘겹게(??)쓴 문장을 쉽게 사용하게 해준다.

   ```javascript
   function sayHello(potato, age){
     //console.log('Hello!', potato, ', you have', age, 'years of age!');
     console.log(`Hello ${name} you are ${age} years old`);
   }
   
   sayHello("Nicolas", 15);
   ```

5. 계산기 function을 만들어보자

   ```javascript
   const calculator = {
       plus: function (a, b) {
           return a + b;
       },
       minus: function (a, b) {
           return a - b;
       },
       multi: function (a, b) {
           return a * b;
       },
       divide: function (a, b) {
           return a / b;
       },
       power: function (a, b) {
           return a ** b;
       },
   }
   
   const plus = calculator.plus(5, 5);
   const minus = calculator.minus(14, 5);
   const divide = calculator.divide(165, 5);
   const multi = calculator.multi(34, 65);
   const power = calculator.power(2, 15);
   
   console.log(plus);
   console.log(minus);
   console.log(multi);
   console.log(divide);
   console.log(power);
   ```

---

### JS DOM Function

#### 1. DOM?

- Document Object Module

- 자바스크립트는 내 html에 있는 모든 요소를 가져온다. 그리고 이제 그걸 객체로 바꾼다.

- 모든 배울 함수들, 그리고 우리가 찾아낼 많은 함수들이 모두 DOM형태로 변경이 가능하다.

  *index.html*

  ```html
  <!DOCTYPE <!DOCTYPE html>
  <html>
  
  <head>
      <title>Page Title</title>
      <link rel="stylesheet" href="index.css" />
  </head>
  
  <body>
      <h1 id="title">This Works!</h1>
      <script src="exam.js"></script>
  </body>
  
  </html>
  ```

  *exam.js*

  ```javascript
  const title = document.getElementById("title");
  console.log(title);
  title.innerHTML = "HI from JS~"
  ```

  위의 코드에서 `title.innerHTML`로 인해서 `<body>`에 있는 `This works!`가 `HI from JS`로 바뀐다.

  다른 방법으로 `querySelector`가 있다. 위의 `getElementById`와 다른것은  id또는 class를  모두 가져올 수 있다. 아래 예시를 보자

  ```javascript
  // by ID
  const title = document.querySelector("#title");
  // by class
  //const title = document.querySelector(".title");
  title.innerHTML = "HI from JS~"
  title.style.color = 'red'
  console.dir(title);
  document.title = "I own you know";
  ```

---

### Event

* 이벤트는 웹사이트상에서 발생하는 모든 것들을 의미한다.
* 그리고 우리는 그 이벤트들을 자바스크립트를 통해 가로챌 수 있다.

* `window`라는 객체를 사용해서 이벤트를 추가해보자

```javascript
function handResize(){
    console.log("I have been resized~");
}

window.addEventListener("resize", handleResize());
```

* 여기서 `handleResize`만 사용하는지, 아니면 `handleResize()`라고 사용하는지는 아주 큰 의미차이가 있다. 전자는 내가 필요한 시점(윈도우가 resize되는 순간)에 함수를 호출하는 것, 즉 즉시 호출하지 않는 것이고, 후자는 당장 함수를 호출한다는 의미이다.

* 이번에는 이렇게 고쳐보자

```javascript
function handResize(event){
    console.log(event);
}

window.addEventListener("resize", handleResize);
```

* 이벤트를 다룰 함수를 만들때마다 자바스크립트는 자동적으로 함수에 객체를 붙인다.
* 자바스크립트는 resize를 할때마다 event를 호출한다. 다음과 같이

```console
Event {isTrusted: true, type: "resize", target: Window, currentTarget: Window, eventPhase: 2, …}
bubbles: false
cancelBubble: false
cancelable: false
composed: false
currentTarget: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
defaultPrevented: false
eventPhase: 2
isTrusted: true
path: [Window]
returnValue: true
srcElement: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
target: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
timeStamp: 13896.100000012666
type: "resize"
__proto__: Event
```

* 이번에는 `title`에 대해서 이벤트를 적용해보자

```javascript
const title = document.querySelector("#title");

function handleClick() {
    console.log("Click!");
    alert("Click!!");
    title.style.color = "red";
}

title.addEventListener("click", handleClick);
```

* 이렇게 했을때, 웹페이지에서 작동은 잘되지만, 단 한번만 실행되고 변화된 상태에 머물러있게된다.

---

### if-else

* 기본적은 if-else문의 form은 다음과 같다

```javascript
if(condition){
    block
} else {
    block
}
```

* 이제 이 조건문을 통해서 클릭할때마다 `title`이 바뀌는 걸 만들어보자

```javascript
const title = document.querySelector("#title");

const BASE_COLOR = "black";
const OTHER_COLOR = "#D980FA";

function handleClick() {
    const currentColor = title.style.color;
    console.log(currentColor);
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();
```

* 클릭할때마다 알려준다.
* 이외의 다양한 DOM event에 대해서 알고싶다면, MDN에서 찾아보도록하자.

*ClickHandleOtherVer.js*

```js
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked!"

function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if (!hasClass) {
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
}

function init() {
    title.addEventListener("click", handleClick);
}

init();
```

* `contain`은 해당하는 값을 포함하고 있는지 확인하는 함수이다.

*ClickHandleUseToggle.js*

* Toggle은 우리가 위에서 했던 것을 단 6글자로 요약하는 것

```js
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked!"

function handleClick() {
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if (!hasClass) {
    //     title.classList.add(CLICKED_CLASS);
    // } else {
    //     title.classList.remove(CLICKED_CLASS);
    // }
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}

init();
```

