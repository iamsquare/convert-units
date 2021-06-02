import { chain, includes, isNil, keys, pipe, values } from 'ramda';
import { isNotNil } from 'ramda-adjunct';

import { UnitType } from './definitions/type';
import getUnit from './getUnit';
import measures, { measureDictionary } from './measures';
import { Maybe, Measure, MeasureEnum, Nullable } from './type';

const possibilities = (f?: Maybe<UnitType | Measure>): UnitType[] | never =>
  pipe(
    (f: Maybe<UnitType | Measure>): Nullable<Measure> | never => {
      if (isNil(f)) return null;

      if (includes(f, values(MeasureEnum))) return f as Measure;

      const unit = getUnit(f as UnitType);

      if (isNil(unit)) throw new Error(`Cannot get possibilities for incompatible unit '${f}'`);

      return unit.measure;
    },
    (m) => (isNotNil(m) ? [m] : measures()),
    chain((m) => values(measureDictionary[m].systems)),
    chain((s) => keys(s))
  )(f);

export default possibilities;
