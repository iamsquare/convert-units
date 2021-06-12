import { measures } from '..';

test('measures', () => {
  const actual = measures();
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
