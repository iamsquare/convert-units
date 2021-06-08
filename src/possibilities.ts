import { chain, includes, isNil, keys, pipe, values } from 'ramda';
import { isNotNil } from 'ramda-adjunct';

import { UnitType } from './definitions/type';
import getUnit from './getUnit';
import measures, { measureDictionary } from './measures';
import { Maybe, Measure, MeasureEnum, Nullable } from './type';

/**
 * Gives a list of compatible units with a given {@link UnitType} or {@link Measure} or all the units supported by the library
 *
 * @throws An Error if `arg` is not a valid {@link UnitType} or {@link Measure}
 *
 * @param arg A valid type or measure from which you want to get a list of compatible conversion units
 * @returns A list of compatible units with a given {@link UnitType} or {@link Measure} or all the units supported by the library
 */
const possibilities = (arg?: Maybe<UnitType | Measure>): UnitType[] | never =>
  pipe(
    (arg: Maybe<UnitType | Measure>): Nullable<Measure> | never => {
      if (isNil(arg)) return null;

      if (includes(arg, values(MeasureEnum))) return arg as Measure;

      const unit = getUnit(arg as UnitType);

      if (isNil(unit)) throw new Error(`Cannot get possibilities for incompatible unit '${arg}'`);

      return unit.measure;
    },
    (m) => (isNotNil(m) ? [m] : measures()),
    chain((m) => values(measureDictionary[m].systems)),
    chain((s) => keys(s))
  )(arg);

export default possibilities;
