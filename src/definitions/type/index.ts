import { Measure, System, UnitType } from './units.type';

export interface Name {
  singular: string;
  plural: string;
}

export type Unit = {
  name: Name;
  toAnchor: number;
  anchorShift?: number;
};

export interface Anchor<U extends UnitType> {
  unit: U;
  ratio?: number;
  transform?: (value: number) => number;
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

export interface Definition<S extends System, U extends UnitType> {
  systems: Record<S, Record<U, Unit>>;
  anchors: Record<S, Anchor<U>>;
}
