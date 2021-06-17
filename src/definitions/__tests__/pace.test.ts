import convert from '../../convert';
import { Converter } from '../../converter';
import pace, { ImperialPaceEnum, MetricPaceEnum } from '../pace';

const converter = new Converter({ measuresData: { pace } });

test('s/m to s/m', () => {
  expect(convert(converter, MetricPaceEnum.SECOND_PER_METRE, MetricPaceEnum.SECOND_PER_METRE, 1)).toBe(1);
});

test('s/ft to s/ft', () => {
  expect(convert(converter, ImperialPaceEnum.SECOND_PER_FOOT, ImperialPaceEnum.SECOND_PER_FOOT, 1)).toBe(1);
});

test('min/mi to s/ft', () => {
  expect(convert(converter, ImperialPaceEnum.MINUTE_PER_MILE, ImperialPaceEnum.SECOND_PER_FOOT, 1)).toBe(0.0113636);
});

test('s/m to min/km', () => {
  expect(convert(converter, MetricPaceEnum.SECOND_PER_METRE, MetricPaceEnum.MINUTE_PER_KILOMETRE, 1)).toBeCloseTo(
    16.6667
  );
});

test('min/mi to min/km', () => {
  expect(convert(converter, ImperialPaceEnum.MINUTE_PER_MILE, MetricPaceEnum.MINUTE_PER_KILOMETRE, 1)).toBeCloseTo(
    0.621371
  );
});

test('min/km to min/mi', () => {
  expect(convert(converter, MetricPaceEnum.MINUTE_PER_KILOMETRE, ImperialPaceEnum.MINUTE_PER_MILE, 1)).toBeCloseTo(
    1.60934
  );
});
