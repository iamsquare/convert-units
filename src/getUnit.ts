import { identity, memoizeWith } from 'ramda';

import { UnitType } from './definitions/type';
import { measureDictionary } from './measures';
import { Conversion, Measure, Nullable, System, Unit } from './type';

export default memoizeWith(identity, (unitType: UnitType): Nullable<Conversion> => {
  for (const [measure, measureValue] of Object.entries(measureDictionary)) {
    for (const [system, systemValue] of Object.entries(measureValue.systems)) {
      for (const [unit, unitValue] of Object.entries(systemValue)) {
        if (unit === unitType) {
          return {
            unitType: unitType,
            measure: measure as Measure,
            system: system as System,
            unit: unitValue as Unit
          };
        }
      }
    }
  }

  return null;
});
