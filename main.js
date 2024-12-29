"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Hello world";
console.log(message);
// js
// let isBeginner = true;
// basic types in typescript:
var isBeginner = true;
var total = 0;
var name = "Abhishek";
// name = true
// intellisence
name.charAt(1);
total.toFixed(2);
var sentence = "My name is ".concat(name, ". I am learning typescript");
console.log(sentence);
//  null and undefined are subtypes of all other types.
var n = null;
var u = undefined;
// they can be assigned like,
// let isNew: boolean = true;
// let myName: string = undefined;
// To define arrayList:
var list1 = [1, 2, 3]; //same
var list2 = [1, 2, 3]; //same
var person1 = ["Abhi", 22];
// it camnot be like let person1: [strimg, number] = [22, "Abhi"]; //this is invalid
// enum type:
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log("color: ", c); //6
// when we not sure about the type of variable then we can use the type "any";
var randomvalue = 10;
randomvalue = true;
randomvalue = "Abhishek";
// type any can cause error in the code
var myVariable = 10;
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();
// all these above are not throwing error due to "any" type, but this will create issue.
// To fix this, in Typescript v3, type "unknown" is introduced.
var myVariable2 = 10;
myVariable2();
myVariable2.toUpperCase();
// to fix above errors, we can use type assertion.
myVariable2.toUpperCase(); // now myVariable2 will be treated as string then uppercase will apply.
// we can also use function to handle with type unknown.
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}
// ------------two concepts------------------
// 1. Type Inference:
// as types is completely optional
var a;
a = 10;
a = true;
var b = 20;
b = true; //here we got error even after we do not specify the type to variable b. This is due to,
//  Typescript infered the type of variable b.
// here intellisene gives only methods applicable to type number.
// Type inference will not work on variable a as we do not initialize the variable while declaring.
// 2. Ability to specify union of types.
var multiType;
multiType = 20;
multiType = true;
// above both will work without any issue.
// why we need to use union of types and not just use "any" type?
var anyType;
anyType = 20;
anyType = true;
// any type has no restrictions.
// Functions:
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
// after function name, number is the return type.
add(2, 5);
add(2);
// default argument value
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add(5);
