import { RefObject } from "react";
/**
 * Хук, который позволяет получить индекс элемента над которым находится курсор
 * @param ref - ссылка на контейнер
 * @param items - массив элементов
 */
export declare const useHoveredIndex: <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, items: any[]) => number;
