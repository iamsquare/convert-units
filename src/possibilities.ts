import { chain, includes, isNil, keys, pipe, values } from 'ramda';
import { isNilOrEmpty, isNotNil } from 'ramda-adjunct';

import getUnit from './getUnit';
import measures from './measures';
import { IConverter, Maybe, Nullable } from './type';
import { InstanceError } from './utils/error';

/**
 * Gives a list of compatible units from a given {@link UnitType} or {@link Measure} (it gives all the units supported by the library if no argument is provided)
 *
 * @param converter The converter instance to use with this function
 * @throws An Error if `arg` is not a valid {@link UnitType} or {@link Measure}
 *
 * @param converter The converter instance to use with this function
 * @param arg A valid type or measure from which you want to get a list of compatible conversion units
 * @returns A list of compatible units with a given {@link UnitType} or {@link Measure} or all the units supported by the {@link Converter} instance passed as argument
 */
function possibilities<TMeasures extends string, TSystems extends string, TUnitType extends string>(
  converter: IConverter<TMeasures, TSystems, TUnitType>,
  arg?: Maybe<TMeasures | TUnitType>
): TUnitType[] {
  if (isNilOrEmpty(converter)) throw new InstanceError();

  return pipe(
    (arg: Maybe<TMeasures | TUnitType>): Nullable<TMeasures> | never => {
      if (isNil(arg)) return null;

      if (includes(arg, measures(converter))) return arg as TMeasures;

      const unit = getUnit(converter, arg as TUnitType);

      if (isNil(unit)) throw new Error(`Cannot get possibilities for incompatible unit or measure '${arg}'`);

      return unit.measure;
    },
    (m) => (isNotNil(m) ? [m] : measures(converter)),
    chain((m) => values(converter.measuresData[m].systems)),
    chain((s) => keys(s) as TUnitType[])
  )(arg);
}

export default possibilities;
