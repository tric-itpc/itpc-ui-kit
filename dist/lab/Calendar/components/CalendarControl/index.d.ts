import React from "react";
interface Props {
    currentDate: string;
    handleShowSelectYear(): void;
    handleShowSelectMonth(): void;
    changeCurrentDate(date: string): void;
}
export declare const CalendarControl: React.FC<Props>;
export {};
