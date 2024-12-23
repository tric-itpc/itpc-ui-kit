import React, { HTMLAttributes } from "react";
import "./styles.css";
export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
    /** Контент */
    children?: React.ReactNode;
    /** Дополнительный класс */
    className?: string;
    /** Дополнительные стили */
    style?: React.CSSProperties;
}
export declare const Layout: React.FC<LayoutProps>;
