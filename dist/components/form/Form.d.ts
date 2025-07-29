import React from "react";
import { FormInstance, ValidateError } from "./types";
interface Props {
    /** Дочерние элементы формы */
    children: React.ReactNode;
    /** Дополнительный класс */
    className?: string;
    /** Инстанс формы, управляемый через хук useForm */
    form?: FormInstance;
    /** Дефолтное значение формы */
    initialValues?: Record<string, any>;
    /** Метод не успешной отправки формы */
    onFailure?: (values: Record<string, ValidateError[]>) => void;
    /** Метод успешной отправки формы */
    onFinish?: (values: Record<string, any>) => void;
}
export declare const Form: React.FC<Props>;
export {};
