// IMPORT MODULES under test here:
import { addExclamationPoints, divideThenMultiply, multiplyBy12ThenHalve, multiplyBySeven, myFunction, returnAsAnArray, returnAsAString } from '../functions.js';


const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected, 'true = true');
});

test('addExclamationPoints should add 3 exclamation points', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit');

    expect.equal(actual, expected, 'bunny rabbit!!!');
});

test('this test should multiply by 7', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected, '28');
});

test('this test should multiply by 12 then cut the result in half', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected, '24');
});

test('this test should divide the first number by the second number and multiply by the third', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected, '10');
});

test('this test should take in three numbers and return those numbers in an array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected, '[8, 4, 5]');
});

test('this test should return the three numbers as a string', (expect) => {
    const expected = '845' ;

    const actual = returnAsAString(8, 4, 5);

    expect.equal(actual, expected, '845');
});

