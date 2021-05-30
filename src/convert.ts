import { __, add, curry, divide, isNil, multiply, pipe, subtract, when } from 'ramda';
import { isNotNil } from 'ramda-adjunct';

import { getUnit } from './';
import { UnitType } from './definitions/type/units.type';
import measures from './measures';

export default curry((from: UnitType, to: UnitType, value: number) => {
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
    when(() => isNotNil(fromConversion.unit.anchorShift), subtract(__, fromConversion.unit.anchorShift as number)),
    when(
      () => fromConversion.system !== toConversion.system,
      (v) => {
        const { transform, ratio } = measures[fromConversion.measure].anchors[fromConversion.system];

        if (isNotNil(transform)) {
          return transform(v);
        }

        if (isNotNil(ratio)) {
          return v * ratio;
        }

        throw new Error('A system anchor needs to either have a defined ratio number or a transform function.');
      }
    ),
    when(() => isNotNil(toConversion.unit.anchorShift), add(toConversion.unit.anchorShift as number)),
    divide(__, toConversion.unit.anchor)
  )(value);
});
