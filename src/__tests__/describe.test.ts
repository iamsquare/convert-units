import { forEach } from 'ramda';

import { describe } from '..';
import { Nullable, UnitDescription } from '../type';

forEach<{ label: string; value: Nullable<UnitDescription>; expected: UnitDescription }>(
  ({ label, value, expected }) => test(label, () => expect(value).toEqual(expected)),
  [
    {
      label: 'get kg',
      value: describe('kg'),
      expected: {
        unitType: 'kg',
        measure: 'mass',
        system: 'metric',
        singular: 'Kilogram',
        plural: 'Kilograms'
      }
    },
    {
      label: 'get ac',
      value: describe('ac'),
      expected: {
        unitType: 'ac',
        measure: 'area',
        system: 'imperial',
        singular: 'Acre',
        plural: 'Acres'
      }
    },
    {
      label: 'get PS',
      value: describe('PS'),
      expected: {
        unitType: 'PS',
        measure: 'power',
        system: 'metric',
        singular: 'Horsepower (metric)',
        plural: 'Horsepower (metric)'
      }
    },
    {
      label: 'get hp',
      value: describe('hp'),
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
