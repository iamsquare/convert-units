import { UnitType } from '../definitions/type/units.type';
import { Maybe } from './utils.type';

export type ConvertToBestDto = { from: UnitType; exclude: Maybe<string[]>; cutOffNumber?: Maybe<number> };
