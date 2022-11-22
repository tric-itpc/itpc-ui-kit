import React from "react"
import NumberFormat, { NumberFormatValues } from "react-number-format"

import './styles.css'

interface Props {
  hours: string;
  minutes: string;
  seconds: string;
  onChange(time: string): void;
}

export const CalendarTimes: React.FC<Props> = ({
  hours,
  minutes,
  seconds,
  onChange
}: Props) => {
  const changeHours = (values: NumberFormatValues): void => {
    if (parseInt(values.value, 10) > 23) {
      onChange(`23:${minutes}:${seconds}`)

      return
    }

    onChange(`${values.value.length ? values.value : "00"}:${minutes}:${seconds}`)
  }

  const changeMinutes = (values: NumberFormatValues): void => {
    if (parseInt(values.value, 10) > 59) {
      onChange(`${hours}:59:${seconds}`)

      return
    }

    onChange(`${hours}:${values.value.length ? values.value : "00"}:${seconds}`)
  }

  const changeSeconds = (values: NumberFormatValues): void => {
    if (parseInt(values.value, 10) > 59) {
      onChange(`${hours}:${minutes}:59`)

      return
    }

    if (values.value.length) {
      if (values.value.length < 2) {
        onChange(`${hours}:${minutes}:${`${values.value}0`}`)
        return
      }

      onChange(`${hours}:${minutes}:${values.value}`)
      return
    }

    onChange(`${hours}:${minutes}:00`)
  }

  const decreaseHours = (): void => {
    const hoursInt = parseInt(hours, 10) - 1
    const hoursStr = hoursInt > 9 ? hoursInt.toString() : `0${hoursInt}`

    onChange(`${hoursStr}:${minutes}:${seconds}`)
  }

  const increaseHours = (): void => {
    const hoursInt = parseInt(hours, 10) + 1
    const hoursStr = hoursInt > 9 ? hoursInt.toString() : `0${hoursInt}`

    onChange(`${hoursStr}:${minutes}:${seconds}`)
  }

  const decreaseMinutes = (): void => {
    const minutesInt = parseInt(minutes, 10) - 1
    const minutesStr = minutesInt > 9 ? minutesInt.toString() : `0${minutesInt}`

    onChange(`${hours}:${minutesStr}:${seconds}`)
  }

  const increaseMinutes = (): void => {
    const minutesInt = parseInt(minutes, 10) + 1
    const minutesStr = minutesInt > 9 ? minutesInt.toString() : `0${minutesInt}`

    onChange(`${hours}:${minutesStr}:${seconds}`)
  }

  const decreaseSeconds = (): void => {
    const secondsInt = parseInt(seconds, 10) - 1
    const secondsStr = secondsInt > 9 ? secondsInt.toString() : `0${secondsInt}`

    onChange(`${hours}:${minutes}:${secondsStr}`)
  }

  const increaseSeconds = (): void => {
    const secondsInt = parseInt(seconds, 10) + 1
    const secondsStr = secondsInt > 9 ? secondsInt.toString() : `0${secondsInt}`

    onChange(`${hours}:${minutes}:${secondsStr}`)
  }

  return (
    <div className="itpc-calendar__times">
      <div className="itpc-calendar__time">
        <button
          className="itpc-calendar__button"
          type="button"
          tabIndex={-1}
          disabled={hours === "23"}
          onClick={increaseHours}
        >
          <i className="itpc-calendar__arrow itpc-calendar__arrow_top" />
        </button>
        <NumberFormat
          className="itpc-calendar__input"
          isNumericString
          allowEmptyFormatting
          format="##"
          mask={["Ч", "Ч"]}
          value={hours}
          onValueChange={changeHours}
        />
        <button
          className="itpc-calendar__button"
          type="button"
          tabIndex={-1}
          disabled={!hours.length || hours === "00"}
          onClick={decreaseHours}
        >
          <i className="itpc-calendar__arrow itpc-calendar__arrow_bottom" />
        </button>
      </div>

      <span className="itpc-calendar__double-dots">:</span>

      <div className="itpc-calendar__time">
        <button
          className="itpc-calendar__button"
          type="button"
          tabIndex={-1}
          disabled={minutes === "59"}
          onClick={increaseMinutes}
        >
          <i className="itpc-calendar__arrow itpc-calendar__arrow_top" />
        </button>
        <NumberFormat
          className="itpc-calendar__input"
          isNumericString
          allowEmptyFormatting
          format="##"
          mask={["М", "М"]}
          value={minutes}
          onValueChange={changeMinutes}
        />
        <button
          className="itpc-calendar__button"
          type="button"
          tabIndex={-1}
          disabled={!minutes.length || minutes === "00"}
          onClick={decreaseMinutes}
        >
          <i className="itpc-calendar__arrow itpc-calendar__arrow_bottom" />
        </button>
      </div>

      <span className="itpc-calendar__double-dots">:</span>

      <div className="itpc-calendar__time">
        <button
          className="itpc-calendar__button"
          type="button"
          tabIndex={-1}
          disabled={seconds === "59"}
          onClick={increaseSeconds}
        >
          <i className="itpc-calendar__arrow itpc-calendar__arrow_top" />
        </button>
        <NumberFormat
          className="itpc-calendar__input"
          isNumericString
          allowEmptyFormatting
          format="##"
          mask={["С", "С"]}
          value={seconds}
          onValueChange={changeSeconds}
        />
        <button
          className="itpc-calendar__button"
          type="button"
          tabIndex={-1}
          disabled={!seconds.length || seconds === "00"}
          onClick={decreaseSeconds}
        >
          <i className="itpc-calendar__arrow itpc-calendar__arrow_bottom" />
        </button>
      </div>
    </div>
  )
}
