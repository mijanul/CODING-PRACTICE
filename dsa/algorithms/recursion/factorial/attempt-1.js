function factorial(n) {
  if (typeof n !== "number") {
    throw new Error("Input must be a number");
  }

  if (n < 0) throw new Error("Invalid Input");

  if (!Number.isInteger(n)) {
    throw new Error("Input must be an integer");
  }

  if (n === 1 || n === 0) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(10));
