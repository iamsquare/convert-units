export type Nullable<T> = T | null;
export type Maybe<T> = T | undefined;
export type CamelToPascalCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? '_' : ''}${Uppercase<T>}${CamelToPascalCase<U>}`
  : S;
export type PartialRecord<T extends keyof any, U> = { [P in T]?: U };
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];
