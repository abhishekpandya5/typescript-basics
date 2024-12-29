# TypeScript

## Imp. point to note:

`Module has its own scope but the scripts have the global scope.`

- `.ts` file gives error after compilation (transpile) due to global scope of `.ts` file scripts. To fix this, we add `export {}` at the top of `.ts` file. This will act as a module now.

## Commands:

- To check TS version: `tsc -v`
- To convert ts file to js file: `tsc main.ts`
- To watch for changes in main.ts file: `tsc main --watch`

## Contents:

- What and Why?
- Environment setup
- Varible declaration
- Varibale types
- Functions
- Interface
- Class
- Access Modifiers

## What?

- Open source programming language from Microsoft
- Typed superset of javascript (Javascript, es5, 6,7 combined with some additional features)
- Compiles down to plain javascript

## Why?

- Relation to Javascript
- Optional static typing and type inference
- IDE support
- Rapid growth and support
- Detect type errors during development

## Variable Declarations:

- Basic types in typescript:

  - `boolean`
  - `number`
  - `string`

E.g.

> let isBeginner: boolean = true;

> let total: number = 0;

> let name: string = "Abhishek";

### 1. Helps in static type checking

### 2. Accurate Intellisence:

- helps in intellisence, when we type a string defined variable like `name.` then it will show only methods applicable for strings. Similarly for number type variable it shows only those supported methods.

- Both these are possible only because of the types we have assigned to the variable.

- Other types are: (Sub types of all other types)
  - `null`
  - `undefined`

E.g.

> let n: null = null;

> let u: undefined = undefined;

- ### ArrayList

  - `To define arrayList`: both syntax has same meaning

  - > let list1: number[] = [1, 2, 3];

  - > let list2: Array<number> = [1, 2, 3];

  - Array which contains values of mixed types:
    - > let person1: [string, number] = ["Abhi", 22]

### Enum type:

> enum Color {Red = 5, Green, Blue};

> let c: Color = Color.Green;

> console.log("color: ", c); //6

### any type:

> let randomvalue: any = 10;

> randomvalue = true;

> randomvalue = "Abhishek";

### unknown type:

> let myVariable: unknown = 10;
