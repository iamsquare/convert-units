import { __, add, curry, divide, isNil, multiply, pipe, subtract, when } from 'ramda';
import { isNotNil } from 'ramda-adjunct';

import { UnitType } from './definitions/type';
import getUnit from './getUnit';
import { measureDictionary } from './measures';
import { isDefinedFunction, isDefinedNumber } from './utils/ramdaExtension';

/**
 * Converts a `value` from a compatible unit to another.
 *
 * This function is **curried**.
 * @see {@link https://ramdajs.com/docs/#curry | Ramda's documentation} to understand how curried functions work.
 *
 * @throws An Error if `from` or `to` are not a valid {@link UnitType}s
 * @throws An Error if `from` or `to` have different {@link Measure}s
 * @throws An Error if a definition is malformed (this should never be thrown, it's been added for development purposes)
 *
 * @param from The type `from` which you want to convert
 * @param to The type `to` which you want to convert
 * @param value The value you want to convert
 * @returns The converted value
 *
 * ```typescript
 * const convertFromKilograms = convert('kg');
 * const convertFromKilogramsToPounds = convertFromKilograms('lbs');
 * // same as convert('kg', 'lbs') or convert('kg')('lbs')
 * convertFromKilogramsToPounds(1); // => 2.20462
 * // same as convert('kg', 'lbs', 1) etc...
 * ```
 */
const convert = curry((from: UnitType, to: UnitType, value: number): number | never => {
  const fromConversion = getUnit(from);

  if (isNil(fromConversion)) throw new Error(`Incompatible unit '${from}' for *from* parameter`);

  const toConversion = getUnit(to);

  if (isNil(toConversion)) throw new Error(`Incompatible unit '${to}' for *to* parameter`);

  if (from === to) return value;
  if (fromConversion.measure !== toConversion.measure) {
    throw new Error(
      `Cannot convert incompatible measures of '${fromConversion.measure}' and '${toConversion.measure}'`
    );
  }

  return pipe(
    multiply(fromConversion.unit.anchor),
    when(() => isNotNil(fromConversion.unit.anchorShift), subtract(__, fromConversion.unit.anchorShift)),
    when(
      () => fromConversion.system !== toConversion.system,
      (v) => {
        const { transform, ratio } = measureDictionary[fromConversion.measure].anchors[fromConversion.system];

        if (isNotNil(transform) && isDefinedFunction(transform[toConversion.system])) {
          return transform[toConversion.system](v);
        }

        if (isNotNil(ratio) && isDefinedNumber(ratio[toConversion.system])) {
          return v * ratio[toConversion.system];
        }

        throw new Error(`A system's anchor needs to either have a defined ratio number or a transform function.`);
      }
    ),
    when(() => isNotNil(toConversion.unit.anchorShift), add(toConversion.unit.anchorShift)),
    divide(__, toConversion.unit.anchor)
  )(value);
});

export default convert;
