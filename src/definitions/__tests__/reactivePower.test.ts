import { convert } from '../..';
import { ReactivePowerEnum } from '../reactivePower';

test('VAR to VAR', () => {
  expect(convert(ReactivePowerEnum.VOLT_AMPERE_REACTIVE, ReactivePowerEnum.VOLT_AMPERE_REACTIVE, 1)).toBe(1);
});

test('mVAR to mVAR', () => {
  expect(convert(ReactivePowerEnum.MILLIVOLT_AMPERE_REACTIVE, ReactivePowerEnum.MILLIVOLT_AMPERE_REACTIVE, 1)).toBe(1);
});

test('kVAR to kVAR', () => {
  expect(convert(ReactivePowerEnum.KILOVOLT_AMPERE_REACTIVE, ReactivePowerEnum.KILOVOLT_AMPERE_REACTIVE, 1)).toBe(1);
});

test('MVAR to MVAR', () => {
  expect(convert(ReactivePowerEnum.MEGAVOLT_AMPERE_REACTIVE, ReactivePowerEnum.MEGAVOLT_AMPERE_REACTIVE, 1)).toBe(1);
});

test('GVAR to GVAR', () => {
  expect(convert(ReactivePowerEnum.GIGAVOLT_AMPERE_REACTIVE, ReactivePowerEnum.GIGAVOLT_AMPERE_REACTIVE, 1)).toBe(1);
});

test('VAR to mVAR', () => {
  expect(convert(ReactivePowerEnum.VOLT_AMPERE_REACTIVE, ReactivePowerEnum.MILLIVOLT_AMPERE_REACTIVE, 1)).toBe(1e3);
});

test('VAR to kVAR', () => {
  expect(convert(ReactivePowerEnum.VOLT_AMPERE_REACTIVE, ReactivePowerEnum.KILOVOLT_AMPERE_REACTIVE, 1)).toBe(1e-3);
});

test('VAR to MVAR', () => {
  expect(convert(ReactivePowerEnum.VOLT_AMPERE_REACTIVE, ReactivePowerEnum.MEGAVOLT_AMPERE_REACTIVE, 1)).toBe(1e-6);
});

test('VAR to GVAR', () => {
  expect(convert(ReactivePowerEnum.VOLT_AMPERE_REACTIVE, ReactivePowerEnum.GIGAVOLT_AMPERE_REACTIVE, 1)).toBe(1e-9);
});

test('GVAR to mVAR', () => {
  expect(convert(ReactivePowerEnum.GIGAVOLT_AMPERE_REACTIVE, ReactivePowerEnum.MILLIVOLT_AMPERE_REACTIVE, 1)).toBe(
    1e12
  );
});

test('MVAR to mVAR', () => {
  expect(convert(ReactivePowerEnum.MEGAVOLT_AMPERE_REACTIVE, ReactivePowerEnum.MILLIVOLT_AMPERE_REACTIVE, 1)).toBe(1e9);
});

test('kVAR to mVAR', () => {
  expect(convert(ReactivePowerEnum.KILOVOLT_AMPERE_REACTIVE, ReactivePowerEnum.MILLIVOLT_AMPERE_REACTIVE, 1)).toBe(1e6);
});

test('mVAR to kVAR', () => {
  expect(convert(ReactivePowerEnum.MILLIVOLT_AMPERE_REACTIVE, ReactivePowerEnum.KILOVOLT_AMPERE_REACTIVE, 1)).toBe(
    1e-6
  );
});

test('mVAR to VAR', () => {
  expect(convert(ReactivePowerEnum.MILLIVOLT_AMPERE_REACTIVE, ReactivePowerEnum.VOLT_AMPERE_REACTIVE, 1)).toBe(1e-3);
});

test('kVAR to VAR', () => {
  expect(convert(ReactivePowerEnum.KILOVOLT_AMPERE_REACTIVE, ReactivePowerEnum.VOLT_AMPERE_REACTIVE, 1)).toBe(1e3);
});
