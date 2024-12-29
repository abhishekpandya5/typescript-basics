export {};
let message = "Hello world";
console.log(message);

// js
// let isBeginner = true;

// basic types in typescript:

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Abhishek";

// name = true

// intellisence
name.charAt(1);
total.toFixed(2);

let sentence: string = `My name is ${name}. I am learning typescript`;

console.log(sentence);

//  null and undefined are subtypes of all other types.
let n: null = null;
let u: undefined = undefined;

// they can be assigned like,
// let isNew: boolean = true;
// let myName: string = undefined;

// To define arrayList:
let list1: number[] = [1, 2, 3]; //same
let list2: Array<number> = [1, 2, 3]; //same

let person1: [string, number] = ["Abhi", 22];

// it cannot be like let person1: [strimg, number] = [22, "Abhi"]; //this is invalid

// enum type:
enum Color {
  Red = 5,
  Green,
  Blue
}

let c: Color = Color.Green;

console.log("color: ", c); //6

// when we not sure about the type of variable then we can use the type "any";

let randomvalue: any = 10;
randomvalue = true;
randomvalue = "Abhishek";

// type any can cause error in the code
let myVariable: any = 10;

console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();

// all these above are not throwing error due to "any" type, but this will create issue.

// To fix this, in Typescript v3, type "unknown" is introduced.

let myVariable2: unknown = 10;
myVariable2();
myVariable2.toUpperCase();

// to fix above errors, we can use type assertion.
(myVariable2 as string).toUpperCase(); // now myVariable2 will be treated as string then uppercase will apply.

// we can also use function to handle with type unknown.
function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(myVariable2)) {
  console.log(myVariable2.name);
}

// ------------two concepts------------------

// 1. Type Inference:

// as types is completely optional
let a;
a = 10;
a = true;

let b = 20;
b = true; //here we got error even after we do not specify the type to variable b. This is due to,
//  Typescript infered the type of variable b.
// here intellisene gives only methods applicable to type number.

// Type inference will not work on variable a as we do not initialize the variable while declaring.

// 2. Ability to specify union of types.

let multiType: number | boolean;
multiType = 20;
multiType = true;
// above both will work without any issue.

// why we need to use union of types and not just use "any" type?

let anyType: any;
anyType = 20;
anyType = true;

// any type has no restrictions.

// ------------Functions:--------------

function add(num1: number, num2?: number): number {
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }
}

// after function name, number is the return type.

add(2, 5);
add(2);

// default argument value
function add2(num1: number, num2: number = 10): number {
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }
}

add(5);

// ------------Interface: for defining object types---------------

interface Person {
  firstName: string;
  lastName?: string; //optional property usecase can be forms
}

function fullName(person: Person) {
  console.log(person.firstName + " " + person.lastName);
}

let p = {
  firstName: "Abhishek",
  lastName: "Pandya"
};

fullName(p);

// ----------------Class:------------------

class Employee {
  protected employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("Abhishek");

console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }

  delegateWork() {
    console.log("Manager delegating tasks");
  }
}

let m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

// ---------------Access Modifiers:---------------

/**
 * Public: access to all classes and derived classes and outside the class
 * Private: only accessible to the main class
 * Protected: accessible to main class and derived class only, not accessible outside the class.
 *
 */
