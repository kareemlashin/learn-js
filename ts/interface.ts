
export interface IPerson { 
  firstName:string, 
  lastName:string, 
} 

var customer:IPerson = { 
  firstName:"Tom",
  lastName:"Hanks", 
} 

console.log("Customer Object ") 
console.log(customer.firstName) 
console.log(customer.lastName) 

var employee:IPerson = { 
  firstName:"Jim",
  lastName:"Blakes", 
} 
 
console.log("Employee  Object ") 
console.log(employee.firstName);
console.log(employee.lastName);