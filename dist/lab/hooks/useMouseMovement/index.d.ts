import { type RefObject } from "react";
export declare const useMouseMovement: <T extends HTMLElement = HTMLElement>(ref?: RefObject<T> | undefined) => {
    isMouseMoved: boolean;
    setIsMouseMoved: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
