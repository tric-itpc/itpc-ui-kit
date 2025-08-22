import React, { HTMLAttributes, useEffect, useRef, useState } from "react"

import cn from "classnames"

import {
  IconArrow,
  Placeholder,
  Portal,
  PositionedWrap,
  SelectItem,
} from "../../_elements"
import { ListBox } from "../../_elements/ListBox"
import { KeyCode } from "../../../enums"
import {
  updateScroll,
  useAnimation,
  useHoveredIndex,
  useMouseMovement,
  useOnClickOutside,
} from "../../../lab"
import {
  ALLOWED_POSITIONS,
  HORIZONTAL_POSITION,
} from "../../../lab/CalculateStyle/types"
import { useKeyboardNavigation } from "../../../lab/hooks/useKeyboardNavigation"
import { type DurationAnimation, Item } from "../../types"

import "./styles.css"

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Дополнительный класс */
  className?: string
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
  /** Обязательность поля */
  required?: boolean
  /** Id выбранного элемента */
  selectedItemId?: string
}

export const SelectField: React.FC<Props> = ({
  className = "",
  disabled = false,
  durationAnimation = {
    durationClose: 150,
    durationOpen: 200,
  },
  items,
  onChange,
  placeholder,
  position = ALLOWED_POSITIONS.FIXED,
  required,
  selectedItemId = null,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { isClosing } = useAnimation(isOpen, durationAnimation)

  const ref = useRef<HTMLDivElement>(null)
  const refChildren = useRef<HTMLUListElement>(null)

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
  }

  const { activeIndex, handleKeyUpAndDown, setActiveIndex } =
    useKeyboardNavigation(items)

  const { isMouseMoved, setIsMouseMoved } = useMouseMovement(refChildren)

  const hoveredIndex = useHoveredIndex(refChildren, items)

  const onMouseEnter = (index: number): void => {
    if (isMouseMoved) {
      setActiveIndex(index)
    }
  }

  const handleEnterKey = (
    event: React.KeyboardEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    event.preventDefault()
    changeValue(items[activeIndex]?.id)
    setActiveIndex(-1)
    onClose()
  }

  const handleKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen) {
      return
    }

    if (isMouseMoved) {
      setIsMouseMoved(false)
    }

    switch (event.key) {
      case KeyCode.ARROW_UP:
      case KeyCode.ARROW_DOWN:
        handleKeyUpAndDown(event)
        break

      case KeyCode.ENTER:
        handleEnterKey(event)
        break

      default:
        break
    }
  }

  const handleContainerKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (disabled) {
      return
    }

    if (!isOpen && event.key === KeyCode.ENTER) {
      handleOpen()
      return
    }

    handleKey(event)
  }

  const handleItemSelect = (value: string) => {
    changeValue(value)
    onClose()
  }

  useEffect(() => {
    if (refChildren && activeIndex !== -1) {
      updateScroll(refChildren, activeIndex)
    }
  }, [activeIndex, refChildren])

  useEffect(() => {
    if (selectedItemId && isOpen) {
      setActiveIndex(
        selectedItemId
          ? items.findIndex(({ id }) => id === selectedItemId)
          : items.findIndex((item) => !item.disabled) ?? 0
      )
    }
  }, [selectedItemId, items, isOpen])

  useEffect(() => {
    if (isMouseMoved) {
      const isDisabledItem = items.find(
        (_, index) => hoveredIndex === index
      )?.disabled

      if (
        !isDisabledItem &&
        typeof hoveredIndex === "number" &&
        hoveredIndex >= 0 &&
        hoveredIndex !== activeIndex
      ) {
        setActiveIndex(hoveredIndex)
      }
    }
  }, [isMouseMoved])

  useOnClickOutside(ref, onClose, isOpen)

  return (
    <div
      {...rest}
      className={cn(
        "itpc-select",
        !disabled && "itpc-select_hover",
        disabled && " itpc-select_disabled",
        className
      )}
      onKeyDown={handleContainerKeyDown}
      ref={ref}
      tabIndex={disabled ? -1 : 0}
    >
      <button
        className={cn(
          "itpc-select__button",
          isOpen && "itpc-select__button_focused"
        )}
        disabled={disabled}
        onClick={handleOpen}
        type="button"
      >
        <Placeholder
          disabled={disabled}
          focused={isOpen || !!selectedItemId}
          required={required}
        >
          {placeholder}
        </Placeholder>

        {selectedItemId &&
          items.find((item) => item.id === selectedItemId)?.value}
      </button>

      <IconArrow
        aria-hidden="true"
        disabled={disabled}
        onClick={handleOpen}
        orientation={isOpen ? "top" : "bottom"}
        className="itpc-select__icon-arrow"
      />

      <Portal element={document.body}>
        <PositionedWrap
          horizontalAlignment={HORIZONTAL_POSITION.LEFT}
          isClosing={isClosing}
          isOpen={isOpen}
          position={position}
          refParent={ref}
        >
          <ListBox
            durationAnimation={durationAnimation}
            isOpen={isOpen ? !isClosing : isOpen}
            refChildren={refChildren}
            refParent={ref}
          >
            {items.map((item, itemIndex) => (
              <SelectItem
                activeIndex={activeIndex}
                disabled={item.disabled}
                id={item.id}
                isActive={selectedItemId === item.id}
                itemIndex={itemIndex}
                key={item.id}
                onChange={handleItemSelect}
                onMouseEnter={onMouseEnter}
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
