//* Monotonic Stack
function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = new Array(temperatures.length).fill(0);

  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      let popped = stack.pop()!;
      result[popped] = i - popped;
    }

    stack.push(i);
  }

  return result;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

export {};
