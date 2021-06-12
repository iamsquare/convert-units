import { contains, curry, filter, pipe, reduce } from 'ramda';

import convert from './convert';
import { UnitType } from './definitions';
import getUnit from './getUnit';
import list from './list';
import { BestConversion, ConvertToBestDto, Measure, Nullable, UnitDescription } from './type';

/**
 * Converts a `value` from a compatible unit to the best unit (or _smallest_) given some optional parameters.
 *
 * This function is **curried**.
 * @see {@link https://ramdajs.com/docs/#curry | Ramda's documentation} to understand how curried functions work.
 *
 * @throws An Error if `from` is not a valid {@link UnitType}
 *
 * @param options The conversion configuration
 * @param from The type `from` which you want to convert
 * @param value The value you want to convert
 * @returns An object containing the best unit given the optional parameters and its converted value
 *
 * ```typescript
 * const convertToBestFromGrams = convertToBest({}, 'g');
 * convertToBestFromGrams(1000); // => { value: 1, unitType: 'kg' }
 * ```
 */
const convertToBest = curry((options: Partial<ConvertToBestDto>, from: UnitType, value: number) => {
  const opt: ConvertToBestDto = { cutoff: 1, exclude: [], ...options };

  const fromUnit = getUnit(from);

  return pipe<Measure, UnitDescription[], readonly UnitDescription[], Nullable<BestConversion>>(
    list,
    filter<UnitDescription>((d) => !contains(d.unitType, opt.exclude) && fromUnit.system === d.system),
    reduce<UnitDescription, Nullable<BestConversion>>((acc, curr) => {
      const result = convert(fromUnit.unitType, curr.unitType, value);

      if (acc !== null && (Math.abs(result) < Math.abs(opt.cutoff) || Math.abs(result) >= Math.abs(acc.value))) {
        return acc;
      }

      return {
        value: result,
        unitType: curr.unitType
      };
    }, null)
  )(fromUnit.measure);
});

export default convertToBest;
