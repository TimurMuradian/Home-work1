"use strict";
// let c = "Hello, World!!";
// alert(c);

// let userName = prompt("Ваше имя?");
// alert("Hello, " + userName);

// let a = 5;
// let b = 4;

// alert(a + b);
// alert(a - b);
// alert(a / b);
// alert(a * b);
// alert(a ** b);
// alert(a % b);

// let name = "John";

// if (name === "John") {
//   console.log("Hi");
// } else {
//   console.log("Good Bye");
// }

let hour = 12;
if (hour < 10 || hour > 18) {
  console.log("Офис закрыт");
} else if (hour > 10 && hour < 18) {
  console.log("Офис открыт");
}

function foo() {
  alert("Hello");
}
foo();
