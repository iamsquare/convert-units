import { __, add, divide, isNil, multiply, pipe, subtract, when } from 'ramda';
import { isNilOrEmpty, isNotNil, isValidNumber } from 'ramda-adjunct';

import getUnit from './getUnit';
import { IConverter } from './type';
import { IncompatibleUnitDirectionEnum, IncompatibleUnitError, InstanceError } from './utils/error';
import { isDefinedFunction } from './utils/ramdaExtension';

/**
 * Converts a `value` from a compatible unit to another.
 *
 * @throws An {@link InstanceError} if `converter` is not provided
 * @throws An {@link IncompatibleUnitError} if `from` or `to` are not a valid {@link UnitType}s
 * @throws An Error if `from` and `to` have different {@link Measure}s
 * @throws An Error if a definition is malformed
 *
 * @param converter The converter instance to use with this function
 * @param from The type `from` which you want to convert
 * @param to The type `to` which you want to convert
 * @param value The value you want to convert
 * @returns The converted value
 *
 */
function convert<TMeasures extends string, TSystems extends string, TUnitType extends string>(
  converter: IConverter<TMeasures, TSystems, TUnitType>,
  from: TUnitType,
  to: TUnitType,
  value: number
): number | never {
  if (isNilOrEmpty(converter)) throw new InstanceError();

  const fromConversion = getUnit(converter, from);

  if (isNil(fromConversion)) throw new IncompatibleUnitError(from, IncompatibleUnitDirectionEnum.FROM);

  const toConversion = getUnit(converter, to);

  if (isNil(toConversion)) throw new IncompatibleUnitError(to, IncompatibleUnitDirectionEnum.TO);

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
      function (v) {
        const { transform, ratio } = converter.measuresData[fromConversion.measure].anchors[fromConversion.system];

        if (isNotNil(transform) && isDefinedFunction(transform[toConversion.system])) {
          return transform[toConversion.system](v);
        }

        if (isNotNil(ratio) && isValidNumber(ratio[toConversion.system])) {
          return v * ratio[toConversion.system];
        }

        throw new Error(`A system's anchor needs to either have a defined ratio number or a transform function.`);
      }
    ),
    when(() => isNotNil(toConversion.unit.anchorShift), add(toConversion.unit.anchorShift)),
    divide(__, toConversion.unit.anchor)
  )(value);
}

export default convert;
