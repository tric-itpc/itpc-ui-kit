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

export interface SelectFieldProps {
  items: Item[]
  defaultItemId?: string
  placeholder: string
  disabled?: boolean
  onChange(value: string): void
}

export const SelectField: React.FC<SelectFieldProps> = ({
  items,
  defaultItemId = null,
  placeholder,
  disabled = false,
  onChange
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false))

  const onHandleOpen = (): void => {
    setIsOpen(!isOpen)
  }

  const onChangeValue = (value: string) => {
    if (typeof onChange === 'function') {
      onChange(value)
    }

    setIsOpen(false)
  }

  return (
    <SelectWrap ref={ref}>
      <SelectButton
        disabled={disabled}
        focused={isOpen}
        onClick={onHandleOpen}
      >
        <Placeholder disabled={disabled} focused={isOpen || !!defaultItemId} >
          {placeholder}
        </Placeholder>
        {defaultItemId && items.find((item) => item.id === defaultItemId)?.value}
      </SelectButton>
      <Icons.Arrow orientation={isOpen ? 'top' : 'bottom'} />

      {isOpen && (
        <Popover>
          {items.map((item) => (
            <SelectItem
              key={item.id}
              onClick={() => onChangeValue(item.id)}
            >
              <SelectItemFlag isShow={defaultItemId === item.id} />
              {item.value}
            </SelectItem>
          ))}
        </Popover>
      )}
    </SelectWrap>
  )
}
