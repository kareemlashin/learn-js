let array=["1a","2a","3a","4a","5a","6a","7a","8a","9a","0a"];
console.log(`*********array*********`)

for(let x of array)
{
     console.log(`for of  ${x}`)
}


console.log(`*********set*********`)

let set=new Set(['1b','2b','3b']);

for(let c of set)
{
     console.log(`set for of  ${c}`)
}








console.log(`*********Object*********`)
let obj={
     name:"kareem",age:5,
     address:'banha',
     phone:'0100'
};

for(let [y,x] of Object.entries(obj))
{
     console.log(`for in  ${x}`)
}







console.log(`*********Map*********`)

let Map=new Map([['key1','value1'],['key2','value2'],['key3','value3']]);

for(let [key, value] of Map)
{
     console.log(`map for of  ${value}`)
}