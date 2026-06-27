/**
 * ============================================================================
 * File Name : prototype-inheritance.js
 * Topic     : Prototype Inheritance in JavaScript / TypeScript
 * ============================================================================
 *
 * WHAT IS PROTOTYPE INHERITANCE?
 * ------------------------------
 *
 * Prototype Inheritance is the mechanism by which one object can access
 * properties and methods of another object.
 *
 * Every JavaScript object has a hidden internal property called:
 *
 *      [[Prototype]]
 *
 * (You can access it using Object.getPrototypeOf()).
 *
 * Whenever JavaScript cannot find a property on an object,
 * it automatically searches that object's prototype.
 *
 * If still not found...
 * it searches the prototype's prototype...
 * until it reaches null.
 *
 * This searching process is called the
 *
 *              PROTOTYPE CHAIN
 *
 * ============================================================================
 *
 * WHY DOES PROTOTYPE INHERITANCE EXIST?
 * -------------------------------------
 *
 * Imagine you create 10,000 user objects.
 *
 * Without prototypes:
 *
 * Every object would store its own copy of every method.
 *
 * {
 *    name,
 *    age,
 *    login(),
 *    logout(),
 *    update(),
 *    delete(),
 *    ...
 * }
 *
 * This wastes memory.
 *
 * Instead...
 *
 * JavaScript stores shared methods only ONCE
 * inside a prototype object.
 *
 * Every object shares those methods.
 *
 * Result:
 *
 * ✔ Less memory usage
 * ✔ Faster creation
 * ✔ Code reuse
 *
 * ============================================================================
 * PROPERTY LOOKUP PROCESS
 * ============================================================================
 *
 * Suppose we write:
 *
 *      dog.eat()
 *
 * JavaScript searches like this:
 *
 *              dog
 *                │
 *      eat exists?
 *          │
 *       No ❌
 *          │
 *          ▼
 *      dog's Prototype
 *          │
 *      eat exists?
 *          │
 *       Yes ✅
 *          │
 *      Execute eat()
 *
 * ============================================================================
 */

console.log("\n================ EXAMPLE 1 ==================\n");

/**
 * Parent Object
 */

const animal = {
  type: "Animal",

  eat() {
    console.log("Animal is eating...");
  },
};

/**
 * Child Object
 */

const dog = {
  name: "Rocky",
};

/**
 * Make dog inherit from animal
 */

Object.setPrototypeOf(dog, animal);

console.log(dog.name);
// Rocky
//
// Found directly on dog

console.log(dog.type);
// Animal
//
// JS searches:
//
// dog.type
// ❌
//
// prototype (animal)
// ✅

dog.eat();
// inherited method

/**
 * ============================================================================
 */

console.log("\n================ EXAMPLE 2 ==================\n");

/**
 * Prototype Chain
 *
 * child
 *   ↓
 * parent
 *   ↓
 * grandParent
 *   ↓
 * Object.prototype
 *   ↓
 * null
 */

const grandParent = {
  country: "India",
};

const parent = {
  language: "English",
};

const child = {
  name: "John",
};

Object.setPrototypeOf(parent, grandParent);
Object.setPrototypeOf(child, parent);

console.log(child.name);
// own property

console.log(child.language);
// inherited from parent

console.log(child.country);
// inherited from grandParent

/**
 * ============================================================================
 */

console.log("\n================ EXAMPLE 3 ==================\n");

/**
 * Property Shadowing
 *
 * If both child and parent have the same property,
 * child wins.
 */

const vehicle = {
  wheels: 4,
};

const bike = {
  wheels: 2,
};

Object.setPrototypeOf(bike, vehicle);

console.log(bike.wheels);

// Output:
//
// 2
//
// JS never checks prototype because
// property already exists on bike.

/**
 * ============================================================================
 */

console.log("\n================ EXAMPLE 4 ==================\n");

/**
 * Object.create()
 *
 * Creates a new object whose prototype
 * is the object passed.
 */

const person = {
  greet() {
    console.log("Hello");
  },
};

const student = Object.create(person);

student.name = "Alex";

console.log(student.name);

student.greet();

/**
 * student
 *
 * {
 *   name : "Alex"
 * }
 *
 * Prototype
 *
 * {
 *   greet()
 * }
 */

/**
 * ============================================================================
 */

console.log("\n================ EXAMPLE 5 ==================\n");

/**
 * Arrays use Prototype Inheritance
 */

const numbers = [10, 20, 30];

numbers.push(40);

console.log(numbers);

/**
 * Question:
 *
 * Where is push() defined?
 *
 * Not inside numbers.
 *
 * JS searches:
 *
 * numbers
 *
 * ↓
 *
 * Array.prototype
 *
 * ↓
 *
 * push()
 * pop()
 * map()
 * filter()
 * reduce()
 *
 */

/**
 * ============================================================================
 */

console.log("\n================ EXAMPLE 6 ==================\n");

/**
 * Functions also use prototypes
 */

function greet() {}

greet.call(null);
greet.apply(null);
greet.bind(null);

/**
 * call()
 * apply()
 * bind()
 *
 * come from
 *
 * Function.prototype
 */

/**
 * ============================================================================
 */

console.log("\n================ EXAMPLE 7 ==================\n");

/**
 * Every normal object inherits from Object.prototype
 */

const user = {
  firstName: "Mijanul",
};

console.log(user.toString());

console.log(user.hasOwnProperty("firstName"));

/**
 * toString()
 * hasOwnProperty()
 * valueOf()
 *
 * all come from
 *
 * Object.prototype
 */

/**
 * ============================================================================
 */

console.log("\n================ EXAMPLE 8 ==================\n");

/**
 * Checking Prototype
 */

console.log(Object.getPrototypeOf(dog));

console.log(Object.getPrototypeOf(user));

/**
 * Object.getPrototypeOf(object)
 *
 * returns the prototype object.
 */

/**
 * ============================================================================
 */

console.log("\n================ EXAMPLE 9 ==================\n");

/**
 * Prototype Inheritance using class
 *
 * IMPORTANT:
 *
 * JavaScript DOES NOT have classical inheritance.
 *
 * class is only syntax sugar.
 *
 * Under the hood,
 * it still uses prototypes.
 */

class AnimalClass {
  eat() {
    console.log("Eating...");
  }
}

class DogClass extends AnimalClass {
  bark() {
    console.log("Woof...");
  }
}

const d = new DogClass();

d.eat();

d.bark();

/**
 * Under the hood:
 *
 * DogClass.prototype
 *
 * ↓
 *
 * AnimalClass.prototype
 *
 * ↓
 *
 * Object.prototype
 */

/**
 * ============================================================================
 * HOW PROPERTY LOOKUP WORKS
 * ============================================================================
 *
 * Suppose:
 *
 * child.country
 *
 * JavaScript searches:
 *
 * child
 *   │
 *   │ country?
 *   │
 *   └── No
 *          │
 *          ▼
 * parent
 *   │
 *   │ country?
 *   │
 *   └── No
 *          │
 *          ▼
 * grandParent
 *   │
 *   │ country?
 *   │
 *   └── Yes
 *
 * Return value.
 *
 */

/**
 * ============================================================================
 * IMPORTANT BUILT-IN PROTOTYPES
 * ============================================================================
 *
 * Array.prototype
 * ----------------
 * push()
 * pop()
 * shift()
 * unshift()
 * map()
 * filter()
 * reduce()
 * find()
 *
 * String.prototype
 * ----------------
 * includes()
 * slice()
 * split()
 * replace()
 * trim()
 *
 * Function.prototype
 * ------------------
 * call()
 * apply()
 * bind()
 *
 * Object.prototype
 * ----------------
 * toString()
 * hasOwnProperty()
 * valueOf()
 *
 */

/**
 * ============================================================================
 * INTERVIEW QUESTIONS
 * ============================================================================
 *
 * Q1. What is Prototype Inheritance?
 *
 * Answer:
 * Every JavaScript object has a hidden prototype.
 * When a property is not found,
 * JavaScript searches its prototype.
 *
 * ----------------------------------
 *
 * Q2. What is Prototype Chain?
 *
 * Answer:
 * A chain of prototype objects that JavaScript searches
 * until null is reached.
 *
 * ----------------------------------
 *
 * Q3. Difference between own property and inherited property?
 *
 * Own Property:
 * Exists directly on object.
 *
 * Inherited Property:
 * Comes from prototype.
 *
 * ----------------------------------
 *
 * Q4. What is Object.prototype?
 *
 * The top-most prototype for almost every object.
 *
 * ----------------------------------
 *
 * Q5. What does Object.create() do?
 *
 * Creates a new object and sets its prototype.
 *
 * ----------------------------------
 *
 * Q6. What does Object.setPrototypeOf() do?
 *
 * Changes an object's prototype.
 *
 * ----------------------------------
 *
 * Q7. Why are prototypes used?
 *
 * ✔ Memory optimization
 * ✔ Code reuse
 * ✔ Shared methods
 *
 * ----------------------------------
 *
 * Q8. Where does push() come from?
 *
 * Array.prototype
 *
 * ----------------------------------
 *
 * Q9. Where does call() come from?
 *
 * Function.prototype
 *
 * ----------------------------------
 *
 * Q10. Does JavaScript use classical inheritance?
 *
 * No.
 *
 * JavaScript uses Prototype Inheritance.
 *
 * class and extends are only syntax sugar.
 *
 */

/**
 * ============================================================================
 * KEY POINTS TO REMEMBER
 * ============================================================================
 *
 * ✔ Every object has a hidden [[Prototype]].
 *
 * ✔ JavaScript searches the object first.
 *
 * ✔ If property isn't found,
 *   it searches the prototype.
 *
 * ✔ This process is called the Prototype Chain.
 *
 * ✔ Search continues until null.
 *
 * ✔ Arrays inherit from Array.prototype.
 *
 * ✔ Functions inherit from Function.prototype.
 *
 * ✔ Objects inherit from Object.prototype.
 *
 * ✔ class uses Prototype Inheritance internally.
 *
 * ✔ Object.create() creates inheritance.
 *
 * ✔ Object.setPrototypeOf() changes inheritance.
 *
 * ✔ Child properties override (shadow) parent properties.
 *
 * ✔ Prototype Inheritance exists mainly for
 *   memory optimization and code reuse.
 *
 * ============================================================================
 */
