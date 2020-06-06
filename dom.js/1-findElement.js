// find element
let someId=document.getElementById('someId');
let someClassName=document.getElementsByClassName('someClass');
let someTagName=document.getElementsByTagName('p');
let someClassSelector=document.querySelector('.someClass');
let someClassAll=document.querySelectorAll('.someClass');


console.log(someId);
console.log(someClassName[0]);
console.log(someTagName[0]);
console.log(someClassSelector);
console.log(someClassAll[0]);
let someClassName2=Array.from(document.getElementsByClassName('someClass'));
let someClassAll2=Array.from(document.querySelectorAll('.someClass'));
let someTagName2=Array.from(document.getElementsByTagName('p'));

for(let x of someClassName2)
{
     console.log(x)
}
for(let x of someClassAll2)
{
     console.log(x)
}
for(let x of someTagName2)
{
     console.log(x)
}
