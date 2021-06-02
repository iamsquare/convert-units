import { UnitType } from '../definitions/type/units.type';
import { Measure } from './measure.type';
import { System } from './system.type';
import { Maybe } from './utils.type';

export interface Name {
  singular: string;
  plural: string;
}

export type Unit = {
  name: Name;
  anchor: number;
  anchorShift?: Maybe<number>;
};

export interface Anchor<U extends UnitType> {
  unit: U;
  ratio?: Maybe<number>;
  transform?: Maybe<(value: number) => number>;
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

export { Measure, MeasureEnum } from './measure.type';
export { System, SystemEnum } from './system.type';
export * from './utils.type';
