export type ConvertToBestDto<TUnitType extends string> = {
  exclude: TUnitType[];
  cutoff: number;
};
