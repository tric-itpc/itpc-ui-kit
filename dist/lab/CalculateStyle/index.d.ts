import React, { CSSProperties, RefObject } from "react";
import { type GetHorizontalPositionArg, HORIZONTAL_POSITION, type PositionType, VERTICAL_POSITION } from "./types";
export declare const getHorizontalPosition: (arg: GetHorizontalPositionArg) => HORIZONTAL_POSITION;
export declare const getVerticalPosition: (refParent: RefObject<HTMLDivElement>, ref: RefObject<HTMLDivElement | HTMLUListElement>, distanceBetweenElements?: number) => VERTICAL_POSITION;
export declare const getCalculatePosition: (refParent: React.RefObject<HTMLDivElement>, refChildren: React.RefObject<HTMLDivElement | HTMLUListElement>, position: PositionType, distanceBetweenElements?: number, horizontalAlignment?: HORIZONTAL_POSITION) => CSSProperties;
