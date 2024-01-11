import React, { HTMLAttributes } from "react"
import cn from "classnames"

import { IconArrow } from "../_elements"

import "./styles.css"

interface AccordionArrowProps extends HTMLAttributes<HTMLSpanElement> {
  isOpened: boolean
}

export const AccordionArrow: React.FC<AccordionArrowProps> = ({
  isOpened,
  ...rest
}) => (
  <span className="itpc-accordion-arrow" {...rest}>
    <IconArrow orientation={isOpened ? "top" : "bottom"} />
  </span>
)

interface AccordionBodyProps extends HTMLAttributes<HTMLDivElement> {
  isOpened: boolean
  children?: React.ReactNode
}

export const AccordionBody: React.FC<AccordionBodyProps> = ({
  isOpened,
  children,
  ...rest
}) => (
  <div
    className={cn(
      "itpc-accordion-body",
      isOpened && "itpc-accordion-body_opened"
    )}
    {...rest}
  >
    {children}
  </div>
)

interface AccordionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  id?: string
  isOpened: boolean
  isActive?: boolean
  onPress?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  children?: React.ReactNode
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  id = "itpc-accordion-header",
  isOpened,
  isActive = false,
  onPress,
  children,
  ...rest
}) => (
  <div
    id={id}
    className={cn(
      "itpc-accordion-header",
      isOpened && "itpc-accordion-header_opened",
      isActive && "itpc-accordion-header_active"
    )}
    onClick={onPress}
    {...rest}
  >
    {children}
  </div>
)

interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  ...rest
}) => (
  <div className="itpc-accordion-item" {...rest}>
    {children}
  </div>
)

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
}

export const Accordion: React.FC<AccordionProps> = ({
  className = "",
  children,
  ...rest
}) => (
  <div className={cn("itpc-accordion", className)} {...rest}>
    {children}
  </div>
)
