import React from "react"
import cn from 'classnames'

import './styles.css'

interface Props {
  id: string
  isActive?: boolean
  disabled?: boolean
  onChange(id: string): void
  children?: React.ReactNode
}

export const SelectItem: React.FC<Props> = ({
  id,
  disabled,
  isActive,
  onChange,
  children
}) => {
  const onClick = (): void => {
    if (!disabled) {
      onChange(id)
    }
  }

  return (
    <div className={cn("itpc-select-item", disabled && "itpc-select-item_disabled")} onClick={onClick}>
      <span className={cn('itpc-select-item__stick', isActive && 'itpc-select-item__stick_showed')} />
      {children}
    </div>
  )
}
