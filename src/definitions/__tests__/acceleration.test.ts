import { convert } from '../..';
import { AccelerationEnum } from '../acceleration';

test('g to m/s2', () => {
  expect(convert(AccelerationEnum.G_FORCE, AccelerationEnum.METRE_PER_SECOND_SQUARED, 1)).toBe(9.80665);
});

test('m/s2 to g', () => {
  expect(convert(AccelerationEnum.METRE_PER_SECOND_SQUARED, AccelerationEnum.G_FORCE, 9.80665)).toBe(1);
});
