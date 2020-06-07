var a1: any = [],
  b1: any = {},
  c1 = a1 + b1,
  d1 = a1 - b1;

// inferred types
console.log(c1);
console.log(d1);

// ------------------------------------------------

var flag: boolean = true;

var age: number = 39;

var names: string[] = ["a", "b"];

var ages: Array<number> = [35, 36];

enum Size {
  Small,
  Medium,
  Large,
}
var mySize = Size.Small;

enum Shape {
  Square = 1,
  Rectangle = 2,
  Circle = 4,
  Triangle = 8,
}
var myShape = Shape.Circle;
var myShapeName = Shape[Shape.Square];

function add(a: number, b: number): number {
  return a + b;
}

function log(msg: string): void {
  console.log(msg);
}

interface IHaveAnId {
  id: number;
}

// intellisense and restriction
function getId(objWithId: IHaveAnId): number {
  return objWithId.id;
}

interface IMightHaveAName extends IHaveAnId {
  name?: string;
}

function show(obj: IMightHaveAName): void {
  console.log(obj.id);
  if (obj.name) {
    console.log(obj.name);
  }
}

show({ id: 1 });
show({ id: 2, name: "Jeremy" });

var objWithName: IMightHaveAName = { id: 3, name: "Jeremy" };

interface IHaveWidth {
  width: number;
}

interface IHaveHeight {
  height: number;
}

interface IAm2Dimensional extends IHaveWidth, IHaveHeight {}

var thing: IAm2Dimensional = { width: 5, height: 4 };

interface IDoMath {
  (a: number, b: number): number;
}

function applyMath(a: number, b: number, operation: IDoMath): number {
  return operation(a, b);
}

var adder: IDoMath = (a, b) => a + b;
var subtract: IDoMath = (a, b) => a - b;
var multiply: IDoMath = (a, b) => a * b;
var divide: IDoMath = (a, b) => a / b;

var sum = adder(1, 2);
var diff = subtract(2, 1);

interface IJQuery {
  (fn: () => void): void;
  ready(fn: () => void): void;
}

var $: IJQuery;
$(() => {});
$.ready(() => {});

interface IAmCallback {
  (payload?: any): void;
}

interface ISub {
  (callback: IAmCallback): number;
}

interface ISubscription {
  id: number;
  callback: IAmCallback;
}

interface IMsg {
  sub: ISub;
  unSub(id: number): void;
  pub(payload?: any): void;
}

class Subscription implements ISubscription {
  constructor(public id: number, public callback: IAmCallback) {}
}

// comment out property to show intellisense
class Message implements IMsg {
  private subscriptionList: Subscription[];
  private nextId: number;

  constructor(public messageName: string) {
    this.subscriptionList = [];
    this.nextId = 0;
  }

  public sub(callback: any): any {
    var sub: Subscription;
    this.nextId += 1;
    sub = new Subscription(this.nextId, callback);
    this.subscriptionList[sub.id] = sub;
    return sub.id;
  }

  public unSub(id: number): void {
    this.subscriptionList[id] = undefined;
  }

  public pub(payload?: any) {
    var index: number;
    for (index = 0; index < this.subscriptionList.length; index += 1) {
      if (this.subscriptionList[index]) {
        this.subscriptionList[index].callback(payload);
      }
    }
  }
}

var message = new Message("notify");
var subId = message.sub((payload) => console.log(payload));
message.pub({ a: 1, b: 2, error: "hereItIs" });
message.unSub(subId);

class BasicShape {
  constructor(public sides: number) {}
}

// ES5
class SquareShape extends BasicShape {
  constructor(private lenOfSide: number) {
    super(4);
  }
  get lengthOfSide(): number {
    return this.lenOfSide;
  }

  set lengthOfSide(len: number) {
    if (len <= 0) {
      throw "Must have a positive length for a side";
    }
    this.lenOfSide = len;
  }
}

var square = new SquareShape(4);
square.lengthOfSide = -1; // error

// read-only
class RectangleShape extends BasicShape {
  constructor(public width: number, public height: number) {
    super(4);
  }
  get area(): number {
    return this.width * this.height;
  }
}
