// I am going to add only those topics which is kind of complex

/* 1. Max of array*/
// let val1 = [100, 55, 66, 999];
// let max = 0;
// for (let i = 0; i <= val1.length; i++) {
//   if (max < val1[i]) {
//     max = val1[i];
//   }
// }
// console.log(max)

/* 2. check male in array of object */
// let people = [
//   { name: "xy", gender: "other" },
//   { name: "y", gender: "male" },
//   { name: "x", gender: "female" },
//   { name: "w", gender: "male" },
// ];
// for (let i = 0; i < people.length; i++) {
//   if (people[i].gender === "male") {
//     console.log(people[i].name);
//   }
// }

/*3. Reverse an array */
// let num = [0, 1, 2, 3, 4];
// let num1 = [];
// for (let i = 0, j = num.length - 1; i < num.length; i++, j--) {
//   num1[j] = num[i];
// }
// console.log(num1);

// 4.Functions
/* Try to Call only on time for multiple function for display result */
// function sum(num1, num2, funT) {
//   return funT(num1 + num2);
// }
// function display(data) {
//   console.log("Result will be", data);
// }
// function displayP(data) {
//   console.log("Result will be", data);
// }
// sum(1, 1, display);

// 5. for each array

// 6.oops
// class Shape {
//     len = 1;
//     bre = 0;
// //   constructor(len, bre) {
// //     this.len = len;
// //     this.bre = bre;
// //   }
// //   area() {
// //     return this.len * this.bre;
// //   }
//   static isSqr() {
//     if (this.len == this.bre) {
//       return true;
//     }
//     return false;
    
//   }
// }

// // let rect = new Shape(45, 10);
// console.log(Shape.isSqr());
// // console.log(rect.area());


// 7. Date()
   
let time = new Date().getTime();
// console.log(time)
function GFG_Fun() {
    let date = new Date(time);
    // console.log(date)
    console.log(date.toString());
}
GFG_Fun()