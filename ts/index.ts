//? tsc filename.ts
// tsc filename.ts --watch

// function(param:type=value)
function add(x:number=6, y:number=6) {
	return x+y;
}

let sum:any = add(5,10);
let sum2:any = add();
console.log(sum);
console.log(sum2);

//Number
let a :number = 10;
let marks :number = 150;
let price :number = 10.2;

//String
let str :string = "hello world";

//Boolean

let bflag :boolean = false;
let statu: boolean = true;
let years: Array<number> = [ 2016, 2017, 2018, 2019]; 
for (let  i of years) {
     console.log(i)
}

let months: Array<string> = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]; //array with all string values.
for (let  i of months) {
  console.log(i)
}

console.log(months.length);  // 12

class Students {
  age : number;
  name : string;
  roll_no : number;
  
  constructor(age: number, name:string, roll_no: number) {
      this.age = age;
      this.name = name;
      this.roll_no = roll_no;
  }

  getRollNo(): number {
      return this.roll_no;
  }

  getName() : string {
      return this.name;
  }

  getAge() : number {
      return this.age;
  }
} 
let student_details = new Students(15, "Harry John", 33);
student_details.getAge(); // 15
student_details.getName(); // Harry John

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }

  getName(): string {
      return this.name;
  }

  getAge(): number {
      return this.age;
  }
}

class Student extends Person {
  tmarks: number;
  getMarks(): number {
      return this.tmarks;
  }

  setMarks(tmarks) {
      this.tmarks = tmarks;
  }
}

let _std1 = new Student('Sheena', 24);
_std1.getAge(); // output is 24
_std1.setMarks(500);
_std1.getMarks(); // output is 500

interface Dimension {
  width: string;
  height: string;
}


let _imagedim: Dimension = {
  width: "100px",
  height: "200px"
};