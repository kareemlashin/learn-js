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
var decimalValue = 10;
var hexaDecimalValue = 0xf10b;
var binaryValue = 52;
var octalValue = 264;
var firstName = "Kunal"; // using double quotes
var lastName = 'Chowdhury'; // using single quotes
var isPrimaryAccount = true;
var hasCards = false;
var nullValue = null;
var undefinedValue = undefined;
var dynamicValue = "Kunal Chowdhury";
function name_string(name) {
    if (name === void 0) { name = "kareem"; }
    return name;
}
var marks = [80, 85, 75];
var marks2 = [80, 85, 75];
var person = ["Kunal", 2018];
var data_person = ["Kunal", 2018, 21];
var colors;
(function (colors) {
    colors["red"] = "#999";
    colors["black"] = "#909";
    colors["white"] = "#631";
    colors["yellow"] = "#952";
})(colors || (colors = {}));
console.log(colors.black);
//void
function warnUser() {
    console.log("This is my warning message");
}
