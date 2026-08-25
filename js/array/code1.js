// let a = ["a", "b", "c", "d", 12];
// a[0] = "abc";
// console.log(a[4]);

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

// for (let x of a) {
//   console.log(x);
// }

// let arr = [10, 20, 30, 40, 50, 60];
// let sum = 0;
// for (let x of arr) {
//   sum = sum + x;
// }
// console.log(sum);
// sum= ?
// let a = 12345;
// let sum = 0;
// let reversed = 0;
//
// while (a > 0) {
//   let digit = a % 10;
//   //   sum = sum + digit;
//   reversed = reversed * 10 + digit;
//   a = Math.floor(a / 10);
// }
// console.log(reversed);
// 12345/10 =  1234.5
// 1234/10 = 123.4
// 123/10 = 12.3
// 12/10=1.2
// 1/10=.1
// 0
// 5+4+3+2+1 =15
// 5 * 10 = 50 + 4  = 54
// 54*10 = 540+3 = 543
// 543*10 +2= 5432
// 5432*10 = 54320 +1 = 54321

// let a = 8765456765432;
// let count = 0;
// while (a > 0) {
//   count = count + 1;
//   a = Math.floor(a / 10);
// }
// console.log(count);
let a = 12345;
let sum = 0;
let find = 0;

while (a > 0) {
  let digit = a % 10;
  if (digit % 2 === 0) {
    sum = sum + digit;
  }

  a = Math.floor(a / 10);
}
console.log(sum);
