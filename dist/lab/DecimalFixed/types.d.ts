import { Decimal } from "decimal.js-light";
export interface IDecimalFixed {
    accuracy?: number | null;
    empty: boolean;
    equals(value: Decimal): boolean;
    fraction?: string | null;
    generate(): string;
    greaterThan(value: Decimal): boolean;
    int: number | null;
    isEmpty(): boolean;
    isValid(): boolean;
    isZero(): boolean;
    lessThan(value: Decimal): boolean;
    minus(value: string): Decimal;
    plus(value: string): Decimal;
    toDecimal(): Decimal;
    toString(): string;
}
