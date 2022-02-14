import React from "react";
export interface Props {
    currentValue?: string;
    offsetYear?: number;
    show: boolean;
    handleShow: () => void;
    onChangeDate?: (date: string) => void;
}
export declare const Calendar: React.FC<Props>;
