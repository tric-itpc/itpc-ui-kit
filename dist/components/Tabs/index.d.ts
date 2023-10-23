import React, { HTMLAttributes } from "react";
import { TabsItem } from "../types";
import "./styles.css";
interface TabButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, "id" | "onClick"> {
    id: number;
    title: string;
    isActive: boolean;
    onClick(id: number): void;
}
export declare const TabButton: React.FC<TabButtonProps>;
export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
    items: TabsItem[];
    disabled?: boolean;
    changeActiveTab?: (id: string) => void;
    className?: string;
    childProps: {
        [key: string]: unknown;
    };
}
export declare const Tabs: React.FC<TabsProps>;
export {};
