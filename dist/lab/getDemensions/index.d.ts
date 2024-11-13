import type { DocumentDimensions, ElementDimensions, ParentDimensions } from "../CalculateStyle/types";
export declare const getDocumentDimensions: () => DocumentDimensions;
export declare const getParentDimensions: (ref: HTMLDivElement) => ParentDimensions;
export declare const getElementDimensions: (ref: HTMLDivElement | HTMLUListElement) => ElementDimensions;
