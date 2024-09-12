import React, { HTMLAttributes, useState } from "react"

import cn from "classnames"

import { TabsItem, Theme } from "../types"

import "./styles.css"

interface TabButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "onClick" | "id"> {
  id: number
  isActive: boolean
  onClick(id: number): void
  theme?: Theme
  title: string
}

export const TabButton: React.FC<TabButtonProps> = ({
  id,
  isActive,
  onClick,
  theme = Theme.DEFAULT,
  title,
  ...rest
}) => {
  const click = (): void => {
    onClick(id)
  }

  return (
    <button
      className={cn(
        "itpc-tabs__button",
        isActive && "itpc-tabs__button_active",
        theme === Theme.DEFAULT && "itpc_default_theme",
        theme === Theme.DARK && "itpc_dark_theme"
      )}
      onClick={click}
      type="button"
      {...rest}
    >
      {title}
    </button>
  )
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  changeActiveTab?: (id: string) => void
  childProps?: { [key: string]: unknown }
  className?: string
  disabled?: boolean
  items: TabsItem[]
  theme?: Theme
}

export const Tabs: React.FC<TabsProps> = ({
  changeActiveTab,
  childProps,
  className = "",
  disabled = false,
  items,
  theme,
  ...rest
}) => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const handleActiveTab = (id: number): void => {
    if (!disabled) {
      setActiveTab(id)
      if (changeActiveTab) {
        changeActiveTab(items[id].title)
      }
    }
  }

  const renderChildren = () =>
    React.cloneElement(items[activeTab].content, { ...childProps })

  return (
    <div
      className={cn(
        "itpc-tabs",
        theme === Theme.DEFAULT && "itpc_default_theme",
        theme === Theme.DARK && "itpc_dark_theme",
        className
      )}
      {...rest}
    >
      <div className="itpc-tabs__buttons">
        {items.map((item, i) => (
          <TabButton
            id={i}
            isActive={activeTab === i}
            key={i}
            onClick={handleActiveTab}
            theme={theme}
            title={item.title}
          />
        ))}
      </div>

      <div className="itpc-tabs__content">{renderChildren()}</div>
    </div>
  )
}
