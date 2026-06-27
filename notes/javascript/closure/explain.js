/**
 * ============================================================================
 * JavaScript Closures - Complete Guide
 * ============================================================================
 *
 * Definition:
 * ----------
 * A Closure is created when a function remembers variables from its lexical
 * (outer) scope even after the outer function has finished executing.
 *
 * In simple words:
 *
 * A closure = Function + Its surrounding lexical environment.
 *
 * ============================================================================
 *
 * Why do Closures exist?
 *
 * Normally, local variables are destroyed when a function finishes execution.
 *
 * Example:
 *
 * function test() {
 *     let age = 25;
 * }
 *
 * test();
 *
 * // age no longer exists
 *
 * But...
 *
 * If another function still needs those variables,
 * JavaScript keeps them alive.
 *
 * That preserved relationship is called a Closure.
 *
 * ============================================================================
 *
 * Lexical Scope
 *
 * Lexical means:
 * "Defined by where the code is written."
 *
 * Example:
 *
 * Global Scope
 *      |
 *      V
 * outer()
 *      |
 *      V
 * inner()
 *
 * inner() can access:
 *
 * ✔ Its own variables
 * ✔ Parent variables
 * ✔ Global variables
 *
 * ============================================================================
 */

/* ============================================================================
   Example 1 - Basic Closure
   ============================================================================ */

console.log("\n========== Example 1 ==========");

function outer() {
  // Local variable
  let message = "Hello Closure";

  // Inner function
  function inner() {
    console.log(message);
  }

  // Returning the function (NOT calling it)
  return inner;
}

/*
Memory

Global

closureFunction
      |
      V
inner()
      |
      V
Lexical Environment

message = "Hello Closure"
*/

const closureFunction = outer();

/*
outer() has already finished.

Normally message should disappear.

But JavaScript keeps it alive because
inner() still needs it.
*/

closureFunction();

// Output:
// Hello Closure

/* ============================================================================
   Example 2 - Counter
   ============================================================================ */

console.log("\n========== Example 2 ==========");

function createCounter() {
  let count = 0;

  return function () {
    count++;

    console.log(count);
  };
}

const counter = createCounter();

counter();
counter();
counter();
counter();

/*
Output

1
2
3
4

Question:

Why doesn't count become 0 every time?

Answer:

Because the returned function remembers count.

The variable stays alive inside the Closure.
*/

/* ============================================================================
   Example 3 - Each Closure Has Separate Memory
   ============================================================================ */

console.log("\n========== Example 3 ==========");

const counter1 = createCounter();
const counter2 = createCounter();

counter1();
counter1();

counter2();
counter2();

counter1();

/*
Output

1
2
1
2
3

Memory

counter1

count = 3


counter2

count = 2

Each closure owns its own variables.
*/

/* ============================================================================
   Example 4 - Private Variables
   ============================================================================ */

console.log("\n========== Example 4 ==========");

function createBankAccount() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
    },

    withdraw(amount) {
      balance -= amount;
    },

    getBalance() {
      return balance;
    },
  };
}

const account = createBankAccount();

console.log(account.getBalance());

account.deposit(500);

console.log(account.getBalance());

account.withdraw(300);

console.log(account.getBalance());

console.log(account.balance);

/*
Output

1000
1500
1200
undefined

Why?

balance is private.

Only functions inside the closure
can access it.
*/

/* ============================================================================
   Example 5 - Function Factory
   ============================================================================ */

console.log("\n========== Example 5 ==========");

function multiply(multiplier) {
  return function (number) {
    return multiplier * number;
  };
}

const double = multiply(2);
const triple = multiply(3);

console.log(double(5));
console.log(triple(5));

/*
Output

10
15

Memory

double

multiplier = 2


triple

multiplier = 3
*/

/* ============================================================================
   Example 6 - setTimeout and Closures
   ============================================================================ */

console.log("\n========== Example 6 ==========");

function greeting() {
  let name = "John";

  setTimeout(function () {
    console.log(name);
  }, 1000);
}

greeting();

/*
Question

Why does this print after 1 second?

Because the callback function remembers
the variable "name".

This is another Closure.
*/

/* ============================================================================
   Example 7 - Nested Closures
   ============================================================================ */

console.log("\n========== Example 7 ==========");

let a = 1;

function first() {
  let b = 2;

  function second() {
    let c = 3;

    function third() {
      console.log(a);
      console.log(b);
      console.log(c);
    }

    return third;
  }

  return second();
}

const fn = first();

fn();

/*
Output

1
2
3

third() remembers

Global Scope

a

Parent Scope

b

Own Parent

c
*/

/* ============================================================================
   Example 8 - Data Hiding
   ============================================================================ */

console.log("\n========== Example 8 ==========");

function createUser(name) {
  // Private variable

  let password = "12345";

  return {
    getName() {
      return name;
    },

    checkPassword(input) {
      return input === password;
    },
  };
}

const user = createUser("John");

console.log(user.getName());

console.log(user.checkPassword("12345"));

console.log(user.password);

/*
Output

John

true

undefined

Password is hidden.
*/

/* ============================================================================
   Example 9 - Common Interview Question
   ============================================================================ */

console.log("\n========== Example 9 ==========");

function outerFunction() {
  let x = 10;

  return function innerFunction() {
    console.log(x);
  };
}

const myFunction = outerFunction();

myFunction();

/*
Question

outerFunction() has already returned.

Why is x still available?

Answer

Because JavaScript stores

Function

+

Lexical Environment

This combination is called a Closure.
*/

/* ============================================================================
   Example 10 - Memory Leak Example
   ============================================================================ */

console.log("\n========== Example 10 ==========");

function hugeData() {
  const largeArray = new Array(1000000).fill(1);

  return function () {
    console.log(largeArray.length);
  };
}

const memoryExample = hugeData();

memoryExample();

/*
The array still exists because the closure
is still referencing it.

Once memoryExample becomes unreachable,
JavaScript Garbage Collector can clean it up.
*/

/* ============================================================================
   Where are Closures used?
   ============================================================================ */

/*

Closures are everywhere in JavaScript.

Examples:

✔ Event Listeners

button.addEventListener(...)

----------------------------

✔ setTimeout()

----------------------------

✔ setInterval()

----------------------------

✔ Promise callbacks

fetch(...).then(...)

----------------------------

✔ React Event Handlers

<button onClick={handleClick} />

----------------------------

✔ React Hooks

useEffect()

useMemo()

useCallback()

----------------------------

✔ Redux

Middleware

Thunk

----------------------------

✔ Function Factories

----------------------------

✔ Memoization

----------------------------

✔ Private Variables

----------------------------

*/

/* ============================================================================
   Advantages
   ============================================================================ */

/*

✔ Data Hiding

✔ Encapsulation

✔ Private Variables

✔ Function Factory

✔ Memoization

✔ Cleaner Code

✔ Callbacks

✔ React Internals

*/

/* ============================================================================
   Disadvantages
   ============================================================================ */

/*

Because closures keep variables alive,

large objects may stay in memory longer
than necessary.

Improper use can cause memory leaks.

Always remove unnecessary references.

*/

/* ============================================================================
   Scope vs Closure
   ============================================================================ */

/*

Scope

Answers:

"Where can I access this variable?"


Closure

Answers:

"What variables does this function remember?"

Example

function outer() {

    let x = 10;

    return function () {

        console.log(x);

    };

}

Scope:

x belongs to outer()

Closure:

Returned function remembers x forever.

*/

/* ============================================================================
   Interview Questions
   ============================================================================ */

/*

Q1. What is a Closure?

A function together with its lexical environment.

---------------------------------------

Q2. When is a Closure created?

Whenever a function is created.

If that function accesses variables
from an outer scope, those variables
become part of its closure.

---------------------------------------

Q3. Why are Closures useful?

Private Variables

Callbacks

React

Memoization

Function Factories

Data Hiding

---------------------------------------

Q4. Can Closures cause memory leaks?

Yes.

If they keep references to large objects
that are no longer needed.

---------------------------------------

Q5. Does every function create a Closure?

Technically yes.

Every function has access to its lexical environment.

The effect becomes visible when the function
outlives its outer scope.

*/

/* ============================================================================
   Final Takeaways
   ============================================================================ */

/*

1. Closure = Function + Lexical Environment

2. Inner functions remember outer variables.

3. Variables stay alive as long as
   some closure references them.

4. Closures enable:

   - Private Variables
   - Data Hiding
   - Memoization
   - Event Handlers
   - React Hooks
   - Callbacks
   - Function Factories

5. One of the most important concepts
   in JavaScript interviews.

*/
