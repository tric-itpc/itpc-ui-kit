import React from "react";
interface Props {
    controlHeight: number;
    currentDate: string;
    offsetYear: number;
    changeCurrentDate(date: string): void;
}
export declare const SelectionMenuYear: React.FC<Props>;
export {};
