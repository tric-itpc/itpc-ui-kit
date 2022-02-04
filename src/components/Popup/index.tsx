/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef, useState } from "react"

import { Icons } from "../_elements"

import { PopupPosition, PopupSize, PopupVariant } from "../types"
import { Colors } from "../constants"

import * as Styled from './styled'

export interface PopupProps {
  title: string
  isOpen: boolean
  size?: PopupSize
  variant?: PopupVariant
  position?: PopupPosition
  onClose(): void
}

const getColor = (variant: PopupVariant): Colors => {
  if (variant === 'error') {
    return Colors.red
  }

  if (variant === 'warning') {
    return Colors.yellow
  }

  if (variant === 'success') {
    return Colors.green
  }

  return Colors.grey
}

export const Popup: React.FC<PopupProps> = ({
  title,
  isOpen,
  size = 'normal',
  variant = 'default',
  position = 'center-center',
  onClose,
  children
}) => {
  const [height, setHeight] = useState<number>(0)
  const [width, setWidth] = useState<number>(0)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHeight(ref.current?.clientHeight ?? 0)
    setWidth(ref.current?.clientWidth ?? 0)
  })

  return (
    <Styled.Popup
      width={width}
      height={height}
      isOpen={isOpen}
      size={size}
      color={getColor(variant)}
      position={position}
      onClick={onClose}
      ref={ref}
    >
      <Styled.PopupHeader size={size}>
        {title}
        <Icons.Close color={getColor(variant)} onPress={onClose} />
      </Styled.PopupHeader>

      {size === 'normal' && children}
    </Styled.Popup>
  )
}
