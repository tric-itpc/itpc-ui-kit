import React from 'react'
import { ButtonStyles } from '../styles'

import { ButtonType, ButtonVariant } from '../types'

import * as Styled from './styled'

export interface ButtonProps {
  type?: ButtonType
  variant?: ButtonVariant
  disabled?: boolean
  styles?: ButtonStyles
  onPress?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  disabled = false,
  variant,
  styles,
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
      {...styles}
    >
      {children}
    </Styled.Button>
  )
}
