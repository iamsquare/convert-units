import { CamelToPascalCase } from './utils.type';

export const SystemEnum: Readonly<Record<CamelToPascalCase<System>, System>> = {
  METRIC: 'metric',
  IMPERIAL: 'imperial',
  BITS: 'bits',
  BYTES: 'bytes',
  OTHER: 'other'
};

export type System = 'metric' | 'imperial' | 'bits' | 'bytes' | 'other';
