let isDone: boolean = true;
let height: number = 6;
let name: string = "test";
let list: number[] = [1, 2, 3];
let yy:Array<Number>=[1];
// Enums.
enum Color {
  Red="dsds",
  Green="sddsd",
  Blue="kkkk",
}
let c: Color = Color.Green;

let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

let anotherList: any[] = [1, true, "free"];

function warnUser(): void {
  alert("This is my warning message");
}

function add(a?: number, b: number=4): number {
  return a + b;
}

function sayHello(name?: string) {
  if (name) {
    console.log("Hello " + name + "!");
  }

  console.log("Hello");
}

function takesCallback(cb: (error: Error) => any) {
  return cb(new Error("Boom!"));
}

takesCallback(function (err) {
  console.log(err.message);
});

interface MyInterface {
  value: string;
  method(): number;
}

interface Foo {
  x: number;
  y: number;
}

let foo = {} as Foo;
foo.x = 10;
foo.y = 10;

let bad = ({ x: 10 } as any) as string;
bad.toUpperCase();

type HelloWorld = string;

function print(): HelloWorld {
  return "hello world";
}

print().toUpperCase();

function getLabel(obj: { label: string }): string {
  return obj.label;
}

type LabelObj = { label: string };

interface Animal {
  legs: number;
}

interface Dog extends Animal {
  bark: string;
}

function typeGuard(obj: Dog): obj is Dog {
  return typeof obj.bark === "string";
}

let dog = { legs: 4, bark: "woof!" };

if (typeGuard(dog)) {
  alert("It's a dog! " + dog.bark);
}

function identity<T>(arg: T): T {
  return arg;
}

function arrify<T>(arr: T | T[]): T[] {
  if (Array.isArray(arr)) {
    return arr;
  }

  return [arr] as T[];
}

interface Map<T> {
  [key: string]: T;
}

let dictionary: Map<string> = {};
dictionary[name] = name;

let value: string | string[] = "test";

console.log(value.length);

function extend<A, B>(a: A, b: B): A & B {
  Object.keys(b).forEach((key) => {
    (a as any)[key] = (b as any)[key];
  });

  return a as A & B;
}

function makeDogFromAnimal(animal: Animal): Dog {
  return extend(animal, { bark: "woof woof woof" });
}

let tuple: [string, number] = ["hello", 10];

console.log(tuple[0].substr(1));

import * as TS from "typescript";

declare function require(module: string): any;

function eventually() {
  let ts: typeof TS = require("typescript");
}

class Foo {
  bar: string;
}

function create<T>(Clazz: { new (): T }): T {
  return new Clazz();
}

let result = create(Foo);

class Calculator {
  constructor(protected value: number = 0) {}

  result(): number {
    return this.value;
  }

  add(operand: number) {
    this.value += operand;
    return this;
  }

  subtract(operand: number) {
    this.value -= operand;
    return this;
  }
}

let x = new Calculator(10).add(5).result();
