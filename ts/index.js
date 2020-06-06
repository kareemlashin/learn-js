var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//? tsc filename.ts
// tsc filename.ts --watch
// function(param:type=value)
function add(x, y) {
    if (x === void 0) { x = 6; }
    if (y === void 0) { y = 6; }
    return x + y;
}
var sum = add(5, 10);
var sum2 = add();
console.log(sum);
console.log(sum2);
//Number
var a = 10;
var marks = 150;
var price = 10.2;
//String
var str = "hello world";
//Boolean
var bflag = false;
var status = true;
var years = [2016, 2017, 2018, 2019];
for (var _i = 0, years_1 = years; _i < years_1.length; _i++) {
    var i = years_1[_i];
    console.log(i);
}
var months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]; //array with all string values.
for (var _a = 0, months_1 = months; _a < months_1.length; _a++) {
    var i = months_1[_a];
    console.log(i);
}
console.log(months.length); // 12
var Students = /** @class */ (function () {
    function Students(age, name, roll_no) {
        this.age = age;
        this.name = name;
        this.roll_no = roll_no;
    }
    Students.prototype.getRollNo = function () {
        return this.roll_no;
    };
    Students.prototype.getName = function () {
        return this.name;
    };
    Students.prototype.getAge = function () {
        return this.age;
    };
    return Students;
}());
var student_details = new Students(15, "Harry John", 33);
student_details.getAge(); // 15
student_details.getName(); // Harry John
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.getMarks = function () {
        return this.tmarks;
    };
    Student.prototype.setMarks = function (tmarks) {
        this.tmarks = tmarks;
    };
    return Student;
}(Person));
var _std1 = new Student('Sheena', 24);
_std1.getAge(); // output is 24
_std1.setMarks(500);
_std1.getMarks(); // output is 500
var _imagedim = {
    width: "100px",
    height: "200px"
};
