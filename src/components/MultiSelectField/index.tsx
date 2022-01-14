import React, { useState } from "react"

import { useClickOutside } from "../../_hooks"
import {
  Icons,
  Placeholder,
  Popover,
  SelectButton,
  SelectItem,
  SelectItemFlag,
  SelectWrap
} from "../_elements"

import { Item } from "../types"

export interface MultiSelectFieldProps {
  items: Item[]
  selectedItems?: string[]
  placeholder: string
  disabled?: boolean
  onChange(values: string[]): void
}

export const MultiSelectField: React.FC<MultiSelectFieldProps> = ({
  items,
  selectedItems = [],
  placeholder,
  disabled = false,
  onChange
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false))

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

  return (
    <SelectWrap ref={ref}>
      <SelectButton
        disabled={disabled}
        focused={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Placeholder disabled={disabled} focused={isOpen || !!selectedItems?.length} >
          {placeholder}
        </Placeholder>
        {selectText()}
      </SelectButton>
      <Icons.Arrow orientation={isOpen ? 'top' : 'bottom'} />

      {isOpen && (
        <Popover>
          {items.map((item) => (
            <SelectItem
              key={item.id}
              onClick={() => onChangeValue(item.id)}
            >
              <SelectItemFlag isShow={selectedItems?.includes(item.id) ?? false} />
              {item.value}
            </SelectItem>
          ))}
        </Popover>
      )}
    </SelectWrap>
  )
}
