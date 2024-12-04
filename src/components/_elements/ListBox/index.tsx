import React, { useEffect, useRef, useState } from "react"

import cn from "classnames"

import { getTransformOriginByAxisX } from "../../../lab/getTransformOriginByAxisX"
import { setDurationAnimation } from "../../../lab/setDurationAnimation/setDurationAnimation"
import {
  type CSSPropertiesWithTransformOrigin,
  type DurationAnimation,
} from "../../types"

import "./styles.css"

interface Props {
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
}) => {
  const localRef = useRef<HTMLUListElement>(null)

  const ref = refChildren?.current || localRef.current

  const [styleAnimation, setStyleAnimation] =
    useState<CSSPropertiesWithTransformOrigin>({})

  useEffect(() => {
    if (ref && refParent?.current) {
      setDurationAnimation(
        durationAnimation,
        ".itpc-list-box_opened",
        ".itpc-list-box_closed"
      )
      ref.style.width = `${refParent.current.offsetWidth}px`
    }
  }, [durationAnimation, refChildren, refParent])

  useEffect(() => {
    if (isOpen && refParent?.current && ref) {
      const animationTransform = getTransformOriginByAxisX(
        refParent,
        (refChildren as React.RefObject<HTMLUListElement>) || localRef
      )
      setStyleAnimation({
        transformOrigin: animationTransform,
      })
    }
  }, [isOpen, refParent?.current])

  return (
    <ul
      className={cn(
        "itpc-list-box",
        isOpen && "itpc-list-box_opened",
        !isOpen && "itpc-list-box_closed"
      )}
      ref={refChildren || localRef}
      style={styleAnimation}
    >
      {children}
    </ul>
  )
}
