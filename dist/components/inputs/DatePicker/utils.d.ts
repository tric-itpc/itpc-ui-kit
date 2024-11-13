import type { CSSProperties } from "react";
export declare const parseNumericStringToISODate: (date: string) => string;
export declare const parseNumericStringToISODateTime: (date: string) => string;
export declare const parseISODate: (date: string) => string;
export declare const parseISODateTime: (datetime: string) => string;
export declare const parseISODateToNumericString: (date: string) => string;
export declare const parseISODateTimeToNumericString: (datetime: string) => string;
export declare const getCalendarStyle: (documentWidth: number, calendarWidth: number) => CSSProperties;
