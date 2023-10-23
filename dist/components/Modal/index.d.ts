import React, { HTMLAttributes } from "react";
import "./styles.css";
export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    isOpen: boolean;
    isOverlayClickable?: boolean;
    className?: string;
    onClose?: () => void;
    iconClose?: React.ReactNode;
    children?: React.ReactNode;
}
export declare const Modal: React.FC<ModalProps>;
interface ModalContentProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
}
export declare const ModalContent: React.FC<ModalContentProps>;
interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
}
export declare const ModalFooter: React.FC<ModalFooterProps>;
export {};
