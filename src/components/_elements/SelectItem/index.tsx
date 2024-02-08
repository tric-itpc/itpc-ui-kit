import React from "react"

import cn from "classnames"

import "./styles.css"

interface Props {
  children?: React.ReactNode
  disabled?: boolean
  id: string
  isActive?: boolean
  onChange(id: string): void
}

export const SelectItem: React.FC<Props> = ({
  children,
  disabled,
  id,
  isActive,
  onChange,
}) => {
  const onClick = (): void => {
    if (!disabled) {
      onChange(id)
    }
  }

  return (
    <div
      className={cn(
        "itpc-select-item",
        disabled && "itpc-select-item_disabled"
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
    </div>
  )
}
