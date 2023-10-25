const Stack = require('./stack');

class stackQueue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(n) {
    this.first.push(n);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}
module.exports = stackQueue;