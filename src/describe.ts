import { isNil } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';

import getUnit from './getUnit';
import { PluralTranslationKey, SingularTranslationKey } from './i18n';
import { IConverter, UnitDescription } from './type';
import { InstanceError } from './utils/error';

/**
 * Describes an {@link UnitType}
 *
 * @throws An {@link InstanceError} if `converter` is not provided
 * @throws An {@link IncompatibleUnitError} if `type` is not a valid {@link UnitType}
 *
 * @param converter The converter instance to use with this function
 * @param type The type you want get a description of
 * @returns An in-depth description of `type`. Names are _translated_ with the i18n module.
 */
function describe<TMeasures extends string, TSystems extends string, TUnitType extends string>(
  converter: IConverter<TMeasures, TSystems, TUnitType>,
  type: TUnitType
): UnitDescription<TMeasures, TSystems, TUnitType> | never {
  if (isNilOrEmpty(converter)) throw new InstanceError();

  const unit = getUnit(converter, type);

  if (isNil(unit)) throw new Error(`Cannot describe incompatible unit '${type}'`);

  const { unitType, measure, system, unit: unitObject } = unit;
  const { singular, plural } = unitObject.name;

  return {
    unitType,
    measure,
    system,
    name: {
      singular: converter.translationModule.getTranslationByKey(<SingularTranslationKey>singular),
      plural: converter.translationModule.getTranslationByKey(<PluralTranslationKey>plural)
    }
  };
}

export default describe;
