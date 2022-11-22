/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef, useState } from "react"
import cn from 'classnames'

import { IconClose } from "../_elements"
import { PopupPosition, PopupSize, PopupVariant } from "../types"

import { getColor, getPosition } from "./utils"

import './styles.css'

export interface Props {
  title: string
  isOpen: boolean
  size?: PopupSize
  variant?: PopupVariant
  position?: PopupPosition
  className?: string
  children?: React.ReactNode
  onClose(): void
}

export const Popup: React.FC<Props> = ({
  title,
  isOpen,
  size = 'normal',
  variant = 'default',
  position = 'center-center',
  className = '',
  onClose,
  children
}) => {
  const [height, setHeight] = useState<number>(0)
  const [width, setWidth] = useState<number>(0)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHeight(ref.current?.clientHeight ?? 0)
    setWidth(ref.current?.clientWidth ?? 0)
  }, [])

  return (
    <div
      ref={ref}
      style={getPosition(position, width, height)}
      className={cn(
        'itpc-popup',
        isOpen && 'itpc-popup_opened',
        variant === 'error' && 'itpc-popup_color_error',
        variant === 'warning' && 'itpc-popup_color_warning',
        variant === 'success' && 'itpc-popup_color_success',
        className
      )}
    >
      <div className="itpc-popup__header">
        <p className="itpc-popup__title">{title}</p>
        <IconClose color={getColor(variant)} onPress={onClose} />
      </div>

      {size === 'normal' && children}
    </div>
  )
}
