function isValidParentheses(s) {
  let len = s.length;
  if (len <= 1 || len % 2 !== 0) return false;

  let pairs = {
    "]": "[",
    ")": "(",
    "}": "{",
  };

  const stack = [];

  for (let ch of s) {
    // opening braces
    if (!pairs[ch]) {
      stack.push(ch);
    } else {
      const top = stack.pop();

      if (top !== pairs[ch]) return false;
    }
  }

  return stack.length === 0;
}

console.log(isValidParentheses("()[]{}"));
