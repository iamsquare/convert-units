import { UnitType } from '../definitions';

export type ConvertToBestDto = {
  exclude: UnitType[];
  cutoff: number;
};
