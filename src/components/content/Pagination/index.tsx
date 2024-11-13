import React, { FC, HTMLAttributes, useEffect, useState } from "react"

import cn from "classnames"

import { IconArrow, IconDoubleArrow } from "../../_elements"
import { PaginationResult } from "../../types"

import "./styles.css"

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** Результат пагинации */
  callback: (pagination: PaginationResult) => void
  /** Дополнительный класс */
  className?: string
  /** Длина массива, данные которого необходимо разделить */
  dataLength: number
  /** Количество элементов на странице */
  step?: number
}

export const Pagination: FC<Props> = ({
  callback,
  className = "",
  dataLength,
  step = 10,
  ...rest
}) => {
  const [startPagination, setStartPagination] = useState<number>(0)
  const [endPagination, setEndPagination] = useState<number>(step)
  const [pages, setPages] = useState<number[]>([])
  const currentPage = endPagination / step

  /** На предыдущую страницу */
  const prev = (): void => {
    setStartPagination(startPagination - step)
    setEndPagination(endPagination - step)
    callback({
      currentPage: (endPagination - step) / step,
      end: endPagination - step,
      start: startPagination - step,
    })
  }

  /** На следующую страницу */
  const next = (): void => {
    setStartPagination(startPagination + step)
    setEndPagination(endPagination + step)
    callback({
      currentPage: (endPagination + step) / step,
      end: endPagination + step,
      start: startPagination + step,
    })
  }

  /** В начало */
  const start = (): void => {
    setStartPagination(0)
    setEndPagination(step)
    callback({
      currentPage: 1,
      end: step,
      start: 0,
    })
  }

  /** В конец */
  const end = (): void => {
    setStartPagination(pages[pages.length - 1] * step - step)
    setEndPagination(pages[pages.length - 1] * step)
    callback({
      currentPage: pages[pages.length - 1],
      end: pages[pages.length - 1] * step,
      start: pages[pages.length - 1] * step - step,
    })
  }

  /** На текущую страницу */
  const openPage = (page?: number): void => {
    if (page) {
      setStartPagination(step * page - step)
      setEndPagination(step * page)
      callback({
        currentPage: page,
        end: step * page,
        start: step * page - step,
      })
    }
  }

  /** С какого индекса начинать обрезать кнопки со страницами */
  const startSlicePagesCount = (): number => {
    if (pages.length <= 5) {
      return 0
    }

    if (currentPage === 1) {
      return 0
    }

    if (currentPage >= pages.length - 3) {
      return pages.length - 5
    }

    return currentPage - 2
  }

  /** Каким индексом заканчивать обрезать кнопки со страницами */
  const endSlicePagesCount = (): number => {
    if (pages.length <= 5) {
      return pages.length
    }

    if (currentPage === 1) {
      return currentPage + 2
    }

    if (currentPage === pages.length) {
      return pages.length
    }

    if (currentPage >= pages.length - 3) {
      return pages.length - 1
    }

    return currentPage + 1
  }

  useEffect(() => {
    const countPages: number[] = []

    for (let i = 1; i <= Math.ceil(dataLength / step); i++) {
      countPages.push(i)
    }

    setPages(countPages)
  }, [dataLength, step])

  return (
    <div className={cn("itpc-pagination", className)} {...rest}>
      <button
        className="itpc-pagination__btn itpc-pagination__btn_left"
        disabled={!startPagination || !dataLength}
        onClick={start}
        type="button"
      >
        <IconDoubleArrow orientation="left" />
      </button>

      <button
        className="itpc-pagination__btn itpc-pagination__btn_left"
        disabled={!startPagination || !dataLength}
        onClick={prev}
        type="button"
      >
        <IconArrow orientation="left" />
      </button>

      <div className="itpc-pagination__pages">
        {pages
          .slice(startSlicePagesCount(), endSlicePagesCount())
          .map((page) => (
            <button
              className={cn(
                "itpc-pagination__btn",
                "itpc-pagination__btn_page",
                currentPage === page && "itpc-pagination__btn_page_active"
              )}
              key={page}
              onClick={() => openPage(page)}
              type="button"
            >
              {page}
            </button>
          ))}

        {currentPage < pages.length - 3 && pages.length > 5 && (
          <p className="itpc-pagination__text">...</p>
        )}

        {currentPage < pages.length && pages.length > 5 && (
          <button
            className={cn(
              "itpc-pagination__btn",
              "itpc-pagination__btn_page",
              currentPage === pages[pages.length - 1] &&
                "itpc-pagination__btn_page_active"
            )}
            onClick={() => openPage(pages[pages.length - 1])}
            type="button"
          >
            {pages[pages.length - 1]}
          </button>
        )}
      </div>

      <button
        className="itpc-pagination__btn itpc-pagination__btn_right"
        disabled={currentPage === pages[pages.length - 1] || !dataLength}
        onClick={next}
        type="button"
      >
        <IconArrow orientation="right" />
      </button>

      <button
        className="itpc-pagination__btn itpc-pagination__btn_right"
        disabled={currentPage === pages[pages.length - 1] || !dataLength}
        onClick={end}
        type="button"
      >
        <IconDoubleArrow orientation="right" />
      </button>
    </div>
  )
}
