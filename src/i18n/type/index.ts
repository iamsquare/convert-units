import { PartialRecord } from '../../type/utils.type';
import { AccelerationPluralTranslationKey, AccelerationSingularTranslationKey } from './acceleration';
import { AnglePluralTranslationKey, AngleSingularTranslationKey } from './angle';
import { ApparentPowerPluralTranslationKey, ApparentPowerSingularTranslationKey } from './apparentPower';
import { AreaPluralTranslationKey, AreaSingularTranslationKey } from './area';
import { ChargePluralTranslationKey, ChargeSingularTranslationKey } from './charge';
import { CurrentPluralTranslationKey, CurrentSingularTranslationKey } from './current';
import { DigitalPluralTranslationKey, DigitalSingularTranslationKey } from './digital';
import { DistancePluralTranslationKey, DistanceSingularTranslationKey } from './distance';
import { EachPluralTranslationKey, EachSingularTranslationKey } from './each';
import { EnergyPluralTranslationKey, EnergySingularTranslationKey } from './energy';

export type SingularTranslationKey =
  | AccelerationSingularTranslationKey
  | AngleSingularTranslationKey
  | ApparentPowerSingularTranslationKey
  | AreaSingularTranslationKey
  | ChargeSingularTranslationKey
  | CurrentSingularTranslationKey
  | DigitalSingularTranslationKey
  | DistanceSingularTranslationKey
  | EachSingularTranslationKey
  | EnergySingularTranslationKey;

export type PluralTranslationKey =
  | AccelerationPluralTranslationKey
  | AnglePluralTranslationKey
  | ApparentPowerPluralTranslationKey
  | AreaPluralTranslationKey
  | ChargePluralTranslationKey
  | CurrentPluralTranslationKey
  | DigitalPluralTranslationKey
  | DistancePluralTranslationKey
  | EachPluralTranslationKey
  | EnergyPluralTranslationKey;

export type TranslationKey = SingularTranslationKey | PluralTranslationKey | 'MISSING_TRANSLATION';

export type Translations = PartialRecord<TranslationKey, string>;

export * from './acceleration';
export * from './angle';
export * from './apparentPower';
export * from './area';
export * from './charge';
export * from './current';
export * from './digital';
export * from './distance';
export * from './each';
export * from './energy';
