import { map, pipe } from 'ramda';

import { UnitType } from './definitions/type';
import describe from './describe';
import possibilities from './possibilities';
import { Measure, UnitDescription } from './type';
import { Maybe } from './type/utils.type';

/**
 * Gives a list of descriptions of the units for a given {@link Measure}, or all the units supported by the library.
 *
 * @throws An Error if `measure` is not a valid {@link Measure}
 *
 * @param measure the measure of which you want the list of units
 * @returns The list of descriptions of the units for a given {@link Measure}, or all the units supported by the library.
 */
const list = (measure?: Maybe<Measure>): UnitDescription[] | never =>
  pipe((m: Maybe<Measure>): UnitType[] | never => possibilities(m), map(describe))(measure);

export default list;
