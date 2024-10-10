export declare enum HORIZONTAL_POSITION_CALENDAR {
    CALCULATED = "calculated",
    CENTER = "center",
    LEFT = "left",
    RIGHT = "right"
}
export declare enum VERTICAL_POSITION_CALENDAR {
    BOTTOM = "bottom",
    TOP = "top"
}
export interface InputDimensions {
    inputBottom: number;
    inputLeft: number;
    inputTop: number;
    inputWidth: number;
}
export interface CalendarDimensions {
    calendarHeight: number;
    calendarWidth: number;
}
export interface DocumentDimensions {
    documentHeight: number;
    documentWidth: number;
}
export interface GetHorizontalPositionProps {
    calendarWidth: number;
    distanceRight: number;
    documentWidth: number;
    inputLeft: number;
    inputWidth: number;
    scrollbarWidth: number;
}
