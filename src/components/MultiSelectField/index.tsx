import React, {
  HTMLAttributes,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from "react"

import cn from "classnames"

import { IconArrow, Placeholder, SelectItem } from "../_elements"
import { ListBox } from "../_elements/ListBox"
import { Portal } from "../_elements/Portal"
import { WrapperComponent } from "../_elements/WrapperComponent"
import { useOnClickOutside } from "../../lab"
import { useAnimation } from "../../lab/hooks/useAnimation"
import { type DurationAnimation, Item } from "../types"

import "./styles.css"
import { ListBox } from "../_elements/ListBox"

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  className?: string
  disabled?: boolean
  durationAnimation?: DurationAnimation
  items: Item[]
  onChange(values: string[]): void
  placeholder?: string
  selectedItems?: string[]
}

export const MultiSelectField: React.FC<Props> = ({
  className,
  disabled = false,
  durationAnimation = {
    durationClose: 200,
    durationOpen: 300,
  },
  items,
  onChange,
  placeholder = "",
  selectedItems = [],
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

  useOnClickOutside(ref, onClose, isOpen, refChildren as RefObject<HTMLElement>)

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

      <Portal element={document.body}>
        <WrapperComponent isClosing={isClosing} isOpen={isOpen} refParent={ref}>
          <ListBox
            durationAnimation={durationAnimation}
            isOpen={isOpen ? !isClosing : isOpen}
            refChildren={refChildren}
            refParent={ref}
          >
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
          </ListBox>
        </WrapperComponent>
      </Portal>
    </div>
  )
}
