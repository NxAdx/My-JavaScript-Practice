console.dir(window.document);

// 1
// get element by ID (getElementById)
// const val = document.getElementById("d1");

// 2
// query select will allow us to select a  class, 
// if class will exist then it will provide us only the first class
// const val = document.querySelector(".header");

// 3
// querySelectorAll allow us to select all classes with same name
// const val = document.querySelectorAll(".nav-item");

// 4
// select a particular text and change it by .textContent
// let val = document.getElementById("main-heading");
// val.textContent = "Aaradhya Nagar";

// 5
// .innerText will allow us to only select text which was visible
// const val = document.getElementById("main-heading");
// val.innerText = "Aaradhya Nagar";

// 6
// using .style will allow us to change styling of any element in html page, works for both gerElementById and querySelector
// const text1 = document.querySelector("#main-heading");
// const val = document.getElementById("main-heading");
// val.style.backgroundColor = "purple";
// text1.style.color = "red";

// 7
// get and set attributes & know list of attributes
// const text = document.querySelector(".form-todo #todo");
// const atr1 = text.getAttribute("type");
// text.setAttribute("placeholder","Write something todo");
// const listAttributes = text.attributes;
// console.log(atr1);
// console.log(listAttributes);



// 8
// multiple selector and loop throught them
// (i)Get Element By Class Name
// let forms = document.getElementsByClassName("form-group");
// for(let i=0;i<forms.length;i++){
//     forms[i].style.color = "blue";
// }
// for(let form of  forms){
//     form.style.color = "red";
//     form.style.backgroundColor = "black";
//     form.style.border = "medium dashed green";
// }
// forms = Array.from(forms);
// // console.log(Array.isArray(forms));
// forms.forEach(element => {
//     element.style.color ="orange";
//     element.style.backgroundColor ="black"; 
//     element.style.fontWeight ="bold"; 
// });

// (ii) querySelectorAll()
// let grp = document.querySelectorAll(".form-group");
// // console.log(grp);
// // for(let i=0;i<grp.length;i++){
// //     grp[i].style.color = "blue";   
// //     grp[i].style.fontSize = "25px";   
// //     grp[i].style.backgroundColor = "black";   
// // }
// // for (let gp of grp){
// //     gp.style.color = "#cbff4d";
// //     gp.style.backgroundColor = "#69747C";
// // }
// grp = Array.from(grp);
// // console.log(Array.isArray(grp));
// grp.forEach(gp => {
//     // gp.textContent = "Change all";    
// });



// 9
// Inner Html
// const headl = document.querySelector(".headline");
// headl.innerHTML = "<p>Changed You!!</p>"
// console.log();

// 10
// DOM Tree
// const rootNode = document.getRootNode();
// const htmlNode = rootNode.childNodes[1];
// const headElementNode = htmlNode.childNodes[0];
// const textNode = htmlNode.childNodes[1];
// const bodyElementNode = htmlNode.childNodes[2];

// // Task 1 for dom by harshit
// const bodyChild = bodyElementNode.childNodes;
// const headerChildNode = bodyChild[1];
// const NavChild = headerChildNode.childNodes[1];
// const h1Child = NavChild.childNodes[1];
// h1Child.style.color = "blue"; 
// // console.log(h1Child.attributes[1].textContent);

// // Task 2 for dom by harshit (my way)
// const h1Tag = document.querySelector("h1");
// const navParent = h1Tag.parentNode;
// const headerParent = navParent.parentNode;
// headerParent.style.color = "Red"
// console.log(headerParent.attributes[1].textContent = "color:green");


// 11
// Ways to use Selectors
// const body = document.body;
// const h1 = body.querySelector("h1");
// const h1Way1 = body.getElementsByClassName("logo");
// const h1Way2 = body.getElementsByTagName("h1");
// const h1Way3 = body.querySelectorAll("h1");
// console.log(h1Way3);


// 12
// Test some querySelectors
const pt = document.querySelector('.parent');
const ch = pt.children
// console.log(ch)
// random color
// let rand = Math.round(Math.random()*1000)
// let cor = "#"
// let rncl = cor + rand
//loop child
// for(let i=0;i<ch.length;i++){
//     console.log(ch[i].innerText)
//     ch[i].style.color = rncl;
// }
// console.log(pt.firstElementChild)
// console.log(pt.lastElementChild)
// console.log(pt.parentElement)
// console.log(ch[0].nextElementSibling)
// console.log(pt.childNodes)
// create a new element
const d = document.createElement("div")
console.log(d)
d.className = "Green"
document.body.appendChild(d)




