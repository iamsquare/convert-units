import { map, pipe } from 'ramda';

import describe from './describe';
import possibilities from './possibilities';
import { IConverter, Maybe, UnitDescription } from './type';

/**
 * Gives a list of descriptions of the units for a given {@link Measure}, or all the units supported by the library.
 *
 * @throws An {@link InstanceError} if `converter` is not provided
 * @throws An Error if `measure` is not a valid {@link Measure}
 *
 * @param converter The converter instance to use with this function
 * @param measure the measure of which you want the list of units
 * @returns The list of descriptions of the units for a given {@link Measure}, or all the units supported by the {@link Converter} instance passed as argument.
 */
function list<TMeasures extends string, TSystems extends string, TUnitType extends string>(
  converter: IConverter<TMeasures, TSystems, TUnitType>,
  measure?: Maybe<TMeasures>
): UnitDescription<TMeasures, TSystems, TUnitType>[] | never {
  return pipe(
    (m: Maybe<TMeasures>) => possibilities(converter, m),
    map((u) => describe(converter, u))
  )(measure);
}

export default list;
