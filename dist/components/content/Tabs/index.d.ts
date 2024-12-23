import React, { HTMLAttributes } from "react";
import { TabsItem } from "../../types";
import "./styles.css";
interface TabButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, "id" | "onClick"> {
    disabled?: boolean;
    id: number;
    isActive: boolean;
    onClick(id: number): void;
    title: string;
}
export declare const TabButton: React.FC<TabButtonProps>;
export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
    /** Изменение активного таба */
    changeActiveTab?: (id: string) => void;
    /** Дополнительные свойства */
    childProps?: {
        [key: string]: unknown;
    };
    /** Дополнительный класс */
    className?: string;
    /** Отключение табов */
    disabled?: boolean;
    /** Список табов */
    items: TabsItem[];
}
export declare const Tabs: React.FC<TabsProps>;
export {};
