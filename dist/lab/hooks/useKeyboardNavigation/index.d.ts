import React from "react";
import type { Item } from "../../../components";
export declare const useKeyboardNavigation: (items: Item[]) => {
    activeIndex: number;
    handleKeyUpAndDown: (event: React.KeyboardEvent<HTMLButtonElement | HTMLInputElement>) => void;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};
