import { isDefinedFunction } from '../ramdaExtension';

const lambdaFunction = () => 'Hello, World!';

function regularFunction() {
  return 'Hello, World!';
}

class Class {
  lambdaMethod = () => 'Hello,World!';
  method() {
    return 'Hello, World!';
  }
  static staticLambdaMethod = () => 'Hello,World!';
  static staticMethod() {
    return 'Hello, World!';
  }
}

const classInstance = new Class();

test('isDefinedFunction should return a `boolean`', () => {
  expect(isDefinedFunction(lambdaFunction)).toBeBoolean();
  expect(isDefinedFunction(null)).toBeBoolean();
});

test('isDefinedFunction should return `true` if a `function` is passed as argument', () => {
  expect(isDefinedFunction(lambdaFunction)).toBeTrue();
  expect(isDefinedFunction(regularFunction)).toBeTrue();
  expect(isDefinedFunction(classInstance.lambdaMethod)).toBeTrue();
  expect(isDefinedFunction(classInstance.method)).toBeTrue();
  expect(isDefinedFunction(Class.staticLambdaMethod)).toBeTrue();
  expect(isDefinedFunction(Class.staticMethod)).toBeTrue();
});

test('isDefinedFunction should return `false` if a `function` is not passed as argument', () => {
  expect(isDefinedFunction(null)).toBeFalse();
  expect(isDefinedFunction(0)).toBeFalse();
  expect(isDefinedFunction('')).toBeFalse();
  expect(isDefinedFunction({})).toBeFalse();
  expect(isDefinedFunction([])).toBeFalse();
  expect(isDefinedFunction(undefined)).toBeFalse();
  expect(isDefinedFunction(NaN)).toBeFalse();
});
