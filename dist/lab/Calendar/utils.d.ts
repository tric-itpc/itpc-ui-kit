import { Day } from './types';
export declare function dateToString(date: string): string;
export declare function getMonthToString(date: string): string;
export declare function getYearToString(date: string): string;
export declare function getMonthYearToString(date: string): string;
export declare function getTodayMonthYear(): string;
export declare function getAllYears(offset: number): string[];
export declare function getCalendarDays(date: string): Day[];
export declare function initCurrentDate(currentValue: string, withTime: boolean): string;
export declare function initDays(currentValue: string, withTime: boolean): Day[];
export declare function initCurrentTime(currentValue: string, withTime: boolean): string[];
export declare function isDisabledDate(date: string, activeDates?: string[], disabledDates?: string[], disabledAfterDate?: string, disabledBeforeDate?: string): boolean;