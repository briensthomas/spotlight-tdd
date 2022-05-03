import './functions.test.js';
test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected, 'true = true');
});

// This function should take a string and add return an new string that adds three exclamation points to the argument.
/* 

Input:

'bunny rabbit'

Output: 

'bunny rabbit!!!'

*/