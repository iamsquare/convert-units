import { mergeDeepRight } from 'ramda';

import convert from '../convert';
import { Converter } from '../converter';
import acceleration, { AccelerationEnum } from '../definitions/acceleration';
import { AccelerationUnit } from '../definitions/type';
import { MeasureDictionaryValue } from '../type';

type ExtendedMeasureSystems = 'metric' | 'extendedSystem';
type ExtendedMeasureUnits = AccelerationUnit | 'a';

const customUnit: MeasureDictionaryValue<ExtendedMeasureSystems, ExtendedMeasureUnits> = mergeDeepRight(acceleration, {
  systems: {
    extendedSystem: {
      a: {
        anchor: 1,
        name: {
          singular: 'a',
          plural: 'as'
        }
      }
    }
  },
  anchors: {
    metric: {
      unit: AccelerationEnum.METRE_PER_SECOND_SQUARED,
      ratio: {
        extendedSystem: 1 / 3
      }
    },
    extendedSystem: {
      unit: 'a',
      ratio: {
        metric: 3
      }
    }
  }
});

const converter = new Converter({ measuresData: { customUnit } });

test('g0 to m/s2', () => {
  expect(convert(converter, AccelerationEnum.G0, AccelerationEnum.METRE_PER_SECOND_SQUARED, 1)).toBe(9.80665);
});

test('m/s2 to a', () => {
  expect(convert(converter, AccelerationEnum.METRE_PER_SECOND_SQUARED, 'a', 1)).toBe(1 / 3);
});

test('a to m/s2', () => {
  expect(convert(converter, 'a', AccelerationEnum.METRE_PER_SECOND_SQUARED, 1)).toBe(3);
});
