import { Decimal } from "decimal.js-light"

import { IDecimalFixed } from "./types"

export class DecimalFixed implements IDecimalFixed {
  constructor(value: string, accuracy: null | number = null, empty = false) {
    const [int, fraction] = value.split(".")

    this.int = empty ? (int.length ? Number(int) : null) : Number(int)
    this.accuracy = accuracy === null || accuracy < 0 ? null : accuracy
    this.fraction = fraction ?? null

    this.empty = empty

    if (this.accuracy && this.fraction) {
      this.fraction =
        this.accuracy > 0 ? this.fraction.substring(0, this.accuracy) : null
    }
  }

  accuracy?: null | number
  empty: boolean
  fraction?: null | string
  int: null | number

  equals(value: Decimal): boolean {
    return new Decimal(this.generate()).equals(value)
  }

  generate(): string {
    return this.fraction === null
      ? this.empty && this.int === null
        ? ""
        : String(this.int)
      : `${this.int}.${this.fraction}`
  }

  greaterThan(value: Decimal): boolean {
    return new Decimal(this.generate()).greaterThan(value)
  }

  isEmpty(): boolean {
    return this.toString().length === 0
  }

  isValid(): boolean {
    if (Number.isNaN(this.int)) {
      return false
    }

    return !(this.fraction !== null && Number.isNaN(Number(this.fraction)))
  }

  isZero(): boolean {
    return new Decimal(this.generate()).isZero()
  }

  lessThan(value: Decimal): boolean {
    return new Decimal(this.generate()).lessThan(value)
  }

  minus(value: string): Decimal {
    return new Decimal(this.generate()).minus(value)
  }

  plus(value: string): Decimal {
    return new Decimal(this.generate()).plus(value)
  }

  toDecimal(): Decimal {
    return new Decimal(this.generate())
  }

  toString(): string {
    return this.generate()
  }
}
