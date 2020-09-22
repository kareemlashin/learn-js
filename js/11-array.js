var string_arr = ["1", "2", "3", "4"];


string_arr.push("5", "6"); // add in end

console.log("After push  " + string_arr);
string_arr.unshift("0", "-1"); //ad in start
console.log("After unshift  " + string_arr);
string_arr.pop(); // remove end  6
console.log("After pop  " + string_arr);
string_arr.shift(); //remove start  -1
console.log("After shift  " + string_arr);
string_arr.splice(0, 0, "add 1", "add 2"); // start index 1 , remove 0 , add 
console.log("After splice  " + string_arr);
var slice = string_arr.slice(1, 3); // start index 1  //  1 , 2 stop
console.log("slice " + slice);
string_arr.sort();
console.log("After sort  " + string_arr);