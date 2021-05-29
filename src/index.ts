import {
  __,
  add,
  chain,
  cond,
  curry,
  divide,
  identity,
  isNil,
  keys,
  map,
  memoizeWith,
  multiply,
  pipe,
  subtract,
  uncurryN,
  when,
  without
} from 'ramda';
import { isNotNil } from 'ramda-adjunct';

import acceleration from './definitions/acceleration';
import angle from './definitions/angle';
import apparentPower from './definitions/apparentPower';
import area from './definitions/area';
import charge from './definitions/charge';
import current from './definitions/current';
import digital from './definitions/digital';
import distance from './definitions/distance';
import each from './definitions/each';
import energy from './definitions/energy';
import force from './definitions/force';
import frequency from './definitions/frequency';
import illuminance from './definitions/illuminance';
import mass from './definitions/mass';
import pace from './definitions/pace';
import partsPer from './definitions/partsPer';
import pieces from './definitions/pieces';
import power from './definitions/power';
import pressure from './definitions/pressure';
import reactiveEnergy from './definitions/reactiveEnergy';
import reactivePower from './definitions/reactivePower';
import speed from './definitions/speed';
import temperature from './definitions/temperature';
import time from './definitions/time';
import { Conversion, Definition } from './definitions/type';
import { Measure, System, UnitType } from './definitions/type/units.type';
import { Maybe, Nullable } from './definitions/type/utils.type';
import voltage from './definitions/voltage';
import volume from './definitions/volume';
import volumeFlowRate from './definitions/volumeFlowRate';

const measures: Record<Measure, Definition<any, any>> = {
  acceleration,
  angle,
  apparentPower,
  area,
  charge,
  current,
  digital,
  distance,
  each,
  energy,
  force,
  frequency,
  illuminance,
  mass,
  pace,
  partsPer,
  pieces,
  power,
  pressure,
  reactiveEnergy,
  reactivePower,
  speed,
  temperature,
  time,
  voltage,
  volume,
  volumeFlowRate
};

export const getUnit = memoizeWith(identity, (unitType: UnitType): Nullable<Conversion> => {
  for (const [measure, measureValue] of Object.entries(measures)) {
    for (const [system, systemValue] of Object.entries(measureValue.systems)) {
      for (const [unit, unitValue] of Object.entries(systemValue)) {
        if (unit == unitType) {
          return {
            unitType: unitType,
            measure: measure as Measure,
            system: system as System,
            unit: unitValue
          };
        }
      }
    }
  }

  return null;
});

export const convert: (from: UnitType, to: UnitType, value: number) => number = uncurryN(3, (from: UnitType) => {
  const fromConversion = getUnit(from);

  if (isNil(fromConversion)) throw new Error(`Incompatible unit '${from}' for *from* parameter`);

  return (to: UnitType) => {
    const toConversion = getUnit(to);

    if (isNil(toConversion)) throw new Error(`Incompatible unit '${to}' for *to* parameter`);

    return (value: number) => {
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
    };
  };
});

export const possibilities: (forMeasure?: Maybe<Measure>) => string[] = pipe(
  (f: Maybe<Measure>) => (isNotNil(f) ? [f] : keys(measures)),
  map((m) => measures[m as Measure].systems),
  chain(keys)
);

// export const convertToBest: (dto: ConvertToBestDto, value: number) => number = uncurryN(2, (dto: ConvertToBestDto) => {
//   const fromConversion = getUnit(dto.from);

//   if (isNil(fromConversion)) throw new Error(`Incompatible unit '${dto.from}' for *from* parameter`);

//   const filteredPossibilities = pipe(
//     (conversion: Conversion) => possibilities(conversion.measure),
//     without(dto.exclude ?? [])
//   )(fromConversion);

//   return (value: number) => {
//     return 0;
//   };
// });

// /**
//  * Represents a conversion path
//  */

// toBest(options?: { exclude?: string[]; cutOffNumber?: number }) {
//     if (this.origin == null) throw new Error('.toBest must be called after .from');

//     options = Object.assign(
//       {
//         exclude: [],
//         cutOffNumber: 1
//       },
//       options
//     );

//     let best = null;
//     /**
//       Looks through every possibility for the 'best' available unit.
//       i.e. Where the value has the fewest numbers before the decimal point,
//       but is still higher than 1.
//     */
//     for (const possibility of this.possibilities()) {
//       const unit = this.describe(possibility);
//       const isIncluded = options?.exclude?.indexOf(possibility) === -1;

//       if (isIncluded && unit.system === this.origin.system) {
//         const result = this.to(possibility);
//         const cutOffNumber = options?.cutOffNumber ?? 0;
//         if (best == null || (result >= cutOffNumber && result < best.val)) {
//           best = {
//             val: result,
//             unit: possibility,
//             singular: unit.singular,
//             plural: unit.plural
//           };
//         }
//       }
//     }

//     return best;
//   }

//   private describeUnit(unit: Conversion): UnitDescription {
//     return {
//       abbr: unit.abbr,
//       measure: unit.measure,
//       system: unit.system,
//       singular: unit.unit.name.singular,
//       plural: unit.unit.name.plural
//     };
//   }
// }
