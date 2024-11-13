import React, { HTMLAttributes } from "react";
import "./styles.css";
export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    /** Контент */
    children?: React.ReactNode;
    /** Дополнительный класс */
    className?: string;
    /** Иконка закрытия */
    iconClose?: React.ReactNode;
    /** Открыто ли модальное окно */
    isOpen: boolean;
    /** Закрытие по оверлею */
    isOverlayClickable?: boolean;
    /** Обработчик закрытия */
    onClose?: () => void;
    /** Заголовок */
    title: string;
}
export declare const Modal: React.FC<ModalProps>;
interface ModalContentProps extends HTMLAttributes<HTMLDivElement> {
    /** Дополнительный класс */
    children?: React.ReactNode;
    /** Дополнительный класс */
    className?: string;
}
export declare const ModalContent: React.FC<ModalContentProps>;
interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
    /** Дополнительный класс */
    children?: React.ReactNode;
    /** Дополнительный класс */
    className?: string;
}
export declare const ModalFooter: React.FC<ModalFooterProps>;
export {};
