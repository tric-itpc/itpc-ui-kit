import { RefObject } from "react";
declare type Event = MouseEvent | TouchEvent;
export declare const useOnClickOutside: <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: Event) => void) => void;
export {};
