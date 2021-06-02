import { __, add, curry, divide, isNil, multiply, pipe, subtract, when } from 'ramda';
import { isNotNil } from 'ramda-adjunct';

import { UnitType } from './definitions/type';
import getUnit from './getUnit';
import { measureDictionary } from './measures';
import { isDefinedFunction, isDefinedNumber } from './utils/ramdaExtension';

export default curry((from: UnitType, to: UnitType, value: number): number | never => {
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
