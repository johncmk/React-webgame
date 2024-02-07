/**
 * Casting
 * 
 * TS에서 Casting을 하면 JS에서는 적용이 안된다.
 */

let codefactory = 'codefactory'
let testNumber = 3;

console.log(codefactory.toUpperCase())
// console.log(testNumber.toUpperCase()) It throws an error because it's not String type

let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase()); It throws an error because it's number
let stringVar = sampleNumber as string; // it's casting down to String

console.log(typeof (sampleNumber as string))

let number = 5;

// console.log((number as any).toUpperCase()) it throws an error because the variable 'number'
// is a number type and casting to any isn't a String type.