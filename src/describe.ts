/**
 * Specify this is a module comment and rename it to my-module:
 * @module my-module
 * asdasdsda
 */
import { isNil } from 'ramda';

import { UnitType } from './definitions/type';
import getUnit from './getUnit';
import { PluralTranslationKey, SingularTranslationKey, translationModule } from './i18n';
import { UnitDescription } from './type';

/**
 * Describes an {@link UnitType}
 *
 * @throws An Error if `type` is not a valid {@link UnitType}
 *
 * @param type The type you want get a description of
 * @returns An in-depth description of `type`. Names are _translated_ with the i18n module.
 */
const describe = (type: UnitType): UnitDescription | never => {
  const unit = getUnit(type);

  if (isNil(unit)) throw new Error(`Cannot describe incompatible unit '${type}'`);

  const { unitType, measure, system, unit: unitObject } = unit;
  const { singular, plural } = unitObject.name;

  return {
    unitType,
    measure,
    system,
    singular: translationModule.getTranslationByKey(<SingularTranslationKey>singular),
    plural: translationModule.getTranslationByKey(<PluralTranslationKey>plural)
  };
};

export default describe;
