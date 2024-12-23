/**
 * Хук, который позволяет отменять предыдущий вызов функции пока не истечет delay
 * @param callback
 * @param delay - задержка в мс
 */
export declare const useDebounce: (callback: (...args: any[]) => Promise<void>, delay: number) => (...args: any[]) => void;
