import React, { HTMLAttributes, useEffect, useRef, useState } from "react"

import cn from "classnames"

import { Portal, PositionedWrap, SelectItem } from "../../_elements"
import { ListBox } from "../../_elements/ListBox"
import { useAnimation, useOnClickOutside } from "../../../lab"
import { type DurationAnimation, Item } from "../../types"
import { TextField } from "../TextField"

import "./styles.css"

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "className" | "onChange"> {
  /** Дополнительный класс */
  className?: boolean
  /** Значение по умолчанию */
  defaultItem?: string
  /** Отключить поле */
  disabled?: boolean
  /** Задержка анимации */
  durationAnimation?: DurationAnimation
  /** Функция для получения данных */
  fetchData?: (value: string) => Promise<void>
  /** Функция для очистки */
  handleClear?: () => void
  /** Иконка */
  icon?: React.ReactNode
  /** Флаг очистки данных */
  isClear?: boolean
  /** Отключить клик по иконке */
  isDisableClickIcon?: boolean
  /** Список элементов */
  items: Item[]
  /** Обработчик изменения значения */
  onChange(id: string): void
  /** Подпись */
  placeholder?: string
  /** Дополнительные атрибуты */
  textFieldAttr?: Omit<
    HTMLAttributes<HTMLDivElement>,
    "onBlur" | "onChange" | "onFocus"
  >
}

export const SearchField: React.FC<Props> = ({
  className = "",
  defaultItem,
  disabled = false,
  durationAnimation = {
    durationClose: 200,
    durationOpen: 300,
  },
  fetchData,
  handleClear,
  icon,
  isClear = false,
  isDisableClickIcon,
  items,
  onChange,
  placeholder,
  textFieldAttr,
  ...rest
}) => {
  const [isOpenedSuggestions, setIsOpenedSuggestions] = useState<boolean>(false)
  const [value, setValue] = useState<string>(
    defaultItem
      ? items.find((item) => item.id === defaultItem)?.value ?? ""
      : ""
  )
  const [currentItem, setCurrentItem] = useState<string>(defaultItem ?? "")
  const [isBlockFetch, setIsBlockFetch] = useState<boolean>(true)

  const ref = useRef<HTMLDivElement>(null)
  const refChildren = useRef<HTMLUListElement>(null)

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

  const clear = (force = false): void => {
    if (!force && isDisableClickIcon) {
      return
    }

    setIsOpenedSuggestions(false)
    setValue("")
    setCurrentItem("")
    onChange("")
    setIsBlockFetch(true)
  }

  const filterItems = (item: Item): boolean => {
    if (!value.length) {
      return true
    }

    return item?.value?.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  }

  const filteredItems: Item[] = items.filter(filterItems)
  const isShowListResult =
    isOpenedSuggestions && !!filteredItems.length && !!value?.length

  const { isClosing } = useAnimation(isShowListResult, durationAnimation)

  useEffect(() => {
    if (fetchData && !!value.length && !isBlockFetch) {
      fetchData(value)
    }
  }, [value])

  useEffect(() => {
    if (isClear) {
      clear(true)
      if (handleClear) {
        handleClear()
      }
    }
  }, [isClear])

  useOnClickOutside(ref, closeSuggestions)

  return (
    <div className={cn("itpc-search-field", className)} ref={ref} {...rest}>
      <TextField
        disabled={disabled}
        icon={<div onClick={() => clear()}>{icon}</div>}
        id="itpc-search-field"
        name="itpc-search-field"
        onChange={changeValue}
        onFocus={openSuggestions}
        placeholder={placeholder}
        value={value}
        {...textFieldAttr}
      />

      <Portal element={document.body}>
        <PositionedWrap
          isClosing={isClosing}
          isOpen={isShowListResult}
          refParent={ref}
        >
          {!!filteredItems.length && !!value.length && (
            <ListBox
              durationAnimation={durationAnimation}
              isOpen={isOpenedSuggestions ? !isClosing : isOpenedSuggestions}
              refChildren={refChildren}
              refParent={ref}
            >
              {!!value.length &&
                filteredItems.map((item) => (
                  <SelectItem
                    id={item.id}
                    isActive={item.id === currentItem}
                    key={item.id}
                    onChange={changeItem}
                  >
                    {item.value}
                  </SelectItem>
                ))}
            </ListBox>
          )}
        </PositionedWrap>
      </Portal>
    </div>
  )
}
