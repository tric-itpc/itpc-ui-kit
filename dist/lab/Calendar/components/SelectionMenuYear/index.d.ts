import React from "react";
interface Props {
    changeCurrentDate(date: string): void;
    currentDate: string;
    offsetYear: number;
    scrollToYear?: number;
    yearsFromTo?: [number, number];
}
export declare const SelectionMenuYear: React.FC<Props>;
export {};
