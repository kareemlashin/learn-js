let firstName = 'kareem';
let lastName = 'lashin';
let location = 'domalo';
let country = 'banha';
let city = 'egupt';
let age = 36;
let nullVarieables = null;
let undefinedVariebles = undefined;
let isMarried = false;
let skils=['html','css','js','jquery','ajax','json'];
let data={father:'lashin'}

console.log(firstName, lastName, location, country, age,isMarried ,skils,data);

console.log(
  `firstName ${firstName} lastName ${lastName} location ${location} `
);


//tpyeOf
console.log(tpyeOf(firstName));
console.log(tpyeOf(lastName));
console.log(tpyeOf(location));
console.log(tpyeOf(country));
console.log(tpyeOf(city));
console.log(tpyeOf(age));
console.log(tpyeOf(isMarried));
console.log(tpyeOf(skils));
console.log(tpyeOf(data));


// string method
firstName.toUpperCase();
firstName.toLowerCase();

console.log(firstName.indexOf('a')); 

console.log(firstName.lastIndexOf('a')); 

console.log(firstName.includes('e')); 

console.log(firstName.search('e')); 

console.log(firstName.replace('e','i')); 

console.log(firstName.length);
console.log(firstName.substring(1, 4));
//string.substring(start, end)
console.log(firstName.slice(0, 5));
//string.slice(start, end)
/******************************************** */

//math opreator || arthimetic  operators
let numOne = 4;
let numTwo = 3;

let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let exponentation = numOne ** numTwo // 4 * 4 * 4 

console.log(sum);
console.log(diff);
console.log(mult);
console.log(div);
console.log(remainder)
console.log(exponentation)
/******************************************** */

//switch
let weather = 'cloudy';
switch (weather) {
  case 'rainy':
    console.log('It is raining. You need a rain coat.');
    break;
  case 'cloudy':
    console.log('It might be cold you need a jacket.');
    break;
  case 'sunny':
    console.log('Go out freely.');
    break;
  default:
    console.log('It is not raining. No need for rain coat.');
    break;
}
/******************************************** */

//array
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'angular',
  'ngrx',
  'asp',
  'sql'
]; 
webTechs.sort();
webTechs.reverse();
webTechs.splice(start,delete,element1,element2,..)  ;
webTechs.unshift('add in start');
webTechs.push('add in end');
webTechs.pop() // remove in last;
webTechs.shift() // remove in first;
webTechs.forEach(function(x) {
 console.log(x)    
}
/******************************************** */

//math
parseInt("10");
var y = Math.sqrt(16);      // Returns the square root of 16
Math.max(5, 10);
Math.min(5, 10);
Math.pow(4, 3);
Math.floor(1.6);
Math.random();
var b = Math.abs(-7.25);

/******************************************** */

//for each
//array
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

//Object
let obj={name:'kareem',age:555}
Object.entries(obj).forEach(([key, val]) => {
  console.log(key); 
  console.log(val); 
});}
//set
let set =new Set(['1a','2a','3a']);
set.forEach((x)=>{
      console.log(x); 
})
//Map
let map =new Map([['key1','value1'],['key2','value2']]);
map.forEach((x)=>{
      console.log(x); 
})
/******************************************** */
// for of
//set
for(let y of set)
{
     console.log(y)
}
//Map
for(let x of map)
{
     console.log(x)
}
//array
for(let y of array)
{
     console.log(y)
}
for(let [y,x] of Object.entries(obj))
{
     console.log(x)
}
// for in
//array
for(let y in array)
{
     console.log(array[y]+)
}
for(let y in obj)
{
     console.log(obj[y])
}
