import React, { useEffect, useRef, useState } from "react"
import cn from 'classnames'

import { useOnClickOutside } from "../../_hooks"

import { TextField } from "../TextField"
import { Item } from "../types"
import { Popover, SelectItem } from "../_elements"

import { getSearchState } from "./utils"

import './styles.css'

export interface Props {
  defaultItem?: string
  items: Item[]
  placeholder?: string
  isLoading: boolean
  isClear?: boolean
  className?: boolean
  handleClear?: () => void
  fetchData?: (value: string) => Promise<void>,
  onChange(id: string): void
}

export const SearchField: React.FC<Props> = ({
  defaultItem,
  items,
  placeholder,
  isLoading,
  isClear = false,
  className = '',
  handleClear,
  fetchData,
  onChange
}) => {
  const [isOpenedSuggestions, setIsOpenedSuggestions] = useState<boolean>(false)
  const [value, setValue] = useState<string>(defaultItem ? items.find((item) => item.id === defaultItem)?.value ?? '' : '')
  const [currentItem, setCurrentItem] = useState<string>(defaultItem ?? '')
  const [isBlockFetch, setIsBlockFetch] = useState<boolean>(true)

  const ref = useRef<HTMLDivElement>(null)

  const closeSuggestions = (): void => {
    setIsOpenedSuggestions(false)
  }

  const openSuggestions = (): void => {
    setIsOpenedSuggestions(true)
  }

  const changeValue = (val: string): void => {
    setValue(val)
    setIsBlockFetch(false)
  }

  const changeItem = (id: string): void => {
    setIsOpenedSuggestions(false)
    setCurrentItem(id)
    setValue(items.find((item) => item.id === id)?.value ?? value)
    onChange(id)
    setIsBlockFetch(true)
  }

  const clear = (): void => {
    setIsOpenedSuggestions(false)
    setValue('')
    setCurrentItem('')
    onChange('')
    setIsBlockFetch(true)
  }

  const filterItems = (item: Item): boolean => {
    if (!value.length) {
      return true
    }

    return item?.value?.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  }

  useEffect(() => {
    if (fetchData && value.length && !isBlockFetch) {
      fetchData(value)
    }
  }, [value])

  useEffect(() => {
    if (isClear) {
      clear()
      if (handleClear) {
        handleClear()
      }
    }
  }, [isClear])

  useOnClickOutside(ref, closeSuggestions)

  const filteredItems = items.filter(filterItems)

  return (
    <div className={cn('itpc-search-field', className)} ref={ref}>
      <TextField
        id="itpc-search-field"
        name="itpc-search-field"
        placeholder={placeholder}
        onChange={changeValue}
        onFocus={openSuggestions}
        value={value}
        state={getSearchState(isLoading, value)}
        onClickIcon={clear}
      />

      {!!filteredItems.length && isOpenedSuggestions && (
        <Popover>
          {filteredItems.map((item) => (
            <SelectItem
              key={item.id}
              id={item.id}
              isActive={item.id === currentItem}
              onChange={changeItem}
            >
              {item.value}
            </SelectItem>
          ))}
        </Popover>
      )}
    </div>
  )
}
