import React from "react";
import { type PositionType } from "../../../lab/CalculateStyle/types";
import "./styles.css";
interface PositionedWrapProps {
    children: React.ReactNode;
    distanceBetweenElements?: number;
    isClosing: boolean;
    isOpen: boolean;
    position?: PositionType;
    refParent?: React.RefObject<HTMLDivElement>;
}
export declare const PositionedWrap: React.FC<PositionedWrapProps>;
export {};
