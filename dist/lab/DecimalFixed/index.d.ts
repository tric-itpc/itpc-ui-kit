import { Decimal } from "decimal.js-light";
import { IDecimalFixed } from "./types";
export declare class DecimalFixed implements IDecimalFixed {
    constructor(value: string, accuracy?: null | number, empty?: boolean);
    accuracy?: null | number;
    empty: boolean;
    fraction?: null | string;
    int: null | number;
    equals(value: Decimal): boolean;
    generate(): string;
    greaterThan(value: Decimal): boolean;
    isEmpty(): boolean;
    isValid(): boolean;
    isZero(): boolean;
    lessThan(value: Decimal): boolean;
    minus(value: string): Decimal;
    plus(value: string): Decimal;
    toDecimal(): Decimal;
    toString(): string;
}
