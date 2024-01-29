import React from "react";
import "./styles.css";
interface Props {
    changeCurrentDate(date: string): void;
    currentDate: string;
    disabledSelectMonth?: boolean;
    disabledSelectYear?: boolean;
    handleShowSelectMonth(): void;
    handleShowSelectYear(): void;
}
export declare const CalendarControl: React.FC<Props>;
export {};
