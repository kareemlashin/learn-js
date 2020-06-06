let myMap = new Map([["key","value"]])
myMap.set('bla','blaa')
myMap.set('bla2','blaa2')
console.log(myMap)  

console.log(myMap.get('bla2')); 
for(let [k,v] of myMap)
{
     console.log(`of ${v}`)
}
myMap.forEach((k)=>{
     console.log(`forEach ${k}`)
})

console.log(myMap)  
console.log(myMap.has('bla'))  
myMap.delete('bla') 
console.log(myMap.has('bla'))  
console.log(myMap.size)  
myMap.clear();
console.log(myMap)  
