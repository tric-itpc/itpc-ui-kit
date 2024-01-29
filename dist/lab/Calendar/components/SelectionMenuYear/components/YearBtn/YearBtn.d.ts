import React from "react";
interface IProps {
    changeCurrentDate(year: number): void;
    currentYear: string;
    scrollToYear?: number;
    year: string;
}
export declare const YearBtn: React.FC<IProps>;
export {};
