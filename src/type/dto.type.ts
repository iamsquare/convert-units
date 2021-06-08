import { UnitType } from '../definitions/type';

export type ConvertToBestDto = {
  exclude: UnitType[];
  cutoff: number;
};
