import React, { HTMLAttributes } from "react"

import cn from "classnames"

import { IconArrow } from "../../_elements"

import "./styles.css"

export interface AccordionArrowProps extends HTMLAttributes<HTMLSpanElement> {
  /** Флаг состояния открытия */
  isOpened?: boolean
}

export const AccordionArrow: React.FC<AccordionArrowProps> = ({
  isOpened,
  ...rest
}) => (
  <span className={cn("itpc-accordion-arrow")} {...rest}>
    <IconArrow orientation={isOpened ? "top" : "bottom"} />
  </span>
)

export interface AccordionBodyProps extends HTMLAttributes<HTMLDivElement> {
  /** Контент */
  children?: React.ReactNode
  /** Флаг состояния открытия */
  isOpened?: boolean
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

export interface AccordionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Контент */
  children?: React.ReactNode
  id?: string
  /** Флаг состояния активности */
  isActive?: boolean
  /** Флаг состояния открытия */
  isOpened?: boolean
  /** Обработчик клика */
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

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Контент */
  children?: React.ReactNode
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  ...rest
}) => (
  <div className={cn("itpc-accordion-item")} {...rest}>
    {children}
  </div>
)

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  /** Контент */
  children?: React.ReactNode
  /** Дополнительный класс */
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
