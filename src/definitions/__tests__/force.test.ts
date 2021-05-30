import { convert } from '../..';
import { ForceEnum } from '../force';

test('N to kN', () => {
  expect(convert(ForceEnum.NEWTON, ForceEnum.KILONEWTON, 1)).toBe(1e-3);
});

test('kN to N', () => {
  expect(convert(ForceEnum.KILONEWTON, ForceEnum.NEWTON, 1)).toBe(1e3);
});

test('N to lbf', () => {
  expect(convert(ForceEnum.NEWTON, ForceEnum.POUND_FORCE, 1)).toBeCloseTo(0.2224809);
});

test('lbf to N', () => {
  expect(convert(ForceEnum.POUND_FORCE, ForceEnum.NEWTON, 1)).toBe(4.44822);
});
