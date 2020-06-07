//? tsc filename.ts
// tsc filename.ts --watch
/*
Boolean
Number
String
Array
Enum
Any
Null 
Undefined
Object

*/
let decimalValue: number = 10;
let hexaDecimalValue: number = 0xf10b;
let binaryValue: number = 0b110100;
let octalValue: number = 0o410;

let firstName: string = "Kunal"; // using double quotes
let lastName: string = 'Chowdhury'; // using single quotes

let isPrimaryAccount: boolean = true;
let hasCards: boolean = false;

let nullValue: null = null;

let undefinedValue: undefined = undefined;

let dynamicValue: any = "Kunal Chowdhury";


function name_string(name: string="kareem") {
  return name;
}

let marks: number[] = [80, 85, 75];
let marks2: Array<number> = [80, 85, 75];
let person: [string, number] = ["Kunal", 2018];
let data_person: [string, number,number] = ["Kunal", 2018, 21];

enum colors{
  red="#999",
  black="#909",
  white="#631",
  yellow="#952",
}
console.log(colors.black)

//void
function warnUser(): void {
  console.log("This is my warning message");
}
