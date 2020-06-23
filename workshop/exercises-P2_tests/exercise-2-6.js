// Exercise 2-6
// ------------

// Step 1
// Write a function that
// - accepts an array.
// - The array has 3 elements.
// - The first element of the array is a string that represents an operation.
// - If the operation is
//      - "add", return the sum of the two other elements of the array.
//      - "sub" return their difference.
//      - "mult" return their product.
//  - Anything else return undefined.

// For example:
// f(["add", 10, 20]); // 30
// f(["mult", 2, 3]); // 6
// f(["spoof", 10, 10]); // undefined

function calculator(arr) {
  let result = undefined;
  if (arr[0] === 'add'){
   result = arr[1] + arr[2]
  }
  else if((arr[0] === 'mult')){
result = arr[1] * arr[2]
  }
  else if((arr[0] === 'sub')){
    result = arr[1] - arr[2]
  }


  return result;
  // Your code here
}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator(['mult', 2, 4]), 8);
expect(calculator(['add', 2, 4]), 6);
expect(calculator(['mult', 10, 9]), 90);
expect(calculator(['add', 10, 9]), 19);
expect(calculator(['sub', 10, 9]), 1);
expect(calculator(['sub', 100, 9]), 91);
expect(calculator(['add', 10, 22]), 32);
expect(calculator(['mult', 10, 90]), 900);

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
