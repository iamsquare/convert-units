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
import { ForcePluralTranslationKey, ForceSingularTranslationKey } from './force';
import { FrequencyPluralTranslationKey, FrequencySingularTranslationKey } from './frequency';
import { IlluminancePluralTranslationKey, IlluminanceSingularTranslationKey } from './illuminance';
import { MassPluralTranslationKey, MassSingularTranslationKey } from './mass';
import { PacePluralTranslationKey, PaceSingularTranslationKey } from './pace';
import { PartsPerPluralTranslationKey, PartsPerSingularTranslationKey } from './partsPer';
import { PiecesPluralTranslationKey, PiecesSingularTranslationKey } from './pieces';
import { PowerPluralTranslationKey, PowerSingularTranslationKey } from './power';
import { PressurePluralTranslationKey, PressureSingularTranslationKey } from './pressure';
import { ReactiveEnergyPluralTranslationKey, ReactiveEnergySingularTranslationKey } from './reactiveEnergy';
import { ReactivePowerPluralTranslationKey, ReactivePowerSingularTranslationKey } from './reactivePower';
import { SpeedPluralTranslationKey, SpeedSingularTranslationKey } from './speed';
import { TemperaturePluralTranslationKey, TemperatureSingularTranslationKey } from './temperature';
import { TimePluralTranslationKey, TimeSingularTranslationKey } from './time';
import { VoltagePluralTranslationKey, VoltageSingularTranslationKey } from './voltage';
import { VolumePluralTranslationKey, VolumeSingularTranslationKey } from './volume';
import { VolumeFlowRatePluralTranslationKey, VolumeFlowRateSingularTranslationKey } from './volumeFlowRate';

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
  | EnergySingularTranslationKey
  | ForceSingularTranslationKey
  | FrequencySingularTranslationKey
  | IlluminanceSingularTranslationKey
  | MassSingularTranslationKey
  | PaceSingularTranslationKey
  | PartsPerSingularTranslationKey
  | PiecesSingularTranslationKey
  | PowerSingularTranslationKey
  | PressureSingularTranslationKey
  | ReactiveEnergySingularTranslationKey
  | ReactivePowerSingularTranslationKey
  | SpeedSingularTranslationKey
  | TemperatureSingularTranslationKey
  | TimeSingularTranslationKey
  | VoltageSingularTranslationKey
  | VolumeSingularTranslationKey
  | VolumeFlowRateSingularTranslationKey;

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
  | EnergyPluralTranslationKey
  | ForcePluralTranslationKey
  | FrequencyPluralTranslationKey
  | IlluminancePluralTranslationKey
  | MassPluralTranslationKey
  | PacePluralTranslationKey
  | PartsPerPluralTranslationKey
  | PiecesPluralTranslationKey
  | PowerPluralTranslationKey
  | PressurePluralTranslationKey
  | ReactiveEnergyPluralTranslationKey
  | ReactivePowerPluralTranslationKey
  | SpeedPluralTranslationKey
  | TemperaturePluralTranslationKey
  | TimePluralTranslationKey
  | VoltagePluralTranslationKey
  | VolumePluralTranslationKey
  | VolumeFlowRatePluralTranslationKey;

export type TranslationKey = SingularTranslationKey | PluralTranslationKey;

export type Translations = Record<string, string>;

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
export * from './force';
export * from './frequency';
export * from './illuminance';
export * from './mass';
export * from './pace';
export * from './partsPer';
export * from './pieces';
export * from './power';
export * from './pressure';
export * from './reactiveEnergy';
export * from './reactivePower';
export * from './speed';
export * from './temperature';
export * from './time';
export * from './voltage';
export * from './volume';
export * from './volumeFlowRate';
