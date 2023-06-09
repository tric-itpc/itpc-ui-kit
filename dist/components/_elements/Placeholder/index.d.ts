import React from "react";
import { ValidationState } from "../../types";
import "./styles.css";
interface Props {
    htmlFor?: string;
    focused?: boolean;
    validationState?: ValidationState;
    children?: React.ReactNode;
}
export declare const Placeholder: React.FC<Props>;
export {};
