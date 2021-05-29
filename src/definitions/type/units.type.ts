export type AccelerationUnit = 'g-force' | 'm/s2';
export type AngleUnit = 'deg' | 'rad' | 'grad' | 'arcmin' | 'arcsec';
export type ApparentPowerUnit = 'VA' | 'mVA' | 'kVA' | 'MVA' | 'GVA';
export type AreaUnit = 'mm2' | 'cm2' | 'm2' | 'ha' | 'km2' | 'in2' | 'yd2' | 'ft2' | 'ac' | 'mi2';
export type ChargeUnit = 'c' | 'mC' | 'μC' | 'nC' | 'pC';
export type CurrentUnit = 'A' | 'mA' | 'kA';
export type DigitalUnit = 'b' | 'kb' | 'Mb' | 'Gb' | 'Tb' | 'B' | 'kB' | 'MB' | 'GB' | 'TB';
export type DistanceUnit =
  | 'nm'
  | 'μm'
  | 'mm'
  | 'cm'
  | 'm'
  | 'km'
  | 'in'
  | 'yd'
  | 'ft-us'
  | 'ft'
  | 'mi'
  | 'nMi'
  | 'fathom';
export type EachUnit = 'ea' | 'dz';
export type EnergyUnit = 'Wh' | 'mWh' | 'kWh' | 'MWh' | 'GWh' | 'J' | 'kJ';
export type ForceUnit = 'N' | 'kN' | 'lbf';
export type FrequencyUnit = 'Hz' | 'mHz' | 'kHz' | 'MHz' | 'GHz' | 'THz' | 'rpm' | 'deg/s' | 'rad/s';
export type IlluminanceUnit = 'lx' | 'ft-cd';
export type MassUnit = 'mcg' | 'mg' | 'g' | 'kg' | 'oz' | 'lb' | 'mt' | 't';
export type PaceUnit = 's/m' | 'min/km' | 's/ft' | 'min/mi';
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
export type PowerUnit = 'W' | 'mW' | 'kW' | 'MW' | 'GW' | 'PS' | 'Btu/s' | 'ft-lb/s' | 'hp';
export type PressureUnit = 'Pa' | 'hPa' | 'kPa' | 'MPa' | 'bar' | 'torr' | 'psi' | 'ksi';
export type ReactiveEnergyUnit = 'VARh' | 'mVARh' | 'kVARh' | 'MVARh' | 'GVARh';
export type ReactivePowerUnit = 'VAR' | 'mVAR' | 'kVAR' | 'MVAR' | 'GVAR';
export type SpeedUnit = 'm/s' | 'km/h' | 'm/h' | 'knot' | 'ft/s' | 'mph';
export type TemperatureUnit = 'C' | 'F' | 'K' | 'R';
export type TimeUnit = 'ns' | 'mu' | 'ms' | 's' | 'min' | 'h' | 'd' | 'week' | 'month' | 'year';
export type VoltageUnit = 'V' | 'mV' | 'kV';
export type VolumeUnit =
  | 'mm3'
  | 'cm3'
  | 'ml'
  | 'cl'
  | 'dl'
  | 'l'
  | 'kl'
  | 'm3'
  | 'km3'
  | 'krm'
  | 'tsk'
  | 'msk'
  | 'kkp'
  | 'glas'
  | 'kanna'
  | 'tsp'
  | 'Tbs'
  | 'in3'
  | 'fl-oz'
  | 'cup'
  | 'pnt'
  | 'qt'
  | 'gal'
  | 'ft3'
  | 'yd3';
export type VolumeFlowRateUnit =
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
  | 'km3/s'
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

export type Measure =
  | 'acceleration'
  | 'angle'
  | 'apparentPower'
  | 'area'
  | 'charge'
  | 'current'
  | 'frequency'
  | 'digital'
  | 'distance'
  | 'force'
  | 'each'
  | 'energy'
  | 'illuminance'
  | 'mass'
  | 'pace'
  | 'partsPer'
  | 'pieces'
  | 'power'
  | 'pressure'
  | 'reactiveEnergy'
  | 'reactivePower'
  | 'speed'
  | 'temperature'
  | 'time'
  | 'voltage'
  | 'volume'
  | 'volumeFlowRate';

export type System =
  | 'metric'
  | 'imperial'
  | 'apparentPower'
  | 'charge'
  | 'current'
  | 'bits'
  | 'bytes'
  | 'energy'
  | 'force'
  | 'frequency'
  | 'pieces'
  | 'reactiveEnergy'
  | 'reactivePower'
  | 'time';
