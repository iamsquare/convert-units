import { identity, memoizeWith, toPairs } from 'ramda';

import { UnitType } from './definitions/type';
import { measureDictionary } from './measures';
import { Conversion, Nullable } from './type';

export default memoizeWith(identity, (unitType: UnitType): Nullable<Conversion> => {
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
