import React, { HTMLAttributes } from "react";
import "./styles.css";
interface AccordionArrowProps extends HTMLAttributes<HTMLSpanElement> {
    isOpened: boolean;
}
export declare const AccordionArrow: React.FC<AccordionArrowProps>;
interface AccordionBodyProps extends HTMLAttributes<HTMLDivElement> {
    isOpened: boolean;
    children?: React.ReactNode;
}
export declare const AccordionBody: React.FC<AccordionBodyProps>;
interface AccordionHeaderProps extends HTMLAttributes<HTMLDivElement> {
    id?: string;
    isOpened: boolean;
    isActive?: boolean;
    onPress?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    children?: React.ReactNode;
}
export declare const AccordionHeader: React.FC<AccordionHeaderProps>;
interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
export declare const AccordionItem: React.FC<AccordionItemProps>;
export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
}
export declare const Accordion: React.FC<AccordionProps>;
export {};
