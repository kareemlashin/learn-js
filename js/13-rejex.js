let nameRegex=/^[A-z]{3,}(k|b|c)$/;
//start A to z {3,infinity}  k or b or c end
// start ^
// end $
//[from-to]
//[from-to]{3,5} 3-5
//[from-to]{3,} 3-infinity
//(k|b|c) k or b or c
//(kareem)? write or not
let name="kareem";
if(nameRegex.test(name))
{
     console.log("ok")
}else{
     console.log("not")

}