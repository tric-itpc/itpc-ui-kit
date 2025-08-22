import React, { useEffect, useRef, useState } from "react"

import cn from "classnames"

import { useWindowSize } from "../../../lab"
import { getTransformOriginByAxisX } from "../../../lab/getTransformOriginByAxisX"
import { setDurationAnimation } from "../../../lab/setDurationAnimation/setDurationAnimation"
import {
  type CSSPropertiesWithTransformOrigin,
  type DurationAnimation,
} from "../../types"

import "./styles.css"

interface Props extends React.HTMLAttributes<HTMLUListElement> {
  children?: React.ReactNode
  durationAnimation: DurationAnimation
  isOpen: boolean
  refChildren?: React.RefObject<HTMLUListElement>
  refParent?: React.RefObject<HTMLDivElement>
}

export const ListBox: React.FC<Props> = ({
  children,
  durationAnimation,
  isOpen,
  refChildren,
  refParent,
  ...rest
}) => {
  const { windowWidth } = useWindowSize()
  const localRef = useRef<HTMLUListElement>(null)

  const ref = refChildren || localRef

  const [styleAnimation, setStyleAnimation] =
    useState<CSSPropertiesWithTransformOrigin>({})

  useEffect(() => {
    const element = ref.current
    const parentElement = refParent?.current

    if (element && parentElement) {
      element.style.width = `${parentElement.offsetWidth}px`
      setDurationAnimation(durationAnimation, element, isOpen)
    }
  }, [durationAnimation, ref, refParent, windowWidth, isOpen])

  useEffect(() => {
    const element = ref.current
    const parentElement = refParent?.current

    if (isOpen && parentElement && element) {
      const animationTransform = getTransformOriginByAxisX(refParent, ref)
      setStyleAnimation({ transformOrigin: animationTransform })
    }
  }, [isOpen, refParent, ref])

  return (
    <ul
      className={cn(
        "itpc-list-box",
        isOpen ? "itpc-list-box_opened" : "itpc-list-box_closed"
      )}
      ref={refChildren || localRef}
      role="listbox"
      style={styleAnimation}
      {...rest}
    >
      {children}
    </ul>
  )
}
