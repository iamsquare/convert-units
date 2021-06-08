import { UnitType } from '../definitions/type';
import { Measure } from './measure.type';
import { System } from './system.type';
import { Maybe, PartialRecord } from './utils.type';

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

export type Name = {
  singular: string;
  plural: string;
};

export type Unit = {
  name: Name;
  anchor: number;
  anchorShift?: Maybe<number>;
};

export interface Anchor<S extends System, U extends UnitType> {
  unit: U;
  ratio?: Maybe<PartialRecord<S, number>>;
  transform?: Maybe<PartialRecord<S, (value: number) => number>>;
}

export * from './dto.type';
export * from './measure.type';
export * from './system.type';
export * from './utils.type';
