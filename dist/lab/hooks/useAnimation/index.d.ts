import type { DurationAnimation } from "../../../components/types";
export declare const useAnimation: (isOpen: boolean, durationAnimation: DurationAnimation) => {
    close: () => void;
    isClosing: boolean;
};
