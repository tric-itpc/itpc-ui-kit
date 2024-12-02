import React from "react";
import { ClassListProps } from "./types";
export declare const getTag: (level: number) => keyof Pick<React.JSX.IntrinsicElements, "h1" | "h2" | "h3" | "h4" | "h5" | "h6">;
export declare const generateClassList: (props: ClassListProps) => string;
