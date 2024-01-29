import React from "react";
import "./styles.css";
interface Props {
    hours: string;
    minutes: string;
    onChange(time: string, event?: React.SyntheticEvent<HTMLButtonElement> | React.SyntheticEvent<HTMLInputElement>): void;
    seconds: string;
}
export declare const CalendarTimes: React.FC<Props>;
export {};
