import { UIKitColors } from "../../../enums";
import { PopupPosition, PopupVariant } from "../../types";
export declare const getColor: (variant: PopupVariant) => UIKitColors;
export declare const getPosition: (position: PopupPosition, width: number, height: number) => {
    bottom?: string;
    left?: string;
    right?: string;
    top?: string;
};
