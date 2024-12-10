import React, { HTMLAttributes, useRef, useState } from "react"

import cn from "classnames"

import {
  IconArrow,
  Placeholder,
  Portal,
  PositionedWrap,
  SelectItem,
} from "../../_elements"
import { ListBox } from "../../_elements/ListBox"
import { useAnimation, useOnClickOutside } from "../../../lab"
import { ALLOWED_POSITIONS } from "../../../lab/CalculateStyle/types"
import { type DurationAnimation, Item } from "../../types"

import "./styles.css"

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Дополнительный класс */
  className?: string
  /** Значение по умолчанию */
  defaultItemId?: string
  /** Отключить */
  disabled?: boolean
  /** Задержка анимации */
  durationAnimation?: DurationAnimation
  /** Список элементов */
  items: Item[]
  /** Обработчик изменения значения */
  onChange(value: string): void
  /** Подпись */
  placeholder: string
  /** Позиционирование выпадающего списка */
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
        <PositionedWrap
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
        </PositionedWrap>
      </Portal>
    </div>
  )
}