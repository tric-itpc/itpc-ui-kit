import React from "react";
interface IProps {
    currentYear: string;
    year: string;
    scrollToYear?: number;
    changeCurrentDate(year: number): void;
}
export declare const YearBtn: React.FC<IProps>;
export {};
