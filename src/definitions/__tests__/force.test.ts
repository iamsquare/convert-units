import { convert } from '../..';
import { ImperialForceEnum, MetricForceEnum } from '../force';

test('N to kN', () => {
  expect(convert(MetricForceEnum.NEWTON, MetricForceEnum.KILONEWTON, 1)).toBe(1e-3);
});

test('kN to N', () => {
  expect(convert(MetricForceEnum.KILONEWTON, MetricForceEnum.NEWTON, 1)).toBe(1e3);
});

test('N to lbf', () => {
  expect(convert(MetricForceEnum.NEWTON, ImperialForceEnum.POUND_FORCE, 1)).toBeCloseTo(0.2224809);
});

test('lbf to N', () => {
  expect(convert(ImperialForceEnum.POUND_FORCE, MetricForceEnum.NEWTON, 1)).toBe(4.44822);
});
