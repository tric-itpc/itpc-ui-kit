import React, { HTMLAttributes, useRef, useState } from "react"

import cn from "classnames"

import { IconArrow, Placeholder, Popover, SelectItem } from "../_elements"
import { useOnClickOutside } from "../../lab"
import { Item } from "../types"

import "./styles.css"

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  className?: string
  defaultItemId?: string
  disabled?: boolean
  items: Item[]
  onChange(value: string): void
  placeholder: string
}

export const SelectField: React.FC<Props> = ({
  className = "",
  defaultItemId = null,
  disabled = false,
  items,
  onChange,
  placeholder,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const ref = useRef<HTMLDivElement>(null)

  const close = (): void => {
    setIsOpen(false)
  }

  const handleOpen = (): void => {
    if (!disabled) {
      setIsOpen(!isOpen)
    }
  }

  const changeValue = (value: string) => {
    if (typeof onChange === "function") {
      onChange(value)
    }

    setIsOpen(false)
  }

  useOnClickOutside(ref, close)

  return (
    <div className={cn("itpc-select", className)} ref={ref} {...rest}>
      <button
        className={cn(
          "itpc-select__button",
          isOpen && "itpc-select__button_focused"
        )}
        disabled={disabled}
        onClick={handleOpen}
        type="button"
      >
        <Placeholder focused={isOpen || !!defaultItemId}>
          {placeholder}
        </Placeholder>

        {defaultItemId &&
          items.find((item) => item.id === defaultItemId)?.value}
      </button>

      <IconArrow onClick={handleOpen} orientation={isOpen ? "top" : "bottom"} />

      {isOpen && (
        <Popover>
          {items.map((item) => (
            <SelectItem
              disabled={item.disabled}
              id={item.id}
              isActive={defaultItemId === item.id}
              key={item.id}
              onChange={changeValue}
            >
              {item.value}
            </SelectItem>
          ))}
        </Popover>
      )}
    </div>
  )
}
