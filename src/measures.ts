import { keys } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';

import { AllUnitType } from './definitions';
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
import voltage from './definitions/voltage';
import volume from './definitions/volume';
import volumeFlowRate from './definitions/volumeFlowRate';
import { AllMeasure, AllSystem, IConverter, MeasureDictionary } from './type';
import { InstanceError } from './utils/error';

export const allMeasures: MeasureDictionary<AllMeasure, AllSystem, AllUnitType> = {
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
 * @throws An {@link InstanceError} if `converter` is not provided
 *
 * @param converter The converter instance to use with this function
 *
 * @returns All kind of measurements supported by the {@link Converter} instance passed as argument
 */
function measures<TMeasures extends string, TSystems extends string, TUnitType extends string>(
  converter: IConverter<TMeasures, TSystems, TUnitType>
): TMeasures[] {
  if (isNilOrEmpty(converter)) throw new InstanceError();

  return keys(converter.measuresData);
}

export default measures;
