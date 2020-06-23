// Exercise 2-4
// ------------

// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

function lastCharacter(str) {
  let result = undefined;
  if (typeof str === "number"){
    return undefined;
  }
  if (str.slice(-1)) {
    result = str.slice(-1);
  }
  return result;
}

function getLetterAtIndex(str, index) { 
  return str[index]
}

  // Your code here


// Step 2
// You're given 1 test case. Add 4 more, making sure to cover all of the
// conditions specified above (don't forget empty string and number!!)

expect(lastCharacter('max'), 'x');
expect(lastCharacter('jordan'), 'n');
expect(lastCharacter(''), undefined);
expect(lastCharacter('bacon'), 'n');
expect(lastCharacter(100), undefined);

    // Your code here
  

// Add 6 more test cases
expect(getLetterAtIndex('hello', 4), 'o');
expect(getLetterAtIndex('goodbye', 0), 'g');
expect(getLetterAtIndex('bacon', 3), 'o');
expect(getLetterAtIndex(''), undefined);
expect(getLetterAtIndex('decode', 2), 'c');
expect(getLetterAtIndex('montreal', 6), 'a');
expect(getLetterAtIndex('brossard', 1), 'r');
expect(getLetterAtIndex('food', 0), 'f');

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
