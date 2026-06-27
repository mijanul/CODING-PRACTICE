# Level 0 - JavaScript Fundamentals

> **Goal:** Build a rock-solid foundation of JavaScript before moving to advanced concepts.

---

# 📚 Table of Contents

> Click any topic to jump directly to that section.

1. [What is JavaScript?](#1-what-is-javascript)
2. [History of JavaScript](#2-history-of-javascript)
3. [ECMAScript (ES)](#3-ecmascript-es)
4. [JavaScript Engines (V8, SpiderMonkey, JavaScriptCore, Chakra)](#4-javascript-engines-v8-spidermonkey-javascriptcore-chakra)
5. [Interpreted vs JIT Compilation](#5-interpreted-vs-jit-compilation)
6. [How JavaScript Executes](#6-how-javascript-executes)
7. [JavaScript Runtime](#7-javascript-runtime)
8. [JavaScript Environment (Browser vs Node.js)](#8-javascript-environment-browser-vs-nodejs)
9. [Strict Mode](#9-strict-mode)
10. [JavaScript Versions (ES5, ES6+)](#10-javascript-versions-es5-es6)

---

# 1. What is JavaScript?

## Definition

JavaScript is a **high-level**, **dynamic**, **single-threaded**, **garbage-collected**, **prototype-based** programming language primarily used to create interactive web applications.

Originally it was created only for browsers, but today JavaScript runs almost everywhere:

- Browsers
- Servers (Node.js)
- Mobile Apps
- Desktop Apps
- IoT Devices
- Cloud Functions

Today JavaScript is one of the most popular programming languages in the world.

---

## Why JavaScript was created

Before JavaScript existed:

- HTML created webpage structure.
- CSS styled webpages.
- Webpages were static.

Users couldn't interact with webpages without sending requests to the server.

JavaScript was introduced to make webpages interactive.

Example:

- Button clicks
- Form validation
- Image sliders
- Animations
- Games
- Dynamic UI

---

## JavaScript Characteristics

- High-Level Language
- Dynamically Typed
- Prototype-based OOP
- Multi-paradigm
- Event-driven
- Interpreted + JIT Compiled
- Garbage Collected
- Single Threaded

---

## Example

```javascript
let name = "John";

function greet(user) {
  console.log(`Hello ${user}`);
}

greet(name);
```

---

## Real-world Uses

- React
- Angular
- Vue
- Next.js
- React Native
- Node.js
- Electron
- Browser Extensions

---

## Interview Questions

### Basic

- What is JavaScript?
- Why was JavaScript created?
- Is JavaScript only used in browsers?
- Is JavaScript compiled or interpreted?

### Intermediate

- Why is JavaScript considered high-level?
- What makes JavaScript dynamic?
- Why is JavaScript prototype-based?

### Advanced

- Why is JavaScript single-threaded?
- How does JavaScript achieve concurrency?

---

## Key Points

✅ JavaScript is a programming language.

✅ It adds behavior to webpages.

✅ Runs in browsers and servers.

✅ Dynamic, prototype-based, garbage collected.

---

# 2. History of JavaScript

## 1995 — Birth of JavaScript

JavaScript was created by **Brendan Eich** at Netscape.

Time taken:

Only **10 days**.

Original names:

- Mocha
- LiveScript
- JavaScript

Despite the name, JavaScript has **nothing to do with Java**.

---

## Browser Wars

Microsoft created **JScript** for Internet Explorer.

Different browsers started implementing JavaScript differently.

This caused compatibility problems.

---

## Standardization

To solve this problem, JavaScript was standardized.

The standard became:

**ECMAScript**

---

## Timeline

| Year  | Version    | Major Changes     |
| ----- | ---------- | ----------------- |
| 1995  | JavaScript | Created           |
| 1997  | ES1        | First Standard    |
| 1999  | ES3        | Popular Version   |
| 2009  | ES5        | Strict Mode, JSON |
| 2015  | ES6        | Biggest Update    |
| 2016+ | ES7+       | Annual Releases   |

---

## Why ES6 Was Revolutionary

Introduced:

- let
- const
- Arrow Functions
- Classes
- Promises
- Modules
- Template Literals
- Destructuring
- Spread
- Rest

---

## Interview Questions

- Who created JavaScript?
- How many days did it take?
- Why is it called JavaScript?
- What problem did ECMAScript solve?
- Why is ES6 important?

---

## Key Points

✅ Brendan Eich created JavaScript.

✅ Built in only 10 days.

✅ Standardized as ECMAScript.

---

# 3. ECMAScript (ES)

## What is ECMAScript?

ECMAScript is the official specification (standard) of JavaScript.

Think of it like:

> ECMAScript = Rule Book

> JavaScript = Implementation

Browsers follow the ECMAScript specification.

---

## Why ECMAScript Exists

Without a standard:

- Chrome behaves differently.
- Firefox behaves differently.
- Safari behaves differently.

ECMAScript ensures consistency.

---

## Example

ES6 introduced:

```javascript
const name = "John";
```

Every browser supporting ES6 should behave the same.

---

## Interview Questions

- Is ECMAScript the same as JavaScript?
- Who maintains ECMAScript?
- Why do browsers follow ECMAScript?

---

## Key Points

✅ ECMAScript is the specification.

✅ JavaScript implements ECMAScript.

---

# 4. JavaScript Engines (V8, SpiderMonkey, JavaScriptCore, Chakra)

## What is a JavaScript Engine?

A JavaScript engine is software that reads JavaScript code and executes it.

Without an engine, JavaScript cannot run.

---

## Popular Engines

| Engine         | Browser         |
| -------------- | --------------- |
| V8             | Chrome, Node.js |
| SpiderMonkey   | Firefox         |
| JavaScriptCore | Safari          |
| Chakra         | Legacy Edge     |

---

## Responsibilities

- Parse code
- Generate AST
- Compile
- Optimize
- Execute
- Garbage Collection

---

## Interview Questions

- What is V8?
- Why is Node.js fast?
- Which browser uses SpiderMonkey?

---

## Key Points

✅ Engine executes JavaScript.

✅ V8 powers Chrome and Node.js.

---

# 5. Interpreted vs JIT Compilation

## Traditional Interpreter

Reads code line by line.

```
Code
 ↓
Interpreter
 ↓
Execute
```

Simple but slower.

---

## Compiler

Compiles everything first.

```
Code
 ↓
Compile
 ↓
Machine Code
 ↓
Run
```

Fast execution.

---

## JIT (Just-In-Time)

JavaScript engines combine both.

```
Code

↓

Parse

↓

Interpreter

↓

Profiler

↓

Compiler

↓

Optimized Machine Code
```

Best of both worlds.

---

## Why JIT?

- Faster execution
- Better optimization
- Modern browsers use it

---

## Interview Questions

- Is JavaScript interpreted?
- What is JIT?
- Why is JIT faster?

---

## Key Points

✅ Modern JavaScript uses JIT compilation.

---

# 6. How JavaScript Executes

## High-Level Flow

```
Write Code

↓

Parser

↓

AST

↓

Interpreter

↓

Compiler

↓

Execution
```

Execution happens inside the JavaScript Engine.

---

## Steps

1. Parse
2. Create AST
3. Generate Bytecode
4. Optimize
5. Execute

---

## Interview Questions

- What happens before JavaScript executes?
- What is AST?
- What is Bytecode?

---

## Key Points

✅ JavaScript does not execute source code directly.

---

# 7. JavaScript Runtime

## Engine vs Runtime

Many developers confuse these.

Engine:

Executes JavaScript.

Runtime:

Provides APIs around the engine.

---

## Browser Runtime

Includes:

- DOM
- Event Loop
- Web APIs
- Timers
- Fetch

---

## Node Runtime

Includes:

- File System
- HTTP
- Streams
- Process
- Buffer

---

## Interview Questions

- What is JavaScript Runtime?
- Is Event Loop inside V8?
- Difference between Runtime and Engine?

---

## Key Points

✅ Runtime = Engine + APIs.

---

# 8. JavaScript Environment (Browser vs Node.js)

| Feature     | Browser | Node.js |
| ----------- | ------- | ------- |
| DOM         | ✅      | ❌      |
| Window      | ✅      | ❌      |
| Document    | ✅      | ❌      |
| File System | ❌      | ✅      |
| HTTP Server | ❌      | ✅      |

---

## Browser

Best for:

- UI
- DOM
- Events

---

## Node.js

Best for:

- Backend
- APIs
- Server
- CLI Tools

---

## Interview Questions

- Can browser access file system?
- Why doesn't Node have window?
- Difference between Browser and Node?

---

## Key Points

✅ Same language.

✅ Different runtime environments.

---

# 9. Strict Mode

## What is Strict Mode?

Strict Mode enables a safer version of JavaScript.

```javascript
"use strict";
```

---

## Benefits

- Prevents accidental globals
- Throws more errors
- Makes code predictable
- Easier debugging

---

## Example

Without Strict Mode

```javascript
name = "John";
```

Works (creates global variable).

With Strict Mode

```javascript
"use strict";

name = "John";
```

Throws:

```
ReferenceError
```

---

## Interview Questions

- Why use Strict Mode?
- How do you enable it?
- What errors does it prevent?

---

## Key Points

✅ Always use Strict Mode.

---

# 10. JavaScript Versions (ES5, ES6+)

## ES5 (2009)

Major Features

- Strict Mode
- JSON
- Array Methods
- Object.create()

---

## ES6 (2015)

Huge update:

- let
- const
- Classes
- Modules
- Promises
- Arrow Functions
- Template Literals
- Spread
- Rest
- Destructuring

---

## ES2016+

Added:

- async/await
- Optional Chaining
- Nullish Coalescing
- BigInt
- Dynamic Import
- Top-level await

---

## Why Learn Versions?

During interviews you may hear:

- ES5 JavaScript
- Modern JavaScript
- ES6 Features

Knowing the timeline helps explain when features were introduced.

---

## Interview Questions

### Beginner

- What is ES6?
- What changed after ES5?

### Intermediate

- Why was ES6 a major release?
- Name five ES6 features.

### Advanced

- Which JavaScript version introduced async/await?
- Why are modern features backward compatible using Babel?

---

## Key Points

✅ ES5 modernized older JavaScript.

✅ ES6 was the biggest upgrade.

✅ New ECMAScript versions continue to add language improvements every year.

---

# 🎯 Level 0 Summary

After completing this level, you should understand:

- ✅ What JavaScript is
- ✅ Why JavaScript was created
- ✅ JavaScript history
- ✅ ECMAScript
- ✅ JavaScript Engines
- ✅ JIT Compilation
- ✅ JavaScript Execution Process
- ✅ JavaScript Runtime
- ✅ Browser vs Node.js
- ✅ Strict Mode
- ✅ JavaScript Versions

These topics form the foundation for everything else in JavaScript, including execution context, hoisting, scope, closures, asynchronous programming, and advanced interview concepts.
