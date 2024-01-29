import React from "react"

import { NumberFormatValues, PatternFormat, SourceInfo } from "itpc-input-mask"

import "./styles.css"

interface Props {
  hours: string
  minutes: string
  onChange(
    time: string,
    event?:
      | React.SyntheticEvent<HTMLButtonElement>
      | React.SyntheticEvent<HTMLInputElement>
  ): void
  seconds: string
}

export const CalendarTimes: React.FC<Props> = ({
  hours,
  minutes,
  onChange,
  seconds,
}: Props) => {
  const changeHours = (
    values: NumberFormatValues,
    sourceInfo: SourceInfo
  ): void => {
    if (parseInt(values.value, 10) > 23) {
      onChange(`23:${minutes}:${seconds}`, sourceInfo.event)

      return
    }

    onChange(
      `${values.value.length ? values.value : "00"}:${minutes}:${seconds}`,
      sourceInfo.event
    )
  }

  const changeMinutes = (
    values: NumberFormatValues,
    sourceInfo: SourceInfo
  ): void => {
    if (parseInt(values.value, 10) > 59) {
      onChange(`${hours}:59:${seconds}`, sourceInfo.event)

      return
    }

    onChange(
      `${hours}:${values.value.length ? values.value : "00"}:${seconds}`,
      sourceInfo.event
    )
  }

  const changeSeconds = (
    values: NumberFormatValues,
    sourceInfo: SourceInfo
  ): void => {
    if (parseInt(values.value, 10) > 59) {
      onChange(`${hours}:${minutes}:59`, sourceInfo.event)

      return
    }

    if (values.value.length) {
      if (values.value.length < 2) {
        onChange(`${hours}:${minutes}:${`${values.value}0`}`, sourceInfo.event)
        return
      }

      onChange(`${hours}:${minutes}:${values.value}`, sourceInfo.event)
      return
    }

    onChange(`${hours}:${minutes}:00`, sourceInfo.event)
  }

  const decreaseHours = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const hoursInt = parseInt(hours, 10) - 1
    const hoursStr = hoursInt > 9 ? hoursInt.toString() : `0${hoursInt}`

    onChange(`${hoursStr}:${minutes}:${seconds}`, e)
  }

  const increaseHours = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const hoursInt = parseInt(hours, 10) + 1
    const hoursStr = hoursInt > 9 ? hoursInt.toString() : `0${hoursInt}`

    onChange(`${hoursStr}:${minutes}:${seconds}`, e)
  }

  const decreaseMinutes = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const minutesInt = parseInt(minutes, 10) - 1
    const minutesStr = minutesInt > 9 ? minutesInt.toString() : `0${minutesInt}`

    onChange(`${hours}:${minutesStr}:${seconds}`, e)
  }

  const increaseMinutes = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const minutesInt = parseInt(minutes, 10) + 1
    const minutesStr = minutesInt > 9 ? minutesInt.toString() : `0${minutesInt}`

    onChange(`${hours}:${minutesStr}:${seconds}`, e)
  }

  const decreaseSeconds = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const secondsInt = parseInt(seconds, 10) - 1
    const secondsStr = secondsInt > 9 ? secondsInt.toString() : `0${secondsInt}`

    onChange(`${hours}:${minutes}:${secondsStr}`, e)
  }

  const increaseSeconds = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const secondsInt = parseInt(seconds, 10) + 1
    const secondsStr = secondsInt > 9 ? secondsInt.toString() : `0${secondsInt}`

    onChange(`${hours}:${minutes}:${secondsStr}`, e)
  }

  return (
    <div className="itpc-calendar__times">
      <div className="itpc-calendar__time">
        <button
          className="itpc-calendar__button"
          disabled={hours === "23"}
          onClick={increaseHours}
          tabIndex={-1}
          type="button"
        >
          <i className="itpc-calendar__arrow itpc-calendar__arrow_top" />
        </button>
        <PatternFormat
          className="itpc-calendar__input"
          format="##"
          mask={["Ч", "Ч"]}
          onValueChange={changeHours}
          value={hours}
          allowEmptyFormatting
          valueIsNumericString
        />
        <button
          className="itpc-calendar__button"
          disabled={!hours.length || hours === "00"}
          onClick={decreaseHours}
          tabIndex={-1}
          type="button"
        >
          <i className="itpc-calendar__arrow itpc-calendar__arrow_bottom" />
        </button>
      </div>

      <span className="itpc-calendar__double-dots">:</span>

      <div className="itpc-calendar__time">
        <button
          className="itpc-calendar__button"
          disabled={minutes === "59"}
          onClick={increaseMinutes}
          tabIndex={-1}
          type="button"
        >
          <i className="itpc-calendar__arrow itpc-calendar__arrow_top" />
        </button>
        <PatternFormat
          className="itpc-calendar__input"
          format="##"
          mask={["М", "М"]}
          onValueChange={changeMinutes}
          value={minutes}
          allowEmptyFormatting
          valueIsNumericString
        />
        <button
          className="itpc-calendar__button"
          disabled={!minutes.length || minutes === "00"}
          onClick={decreaseMinutes}
          tabIndex={-1}
          type="button"
        >
          <i className="itpc-calendar__arrow itpc-calendar__arrow_bottom" />
        </button>
      </div>

      <span className="itpc-calendar__double-dots">:</span>

      <div className="itpc-calendar__time">
        <button
          className="itpc-calendar__button"
          disabled={seconds === "59"}
          onClick={increaseSeconds}
          tabIndex={-1}
          type="button"
        >
          <i className="itpc-calendar__arrow itpc-calendar__arrow_top" />
        </button>
        <PatternFormat
          className="itpc-calendar__input"
          format="##"
          mask={["С", "С"]}
          onValueChange={changeSeconds}
          value={seconds}
          allowEmptyFormatting
          valueIsNumericString
        />
        <button
          className="itpc-calendar__button"
          disabled={!seconds.length || seconds === "00"}
          onClick={decreaseSeconds}
          tabIndex={-1}
          type="button"
        >
          <i className="itpc-calendar__arrow itpc-calendar__arrow_bottom" />
        </button>
      </div>
    </div>
  )
}
