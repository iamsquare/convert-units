import { identity, memoizeWith } from 'ramda';

import { UnitType } from './definitions/type';
import measures from './measures';
import { Conversion, Measure, Nullable, System } from './type';

export default memoizeWith(identity, (unitType: UnitType): Nullable<Conversion> => {
  for (const [measure, measureValue] of Object.entries(measures)) {
    for (const [system, systemValue] of Object.entries(measureValue.systems)) {
      for (const [unit, unitValue] of Object.entries(systemValue)) {
        if (unit === unitType) {
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
