/*******************************************************************************************
 * VAR vs LET vs CONST
 * -----------------------------------------------------------------------------------------
 * These are three different ways to declare variables in JavaScript/TypeScript.
 *
 * Before ES6 (2015), JavaScript only had:
 *      var
 *
 * After ES6, two new keywords were introduced:
 *      let
 *      const
 *
 * Nowadays:
 *      ✔ Use const by default
 *      ✔ Use let if the value needs to change
 *      ❌ Avoid var (unless maintaining old code)
 *******************************************************************************************/

/*******************************************************************************************
 * 1. var
 ******************************************************************************************/

// var creates a variable.
//
// Characteristics:
// 1. Function Scoped
// 2. Can be redeclared
// 3. Can be reassigned
// 4. Hoisted and initialized with undefined

var age = 25;

console.log(age); // 25

age = 30; // reassignment allowed

console.log(age); // 30

// Redeclaration is allowed

var age = 35;

console.log(age); // 35

/*******************************************************************************************
 * 2. let
 ******************************************************************************************/

// let was introduced in ES6.
//
// Characteristics:
//
// 1. Block Scoped
// 2. Cannot be redeclared in same scope
// 3. Can be reassigned
// 4. Hoisted BUT NOT initialized

let city = "London";

console.log(city);

city = "Paris";

console.log(city);

// let city = "Tokyo";
// Error:
// Cannot redeclare block-scoped variable 'city'.

/*******************************************************************************************
 * 3. const
 ******************************************************************************************/

// const is almost same as let.
//
// Difference:
//
// It CANNOT be reassigned.
//
// Characteristics:
//
// 1. Block Scoped
// 2. Cannot redeclare
// 3. Cannot reassign
// 4. Hoisted but not initialized

const country = "India";

console.log(country);

// country = "USA";
// Error:
// Cannot assign to 'country' because it is a constant.

/*******************************************************************************************
 * BLOCK SCOPE
 ******************************************************************************************/

// A block means anything inside:
//
// {
//      ...
// }

{
  var varVariable = 10;
  let letVariable = 20;
  const constVariable = 30;
}

console.log(varVariable); // 10

// console.log(letVariable);
// Error

// console.log(constVariable);
// Error

// Why?
//
// var ignores block scope.
//
// let and const stay inside the block.

/*******************************************************************************************
 * FUNCTION SCOPE
 ******************************************************************************************/

function example() {
  var x = 1;
  let y = 2;
  const z = 3;

  console.log(x);
  console.log(y);
  console.log(z);
}

example();

// console.log(x);
// Error

// var is NOT global.
// It is function scoped.

/*******************************************************************************************
 * LOOP EXAMPLE
 ******************************************************************************************/

console.log("\nLoop using var");

for (var i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);

// Output:
//
// 0
// 1
// 2
// 3
//
// Why?
//
// var belongs to the entire function/global scope.

console.log("\nLoop using let");

for (let j = 0; j < 3; j++) {
  console.log(j);
}

// console.log(j);
// Error

// j exists only inside the loop.

/*******************************************************************************************
 * REDECLARATION
 ******************************************************************************************/

var a = 10;
var a = 20; // Allowed

console.log(a);

let b = 10;

// let b = 20;
// Error

const c = 10;

// const c = 20;
// Error

/*******************************************************************************************
 * REASSIGNMENT
 ******************************************************************************************/

var score = 100;
score = 200;

let marks = 90;
marks = 95;

const pi = 3.14;

// pi = 3.14159;
// Error

/*******************************************************************************************
 * OBJECTS WITH CONST
 ******************************************************************************************/

// const DOES NOT make the object immutable.
//
// It only prevents changing the reference.

const person = {
  name: "John",
  age: 20,
};

// Allowed

person.age = 21;

person.name = "David";

console.log(person);

// Not Allowed

// person = {};
//
// Error

/*******************************************************************************************
 * ARRAYS WITH CONST
 ******************************************************************************************/

const numbers = [1, 2, 3];

// Allowed

numbers.push(4);

numbers.push(5);

console.log(numbers);

// Not Allowed

// numbers = [];
//
// Error

/*******************************************************************************************
 * HOISTING
 ******************************************************************************************/

/*
What is Hoisting?

Before executing your code,
JavaScript moves declarations to the top of their scope.

Think of JavaScript as doing this internally:

Your code:

----------------------------------------

console.log(a);

var a = 10;

----------------------------------------

Internally becomes:

----------------------------------------

var a;

console.log(a);

a = 10;

----------------------------------------

Therefore output:

undefined

NOT ReferenceError.
*/

console.log(varNumber);

var varNumber = 100;

// Output:
//
// undefined

/*******************************************************************************************
 * let Hoisting
 ******************************************************************************************/

/*
Many developers think let is NOT hoisted.

This is FALSE.

let IS hoisted.

But...

JavaScript DOES NOT initialize it.

Until execution reaches the declaration,
the variable lives inside something called

Temporal Dead Zone (TDZ)

Trying to access it throws:

ReferenceError
*/

// console.log(letNumber);
//
// ReferenceError

let letNumber = 50;

/*******************************************************************************************
 * const Hoisting
 ******************************************************************************************/

// Same behaviour as let.

// console.log(constNumber);
//
// ReferenceError

const constNumber = 100;

/*******************************************************************************************
 * TEMPORAL DEAD ZONE (TDZ)
 ******************************************************************************************/

/*
Definition

Temporal Dead Zone is the time between

1. entering the scope

and

2. actual variable declaration.

Example

Execution starts

↓

Variable exists

↓

But NOT initialized

↓

Trying to use it

↓

ReferenceError

↓

Declaration executes

↓

Now variable is usable.
*/

{
  // TDZ Starts

  // console.log(language);

  let language = "TypeScript";

  console.log(language);

  // TDZ Ends
}

/*******************************************************************************************
 * Visualizing TDZ
 ******************************************************************************************/

/*

Execution enters block

↓

{
        TDZ

        TDZ

        TDZ

        let value = 10;

        usable

        usable
}

*/

{
  // console.log(value);

  let value = 10;

  console.log(value);
}

/*******************************************************************************************
 * WHY DOES TDZ EXIST?
 ******************************************************************************************/

/*

Without TDZ:

Developer accidentally uses variable
before assigning it.

Instead of failing immediately,

program silently gets

undefined

which creates bugs.

Example:

price = price + tax;

If price is undefined

Result becomes

NaN

instead of giving an immediate error.

TDZ catches such mistakes early.
*/

/*******************************************************************************************
 * var Hoisting Timeline
 ******************************************************************************************/

/*

Compilation Phase

↓

var total;

↓

Initialization

↓

total = undefined

↓

Execution

↓

console.log(total)

↓

undefined

↓

Assignment

↓

total = 100

*/

console.log(total);

var total = 100;

/*******************************************************************************************
 * let Timeline
 ******************************************************************************************/

/*

Compilation

↓

let total2;

↓

TDZ

↓

console.log(total2)

↓

ReferenceError

↓

Initialization

↓

total2 = 100

*/

let total2 = 100;

console.log(total2);

/*******************************************************************************************
 * const Timeline
 ******************************************************************************************/

/*

Compilation

↓

const PI;

↓

TDZ

↓

ReferenceError if accessed

↓

Must initialize immediately

const PI = 3.14

*/

const PI = 3.14;

console.log(PI);

/*******************************************************************************************
 * Difference Table
 ******************************************************************************************/

/*

                     var        let       const
----------------------------------------------------------
Scope               Function    Block     Block

Redeclare           Yes         No        No

Reassign            Yes         Yes       No

Hoisted             Yes         Yes       Yes

Initialized         undefined   No        No

TDZ                 No          Yes       Yes

Global Object       Yes*        No        No

Use Today           Avoid       Sometimes Default

*/

/*******************************************************************************************
 * Which one should you use?
 ******************************************************************************************/

/*

Can value change?

        |
       Yes
        |
      use let

        |

No

        |

Use const



Avoid var.
*/

/*******************************************************************************************
 * Best Practices
 ******************************************************************************************/

// ✔ Prefer const

const company = "OpenAI";

// ✔ Use let only when necessary

let counter = 0;

counter++;

// ❌ Avoid var

var oldWay = true;

/*******************************************************************************************
 * Interview Questions
 ******************************************************************************************/

/*

Q1.
Difference between let and const?

Answer:
Both are block scoped.
let allows reassignment.
const doesn't.


--------------------------------------------------


Q2.
Is let hoisted?

Yes.

It is hoisted but remains inside
Temporal Dead Zone until declaration.


--------------------------------------------------


Q3.
Why does var print undefined?

Because JavaScript initializes var
with undefined during hoisting.


--------------------------------------------------


Q4.
Why was let introduced?

To fix issues with var:
- accidental redeclaration
- function scope problems
- hoisting bugs


--------------------------------------------------


Q5.
Can const objects change?

Yes.

Object properties can change.

Only the reference cannot.


--------------------------------------------------


Q6.
Can const arrays change?

Yes.

push()
pop()
splice()

all work.

Only assigning a new array is forbidden.


--------------------------------------------------


Q7.
Which should we use in production?

const > let >>> var

*/
