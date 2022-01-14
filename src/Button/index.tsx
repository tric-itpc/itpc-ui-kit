import React from 'react'

import { ButtonType, Variant } from '../types'

import * as Styled from './styled'

export interface ButtonProps {
  type?: ButtonType
  variant?: Variant
  disabled?: boolean
  onPress?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  disabled = false,
  variant = 'primary',
  onPress,
  children
}) => (
  <Styled.Button
    type={type}
    disabled={disabled}
    variant={variant}
    onClick={() => onPress && onPress()}
  >
    {children}
  </Styled.Button>
)
