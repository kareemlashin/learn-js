'use strict';
let array=["1a","2a","3a","4a","5a","6a","7a","8a","9a","0a"];
console.log(`*********array*********`)


console.log(`*********======*********`)

for(let x in array)
{
     console.log(`for in  ${array[x]}`)
}


console.log(`*********Object*********`)
let obj={
     name:"kareem",age:5,
     address:'banha',
     phone:'0100'
};
for(let x in obj)
{
     console.log(`for of object  ${obj[x]}`)
}
console.log(`*********======*********`)

