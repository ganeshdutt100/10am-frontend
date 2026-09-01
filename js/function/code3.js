// function fun(a, b) {
//   return console.log(a + b);
// }
// fun(1, 4);
//
// let fun = () => {
//   console.log("Hello World");
//   console.log("Hello World");
//   console.log("Hello World");
//   console.log("Hello World");
//   console.log("Hello World");
//   console.log("Hello World");
// };
// fun();
//
// let sum = (a, b) => console.log(a + b);
// sum(1, 4);

let arr = [12, 3, 4, 4, 5, 67, 5, 8];
for (let x of arr.values()) {
  console.log(x);
}
for (let x of arr.keys()) {
  console.log(x);
}
// arr.forEach((x) => console.log(x));

// let sum = 0;
// for (let x of arr) {
//   sum += x;
// }
// console.log(sum);
// for (let x of arr.entries()) {
//   console.log(x);
// }

// let output = arr.every((x) => x > 2);
// let output = arr.some((x) => x % 2 === 0);
// let output = arr.filter((x) => x % 2 !== 0);
// let output = arr.map((x) => x + 5);
// let output = arr.reduce((acc, curr) => acc + curr);

// let output = arr.find((x) => x % 2 === 0);
// let output = arr.findIndex((x) => x % 2 === 0);

// console.log(output);
