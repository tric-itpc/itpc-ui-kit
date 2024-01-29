import { Decimal } from "decimal.js-light";
import { IDecimalFixed } from "./types";
export declare class DecimalFixed implements IDecimalFixed {
    constructor(value: string, accuracy?: number | null, empty?: boolean);
    accuracy?: number | null;
    empty: boolean;
    fraction?: string | null;
    int: number | null;
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
export { IDecimalFixed };
