import { PartialRecord } from '../../type/utils.type';
import { AccelerationPluralTranslationKey, AccelerationSingularTranslationKey } from './acceleration';
import { AnglePluralTranslationKey, AngleSingularTranslationKey } from './angle';
import { ApparentPowerPluralTranslationKey, ApparentPowerSingularTranslationKey } from './apparentPower';
import { AreaPluralTranslationKey, AreaSingularTranslationKey } from './area';
import { ChargePluralTranslationKey, ChargeSingularTranslationKey } from './charge';
import { CurrentPluralTranslationKeys, CurrentSingularTranslationKeys } from './current';
import { DigitalPluralTranslationKey, DigitalSingularTranslationKey } from './digital';
import { DistancePluralTranslationKey, DistanceSingularTranslationKey } from './distance';
import { EachPluralTranslationKeys, EachSingularTranslationKeys } from './each';
import { EnergyPluralTranslationKeys, EnergySingularTranslationKeys } from './energy';

export type SingularTranslationKey =
  | AccelerationSingularTranslationKey
  | AngleSingularTranslationKey
  | ApparentPowerSingularTranslationKey
  | AreaSingularTranslationKey
  | ChargeSingularTranslationKey
  | CurrentSingularTranslationKeys
  | DigitalSingularTranslationKey
  | DistanceSingularTranslationKey
  | EachSingularTranslationKeys
  | EnergySingularTranslationKeys;

export type PluralTranslationKey =
  | AccelerationPluralTranslationKey
  | AnglePluralTranslationKey
  | ApparentPowerPluralTranslationKey
  | AreaPluralTranslationKey
  | ChargePluralTranslationKey
  | CurrentPluralTranslationKeys
  | DigitalPluralTranslationKey
  | DistancePluralTranslationKey
  | EachPluralTranslationKeys
  | EnergyPluralTranslationKeys;

export type TranslationKey = SingularTranslationKey | PluralTranslationKey;

export type TranslationModuleOptions = { translations: Translations; language?: string };

export type TranslationsDictionary = PartialRecord<TranslationKey, string>;

export type Translations = {
  [L in string]: TranslationsDictionary;
};

export * from './acceleration';
export * from './angle';
export * from './apparentPower';
export * from './area';
export * from './charge';
export * from './current';
