import { allPass } from 'ramda';
import { isFunction, isNotNil, isNumber } from 'ramda-adjunct';

export const isDefinedFunction = allPass([isNotNil, isFunction]);
export const isDefinedNumber = allPass([isNotNil, isNumber]);
