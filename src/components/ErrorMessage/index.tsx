import React from "react"
import cn from 'classnames'

import './styles.css'

export interface Props {
  className?: string
  children?: React.ReactNode
}

export const ErrorMessage: React.FC<Props> = ({
  className = '',
  children
}: Props) => (
  <span className={cn('itpc-error_message', className)}>
    {children}
  </span>
)
