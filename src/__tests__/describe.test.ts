import { forEach } from 'ramda';

import { describe } from '..';
import { ImperialAreaEnum, ImperialPowerEnum, MetricMassEnum, MetricPowerEnum } from '../definitions';
import { UnitDescription } from '../type';
import { Nullable } from '../type/utils.type';

forEach<{ label: string; value: Nullable<UnitDescription>; expected: UnitDescription }>(
  ({ label, value, expected }) => test(label, () => expect(value).toEqual(expected)),
  [
    {
      label: 'Get kg',
      value: describe(MetricMassEnum.KILOGRAM),
      expected: {
        unitType: 'kg',
        measure: 'mass',
        system: 'metric',
        singular: 'Kilogram',
        plural: 'Kilograms'
      }
    },
    {
      label: 'Get ac',
      value: describe(ImperialAreaEnum.ACRE),
      expected: {
        unitType: 'ac',
        measure: 'area',
        system: 'imperial',
        singular: 'Acre',
        plural: 'Acres'
      }
    },
    {
      label: 'Get PS',
      value: describe(MetricPowerEnum.HORSE_POWER),
      expected: {
        unitType: 'PS',
        measure: 'power',
        system: 'metric',
        singular: 'Horsepower (metric)',
        plural: 'Horsepower (metric)'
      }
    },
    {
      label: 'Get hp',
      value: describe(ImperialPowerEnum.HORSE_POWER),
      expected: {
        unitType: 'hp',
        measure: 'power',
        system: 'imperial',
        singular: 'Horsepower (British)',
        plural: 'Horsepower (British)'
      }
    }
  ]
);
