import React from "react"

import { Arrow, Button, ButtonGroup } from "../../_elements"
import { getMonthToString, getYearToString } from "../../utils"

import * as Styled from './styled'

interface Props {
  currentDate: string
  handleShowSelectYear(): void
  handleShowSelectMonth(): void
  changeCurrentDate(date: string): void
}

export const CalendarControl: React.FC<Props> = ({
  currentDate,
  changeCurrentDate,
  handleShowSelectYear,
  handleShowSelectMonth
}) => {
  const decreaseCurrentDateMonth = (): void => {
    const date = new Date(currentDate)
    date.setMonth(date.getMonth() - 1)
    changeCurrentDate(`${date.getFullYear()}-${date.getMonth() + 1}`)
  }

  const increaseCurrentDateMonth = (): void => {
    const date = new Date(currentDate)
    date.setMonth(date.getMonth() + 1)
    changeCurrentDate(`${date.getFullYear()}-${date.getMonth() + 1}`)
  }

  const decreaseCurrentDateYear = (): void => {
    const date = new Date(currentDate)
    date.setFullYear(date.getFullYear() - 1)
    changeCurrentDate(`${date.getFullYear()}-${date.getMonth() + 1}`)
  }

  const increaseCurrentDateYear = (): void => {
    const date = new Date(currentDate)
    date.setFullYear(date.getFullYear() + 1)
    changeCurrentDate(`${date.getFullYear()}-${date.getMonth() + 1}`)
  }

  return (
    <Styled.CalendarControl>
      <Button type="button" onClick={decreaseCurrentDateYear}>
        <Arrow isBold orientation="left" />
      </Button>
      <Button type="button" onClick={decreaseCurrentDateMonth}>
        <Arrow orientation="left" />
      </Button>

      <ButtonGroup>
        <Button type="button" onClick={handleShowSelectMonth}>{getMonthToString(currentDate)}</Button>
        <Button type="button" onClick={handleShowSelectYear}>{getYearToString(currentDate)}</Button>
      </ButtonGroup>

      <Button type="button" onClick={increaseCurrentDateMonth}>
        <Arrow orientation="right" />
      </Button>
      <Button type="button" onClick={increaseCurrentDateYear}>
        <Arrow isBold orientation="right" />
      </Button>
    </Styled.CalendarControl>
  )
}
