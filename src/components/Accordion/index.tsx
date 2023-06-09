import React from "react"
import cn from "classnames"

import { IconArrow } from "../_elements"

import "./styles.css"

interface AccordionArrowProps {
  isOpened: boolean
}

export const AccordionArrow: React.FC<AccordionArrowProps> = ({ isOpened }) => (
  <span className="itpc-accordion-arrow">
    <IconArrow orientation={isOpened ? "top" : "bottom"} />
  </span>
)

interface AccordionBodyProps {
  isOpened: boolean
  children?: React.ReactNode
}

export const AccordionBody: React.FC<AccordionBodyProps> = ({
  isOpened,
  children,
}) => (
  <div
    className={cn(
      "itpc-accordion-body",
      isOpened && "itpc-accordion-body_opened"
    )}
  >
    {children}
  </div>
)

interface AccordionHeaderProps {
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
}) => (
  <div
    id={id}
    className={cn(
      "itpc-accordion-header",
      isOpened && "itpc-accordion-header_opened",
      isActive && "itpc-accordion-header_active"
    )}
    onClick={onPress}
  >
    {children}
  </div>
)

interface AccordionItemProps {
  children?: React.ReactNode
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ children }) => (
  <div className="itpc-accordion-item">{children}</div>
)

export interface AccordionProps {
  className?: string
  children?: React.ReactNode
}

export const Accordion: React.FC<AccordionProps> = ({
  className = "",
  children,
}) => <div className={cn("itpc-accordion", className)}>{children}</div>
