import { RefObject } from "react";
type Event = MouseEvent | TouchEvent;
export declare const useOnClickOutside: <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: Event) => void, show?: boolean, handlerRef?: RefObject<T> | undefined) => void;
export {};
