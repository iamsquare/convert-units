import { UnitType } from '../definitions/type';
import { Measure } from './measure.type';
import { System } from './system.type';
import { Maybe, PartialRecord, RequireAtLeastOne } from './utils.type';

export type BestConversion = {
  value: number;
  unitType: UnitType;
};

export type Conversion = {
  measure: Measure;
  system: System;
  unitType: UnitType;
  unit: Unit;
};

export type UnitDescription = {
  unitType: UnitType;
  measure: Measure;
  system: System;
} & Name;

export type Name = {
  singular: string;
  plural: string;
};

export type Unit = {
  name: Name;
  anchor: number;
  anchorShift?: Maybe<number>;
};

export type Anchor<S extends System, U extends UnitType> = RequireAtLeastOne<
  {
    unit: U;
    ratio?: Maybe<PartialRecord<S, number>>;
    transform?: Maybe<PartialRecord<S, (value: number) => number>>;
  },
  'ratio' | 'transform'
>;

export type ExtractedSystem<E extends System> = Extract<System, E>;

export type AnchorPartialRecord<S extends System, U extends UnitType> = { [P in S]?: Anchor<Exclude<S, P>, U> };

export type UnitDefinition<S extends System, U extends UnitType> = {
  systems: Record<ExtractedSystem<S>, PartialRecord<U, Unit>>;
  anchors?: Maybe<AnchorPartialRecord<ExtractedSystem<S>, U>>;
};

export * from './dto.type';
export * from './measure.type';
export * from './system.type';
export * from './utils.type';
