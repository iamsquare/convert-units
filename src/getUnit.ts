import { identity, memoizeWith, toPairs } from 'ramda';

import { UnitType } from './definitions/type';
import { measureDictionary } from './measures';
import { Conversion, Nullable } from './type';

/**
 * Gives a {@link Conversion} object from an {@link UnitType}
 *
 * This function is {@link https://scotch.io/tutorials/understanding-memoization-in-javascript | memoized }
 *
 * @param unitType The type you want get the {@link Conversion} of
 * @returns A valid conversion unit or `null`
 */
const getUnit = memoizeWith(identity, (unitType: UnitType): Nullable<Conversion> => {
  for (const [measure, measureValue] of toPairs(measureDictionary)) {
    for (const [system, systemValue] of toPairs(measureValue.systems)) {
      for (const [unitKey, unit] of toPairs(systemValue)) {
        if (unitKey === unitType) {
          return {
            unitType,
            measure,
            system,
            unit
          };
        }
      }
    }
  }

  return null;
});

export default getUnit;
