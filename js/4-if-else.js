let time=5;
if (time > 1 && time < 5  ) {
     console.log("Good morning");

   } else if (time > 5 &&  time < 9) {
     console.log("Good after noon");

   } else  if (time > 9){
     console.log("Good evening");

   }

   let name="kareem";
   let password="123";
   if(name=="ahmed" || password=="123")
   {
        console.log("success")
   }else{
        console.log("field")
   }
   
   
   if(name=="kareem" && password=="123")
   {
        console.log("success")
   }else{
        console.log("field")
   }
   
   if(name==="kareem" && password===123)
   {
        console.log("success")
   }else{
        console.log("field")
   }
   
   if(name==="kareem" ||password===123)
   {
        console.log("success")
   }else{
        console.log("field")
   }
   