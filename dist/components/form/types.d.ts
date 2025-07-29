export interface ValidateError {
    message: string;
}
export interface Rule {
    message?: string;
    required?: boolean;
    validator?: (value: any) => boolean | null | ValidateError;
}
export interface Field {
    name: string;
    rules?: Rule[];
    value: any;
}
export interface FormInstance {
    getFieldError: (name: string) => ValidateError[];
    getFieldsError: () => Record<string, ValidateError[]>;
    getFieldsValue: () => Record<string, any>;
    getFieldValue: (name: string) => any;
    registerField: (field: Field) => void;
    setFieldsValue: (values: Record<string, any>) => void;
    setFieldValue: (name: string, value: any) => void;
    unregisterField: (name: string) => void;
    validateField: (name: string) => {
        errors: ValidateError[];
        isValid: boolean;
    };
    validateFields: () => boolean;
}
export type ComponentKey = "Checkbox" | "DatePicker" | "DecimalField" | "MultiSelectField" | "NumberField" | "SearchField" | "SelectField" | "TextAreaField" | "TextField";
export interface ComponentProps {
    getValueFromEvent: (v: any, e?: any) => any;
    valuePropName: string;
}
