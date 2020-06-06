

// ! local vs global
if(true)
{
    // local scope if use let  ,const
    // global scope if use var 
    let c=9;
    var g=9;
    const m=9;
    console.log(c)
    console.log(g)
    console.log(m)
}
//console.log(c)
//console.log(m)
console.log(g)

function local_global(){
     // local scope if use var ,let  ,const in function
     let c2=19;
     var g2=19;
     const m2=19;
     console.log(c2)
     console.log(g2)
     console.log(m2)  
}
local_global();
//console.log(c2)
//console.log(g2)
//console.log(m2)
for(var u2=0;u2<10;u2++)
{
          // global scope if use var in loops

     console.log(`*`)
}
console.log(`var used in for  ${u2}`)

for(let u=0;u<10;u++)
{
      // local scope if  use  let  in loops
    console.log(`*`)
}
//console.log(`let used in for  ${u}`)

/*
i cant use const in loops
for(const u3=0;u3<10;u3++)
{
     console.log(`*`)
}
console.log(`const used in for  ${u3}`)
*/