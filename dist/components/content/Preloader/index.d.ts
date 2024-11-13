import React, { HTMLAttributes } from "react";
import "./styles.css";
export interface PreloaderProps extends HTMLAttributes<HTMLSpanElement> {
    /** Дополнительный класс */
    className?: string;
}
export declare const Preloader: React.FC<PreloaderProps>;
