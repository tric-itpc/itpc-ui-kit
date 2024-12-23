import type { Item } from "../../../components";
export declare const useKeyboardNavigation: (items: Item[]) => {
    activeIndex: number;
    handleKeyUpAndDown: (event: React.KeyboardEvent<HTMLButtonElement | HTMLInputElement>) => void;
    setActiveIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
};
