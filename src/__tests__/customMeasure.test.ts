import convert from '../convert';
import { Converter } from '../converter';
import { MeasureDictionaryValue } from '../type';

type CustomMeasureSystems = 'customPrimary' | 'customSecondary';
type CustomMeasureUnits = 'a' | 'b' | 'c';

const customUnit: MeasureDictionaryValue<CustomMeasureSystems, CustomMeasureUnits> = {
  systems: {
    customPrimary: {
      a: {
        anchor: 1,
        name: {
          singular: 'a',
          plural: 'as'
        }
      },
      b: {
        anchor: 2,
        name: {
          singular: 'b',
          plural: 'bs'
        }
      }
    },
    customSecondary: {
      c: {
        anchor: 3,
        name: {
          singular: 'c',
          plural: 'cs'
        }
      }
    }
  },
  anchors: {
    customPrimary: {
      unit: 'a',
      ratio: {
        customSecondary: 1 / 3
      }
    },
    customSecondary: {
      unit: 'c',
      ratio: {
        customPrimary: 3
      }
    }
  }
};

const converter = new Converter({ measuresData: { customUnit } });

test('a to b', () => {
  expect(convert(converter, 'a', 'b', 1)).toBe(1 / 2);
});

test('a to c', () => {
  expect(convert(converter, 'a', 'c', 1)).toBe(1 / 9);
});

test('c to a', () => {
  expect(convert(converter, 'c', 'a', 1)).toBe(9);
});

test('b to c', () => {
  expect(convert(converter, 'b', 'c', 1)).toBe(2 / 9);
});

test('c to b', () => {
  expect(convert(converter, 'c', 'b', 1)).toBe(4.5);
});
