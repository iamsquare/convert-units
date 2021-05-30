import { UnitType } from '../definitions/type/units.type';
import { Maybe } from './';

export type ConvertToBestDto = { from: UnitType; exclude: Maybe<string[]>; cutOffNumber?: Maybe<number> };
