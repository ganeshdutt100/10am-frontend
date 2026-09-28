// const sum = function (a, b) {
//   return a + b;
// };
// console.log(sum(23, 65));

// const message = function () {
//   console.log("hello from js ");
// };
// message();

// (function () {
//   console.log("hey Guys i am IIFE function ");
// })();

// methods
// call  , apply , bind , toString

// function greet(name) {
//   console.log("hello :  ", name);
// }
// greet.call(null, "Akash");

// function student(id, name, course) {
//   this.id = id;
//   this.name = name;
//   this.course = course;
// }
//
// function students(id, name, course) {
//   student.call(this, id, name, course);
// }
//
// function Emp(id, name, course, job) {
//   student.call(this, id, name, course);
//   this.job = job;
// }
//
// let std = new students(123, "Nandini", "fs");
// let empValue = new Emp(321, "Anjli", "mernStack", "Developer");
//
// console.log(`ID  : ${std.id}  Name : ${std.name} course  : ${std.course}`);
// console.log(
//   `ID  : ${empValue.id}  Name : ${empValue.name} course  : ${empValue.course} profile :  ${empValue.job}`,
// );
// apply[this,arg[]]
// let arr = [12, 45, 6, 7, 89, 0, 8, 7, 65, 34, 23];
// let output = Math.max.apply(this, arr);
// let output = Math.min.apply(this, arr);

// console.log(output);

// function fun(name, course) {
//   console.log(`hello ${name} your course : ${course}`);
// }
// fun.apply(null, ["sumit", "fs"]);
//
// let course = {
//   name: "JavaScript",
//   getCourse: function () {
//     return this.name;
//   },
// };
//
// let secondCourse = {
//   name: "Node",
// };
//
// let UnboundGetName = course.getCourse;
// // console.log(UnboundGetName);
// let boundGetName = UnboundGetName.bind(secondCourse);
// console.log(boundGetName());
// let a = 50;
// console.log(typeof a.toString());
