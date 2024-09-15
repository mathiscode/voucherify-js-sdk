export declare function encode(value?: string): string;
export declare function isNumber(value: any): value is number;
export declare function isString(value: any): value is string;
export declare function isOptionalString(value: any): value is string | undefined;
export declare function isObject<T extends Record<string, any> = Record<string, any>>(value: any): value is T;
export declare function isOptionalObject<T extends Record<string, any> = Record<string, any>>(value: any): value is T | null | undefined;
export declare function isFunction(value: any): value is Function;
export declare function exists<T extends any>(value: T): value is NonNullable<T>;
export declare function environment(): string;
export declare function assert(condition: any, message?: string): asserts condition;
/**
 * Return an object containing all properties of `obj` excluding the ones in `keys` array
 * e.g:
 * ```javascript
 * omit({ a: 1, b: 2, c: 3, d: 4 }, ['b', 'd']) // output: { a: 1, c: 3 }
 * ```
 */
export declare function omit<T extends {}, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
