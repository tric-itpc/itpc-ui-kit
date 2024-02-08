import React, { HTMLAttributes, useRef, useState } from "react"

import cn from "classnames"

import { IconArrow, Placeholder, Popover, SelectItem } from "../_elements"
import { useOnClickOutside } from "../../_hooks"
import { Item } from "../types"

import "./styles.css"

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  className?: string
  disabled?: boolean
  items: Item[]
  onChange(values: string[]): void
  placeholder?: string
  selectedItems?: string[]
}

export const MultiSelectField: React.FC<Props> = ({
  className,
  disabled = false,
  items,
  onChange,
  placeholder = "",
  selectedItems = [],
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const ref = useRef<HTMLDivElement>(null)

  const handleOpen = (): void => {
    if (!disabled) {
      setIsOpen(!isOpen)
    }
  }

  const onClose = (): void => {
    setIsOpen(false)
  }

  const onChangeValue = (value: string): void => {
    if (typeof onChange === "function") {
      const select = new Set<string>(selectedItems)

      if (select.has(value)) {
        select.delete(value)
        onChange(Array.from(select))
        return
      }

      select.add(value)
      onChange(Array.from(select))
    }
  }

  const selectText = (): string => {
    if (selectedItems?.length > 1) {
      return `Выбрано ${selectedItems?.length} элементов`
    }

    if (selectedItems?.length === 1) {
      return items.find((item) => item.id === selectedItems[0])?.value ?? ""
    }

    return ""
  }

  useOnClickOutside(ref, onClose)

  return (
    <div className={cn("itpc-multi-select", className)} ref={ref} {...rest}>
      <button
        className={cn(
          "itpc-multi-select__button",
          isOpen && "itpc-multi-select__button_focused"
        )}
        disabled={disabled}
        onClick={handleOpen}
        type="button"
      >
        <Placeholder focused={isOpen || !!selectedItems?.length}>
          {placeholder}
        </Placeholder>

        {selectText()}
      </button>

      <IconArrow onClick={handleOpen} orientation={isOpen ? "top" : "bottom"} />

      {isOpen && (
        <Popover>
          {items.map((item) => (
            <SelectItem
              disabled={item.disabled}
              id={item.id}
              isActive={selectedItems?.includes(item.id) ?? false}
              key={item.id}
              onChange={onChangeValue}
            >
              {item.value}
            </SelectItem>
          ))}
        </Popover>
      )}
    </div>
  )
}
