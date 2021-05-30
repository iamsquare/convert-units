import { convert } from '../..';
import { ImperialIlluminanceEnum, MetricIlluminanceEnum } from '../illuminance';

test('ft-cd to lx', () => {
  expect(convert(ImperialIlluminanceEnum.FOOT_CANDLE, MetricIlluminanceEnum.LUX, 1)).toBeCloseTo(10.76391);
});

test('lx to ft-cd', () => {
  expect(convert(MetricIlluminanceEnum.LUX, ImperialIlluminanceEnum.FOOT_CANDLE, 1)).toBeCloseTo(0.09290304);
});
