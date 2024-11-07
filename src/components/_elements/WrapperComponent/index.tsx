import React, { type CSSProperties, useEffect, useRef, useState } from "react"

import cn from "classnames"

import { getCalculatePosition } from "../../../lab/CalculateStyle"
import {
  ALLOWED_POSITIONS,
  type PositionType,
} from "../../../lab/CalculateStyle/types"

import "./styles.css"

interface WrapperComponentProps {
  children: React.ReactNode
  distanceBetweenElements?: number
  isClosing: boolean
  isOpen: boolean
  position?: PositionType
  refParent?: React.RefObject<HTMLDivElement>
}

export const WrapperComponent: React.FC<WrapperComponentProps> = ({
  children,
  distanceBetweenElements,
  isClosing,
  isOpen,
  position = ALLOWED_POSITIONS.FIXED,
  refParent,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [stylePosition, setStylePosition] = useState<CSSProperties>({})
  const calculatePosition = (): void => {
    if (refParent) {
      const stylePosition: CSSProperties = getCalculatePosition(
        refParent,
        ref,
        position,
        distanceBetweenElements
      )
      setStylePosition(stylePosition)
    }
  }

  useEffect(() => {
    const hasScroll: boolean = document.body.scrollHeight > window.innerHeight
    if (hasScroll) {
      window.addEventListener("scroll", calculatePosition)
    }
    return () => {
      window.removeEventListener("scroll", calculatePosition)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      calculatePosition()
    }
  }, [isOpen])

  return (
    <div
      className={cn(
        "itpc-wrapper-component",
        isOpen && "itpc-wrapper-component__opened",
        !isOpen && isClosing && "itpc-wrapper-component__closed"
      )}
      ref={ref}
      style={stylePosition}
    >
      {children}
    </div>
  )
}
