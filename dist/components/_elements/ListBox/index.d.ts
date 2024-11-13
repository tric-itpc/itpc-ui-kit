import React from "react";
import { type DurationAnimation } from "../../types";
import "./styles.css";
interface Props {
    children?: React.ReactNode;
    durationAnimation: DurationAnimation;
    isOpen: boolean;
    refChildren?: React.RefObject<HTMLUListElement>;
    refParent?: React.RefObject<HTMLDivElement>;
}
export declare const ListBox: React.FC<Props>;
export {};
