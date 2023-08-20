import React from "react";
interface Props {
    currentDate: string;
    offsetYear: number;
    scrollToYear?: number;
    yearsFromTo?: [number, number];
    changeCurrentDate(date: string): void;
}
export declare const SelectionMenuYear: React.FC<Props>;
export {};
