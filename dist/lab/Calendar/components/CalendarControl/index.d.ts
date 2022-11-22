import React from "react";
import './styles.css';
interface Props {
    currentDate: string;
    handleShowSelectYear(): void;
    handleShowSelectMonth(): void;
    changeCurrentDate(date: string): void;
}
export declare const CalendarControl: React.FC<Props>;
export {};
