import React from "react";
import { TextTag } from "../../../../enums";
import { ClassListProps } from "./types";
export declare const getTag: (tag: TextTag) => keyof Pick<React.JSX.IntrinsicElements, TextTag>;
export declare const generateClassList: (props: ClassListProps) => string;
