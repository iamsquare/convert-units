import { CamelToPascalCase } from './';

export const SystemEnum: Readonly<Record<CamelToPascalCase<System>, System>> = {
  METRIC: 'metric',
  IMPERIAL: 'imperial',
  APPARENT_POWER: 'apparentPower',
  CHARGE: 'charge',
  CURRENT: 'current',
  BITS: 'bits',
  BYTES: 'bytes',
  ENERGY: 'energy',
  FORCE: 'force',
  FREQUENCY: 'frequency',
  PIECES: 'pieces',
  REACTIVE_ENERGY: 'reactiveEnergy',
  REACTIVE_POWER: 'reactivePower',
  TIME: 'time',
  VOLTAGE: 'voltage'
};

export type System =
  | 'metric'
  | 'imperial'
  | 'apparentPower'
  | 'charge'
  | 'current'
  | 'bits'
  | 'bytes'
  | 'energy'
  | 'force'
  | 'frequency'
  | 'pieces'
  | 'reactiveEnergy'
  | 'reactivePower'
  | 'time'
  | 'voltage';
