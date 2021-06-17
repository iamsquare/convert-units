import convert from '../../convert';
import { Converter } from '../../converter';
import force, { ImperialForceEnum, MetricForceEnum } from '../force';

const converter = new Converter({ measuresData: { force } });

test('N to kN', () => {
  expect(convert(converter, MetricForceEnum.NEWTON, MetricForceEnum.KILONEWTON, 1)).toBe(1e-3);
});

test('kN to N', () => {
  expect(convert(converter, MetricForceEnum.KILONEWTON, MetricForceEnum.NEWTON, 1)).toBe(1e3);
});

test('N to lbf', () => {
  expect(convert(converter, MetricForceEnum.NEWTON, ImperialForceEnum.POUND_FORCE, 1)).toBeCloseTo(0.2224809);
});

test('lbf to N', () => {
  expect(convert(converter, ImperialForceEnum.POUND_FORCE, MetricForceEnum.NEWTON, 1)).toBe(4.44822);
});
