class MinStack {
  private minStack: number[];
  private stack: number[];
  constructor() {
    this.minStack = [];
    this.stack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val: number): void {
    this.stack.push(val);
    if (!this.minStack.length) {
      this.minStack.push(val);
    } else {
      if (this.minStack[this.minStack.length - 1] >= val) {
        this.minStack.push(val);
      }
    }
  }

  /**
   * @return {void}
   */
  pop(): void {
    let popped = this.stack.pop();
    if (popped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  /**
   * @return {number}
   */
  top(): number {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
