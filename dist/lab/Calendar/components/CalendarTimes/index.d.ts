import React from "react";
import './styles.css';
interface Props {
    hours: string;
    minutes: string;
    seconds: string;
    onChange(time: string): void;
}
export declare const CalendarTimes: React.FC<Props>;
export {};
