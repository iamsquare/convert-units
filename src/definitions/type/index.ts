import { Maybe, PartialRecord } from '../../type/utils.type';
import { System } from './system.type';
import { UnitType } from './units.type';

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

export * from './system.type';
export * from './units.type';
