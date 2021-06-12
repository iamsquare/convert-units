export type AccelerationUnit =
  | 'g0'
  | 'm/s2'
  | 'g-sun'
  | 'g-mercury'
  | 'g-venus'
  | 'g-mars'
  | 'g-saturn'
  | 'g-jupiter'
  | 'g-neptune'
  | 'g-pluto'
  | 'g-moon';
export type AngleUnit = 'deg' | 'rad' | 'grad' | 'arcmin' | 'arcsec';
export type ApparentPowerUnit = 'VA' | 'mVA' | 'kVA' | 'MVA' | 'GVA';
export type MetricAreaUnit = 'mm2' | 'cm2' | 'm2' | 'ha' | 'km2';
export type ImperialAreaUnit = 'in2' | 'yd2' | 'ft2' | 'ac' | 'mi2';
export type AreaUnit = MetricAreaUnit | ImperialAreaUnit;
export type ChargeUnit = 'c' | 'mC' | 'μC' | 'nC' | 'pC';
export type CurrentUnit = 'A' | 'mA' | 'kA';
export type BitDigitalUnit = 'b' | 'kb' | 'Mb' | 'Gb' | 'Tb' | 'Pb' | 'kib' | 'Mib' | 'Gib' | 'Tib' | 'Pib';
export type ByteDigitalUnit = 'B' | 'kB' | 'MB' | 'GB' | 'TB' | 'PB' | 'kiB' | 'MiB' | 'GiB' | 'TiB' | 'PiB';
export type DigitalUnit = BitDigitalUnit | ByteDigitalUnit;
export type MetricDistanceUnit = 'nm' | 'μm' | 'mm' | 'cm' | 'm' | 'km';
export type ImperialDistanceUnit = 'in' | 'yd' | 'ft-us' | 'ft' | 'mi' | 'nMi' | 'fathom';
export type DistanceUnit = MetricDistanceUnit | ImperialDistanceUnit;
export type EachUnit = 'ea' | 'dz';
export type EnergyUnit = 'Wh' | 'mWh' | 'kWh' | 'MWh' | 'GWh' | 'J' | 'kJ';
export type MetricForceUnit = 'N' | 'kN';
export type ImperialForceUnit = 'lbf';
export type ForceUnit = MetricForceUnit | ImperialForceUnit;
export type FrequencyUnit = 'Hz' | 'mHz' | 'kHz' | 'MHz' | 'GHz' | 'THz' | 'rpm' | 'deg/s' | 'rad/s';
export type MetricIlluminanceUnit = 'lx';
export type ImperialIlluminanceUnit = 'ft-cd';
export type IlluminanceUnit = MetricIlluminanceUnit | ImperialIlluminanceUnit;
export type MetricMassUnit = 'mcg' | 'mg' | 'g' | 'kg' | 'mt';
export type ImperialMassUnit = 'oz' | 'lb' | 't';
export type MassUnit = MetricMassUnit | ImperialMassUnit;
export type MetricPaceUnit = 's/m' | 'min/km';
export type ImperialPaceUnit = 's/ft' | 'min/mi';
export type PaceUnit = MetricPaceUnit | ImperialPaceUnit;
export type PartsPerUnit = 'ppm' | 'ppb' | 'ppt' | 'ppq';
export type PiecesUnit =
  | 'pcs'
  | 'bk-doz'
  | 'cp'
  | 'doz-doz'
  | 'doz'
  | 'gr-gr'
  | 'gros'
  | 'half-dozen'
  | 'long-hundred'
  | 'ream'
  | 'scores'
  | 'sm-gr'
  | 'trio';
export type MetricPowerUnit = 'W' | 'mW' | 'kW' | 'MW' | 'GW' | 'PS';
export type ImperialPowerUnit = 'Btu/s' | 'ft-lb/s' | 'hp';
export type PowerUnit = MetricPowerUnit | ImperialPowerUnit;
export type MetricPressureUnit = 'Pa' | 'hPa' | 'kPa' | 'MPa' | 'bar' | 'torr' | 'mmHg';
export type ImperialPressureUnit = 'psi' | 'ksi' | 'inHg';
export type PressureUnit = MetricPressureUnit | ImperialPressureUnit;
export type ReactiveEnergyUnit = 'VARh' | 'mVARh' | 'kVARh' | 'MVARh' | 'GVARh';
export type ReactivePowerUnit = 'VAR' | 'mVAR' | 'kVAR' | 'MVAR' | 'GVAR';
export type MetricSpeedUnit = 'm/s' | 'km/h' | 'm/h';
export type ImperialSpeedUnit = 'knot' | 'ft/s' | 'mph';
export type SpeedUnit = MetricSpeedUnit | ImperialSpeedUnit;
export type MetricTemperatureUnit = 'C' | 'K';
export type ImperialTemperatureUnit = 'F' | 'R';
export type TemperatureUnit = MetricTemperatureUnit | ImperialTemperatureUnit;
export type TimeUnit = 'ns' | 'mu' | 'ms' | 's' | 'min' | 'h' | 'd' | 'week' | 'month' | 'year';
export type VoltageUnit = 'V' | 'mV' | 'kV';
export type MetricVolumeUnit = 'mm3' | 'cm3' | 'ml' | 'cl' | 'dl' | 'l' | 'kl' | 'm3' | 'km3';
export type SwedishVolumeUnit = 'krm' | 'tsk' | 'msk' | 'kkp' | 'glas' | 'kanna';
export type ImperialVolumeUnit = 'tsp' | 'Tbs' | 'in3' | 'fl-oz' | 'cup' | 'pnt' | 'qt' | 'gal' | 'ft3' | 'yd3';
export type VolumeUnit = MetricVolumeUnit | ImperialVolumeUnit | SwedishVolumeUnit;
export type MetricVolumeFlowRateUnit =
  | 'mm3/s'
  | 'cm3/s'
  | 'ml/s'
  | 'cl/s'
  | 'dl/s'
  | 'l/s'
  | 'l/min'
  | 'l/h'
  | 'kl/s'
  | 'kl/min'
  | 'kl/h'
  | 'm3/s'
  | 'm3/min'
  | 'm3/h'
  | 'km3/s';
export type ImperialVolumeFlowRateUnit =
  | 'tsp/s'
  | 'Tbs/s'
  | 'in3/s'
  | 'in3/min'
  | 'in3/h'
  | 'fl-oz/s'
  | 'fl-oz/min'
  | 'fl-oz/h'
  | 'cup/s'
  | 'pnt/s'
  | 'pnt/min'
  | 'pnt/h'
  | 'qt/s'
  | 'gal/s'
  | 'gal/min'
  | 'gal/h'
  | 'ft3/s'
  | 'ft3/min'
  | 'ft3/h'
  | 'yd3/s'
  | 'yd3/min'
  | 'yd3/h';
export type VolumeFlowRateUnit = MetricVolumeFlowRateUnit | ImperialVolumeFlowRateUnit;

export type UnitType =
  | AccelerationUnit
  | AngleUnit
  | ApparentPowerUnit
  | AreaUnit
  | ChargeUnit
  | CurrentUnit
  | DigitalUnit
  | EachUnit
  | EnergyUnit
  | ForceUnit
  | FrequencyUnit
  | IlluminanceUnit
  | DistanceUnit
  | MassUnit
  | PaceUnit
  | PartsPerUnit
  | PiecesUnit
  | PowerUnit
  | PressureUnit
  | ReactiveEnergyUnit
  | ReactivePowerUnit
  | SpeedUnit
  | TemperatureUnit
  | TimeUnit
  | VoltageUnit
  | VolumeUnit
  | VolumeFlowRateUnit;
