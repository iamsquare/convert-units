import convert from '../../convert';
import { Converter } from '../../converter';
import illuminance, { ImperialIlluminanceEnum, MetricIlluminanceEnum } from '../illuminance';

const converter = new Converter({ measuresData: { illuminance } });

test('ft-cd to lx', () => {
  expect(convert(converter, ImperialIlluminanceEnum.FOOT_CANDLE, MetricIlluminanceEnum.LUX, 1)).toBeCloseTo(10.76391);
});

test('lx to ft-cd', () => {
  expect(convert(converter, MetricIlluminanceEnum.LUX, ImperialIlluminanceEnum.FOOT_CANDLE, 1)).toBeCloseTo(0.09290304);
});
