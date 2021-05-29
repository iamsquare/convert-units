export type PartialRecord<T, U> = { [P in keyof T]?: U };
