import { Day } from "./types";
export declare const getMonth: (month: number) => string;
export declare const dateToString: (date: string) => string;
export declare const getMonthToString: (date: string) => string;
export declare const getYearToString: (date: string) => string;
export declare const getMonthYearToString: (date: string) => string;
export declare const getTodayMonthYear: () => string;
export declare const getAllYears: (offset: number) => string[];
export declare const getYearsFromTo: (from: number, to: number) => string[];
export declare const getCalendarDays: (date: string) => Day[];
export declare const initCurrentDate: (currentValue: string, withTime: boolean) => string;
export declare const initDays: (currentValue: string, withTime: boolean) => Day[];
export declare const initCurrentTime: (currentValue: string, withTime: boolean) => string[];
export declare const isDisabledDate: (date: string, activeDates?: string[], disabledDates?: string[], disabledAfterDate?: string, disabledBeforeDate?: string, disabledDaysOfWeek?: number[]) => boolean;
