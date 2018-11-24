//const title = document.querySelector("#title");
// title.innerHTML = "HI from JS~"
// title.style.color = 'red'
// console.dir(title);
// document.title = "I own you know";

// function handleResize(event) {
//     console.log(event)
// }

// window.addEventListener("resize", handleResize);

// const title = document.querySelector("#title");

// function handleClick() {
//     console.log("Click!");
//     alert("Click!!");
//     title.style.color = "red";
// }

// title.addEventListener("click", handleClick);

// if (10 === 5) { // '==='는 그냥 값을 할당하는 것이 아니고 check만 해주는것.
//     console.log("HI");
// } else if ('10' === '10') {
//     console.log("ho!");
// } else {
//     console.log("hihi");
// }

// if (20 > 5 && "nam" === "nam") {
//     console.log("yes");
// } else {
//     console.log("nope");
// }

// const age = prompt("how old are you"); // old javascript

// if (age > 18 && age < 21) {
//     console.log("you can drink, But you should not");
// } else if (age > 21) {
//     console.log("you can drink! Go ahead~")
// } else {
//     console.log("you can't")
// }

// const title = document.querySelector("#title");

// const BASE_COLOR = "black";
// const OTHER_COLOR = "#D980FA";

// function handleClick() {
//     const currentColor = title.style.color;
//     console.log(currentColor);
//     if (currentColor === BASE_COLOR) {
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }

// function init() {
//     title.style.color = BASE_COLOR;
//     title.addEventListener("click", handleClick);
// }

// init();

// function handleOffLine() {
//     console.log("OFFLINE STATUS");
// }

// function handleOnLine() {
//     console.log("ONLINE STATUS");
// }

// window.addEventListener("offline", handleOffLine);
// window.addEventListener("online", handleOnLine);

const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked!";

function handleClick() {
  // const hasClass = title.classList.contains(CLICKED_CLASS);
  // if (!hasClass) {
  //     title.classList.add(CLICKED_CLASS);
  // } else {
  //     title.classList.remove(CLICKED_CLASS);
  // }
  // 위의 모든것을 toggle이 해준다.
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
