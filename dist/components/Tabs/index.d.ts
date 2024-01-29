import React, { HTMLAttributes } from "react";
import { TabsItem } from "../types";
import "./styles.css";
interface TabButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, "onClick" | "id"> {
    id: number;
    isActive: boolean;
    onClick(id: number): void;
    title: string;
}
export declare const TabButton: React.FC<TabButtonProps>;
export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
    changeActiveTab?: (id: string) => void;
    childProps?: {
        [key: string]: unknown;
    };
    className?: string;
    disabled?: boolean;
    items: TabsItem[];
}
export declare const Tabs: React.FC<TabsProps>;
export {};
