import { PopupPosition, PopupVariant } from "../types";
import { UIKitColors } from "../constants";
export declare const getColor: (variant: PopupVariant) => UIKitColors;
export declare const getPosition: (position: PopupPosition, width: number, height: number) => {
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
};
