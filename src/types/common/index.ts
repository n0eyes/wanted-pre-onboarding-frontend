export type UnPacked<T> = T extends (infer U)[] ? U : T;

export type ModifyToString<T> = Omit<T, keyof T> & { [K in keyof T]: string };
