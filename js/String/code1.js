// let str = "String";
// let name = "hello world ";
// console.log(str, " :  ", name);
//
// let studentName = "Ganesh Dutt";
// console.log("Hello ", " : ", studentName);
//
// let output = `Hello : ${studentName} `;
// console.log(output.length);
//
// let value1 = "Radha";
// let value2 = "world";
// let output = value.substring(0, 5);
// let output = value.substr(0, 5);
// let output = value.split(",");
// let output = value1.concat(value2);
// let output = value1.concat(value2);
// let output = value1.toLocaleLowerCase();
// let output = value1.toLocaleUpperCase();
// let output = value1.trim().length;
// let output = value1.indexOf("h");
// let output = value1.replace("a", "o");
// let output = value1.replace(/a/g, "o");
//
// let otuput = console.log(output);

let a = "hello world";
let output = a
  .split(" ")
  .map((x) => x[0].toUpperCase() + x.slice(1))
  .join(" ");
console.log(output);
