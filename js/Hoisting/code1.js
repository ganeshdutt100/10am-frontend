// const fun = () => {
//   var a = 67;
//   console.log(a);
// };
//
// fun();
// console.log(a);

// {
//   let a = "hello";
// }
// console.log(a);

// sayHello();

// function sayHello() {
//   console.log("hello");
// }

//
// const sayHello = () => console.log("hello");
// console.log(a);
// let a;
//
// a = 10;
// const user = { name: "Ganesh", age: 24 };
// const { age, name } = user;
// console.log(name);
// console.log(age);

// const fruits = ["apple", "banana", "mango"];
// const [a, b] = fruits;
// console.log(a); // apple
// console.log(b); // banana

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}
function sayBye() {
  console.log("Goodbye!");
}
greet("Ganesh", sayBye);
