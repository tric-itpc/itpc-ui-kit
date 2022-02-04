import React from 'react'

import { ButtonType, ButtonVariant } from '../types'

import * as Styled from './styled'

export interface ButtonProps {
  type?: ButtonType
  variant?: ButtonVariant
  disabled?: boolean
  onPress?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  disabled = false,
  variant = 'purple',
  onPress,
  children
}) => {
  const onClick = (): void => {
    if (onPress) {
      onPress()
    }
  }

  return (
    <Styled.Button
      type={type}
      disabled={disabled}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Styled.Button>
  )
}
