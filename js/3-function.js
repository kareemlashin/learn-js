// function statement vs expression

//? statement
function statement(){
     console.log("statement");
}
statement();

//!expression
//IIFE 
(function(){
     console.log("expression");
 
})();

let expression=function(){
     console.log("expression");

}
expression();

//function parameter

function sum(pram1,pram2)
{
     console.log(`function with parameters sum ${pram1+pram2}`)
}
sum(5,5);


//!return_function
function return_function(){
     return 5;
}
let return_value=return_function();
console.log(`return_value ${return_value}`)