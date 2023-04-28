import React from "react";
import './styles.css';
interface Props {
    currentDate: string;
    disabledSelectMonth?: boolean;
    disabledSelectYear?: boolean;
    handleShowSelectYear(): void;
    handleShowSelectMonth(): void;
    changeCurrentDate(date: string): void;
}
export declare const CalendarControl: React.FC<Props>;
export {};
