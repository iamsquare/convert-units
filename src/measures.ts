import { keys } from 'ramda';

import acceleration from './definitions/acceleration';
import angle from './definitions/angle';
import apparentPower from './definitions/apparentPower';
import area from './definitions/area';
import charge from './definitions/charge';
import current from './definitions/current';
import digital from './definitions/digital';
import distance from './definitions/distance';
import each from './definitions/each';
import energy from './definitions/energy';
import force from './definitions/force';
import frequency from './definitions/frequency';
import illuminance from './definitions/illuminance';
import mass from './definitions/mass';
import pace from './definitions/pace';
import partsPer from './definitions/partsPer';
import pieces from './definitions/pieces';
import power from './definitions/power';
import pressure from './definitions/pressure';
import reactiveEnergy from './definitions/reactiveEnergy';
import reactivePower from './definitions/reactivePower';
import speed from './definitions/speed';
import temperature from './definitions/temperature';
import time from './definitions/time';
import { UnitType } from './definitions/type';
import voltage from './definitions/voltage';
import volume from './definitions/volume';
import volumeFlowRate from './definitions/volumeFlowRate';
import { Anchor, Maybe, Measure, PartialRecord, System, Unit } from './type';

type PartialMeasureDictionary = {
  systems: PartialRecord<System, PartialRecord<UnitType, Unit>>;
  anchors?: Maybe<PartialRecord<System, Anchor<System, UnitType>>>;
};

export const measureDictionary: Record<Measure, PartialMeasureDictionary> = {
  acceleration,
  angle,
  apparentPower,
  area,
  charge,
  current,
  digital,
  distance,
  each,
  energy,
  force,
  frequency,
  illuminance,
  mass,
  pace,
  partsPer,
  pieces,
  power,
  pressure,
  reactiveEnergy,
  reactivePower,
  speed,
  temperature,
  time,
  voltage,
  volume,
  volumeFlowRate
};

/**
 * @returns All kind of measurements supported by this library
 */
const measures = () => keys(measureDictionary);

export default measures;
