import { memoizeWith, toPairs } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';

import { Conversion, IConverter, Nullable } from './type';
import { InstanceError } from './utils/error';

/**
 * Gives a {@link Conversion} object from an {@link UnitType}
 *
 * This function is {@link https://scotch.io/tutorials/understanding-memoization-in-javascript | memoized }
 *
 * @throws An {@link InstanceError} if `converter` is not provided
 *
 * @param converter The converter instance to use with this function
 * @param unitType The type you want get the {@link Conversion} of
 * @returns The raw valid conversion unit or `null`. Raw meaning that i18n values are _not_ translated.
 */
const getUnit = memoizeWith(
  (converter, unitType) => {
    if (isNilOrEmpty(converter)) throw new InstanceError();

    return `${converter.guid}-${unitType}`;
  },
  function <TMeasures extends string, TSystems extends string, TUnitType extends string>(
    converter: IConverter<TMeasures, TSystems, TUnitType>,
    unitType: TUnitType
  ): Nullable<Conversion<TMeasures, TSystems, TUnitType>> {
    for (const [measure, measureValue] of toPairs(converter.measuresData)) {
      for (const [system, systemValue] of toPairs(measureValue.systems)) {
        for (const [unitKey, unit] of toPairs(systemValue)) {
          if (unitKey === unitType) {
            return {
              unitType,
              measure,
              system,
              unit
            } as Conversion<TMeasures, TSystems, TUnitType>;
          }
        }
      }
    }

    return null;
  }
);

export default getUnit;
