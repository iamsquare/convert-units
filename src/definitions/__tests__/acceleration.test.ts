import { convert } from '../..';
import { AccelerationEnum } from '../acceleration';

test('g0 to m/s2', () => {
  expect(convert(AccelerationEnum.G0, AccelerationEnum.METRE_PER_SECOND_SQUARED, 1)).toBe(9.80665);
});

test('g-moon to m/s2', () => {
  expect(convert(AccelerationEnum.G_MOON, AccelerationEnum.METRE_PER_SECOND_SQUARED, 1)).toBe(1.62);
});

test('g-sun to m/s2', () => {
  expect(convert(AccelerationEnum.G_SUN, AccelerationEnum.METRE_PER_SECOND_SQUARED, 1)).toBe(274);
});

test('g-mercury to m/s2', () => {
  expect(convert(AccelerationEnum.G_MERCURY, AccelerationEnum.METRE_PER_SECOND_SQUARED, 1)).toBe(3.7);
});

test('g-venus to m/s2', () => {
  expect(convert(AccelerationEnum.G_VENUS, AccelerationEnum.METRE_PER_SECOND_SQUARED, 1)).toBe(8.87);
});

test('g-mars to m/s2', () => {
  expect(convert(AccelerationEnum.G_MARS, AccelerationEnum.METRE_PER_SECOND_SQUARED, 1)).toBe(3.69);
});

test('g-saturn to m/s2', () => {
  expect(convert(AccelerationEnum.G_SATURN, AccelerationEnum.METRE_PER_SECOND_SQUARED, 1)).toBe(10.44);
});

test('g-jupiter to m/s2', () => {
  expect(convert(AccelerationEnum.G_JUPITER, AccelerationEnum.METRE_PER_SECOND_SQUARED, 1)).toBe(24.79);
});

test('g-neptune to m/s2', () => {
  expect(convert(AccelerationEnum.G_NEPTUNE, AccelerationEnum.METRE_PER_SECOND_SQUARED, 1)).toBe(11.15);
});

test('g-pluto to m/s2', () => {
  expect(convert(AccelerationEnum.G_PLUTO, AccelerationEnum.METRE_PER_SECOND_SQUARED, 1)).toBe(0.62);
});

test('m/s2 to g0', () => {
  expect(convert(AccelerationEnum.METRE_PER_SECOND_SQUARED, AccelerationEnum.G0, 9.80665)).toBe(1);
});

test('m/s2 to g-moon', () => {
  expect(convert(AccelerationEnum.METRE_PER_SECOND_SQUARED, AccelerationEnum.G_MOON, 1.62)).toBe(1);
});

test('m/s2 to g-sun', () => {
  expect(convert(AccelerationEnum.METRE_PER_SECOND_SQUARED, AccelerationEnum.G_SUN, 274)).toBe(1);
});

test('m/s2 to g-mercury', () => {
  expect(convert(AccelerationEnum.METRE_PER_SECOND_SQUARED, AccelerationEnum.G_MERCURY, 3.7)).toBe(1);
});

test('m/s2 to g-venus', () => {
  expect(convert(AccelerationEnum.METRE_PER_SECOND_SQUARED, AccelerationEnum.G_VENUS, 8.87)).toBe(1);
});

test('m/s2 to g-mars', () => {
  expect(convert(AccelerationEnum.METRE_PER_SECOND_SQUARED, AccelerationEnum.G_MARS, 3.69)).toBe(1);
});

test('m/s2 to g-saturn', () => {
  expect(convert(AccelerationEnum.METRE_PER_SECOND_SQUARED, AccelerationEnum.G_SATURN, 10.44)).toBe(1);
});

test('m/s2 to g-jupiter', () => {
  expect(convert(AccelerationEnum.METRE_PER_SECOND_SQUARED, AccelerationEnum.G_JUPITER, 24.79)).toBe(1);
});

test('m/s2 to g-neptune', () => {
  expect(convert(AccelerationEnum.METRE_PER_SECOND_SQUARED, AccelerationEnum.G_NEPTUNE, 11.15)).toBe(1);
});

test('m/s2 to g-pluto', () => {
  expect(convert(AccelerationEnum.METRE_PER_SECOND_SQUARED, AccelerationEnum.G_PLUTO, 0.62)).toBe(1);
});
