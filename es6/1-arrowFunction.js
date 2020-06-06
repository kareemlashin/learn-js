var obj = { 
     i: 5555555555,
     one: function() {
      console.log(`this.i with out arrow function ${this.i}`)
         
      function FunTwo() { console.log(`this.i with out arrow function ${this.i}`);}
    
      FunTwo();
     },
     three: function() {
          console.log(`this.i with out arrow function ${this.i}`);
          let arrow =()=> { console.log(`this.i with  arrow function ${this.i}`);;
     
          }
          arrow();
     },

  
     
   }
   
   obj.one(); 
   obj.three(); 
let arrow_function=()=>{console.log("arrow function")};
arrow_function();

let arrow_function2=(x,y)=>{console.log("arrow function "+x +""+y)};
arrow_function2(4,5);