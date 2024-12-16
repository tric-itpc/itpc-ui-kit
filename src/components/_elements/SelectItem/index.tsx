import React from "react"

import cn from "classnames"

import "./styles.css"

interface Props {
  activeIndex?: number
  children?: React.ReactNode
  disabled?: boolean
  id: string
  isActive?: boolean
  itemIndex?: number
  onChange(id: string): void
}

export const SelectItem: React.FC<Props> = ({
  activeIndex,
  children,
  disabled,
  id,
  isActive,
  itemIndex,
  onChange,
}) => {
  const onClick = (): void => {
    if (!disabled) {
      onChange(id)
    }
  }

  const isActiveIndex =
    typeof activeIndex === "number" && activeIndex === itemIndex

  return (
    <li
      className={cn(
        "itpc-select-item",
        !disabled && "itpc-select-item_clickable",
        disabled && "itpc-select-item_disabled",
        !isActiveIndex && isActive && "itpc-select-item_selected",
        isActiveIndex && "itpc-select-item_active"
      )}
      onClick={onClick}
    >
      <span
        className={cn(
          "itpc-select-item__stick",
          isActive && "itpc-select-item__stick_showed"
        )}
      />
      {children}
    </li>
  )
}
