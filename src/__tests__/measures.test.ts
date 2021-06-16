import { Converter } from '../converter';
import measures, { allMeasures } from '../measures';

const converter = new Converter({ measuresData: allMeasures });

test('measures', () => {
  const actual = measures(converter);
  const expected = [
    'acceleration',
    'angle',
    'apparentPower',
    'area',
    'charge',
    'current',
    'digital',
    'distance',
    'each',
    'energy',
    'force',
    'frequency',
    'illuminance',
    'mass',
    'pace',
    'partsPer',
    'pieces',
    'power',
    'pressure',
    'reactiveEnergy',
    'reactivePower',
    'speed',
    'temperature',
    'time',
    'voltage',
    'volume',
    'volumeFlowRate'
  ];
  expect(actual.sort()).toEqual(expected.sort());
});
