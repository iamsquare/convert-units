export class InstanceError extends Error {
  constructor() {
    super(`'converter' has not been provided. Please, pass a Converter instance before invoking this function`);
  }
}

export enum IncompatibleUnitDirectionEnum {
  FROM = 'from',
  TO = 'to'
}

export class IncompatibleUnitError<TUnitType extends string> extends Error {
  constructor(unit: TUnitType, direction: IncompatibleUnitDirectionEnum) {
    super(`Incompatible unit '${unit}' for *${direction}* parameter`);
  }
}
