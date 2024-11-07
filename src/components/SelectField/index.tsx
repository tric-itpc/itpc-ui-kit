import React, { HTMLAttributes, useRef, useState } from "react"

import cn from "classnames"

import { IconArrow, Placeholder, SelectItem } from "../_elements"
import { ListBox } from "../_elements/ListBox"
import { Portal } from "../_elements/Portal"
import { WrapperComponent } from "../_elements/WrapperComponent"
import { useOnClickOutside } from "../../lab"
import { ALLOWED_POSITIONS } from "../../lab/CalculateStyle/types"
import { useAnimation } from "../../lab/hooks/useAnimation"
import { type DurationAnimation, Item } from "../types"

import "./styles.css"

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  className?: string
  defaultItemId?: string
  disabled?: boolean
  durationAnimation?: DurationAnimation
  items: Item[]
  onChange(value: string): void
  placeholder: string
  position?: ALLOWED_POSITIONS
}

export const SelectField: React.FC<Props> = ({
  className = "",
  defaultItemId = null,
  disabled = false,
  durationAnimation = {
    durationClose: 200,
    durationOpen: 300,
  },
  items,
  onChange,
  placeholder,
  position = ALLOWED_POSITIONS.FIXED,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { isClosing } = useAnimation(isOpen, durationAnimation)

  const ref = useRef<HTMLDivElement>(null)

  const onClose = (): void => {
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

  useOnClickOutside(ref, onClose, isOpen)

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

      <Portal element={document.body}>
        <WrapperComponent
          isClosing={isClosing}
          isOpen={isOpen}
          position={position}
          refParent={ref}
        >
          <ListBox
            durationAnimation={durationAnimation}
            isOpen={isOpen ? !isClosing : isOpen}
            refParent={ref}
          >
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
          </ListBox>
        </WrapperComponent>
      </Portal>
    </div>
  )
}
