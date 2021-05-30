import { CamelToPascalCase } from './';

export const SystemEnum: Readonly<Record<CamelToPascalCase<System>, System>> = {
  METRIC: 'metric',
  IMPERIAL: 'imperial',
  BITS: 'bits',
  BYTES: 'bytes',
  PIECES: 'pieces'
};

export type System = 'metric' | 'imperial' | 'bits' | 'bytes' | 'pieces';
