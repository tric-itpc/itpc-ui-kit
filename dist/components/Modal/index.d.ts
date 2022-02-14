import React from "react";
export interface ModalProps {
    title: string;
    isOpen: boolean;
    isOverlayClickable?: boolean;
    onClose(): void;
}
export declare const Modal: React.FC<ModalProps>;
export declare const ModalContent: React.FC;
export declare const ModalFooter: React.FC;
