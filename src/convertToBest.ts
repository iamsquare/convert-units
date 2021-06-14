import { filter, includes, pipe, reduce } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';

import convert from './convert';
import getUnit from './getUnit';
import list from './list';
import { BestConversion, ConvertToBestDto, IConverter, Nullable, UnitDescription } from './type';
import { InstanceError } from './utils/error';

/**
 * Converts a `value` from a compatible unit to the best unit (or _smallest_) given some optional parameters.
 *
 * @throws An {@link InstanceError} if `converter` is not provided
 * @throws An {@link IncompatibleUnitError} if `from` is not a valid unit type
 *
 * @param converter The converter instance to use with this function
 * @param options The conversion configuration
 * @param from The type `from` which you want to convert
 * @param value The value you want to convert
 * @returns An object containing the best unit given the optional parameters and its converted value
 */

function convertToBest<TMeasures extends string, TSystems extends string, TUnitType extends string>(
  converter: IConverter<TMeasures, TSystems, TUnitType>,
  options: Partial<ConvertToBestDto<TUnitType>>,
  from: TUnitType,
  value: number
): BestConversion<TUnitType> {
  if (isNilOrEmpty(converter)) throw new InstanceError();

  const opt: ConvertToBestDto<TUnitType> = { cutoff: 1, exclude: [], ...options };

  const fromUnit = getUnit(converter, from);

  return pipe(
    (m: TMeasures) => list(converter, m),
    filter<UnitDescription<TMeasures, TSystems, TUnitType>>(
      (d) => !includes(d.unitType, opt.exclude) && fromUnit.system === d.system
    ),
    reduce<UnitDescription<TMeasures, TSystems, TUnitType>, Nullable<BestConversion<TUnitType>>>((acc, curr) => {
      const result = convert(converter, fromUnit.unitType, curr.unitType, value);

      if (acc !== null && (Math.abs(result) < Math.abs(opt.cutoff) || Math.abs(result) >= Math.abs(acc.value))) {
        return acc;
      }

      return {
        value: result,
        unitType: curr.unitType
      };
    }, null)
  )(fromUnit.measure);
}

export default convertToBest;
