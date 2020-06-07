"use strict";
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
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("Engine is  :   " + this.engine);
    };
    return Car;
}());
exports.Car = Car;
var obj = new Car("XXSY1");
console.log("Reading attribute value Engine as :  " + obj.engine);
obj.disp();
/*******************************/
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
exports.Shape = Shape;
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("Area of the circle:  " + this.Area);
    };
    return Circle;
}(Shape));
exports.Circle = Circle;
var obj2 = new Circle(223);
obj2.disp();
/************************** */
var Animal = /** @class */ (function () {
    function Animal(age, breed) {
        this.age = age;
        this.breed = breed;
    }
    Animal.prototype.makeSound_ = function (sound) {
        console.log(sound);
        console.log(sound);
        console.log(sound);
    };
    return Animal;
}());
exports.Animal = Animal;
var Animal1 = new Animal(11, "dddd");
Animal1.makeSound_("sdsdsd");
/***************************** */
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(age, breed, playsFetch) {
        var _this = _super.call(this, age, breed) // call parent constructor
         || this;
        _this.playsFetch = playsFetch;
        return _this;
    }
    Dog.prototype.makeSound = function () {
        _super.prototype.makeSound_.call(this, 'woof woof');
    };
    Dog.prototype.getAgeInHumanYears = function () {
        return this.age * 7; // super.age will throw error
    };
    return Dog;
}(Animal));
exports.Dog = Dog;
var Dog1 = new Dog(11, "dddd", true);
Dog1.makeSound();
/***************************** */
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(age, breed) {
        return _super.call(this, age, breed) || this;
    }
    Cat.prototype.makeSound = function () {
        _super.prototype.makeSound_.call(this, 'meow meow');
    };
    return Cat;
}(Animal));
exports.Cat = Cat;
var cat1 = new Cat(11, "dddd");
cat1.makeSound();
//public 
//private
//protected just during  extend 
