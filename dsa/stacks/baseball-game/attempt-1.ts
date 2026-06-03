const calPoints = function (operations: string[]): number {
  const resultArr: number[] = [];
  let total: number = 0;

  operations.forEach((val) => {
    if (val === "+") {
      let res =
        (resultArr[resultArr.length - 1] ?? 0) +
        (resultArr[resultArr.length - 2] ?? 0);
      resultArr.push(res);
      total += res;
    } else if (val === "D") {
      let res = 2 * (resultArr[resultArr.length - 1] ?? 0);
      resultArr.push(res);
      total += res;
    } else if (val === "C") {
      let res = resultArr.pop()!;
      total -= res;
    } else {
      let res = Number(val);
      resultArr.push(res);
      total += res;
    }
  });

  return total;
};

console.log(calPoints(["0", "D", "+", "C"]));
