// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  result = undefined;
  if (typeof arr[1] === 'number' && arr[1] > 0) {
    let stringRepeat = "";
    for (x = 1; x <= arr[1]; x++) {
      stringRepeat = stringRepeat.concat(arr[0]);
    }
    return stringRepeat;
  } else if (typeof arr[1] === 'number' && arr[1] <=0) {
    return "";
  } else {
    return undefined;
  }
  // Your code here
}

// We need 7 test cases.
// Don't forget to test all of the question parameters

expect(repeat(['jordo', 3]), 'jordojordojordo');
expect(repeat(['bootcamp', 2]), 'bootcampbootcamp');
expect(repeat(['decode', 4]), 'decodedecodedecodedecode');
expect(repeat(['bacon', -2]), '');
expect(repeat(['thisiscool', 6]), 'thisiscoolthisiscoolthisiscoolthisiscoolthisiscoolthisiscool');
expect(repeat(['bacon', 'bacon']), undefined);
expect(repeat(['thisworks!', 3]), 'thisworks!thisworks!thisworks!');

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
