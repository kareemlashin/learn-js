var para = document.createElement("p");
var element = document.getElementById("div1");
element.appendChild(para);
let sab=Array.from(document.getElementsByClassName("sab")) ;
let sab1=Array.from(document.getElementsByClassName("sab1")) ;
console.log(sab[0].nextSibling);
console.log(sab[0].previousSibling);
console.log(sab[0].nextElementSibling);
console.log(sab1[1].previousElementSibling);
let x=document.getElementById("parent");
console.log(x.children);
console.log(x.children[0]);
console.log(x.firstElementChild);
console.log(x.lastElementChild);
console.log(x.lastChild);
console.log(x.firstChild);
let c=document.getElementById("parent");
console.log(c.lastChild);

console.log(c.lastElementChild);

console.log(c.firstChild);

console.log(c.firstElementChild);

let alll=document.getElementsByClassName("alll");
console.log(alll.nextSibling);
console.log(alll.nextElementSibling);
let all=document.getElementsByClassName("last");
console.log(all.previousSibling);
console.log(all.previousElementSibling);
