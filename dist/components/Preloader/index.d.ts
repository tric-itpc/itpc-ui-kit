import React, { HTMLAttributes } from "react";
import "./styles.css";
export interface PreloaderProps extends HTMLAttributes<HTMLSpanElement> {
    className?: string;
}
export declare const Preloader: React.FC<PreloaderProps>;
