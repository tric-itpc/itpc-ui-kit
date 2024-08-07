import React, { HTMLAttributes } from "react";
import "./styles.css";
interface AccordionArrowProps extends HTMLAttributes<HTMLSpanElement> {
    isOpened: boolean;
}
export declare const AccordionArrow: React.FC<AccordionArrowProps>;
interface AccordionBodyProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    isOpened: boolean;
}
export declare const AccordionBody: React.FC<AccordionBodyProps>;
interface AccordionHeaderProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    id?: string;
    isActive?: boolean;
    isOpened: boolean;
    onPress?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
export declare const AccordionHeader: React.FC<AccordionHeaderProps>;
interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
export declare const AccordionItem: React.FC<AccordionItemProps>;
export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
}
export declare const Accordion: React.FC<AccordionProps>;
export {};
