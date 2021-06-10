import { allPass } from 'ramda';
import { isFunction, isNotNil } from 'ramda-adjunct';

export const isDefinedFunction = allPass([isNotNil, isFunction]);
