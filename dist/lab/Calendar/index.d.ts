import React from "react";
import { IInfo } from "../../components";
import type { DurationAnimation } from "../../components/types";
import "./styles.css";
export interface Props {
    activeDates?: string[];
    currentValue?: string;
    disabledAfterDate?: string;
    disabledBeforeDate?: string;
    disabledDates?: string[];
    disabledDaysOfWeek?: number[];
    disabledSelectMonth?: boolean;
    disabledSelectYear?: boolean;
    durationAnimation: DurationAnimation;
    handleShow: () => void;
    id: string;
    name: string;
    offsetYear?: number;
    onChange?: (date: string, event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLTableCellElement>, info: IInfo) => void;
    parentRef?: React.RefObject<HTMLDivElement>;
    scrollToYear?: number;
    show: boolean;
    withTime?: boolean;
    yearsFromTo?: [number, number];
}
export declare const Calendar: React.FC<Props>;
