export type PartialRecord<T, U> = { [P in keyof T]?: U };
export type Nullable<T> = T | null;
export type Maybe<T> = T | undefined;
