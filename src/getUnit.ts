import { identity, memoizeWith } from 'ramda';

import { Conversion } from './definitions/type';
import { Measure, System, UnitType } from './definitions/type/units.type';
import { Nullable } from './definitions/type/utils.type';
import { measures } from './measures';

export const getUnit = memoizeWith(identity, (unitType: UnitType): Nullable<Conversion> => {
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
