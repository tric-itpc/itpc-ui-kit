import React from "react"

import cn from "classnames"

import { Theme } from "../../types"

import "./styles.css"

interface Props {
  children?: React.ReactNode
  disabled?: boolean
  id: string
  isActive?: boolean
  onChange(id: string): void
  theme?: Theme
}

export const SelectItem: React.FC<Props> = ({
  children,
  disabled,
  id,
  isActive,
  onChange,
  theme,
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
        disabled && "itpc-select-item_disabled",
        theme === Theme.DEFAULT && "itpc_default_theme",
        theme === Theme.DARK && "itpc_dark_theme"
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
