import React, { HTMLAttributes } from "react";
import "./styles.css";
export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
    iconClose?: React.ReactNode;
    isOpen: boolean;
    isOverlayClickable?: boolean;
    onClose?: () => void;
    title: string;
}
export declare const Modal: React.FC<ModalProps>;
interface ModalContentProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
}
export declare const ModalContent: React.FC<ModalContentProps>;
interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
}
export declare const ModalFooter: React.FC<ModalFooterProps>;
export {};
