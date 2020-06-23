// Given the following functions, answer the questions below.

const square = (x) => {
  return x * x;
};

const decrement = (x) => {
  return x - 1;
};

const duplicateString = (x) => {
  return x.concat(x);
};

const reverseString = (str) => {
  const splitString = str.split(''); // var splitString = "hello".split("");
  const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  return reverseArray.join(''); // var joinArray = ["o", "l", "l", "e", "h"].join("");
};

// Expand each of the following and get the result of the expression
// 1-1
console.log(square(decrement(square(decrement(3)))));
// 3 - 1 = 2
// 2 * 2 = 4
// 4 - 1 = 3
// 3 * 3 = 9

// The value when you do console.log is 9.

// 1-2
console.log(decrement(decrement(square(square(3)))));
// 3 * 3 = 9
// 9 * 9 = 81
// 81 - 1 = 80 
// 80 - 1 = 79

// The value when you do console.log is 79.

// 1-3
console.log((duplicateString(reverseString('hello'))));
// reverseString makes hello backwards.
// duplciateString doubles the word hello.

// The value becomes olleholleh.

// 1-4
console.log(reverseString(duplicateString(duplicateString('foo'))));
// duplicateString doubles the word foo.
// duplicateString doubles it again.
// reverseString reverses the word foofoofoofoo.

// The value becomes oofoofoofoof.

