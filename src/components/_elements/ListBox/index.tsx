import React, { type CSSProperties, useEffect, useRef, useState } from "react"

import cn from "classnames"

import { getTransformOriginByAxisX } from "../../../lab/getTransformOriginByAxisX"
import { setDurationAnimation } from "../../../lab/setDurationAnimation/setDurationAnimation"
import { type DurationAnimation } from "../../types"

import "./styles.css"

interface Props {
  children?: React.ReactNode
  durationAnimation: DurationAnimation
  isOpen: boolean
  refParent?: React.RefObject<HTMLDivElement>
}

interface CSSPropertiesWithTransformOrigin extends CSSProperties {
  transformOrigin?: string
}

export const ListBox: React.FC<Props> = ({
  children,
  durationAnimation,
  isOpen,
  refParent,
}) => {
  const ref = useRef<HTMLUListElement>(null)

  const [styleAnimation, setStyleAnimation] =
    useState<CSSPropertiesWithTransformOrigin>({})

  useEffect(() => {
    if (ref.current) {
      ref.current?.style.setProperty(
        "width",
        `${refParent?.current?.offsetWidth}px`
      )
      setDurationAnimation(
        durationAnimation,
        ".itpc-list-box__opened",
        ".itpc-list-box__closed"
      )
    }
  }, [ref.current, durationAnimation])

  useEffect(() => {
    if (isOpen && refParent?.current) {
      const animationTransform = getTransformOriginByAxisX(refParent, ref)
      setStyleAnimation({
        transformOrigin: animationTransform,
      })
    }
  }, [isOpen, refParent?.current])

  return (
    <ul
      className={cn(
        "itpc-list-box",
        isOpen && "itpc-list-box__opened",
        !isOpen && "itpc-list-box__closed"
      )}
      ref={ref}
      style={styleAnimation}
    >
      {children}
    </ul>
  )
}
