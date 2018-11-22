const a = 221;
var b = a - 5;
//a = 4;
//console.log(b, a);

// String
const what = "nicolase";
//console.log(what);

// boolean
const wat = true;
//console.log(wat);

// Number Float
const num = 234.34;
//console.log(num);

// Array
const something = "something"
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun", something];
//console.log(daysOfWeek);
//console.log(daysOfWeek[345]); // undefined

//Object
//const nam = ["hyuk", 27, true, "seoul"];
//console.log(nam[0]); // not efficient
const namInfo = {
  name: "hyuk",
  age: 27,
  gender: "man",
  home: "Incheon",
  isMankind: true
}
//console.log(namInfo.home);

// const라도, 안에있는 값은 바꿔줄 수 있다.
namInfo.home = "Seoul"
//console.log(namInfo.home);

const MovieLike = {
  action: [{
    bruce: "diehard",
    digust: "killbill"
  }],
  romance: [{
    good: "notebook",
    soso: "aboutLove"
  }],
  humor: [{
    favorite: "hangout1",
    soso: "hangout2"
  }]
}

console.log(MovieLike.action);