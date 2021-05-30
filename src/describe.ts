import { isNil } from 'ramda';

import { getUnit } from './';
import { UnitType } from './definitions/type';
import { UnitDescription } from './type';

export default (type: UnitType): UnitDescription => {
  const unit = getUnit(type);

  if (isNil(unit)) throw new Error(`Cannot describe incompatible unit '${type}'`);

  const { unitType, measure, system, unit: unitObject } = unit;

  return { unitType, measure, system, ...unitObject.name };
};
