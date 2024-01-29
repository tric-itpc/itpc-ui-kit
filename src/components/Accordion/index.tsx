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
  children?: React.ReactNode
  isOpened: boolean
}

export const AccordionBody: React.FC<AccordionBodyProps> = ({
  children,
  isOpened,
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
  children?: React.ReactNode
  id?: string
  isActive?: boolean
  isOpened: boolean
  onPress?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  id = "itpc-accordion-header",
  isActive = false,
  isOpened,
  onPress,
  ...rest
}) => (
  <div
    className={cn(
      "itpc-accordion-header",
      isOpened && "itpc-accordion-header_opened",
      isActive && "itpc-accordion-header_active"
    )}
    id={id}
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
  children?: React.ReactNode
  className?: string
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  className = "",
  ...rest
}) => (
  <div className={cn("itpc-accordion", className)} {...rest}>
    {children}
  </div>
)
