// let a = 5;
// while (a <= 10) {
//   console.log(a);
//   a++;
// }
// let num = 1;
// let maxLimit = 1000;
// let result = "";
//
// console.log("Searching Started...");
//
// while (num <= maxLimit) {
//   if (num % 7 === 0 && num % 13 === 0) {
//     result = result + num + " , ";
//   }
//   num++;
// }
// console.log(result);

// do while
// let i = 10;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// in  and of
// let a = " Sumit ";
//
// let studentNames = ["Sumit", "Nandini", "Himanshi", "Angli"];
//
// for (let Sname in studentNames) {
//   console.log(Sname);
// }
// for (let Sname of studentNames) {
//   console.log(Sname);
// }

let num = 1;
let result = "";
while (num <= 30) {
  if (num % 5 !== 0) {
    result = result + num + " , ";
  }
  num++;
}
console.log(result);
