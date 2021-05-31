export type Nullable<T> = T | null;
export type Maybe<T> = T | undefined;
export type CamelToPascalCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? '_' : ''}${Uppercase<T>}${CamelToPascalCase<U>}`
  : S;
