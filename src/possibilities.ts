import { chain, includes, isNil, keys, pipe, values } from 'ramda';
import { isNotNil } from 'ramda-adjunct';

import { UnitType } from './definitions/type';
import getUnit from './getUnit';
import measures, { MeasureDictionary } from './measures';
import { Maybe, Measure, MeasureEnum, Nullable } from './type';

export default pipe(
  (f: Maybe<UnitType | Measure>) => {
    if (isNil(f)) return null;

    if (includes(f, values(MeasureEnum))) return f as Measure;

    const unit = getUnit(f as UnitType);

    if (isNil(unit)) throw new Error(`Cannot get possibilities for incompatible unit '${f}'`);

    return unit.measure;
  },
  (m: Nullable<Measure>) => (isNotNil(m) ? [m] : measures()),
  chain((m) => values(MeasureDictionary[m as Measure].systems)),
  chain(keys)
) as (arg?: Maybe<UnitType | Measure>) => UnitType[];
