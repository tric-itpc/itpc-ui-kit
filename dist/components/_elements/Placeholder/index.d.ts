import React from "react";
import { ValidationState } from "../../types";
import "./styles.css";
interface Props {
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    focused?: boolean;
    htmlFor?: string;
    validationState?: ValidationState;
}
export declare const Placeholder: React.FC<Props>;
export {};
