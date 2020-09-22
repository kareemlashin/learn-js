interface User {
    name: string;
    id: number;
  }

  function deleteUser(user: User={name="dssdsd",id=4},xxx?:number, id?:number , idall:number=4) {
    // ...
  }

var name2:string = "John"; 
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2 
console.log("name"+name) 
console.log("first score: "+score1) 
console.log("second score: "+score2) 
console.log("sum of the scores: "+sum)

var n:number = 5 
while(n > 5) { 
   console.log("Entered while") 
   n++;
} 
do { 
   console.log("Entered do…while") 
   n++;
} 
while(n>5)
var alphas:string[]; 
alphas = ["1","2","3","4"];
var nums:number[] = [1,2,3,3];
let names:Array<string>=['sddsdd'];
class Car { 
    //field 
    engine:string; 
  
    //constructor 
    constructor(engine:string) { 
       this.engine = engine 
    }  
 
    //function 
    disp():void { 
       console.log("Engine is  :   "+this.engine) 
    } 
 }

 export class Shape { 
    Area:number 
    
    constructor(a:number) { 
       this.Area = a 
    } 
 } 
 
 class Circle extends Shape { 
    disp():void { 
       console.log("Area of the circle:  "+this.Area) 
    } 
 }
   
 var obj = new Circle(223); 
 obj.disp()

 var x=/^[A-Z]{0,}$/;
 x.test(name2);