// Iterator function
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

// Extended
const obj1 = {first:1, second:2}

const iterableObjectExtended = {
  ...obj1,
  [Symbol.iterator]: objIterator
}

// for (const key of iterableObjectExtended) {
//   console.log(key);
// }

// Class
class IterableObject {
  constructor(obj) {
    this[Symbol.iterator] = objIterator
  }
}

const objFromClass = new IterableObject()

for (const key of objFromClass) {
  console.log(key);
}

// Wrapper function
const addIterator = (obj) => {
  obj[Symbol.iterator] = objIterator
  return obj
}

for (const key of addIterator({a:"a",b:'b'})) {
  console.log(key);
}


const arr = [1,2]
console.log(arr[Symbol.iterator]())

var arrIterator = arr[Symbol.iterator]();
console.log(arrIterator.next().value); // 1
console.log(arrIterator.next().value); // 2

//console.log(arr[Symbol.iterator] = null)
for (const el of arr) {
  console.log(el)
}

