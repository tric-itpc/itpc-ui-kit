import React, { HTMLAttributes, useState } from "react"

import cn from "classnames"

import { TabsItem } from "../types"

import "./styles.css"

interface TabButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "onClick" | "id"> {
  id: number
  isActive: boolean
  onClick(id: number): void
  title: string
}

export const TabButton: React.FC<TabButtonProps> = ({
  id,
  isActive,
  onClick,
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
        isActive && "itpc-tabs__button_active"
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
}

export const Tabs: React.FC<TabsProps> = ({
  changeActiveTab,
  childProps,
  className = "",
  disabled = false,
  items,
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
    <div className={cn("itpc-tabs", className)} {...rest}>
      <div className="itpc-tabs__buttons">
        {items.map((item, i) => (
          <TabButton
            id={i}
            isActive={activeTab === i}
            key={i}
            onClick={handleActiveTab}
            title={item.title}
          />
        ))}
      </div>

      <div className="itpc-tabs__content">{renderChildren()}</div>
    </div>
  )
}
