import { ReactNode } from "react";
interface Props {
    children: ReactNode;
    element?: HTMLElement;
}
export declare const Portal: ({ children, element }: Props) => import("react").ReactPortal;
export {};
