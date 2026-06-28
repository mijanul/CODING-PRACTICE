//* Brute Force
function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    let count = 0;
    let steps = 0;
    let index = i + 1;

    while (index < temperatures.length) {
      steps++;
      if (temperatures[i] < temperatures[index]) {
        count += steps;
        break;
      }
      index++;
    }
    result.push(count);
  }
  return result;
}

console.log(dailyTemperatures([30, 38, 30, 36, 35, 40, 28]));

export {};
