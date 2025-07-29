import { Rule } from "../types";
interface UseFieldRulesProps {
    required?: boolean;
    rules?: Rule[];
}
export declare const useFieldRules: ({ required, rules, }: UseFieldRulesProps) => Rule[];
export {};
