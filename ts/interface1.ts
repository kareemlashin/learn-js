// Simple interface
interface ISimplePerson {
  firstName: string;
}

const simplePerson: ISimplePerson = { firstName: "Robert" };

const simpleGreet = (simplePerson: ISimplePerson) =>
  console.log(`Hello ${simplePerson}!`);

simpleGreet(simplePerson); // Prints: Hello Robert!

// Advanced Interface
interface NamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any;
  greet(lastName: string): void;
}

// greet function.
const greet = (person: NamedPerson) => {
  console.log(`Hello ${person.firstName}!`);
  person.greet(person.lastName);
};

const person1: NamedPerson = {
  firstName: "Francisco",
  lastName: "Mir",
  age: 24,
  hobbies: ["Cooking", "Sports"],
  greet(lastName: string) {
    console.log(`Hi, I am ${this.firstName} ${lastName}!`);
  },
};

class Person2 implements NamedPerson {
  constructor(public firstName: string, public lastName: string) {}
  greet(lastName: string) {
    console.log(`Hi, I am ${this.firstName} ${lastName}!`);
  }
}

// Function Types
interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = (num1: number, num2: number) => {
  return (num1 + num2) * 2;
};
console.log(myDoubleFunction(10, 50));

// Interface Inheritance
interface AgedPerson extends NamedPerson {
  age: number;
}

const oldPerson: AgedPerson = {
  age: 74,
  firstName: "An Old Guy",
  greet(lastName: string) {
    console.log(`Hello Sr. ${lastName}.`);
  },
};
