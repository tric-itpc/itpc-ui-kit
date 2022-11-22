import React, { useState } from "react"
import cn from "classnames"

import { TabsItem } from "../types"

import './styles.css'

interface TabButtonProps {
  id: number
  title: string
  isActive: boolean
  onClick(id: number): void
}

export const TabButton: React.FC<TabButtonProps> = ({
  id,
  title,
  isActive,
  onClick
}) => {
  const click = (): void => {
    onClick(id)
  }

  return (
    <button
      type="button"
      className={cn('itpc-tabs__button', isActive && 'itpc-tabs__button_active')}
      onClick={click}
    >
      {title}
    </button>
  )
}

export interface TabsProps {
  items: TabsItem[]
  disabled?: boolean
  changeActiveTab?: (id: string) => void
  className?: string
  [key: string]: unknown
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  disabled = false,
  changeActiveTab,
  className = '',
  ...props
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

  const renderChildren = () => React.cloneElement(items[activeTab].content, { ...props })

  return (
    <div className={cn('itpc-tabs', className)}>
      <div className="itpc-tabs__buttons">
        {items.map((item, i) => (
          <TabButton
            key={i}
            id={i}
            title={item.title}
            isActive={activeTab === i}
            onClick={handleActiveTab}
          />
        ))}
      </div>
      <div className="itpc-tabs__content">{renderChildren()}</div>
    </div>
  )
}
