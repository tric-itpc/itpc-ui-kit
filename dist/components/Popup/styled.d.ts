import { PopupPosition, PopupSize } from "../types";
import { Colors } from "../constants";
interface Props {
    width: number;
    height: number;
    isOpen: boolean;
    position: PopupPosition;
    size: PopupSize;
    color: Colors;
}
interface PopupHeaderProps {
    size: PopupSize;
}
export declare const Popup: import("styled-components").StyledComponent<"div", any, Props, never>;
export declare const PopupHeader: import("styled-components").StyledComponent<"div", any, PopupHeaderProps, never>;
export {};
