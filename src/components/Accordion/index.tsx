import React, { HTMLAttributes } from "react"

import cn from "classnames"

import { IconArrow } from "../_elements"
import { Theme } from "../types"

import "./styles.css"

interface AccordionArrowProps extends HTMLAttributes<HTMLSpanElement> {
  isOpened: boolean
  theme?: Theme
}

export const AccordionArrow: React.FC<AccordionArrowProps> = ({
  isOpened,
  theme,
  ...rest
}) => (
  <span
    className={cn(
      "itpc-accordion-arrow",
      theme === Theme.DEFAULT && "itpc_default_theme",
      theme === Theme.DARK && "itpc_dark_theme"
    )}
    {...rest}
  >
    <IconArrow orientation={isOpened ? "top" : "bottom"} theme={theme} />
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
  theme?: Theme
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  id = "itpc-accordion-header",
  isActive = false,
  isOpened,
  onPress,
  theme,
  ...rest
}) => (
  <div
    className={cn(
      "itpc-accordion-header",
      isOpened && "itpc-accordion-header_opened",
      isActive && "itpc-accordion-header_active",
      theme === Theme.DEFAULT && "itpc_default_theme",
      theme === Theme.DARK && "itpc_dark_theme"
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
  theme?: Theme
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  theme,
  ...rest
}) => (
  <div
    className={cn(
      "itpc-accordion-item",
      theme === Theme.DEFAULT && "itpc_default_theme",
      theme === Theme.DARK && "itpc_dark_theme"
    )}
    {...rest}
  >
    {children}
  </div>
)

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
  theme?: Theme
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  className = "",
  theme = Theme.DEFAULT,
  ...rest
}) => (
  <div
    className={cn(
      "itpc-accordion",
      theme === Theme.DEFAULT && "itpc_default_theme",
      theme === Theme.DARK && "itpc_dark_theme",
      className
    )}
    {...rest}
  >
    {children}
  </div>
)
