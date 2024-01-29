import React from "react";
import { ValidationState } from "../../types";
import "./styles.css";
interface Props {
    errorMessage: string;
    show: boolean;
    validationType?: ValidationState;
}
export declare const InputError: React.FC<Props>;
export {};
