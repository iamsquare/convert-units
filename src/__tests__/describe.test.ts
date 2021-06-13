import { forEach } from 'ramda';

import { Converter } from '../converter';
import {
  AccelerationEnum,
  AllUnitType,
  ImperialAreaEnum,
  ImperialPowerEnum,
  MetricMassEnum,
  MetricPowerEnum
} from '../definitions';
import _describe from '../describe';
import allTranslations from '../i18n/allTranslations';
import { allMeasures } from '../measures';
import { AllMeasure, AllSystem, UnitDescription } from '../type';
import { Nullable } from '../type/utils.type';

const converter = new Converter({ measuresData: allMeasures, translations: allTranslations });

forEach<{
  label: string;
  value: Nullable<UnitDescription<AllMeasure, AllSystem, AllUnitType>>;
  expected: UnitDescription<AllMeasure, AllSystem, AllUnitType>;
}>(
  ({ label, value, expected }) => test(label, () => expect(value).toEqual(expected)),
  [
    {
      label: 'Get kg',
      value: _describe(converter, MetricMassEnum.KILOGRAM),
      expected: {
        unitType: 'kg',
        measure: 'mass',
        system: 'metric',
        name: {
          singular: 'Kilogram',
          plural: 'Kilograms'
        }
      }
    },
    {
      label: 'Get m/s2',
      value: _describe(converter, AccelerationEnum.METRE_PER_SECOND_SQUARED),
      expected: {
        unitType: 'm/s2',
        measure: 'acceleration',
        system: 'metric',
        name: {
          singular: 'Metre per second squared',
          plural: 'Metres per second squared'
        }
      }
    },
    {
      label: 'Get ac',
      value: _describe(converter, ImperialAreaEnum.ACRE),
      expected: {
        unitType: 'ac',
        measure: 'area',
        system: 'imperial',
        name: {
          singular: 'Acre',
          plural: 'Acres'
        }
      }
    },
    {
      label: 'Get PS',
      value: _describe(converter, MetricPowerEnum.HORSE_POWER),
      expected: {
        unitType: 'PS',
        measure: 'power',
        system: 'metric',
        name: {
          singular: 'Horsepower (metric)',
          plural: 'Horsepower (metric)'
        }
      }
    },
    {
      label: 'Get hp',
      value: _describe(converter, ImperialPowerEnum.HORSE_POWER),
      expected: {
        unitType: 'hp',
        measure: 'power',
        system: 'imperial',
        name: {
          singular: 'Horsepower (British)',
          plural: 'Horsepower (British)'
        }
      }
    }
  ]
);
