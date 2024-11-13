import React, { HTMLAttributes } from "react";
import "./styles.css";
export interface AccordionArrowProps extends HTMLAttributes<HTMLSpanElement> {
    /** Флаг состояния открытия */
    isOpened?: boolean;
}
export declare const AccordionArrow: React.FC<AccordionArrowProps>;
export interface AccordionBodyProps extends HTMLAttributes<HTMLDivElement> {
    /** Контент */
    children?: React.ReactNode;
    /** Флаг состояния открытия */
    isOpened?: boolean;
}
export declare const AccordionBody: React.FC<AccordionBodyProps>;
export interface AccordionHeaderProps extends HTMLAttributes<HTMLDivElement> {
    /** Контент */
    children?: React.ReactNode;
    id?: string;
    /** Флаг состояния активности */
    isActive?: boolean;
    /** Флаг состояния открытия */
    isOpened?: boolean;
    /** Обработчик клика */
    onPress?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
export declare const AccordionHeader: React.FC<AccordionHeaderProps>;
export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
    /** Контент */
    children?: React.ReactNode;
}
export declare const AccordionItem: React.FC<AccordionItemProps>;
export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
    /** Контент */
    children?: React.ReactNode;
    /** Дополнительный класс */
    className?: string;
}
export declare const Accordion: React.FC<AccordionProps>;
