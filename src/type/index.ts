import { Name, System, Unit, UnitType } from '../definitions/type';
import { Measure } from './measure.type';

export interface BestConversion {
  value: number;
  unitType: UnitType;
}

export interface Conversion {
  measure: Measure;
  system: System;
  unitType: UnitType;
  unit: Unit;
}

export interface UnitDescription extends Name {
  unitType: UnitType;
  measure: Measure;
  system: System;
}

export * from './dto.type';
export * from './measure.type';
