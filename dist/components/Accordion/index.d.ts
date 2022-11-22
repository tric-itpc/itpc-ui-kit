import React from "react";
import './styles.css';
interface AccordionArrowProps {
    isOpened: boolean;
}
export declare const AccordionArrow: React.FC<AccordionArrowProps>;
interface AccordionBodyProps {
    isOpened: boolean;
    children?: React.ReactNode;
}
export declare const AccordionBody: React.FC<AccordionBodyProps>;
interface AccordionHeaderProps {
    id?: string;
    isOpened: boolean;
    isActive?: boolean;
    onPress?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    children?: React.ReactNode;
}
export declare const AccordionHeader: React.FC<AccordionHeaderProps>;
interface AccordionItemProps {
    children?: React.ReactNode;
}
export declare const AccordionItem: React.FC<AccordionItemProps>;
export interface AccordionProps {
    className?: string;
    children?: React.ReactNode;
}
export declare const Accordion: React.FC<AccordionProps>;
export {};
