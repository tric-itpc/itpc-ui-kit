import React from "react"
import cn from 'classnames'

import './styles.css'

interface Props {
  id: string
  isActive?: boolean
  onChange(id: string): void
  children?: React.ReactNode
}

export const SelectItem: React.FC<Props> = ({
  id,
  isActive,
  onChange,
  children
}) => {
  const onClick = (): void => {
    onChange(id)
  }

  return (
    <div className="itpc-select-item" onClick={onClick}>
      <span className={cn('itpc-select-item__stick', isActive && 'itpc-select-item__stick_showed')} />
      {children}
    </div>
  )
}
