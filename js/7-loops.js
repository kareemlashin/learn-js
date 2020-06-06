// for loop
let array=[1,2,3,4,5,6,7,8,9,10];
for(let y=0;y<array.length;y++)
{
     console.log(`for loop ${array[y]}`)
}
console.log(`*********======*********`)

// for  do loop
let y=0;
do{
     console.log(`do loop ${array[y]}`)
     y++;
}while(y<array.length);


console.log(`*********======*********`)

// for while loop
let c=0;
while(c<array.length){
     console.log(`while loop ${array[c]}`)
     c++; 
}