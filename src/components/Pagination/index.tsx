import React, { FC, useEffect, useState } from "react"
import cn from 'classnames'

import { PaginationResult } from "../types"

import './styles.css'
import { IconArrow, IconDoubleArrow } from "../_elements"

export interface Props {
  step?: number,
  dataLength: number
  className?: string
  callback: (pagination: PaginationResult) => void
}

export const Pagination: FC<Props> = ({
  step = 10,
  dataLength,
  className = '',
  callback
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
      start: startPagination - step,
      end: endPagination - step
    })
  }

  /** На следующую страницу */
  const next = (): void => {
    setStartPagination(startPagination + step)
    setEndPagination(endPagination + step)
    callback({
      currentPage: (endPagination + step) / step,
      start: startPagination + step,
      end: endPagination + step
    })
  }

  /** В начало */
  const start = (): void => {
    setStartPagination(0)
    setEndPagination(step)
    callback({
      currentPage: 1,
      start: 0,
      end: step
    })
  }

  /** В конец */
  const end = (): void => {
    setStartPagination((pages[pages.length - 1] * step) - step)
    setEndPagination(pages[pages.length - 1] * step)
    callback({
      currentPage: pages[pages.length - 1],
      start: (pages[pages.length - 1] * step) - step,
      end: pages[pages.length - 1] * step
    })
  }

  /** На текущую страницу */
  const openPage = (page?: number): void => {
    if (page) {
      setStartPagination((step * page) - step)
      setEndPagination(step * page)
      callback({
        currentPage: page,
        start: (step * page) - step,
        end: step * page
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
  }, [dataLength])

  return (
    <div className={cn("itpc-pagination", className)}>
      <button
        type="button"
        className="itpc-pagination__btn itpc-pagination__btn_left"
        disabled={!startPagination || !dataLength}
        onClick={start}
      >
        <IconDoubleArrow orientation="left" />
      </button>
      <button
        type="button"
        className="itpc-pagination__btn itpc-pagination__btn_left"
        disabled={!startPagination || !dataLength}
        onClick={prev}
      >
        <IconArrow orientation="left" />
      </button>
      <div className="itpc-pagination__pages">
        {pages.slice(startSlicePagesCount(), endSlicePagesCount()).map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => openPage(page)}
            className={cn(
              'itpc-pagination__btn',
              'itpc-pagination__btn_page',
              currentPage === page && 'itpc-pagination__btn_page_active'
            )}
          >
            {page}
          </button>
        ))}
        {currentPage < pages.length - 3 && pages.length > 4 && <p className="itpc-pagination__text">...</p>}
        {currentPage < pages.length && pages.length > 5 && (
          <button
            type="button"
            onClick={() => openPage(pages[pages.length - 1])}
            className={cn(
              'itpc-pagination__btn',
              'itpc-pagination__btn_page',
              currentPage === pages[pages.length - 1] && 'itpc-pagination__btn_page_active'
            )}
          >
            {pages[pages.length - 1]}
          </button>
        )
        }
      </div>
      <button
        type="button"
        className="itpc-pagination__btn itpc-pagination__btn_right"
        disabled={currentPage === pages[pages.length - 1] || !dataLength}
        onClick={next}
      >
        <IconArrow orientation="right" />
      </button>
      <button
        type="button"
        className="itpc-pagination__btn itpc-pagination__btn_right"
        disabled={currentPage === pages[pages.length - 1] || !dataLength}
        onClick={end}
      >
        <IconDoubleArrow orientation="right" />
      </button>
    </div>
  )
}
