
   function say(message='Hi') {
     console.log(message);
 }
 
 say(); // 'Hi'
 say(undefined); // 'Hi'
 say('Hello'); // 'Hello'

/*
 function fn(param1=default1,param2=default2) {
}*/

function greet(name = "noob master") {
     console.log("Welcome mr." + name);
   }
     
   greet("Jagathish"); // Welcome mr.Jagathish
   greet(); 
   greet(""); 