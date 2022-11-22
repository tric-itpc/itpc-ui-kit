import React from "react";
import { TabsItem } from "../types";
import './styles.css';
interface TabButtonProps {
    id: number;
    title: string;
    isActive: boolean;
    onClick(id: number): void;
}
export declare const TabButton: React.FC<TabButtonProps>;
export interface TabsProps {
    items: TabsItem[];
    disabled?: boolean;
    changeActiveTab?: (id: string) => void;
    className?: string;
    [key: string]: unknown;
}
export declare const Tabs: React.FC<TabsProps>;
export {};
