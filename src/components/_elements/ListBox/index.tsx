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
  }, [durationAnimation, refChildren, refParent, windowWidth])

  useEffect(() => {
    if (isOpen && refParent?.current && ref) {
      const animationTransform = getTransformOriginByAxisX(
        refParent,
        (refChildren as React.RefObject<HTMLUListElement>) || localRef
      )
      console.log("transformOrigin:", animationTransform)
      setStyleAnimation({
        transformOrigin: animationTransform,
      })
    }
  }, [isOpen, refParent?.current])

  console.log("ref: ", ref)
  console.log("refParent?.current: ", refParent?.current)

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
