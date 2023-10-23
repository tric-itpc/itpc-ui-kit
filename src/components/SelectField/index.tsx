import React, { HTMLAttributes, useRef, useState } from "react"
import cn from "classnames"

import { useOnClickOutside } from "../../_hooks"

import { IconArrow, Placeholder, Popover, SelectItem } from "../_elements"

import { Item } from "../types"

import "./styles.css"

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  items: Item[]
  defaultItemId?: string
  placeholder: string
  disabled?: boolean
  className?: string
  onChange(value: string): void
}

export const SelectField: React.FC<Props> = ({
  items,
  defaultItemId = null,
  placeholder,
  disabled = false,
  className = "",
  onChange,
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
        type="button"
        className={cn(
          "itpc-select__button",
          isOpen && "itpc-select__button_focused"
        )}
        disabled={disabled}
        onClick={handleOpen}
      >
        <Placeholder focused={isOpen || !!defaultItemId}>
          {placeholder}
        </Placeholder>

        {defaultItemId &&
          items.find((item) => item.id === defaultItemId)?.value}
      </button>

      <IconArrow orientation={isOpen ? "top" : "bottom"} onClick={handleOpen} />

      {isOpen && (
        <Popover>
          {items.map((item) => (
            <SelectItem
              key={item.id}
              id={item.id}
              disabled={item.disabled}
              isActive={defaultItemId === item.id}
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
