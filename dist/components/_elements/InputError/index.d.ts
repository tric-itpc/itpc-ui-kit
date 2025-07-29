import React from "react";
import { ErrorPlacement } from "../../../enums";
import { ValidationState } from "../../types";
import "./styles.css";
interface Props {
    errorMessage: string;
    errorPlacement?: ErrorPlacement;
    show: boolean;
    validationType?: ValidationState;
}
export declare const InputError: React.FC<Props>;
export {};
