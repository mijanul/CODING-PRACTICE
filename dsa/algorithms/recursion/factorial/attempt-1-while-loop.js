function factorial(n) {
  if (n < 0) throw new Error("Invalid Input");

  let result = 1;

  while (n > 1) {
    result *= n;
    n--;
  }

  return result;
}

console.log(factorial(5));
