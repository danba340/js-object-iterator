const obj = {first:1, second:2}

const objIterator = function() {
  return {
    entries: Object.entries(this),
    i: 0,
    next() {
      if (this.i >= this.entries.length) {
        return { done: true, value: undefined };
      }
      return { 
        done: false, 
        value: {
          [this.entries[this.i][0]]: this.entries[this.i++][1]
        } 
      }
    }
  }
}

const iterableObj = {
  ...obj,
  [Symbol.iterator]: objIterator
}

for (const key of iterableObj) {
  console.log(key);
}
