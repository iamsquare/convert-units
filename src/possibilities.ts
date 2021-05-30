import { chain, includes, isNil, keys, pipe, values } from 'ramda';
import { isNotNil } from 'ramda-adjunct';

import { Measure, MeasureEnum, UnitType } from './definitions/type/units.type';
import { Maybe, Nullable } from './definitions/type/utils.type';
import { getUnit } from './getUnit';
import { measures } from './measures';

export const possibilities: (arg?: Maybe<UnitType | Measure>) => string[] = pipe(
  (f: Maybe<UnitType | Measure>) => {
    if (isNil(f)) return null;

    if (includes(f, values(MeasureEnum))) return f as Measure;

    const unit = getUnit(f as UnitType);

    if (isNil(unit)) throw new Error(`Cannot get possibilities for incompatible unit '${f}'`);

    return unit.measure;
  },
  (m: Nullable<Measure>) => (isNotNil(m) ? [m] : keys(measures)),
  chain((m) => values(measures[m as Measure].systems)),
  chain(keys)
);
