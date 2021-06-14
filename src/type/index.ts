import { AllUnitType } from '../definitions/type';
import { TranslationModule } from '../i18n';
import { AllSystem } from './system.type';
import { Maybe, PartialRecord, RequireAtLeastOne } from './utils.type';

export interface IConverter<
  TMeasures extends string,
  TSystems extends string,
  TUnitType extends string,
  TTranslationKeys extends string = null
> {
  guid: string;
  measuresData: MeasureDictionary<TMeasures, TSystems, TUnitType>;
  translationModule: TranslationModule<TTranslationKeys>;
}

export type BestConversion<TUnitType extends string> = {
  value: number;
  unitType: TUnitType;
};

export type Conversion<TMeasures extends string, TSystems extends string, TUnitType extends string> = {
  measure: TMeasures;
  system: TSystems;
  unitType: TUnitType;
  unit: Unit;
};

export type UnitDescription<TMeasures extends string, TSystems extends string, TUnitType extends string> = {
  unitType: TUnitType;
  measure: TMeasures;
  system: TSystems;
  name: Name;
};

export type Name = {
  singular: string;
  plural: string;
};

export type Unit = {
  name: Name;
  anchor: number;
  anchorShift?: Maybe<number>;
};

type GenericAnchor<TSystems extends string, TUnitType extends string> = RequireAtLeastOne<
  {
    unit: TUnitType;
    ratio?: Maybe<PartialRecord<TSystems, number>>;
    transform?: Maybe<PartialRecord<TSystems, (value: number) => number>>;
  },
  'ratio' | 'transform'
>;

export type Anchor<S extends AllSystem, U extends AllUnitType> = GenericAnchor<S, U>;

export type ExtractedSystem<E extends AllSystem> = Extract<AllSystem, E>;

export type AnchorPartialRecord<S extends AllSystem, U extends AllUnitType> = {
  [P in S]?: GenericAnchor<Exclude<S, P>, U>;
};

export type MeasureDefinition<S extends AllSystem, U extends AllUnitType> = {
  systems: Record<ExtractedSystem<S>, PartialRecord<U, Unit>>;
  anchors?: Maybe<AnchorPartialRecord<ExtractedSystem<S>, U>>;
};

export type MeasureDictionaryValue<TSystems extends string, TUnitType extends string> = {
  systems: PartialRecord<TSystems, PartialRecord<TUnitType, Unit>>;
  anchors?: Maybe<PartialRecord<TSystems, GenericAnchor<TSystems, TUnitType>>>;
};

export type MeasureDictionary<TMeasures extends string, TSystems extends string, TUnitType extends string> =
  PartialRecord<TMeasures, MeasureDictionaryValue<TSystems, TUnitType>>;

export * from './dto.type';
export * from './measure.type';
export * from './system.type';
export * from './utils.type';
