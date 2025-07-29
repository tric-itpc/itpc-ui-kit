import React from "react";
import { ValidationState } from "../../types";
import "./styles.css";
interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    focused?: boolean;
    htmlFor?: string;
    required?: boolean;
    validationState?: ValidationState;
}
export declare const Placeholder: React.FC<Props>;
export {};
