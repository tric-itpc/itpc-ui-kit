import { Decimal } from "decimal.js-light";
export interface IDecimalFixed {
    accuracy?: null | number;
    empty: boolean;
    equals(value: Decimal): boolean;
    fraction?: null | string;
    generate(): string;
    greaterThan(value: Decimal): boolean;
    int: null | number;
    isEmpty(): boolean;
    isValid(): boolean;
    isZero(): boolean;
    lessThan(value: Decimal): boolean;
    minus(value: string): Decimal;
    plus(value: string): Decimal;
    toDecimal(): Decimal;
    toString(): string;
}
