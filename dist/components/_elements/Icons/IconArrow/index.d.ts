import React from "react";
import { Orientation } from "../../../types";
import "./styles.css";
interface Props {
    disabled?: boolean;
    onClick?: () => void;
    orientation: Orientation;
    className?: string;
}
export declare const IconArrow: React.FC<Props>;
export {};
