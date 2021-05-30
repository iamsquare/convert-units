import { CamelToPascalCase } from './';

export const MeasureEnum: Readonly<Record<CamelToPascalCase<Measure>, Measure>> = {
  ACCELERATION: 'acceleration',
  ANGLE: 'angle',
  APPARENT_POWER: 'apparentPower',
  AREA: 'area',
  CHARGE: 'charge',
  CURRENT: 'current',
  FREQUENCY: 'frequency',
  DIGITAL: 'digital',
  DISTANCE: 'distance',
  FORCE: 'force',
  EACH: 'each',
  ENERGY: 'energy',
  ILLUMINANCE: 'illuminance',
  MASS: 'mass',
  PACE: 'pace',
  PARTS_PER: 'partsPer',
  PIECES: 'pieces',
  POWER: 'power',
  PRESSURE: 'pressure',
  REACTIVE_ENERGY: 'reactiveEnergy',
  REACTIVE_POWER: 'reactivePower',
  SPEED: 'speed',
  TEMPERATURE: 'temperature',
  TIME: 'time',
  VOLTAGE: 'voltage',
  VOLUME: 'volume',
  VOLUME_FLOW_RATE: 'volumeFlowRate'
};

export type Measure =
  | 'acceleration'
  | 'angle'
  | 'apparentPower'
  | 'area'
  | 'charge'
  | 'current'
  | 'frequency'
  | 'digital'
  | 'distance'
  | 'force'
  | 'each'
  | 'energy'
  | 'illuminance'
  | 'mass'
  | 'pace'
  | 'partsPer'
  | 'pieces'
  | 'power'
  | 'pressure'
  | 'reactiveEnergy'
  | 'reactivePower'
  | 'speed'
  | 'temperature'
  | 'time'
  | 'voltage'
  | 'volume'
  | 'volumeFlowRate';
