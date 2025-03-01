//1. it means we are using new version of js, not really needed
"use strict"; 
//2. tc39 specification for browsers & mdn js for learning js in easy way


/*3. ecmaScript is a standard, which follows for scripting languages 
   js.
   Remember that we are not using browser to run js we are using node,
   so most of browser supported feature will not work here
   like: alert(4+4)    */

//4. DataTypes in js
// i. String
let Name = "Aadarsh";
 Name = 'Aadarsh';
 Name = `Aadarsh ${4+5}`;//a string, complex type

// ii.Boolean
let isAdult = true;
// iii. Number
/*
Javascript numbers are always one type:
double (64-bit floating point).
*/ 
let contact = 9448595951
contact = 9448.595951;

// iv. object
let address = {
    permanent : "Betul",
    current : "Bhopal"
};
// v. Bigint
let largeNum = 78784455448444545445n;
largeNum = BigInt("123456789012345678901234567890");
// vi. Null => standalone value

// vii. Undefined => undefined 

// viii. Symbols => unique

// 5. To identify type of any value, variable
/* 
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof address);
console.log(typeof largeNum);
console.log(typeof contact);
console.log(typeof isAdult);
console.log(typeof Name);
*/

// 6. js is dynamic so one varible can store diff. datatypes
let num = 78;
num = "78num"; //don't write this kind of code








