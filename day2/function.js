// const namInfo = {
//   name : "nam",
//   age : 27,
//   gender : "male",
//   haveJob : false
// }
//console.log(namInfo, console)

function sayHello(name, age) {
    //console.log('Hello!', potato, ', you have', age, 'years of age!');
    //console.log(`Hello ${name} you are ${age} years old`);
    return `Hello ${name} you are ${age} years old`;
}

//greetNicolas는 sayHello의 return값
const greetNicolas = sayHello("Nicolas", 27)

console.log(greetNicolas);

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