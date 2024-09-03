import { AllowedClassListProps } from "../types";
import { LinkProps } from "./index";
export type ClassListProps = Pick<Omit<LinkProps, "type">, Exclude<AllowedClassListProps, "type">> & {
    disabled: boolean;
};
