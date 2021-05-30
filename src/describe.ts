import { isNil } from 'ramda';

import { UnitDescription } from './definitions/type';
import { UnitType } from './definitions/type/units.type';
import { getUnit } from './getUnit';

export const describe = (type: UnitType): UnitDescription => {
  const unit = getUnit(type);

  if (isNil(unit)) throw new Error(`Cannot describe incompatible unit '${type}'`);

  const { unitType, measure, system, unit: unitObject } = unit;

  return { unitType, measure, system, ...unitObject.name };
};
