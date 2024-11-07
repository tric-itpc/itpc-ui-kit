import React, { useEffect, useRef, useState, type CSSProperties } from "react"

import cn from "classnames"

import "./styles.css"

import { getCalculatePosition } from "../../../lab/CalculateStyle"
import { ALLOWED_POSITIONS } from "../../../lab/CalculateStyle/types"

interface Props {
  children?: React.ReactNode
  isOpen: boolean
  isAnimation?: boolean
  refParent?: React.RefObject<HTMLDivElement>
}

export enum AnimationTypes {
  DISAPPEARANCE = "disappearance",
  ROTATE = "rotate",
  TRANSLATE = "translate",
  // искажает элемент, например, наклоняет его влево или вправо
  SKEW = "skew",
  // переворачивает элемент, например, по горизонтали или вертикали.
  FLIP = "flip",
  ZOOM_IN = "zoom-in",
  ZOOM_OUT = "zoom-out",
  OPACITY = "opacity",
  TRANSFORM_BY_AXIS_X = "transform-by-axis-x",
  TRANSFORM_BY_AXIS_X_Y = "transform-by-axis-x_y",
}

export const ListBox: React.FC<Props> = ({
  children,
  isOpen,
  isAnimation = true,
  refParent,
}) => {
  const [stylePosition, setStylePosition] = useState<CSSProperties>({})
  const ref = useRef<HTMLUListElement>(null)

  const calculateStyle = (): void => {
    if (refParent) {
      const stylePosition: CSSProperties = getCalculatePosition(
        refParent,
        ref,
        ALLOWED_POSITIONS.FIXED,
        isAnimation,
        AnimationTypes.TRANSFORM_BY_AXIS_X
      )
      setStylePosition(stylePosition)
    }
  }

  useEffect(() => {
    if (isOpen) {
      ref.current?.style.setProperty(
        "width",
        `${refParent?.current?.offsetWidth}px`
      )
      calculateStyle()
    }
  }, [isOpen])

  return (
    <ul
      style={stylePosition}
      ref={ref}
      className={cn(
        "itpc-list-box",
        isOpen && "itpc-list-box__opened",
        !isOpen && "itpc-list-box__closed"
      )}
    >
      {children}
    </ul>
  )
}
