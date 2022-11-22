import React, { useRef, useState } from "react"
import cn from 'classnames'

import { useOnClickOutside } from "../../_hooks"

import {
  IconArrow,
  Placeholder,
  Popover,
  SelectItem
} from "../_elements"

import { Item } from "../types"

import './styles.css'

export interface Props {
  items: Item[]
  selectedItems?: string[]
  placeholder?: string
  disabled?: boolean
  className?: string
  onChange(values: string[]): void
}

export const MultiSelectField: React.FC<Props> = ({
  items,
  selectedItems = [],
  placeholder = '',
  disabled = false,
  className,
  onChange
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const ref = useRef<HTMLDivElement>(null)

  const handleOpen = (): void => {
    setIsOpen(!isOpen)
  }

  const onClose = (): void => {
    setIsOpen(false)
  }

  const onChangeValue = (value: string): void => {
    if (typeof onChange === 'function') {
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
      return items.find((item) => item.id === selectedItems[0])?.value ?? ''
    }

    return ''
  }

  useOnClickOutside(ref, onClose)

  return (
    <div ref={ref} className={cn('itpc-multi-select', className)}>
      <button
        className={cn(
          'itpc-multi-select__button',
          isOpen && 'itpc-multi-select__button_focused'
        )}
        disabled={disabled}
        onClick={handleOpen}
      >
        <Placeholder focused={isOpen || !!selectedItems?.length}>{placeholder}</Placeholder>
        {selectText()}
      </button>
      <IconArrow orientation={isOpen ? 'top' : 'bottom'} onClick={handleOpen} />

      {isOpen && (
        <Popover>
          {items.map((item) => (
            <SelectItem
              key={item.id}
              id={item.id}
              isActive={selectedItems?.includes(item.id) ?? false}
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
