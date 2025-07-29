import React from "react";
import { HORIZONTAL_POSITION, type PositionType } from "../../../lab/CalculateStyle/types";
import "./styles.css";
interface PositionedWrapProps {
    children: React.ReactNode;
    distanceBetweenElements?: number;
    horizontalAlignment?: HORIZONTAL_POSITION;
    isClosing: boolean;
    isOpen: boolean;
    position?: PositionType;
    refParent?: React.RefObject<HTMLDivElement>;
}
export declare const PositionedWrap: React.FC<PositionedWrapProps>;
export {};
