import React, { HTMLAttributes, useEffect, useRef, useState } from "react"

import cn from "classnames"

import { Portal, PositionedWrap, SelectItem } from "../../_elements"
import { ListBox } from "../../_elements/ListBox"
import { AutoComplete, KeyCode } from "../../../enums"
import {
  updateScroll,
  useAnimation,
  useDebounce,
  useHoveredIndex,
  useKeyboardNavigation,
  useMouseMovement,
  useOnClickOutside,
} from "../../../lab"
import { HORIZONTAL_POSITION } from "../../../lab/CalculateStyle/types"
import { type DurationAnimation, Item } from "../../types"
import { TextField } from "../TextField"

import "./styles.css"

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "className" | "onChange"> {
  /** Параметры autoComplete */
  autoComplete?: AutoComplete
  /** Дополнительный класс */
  className?: boolean
  /** Значение по умолчанию */
  defaultItem?: string
  /** Время задержки запроса ?*/
  delayFetch?: number
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
  /** Вставить текущее выбранное значение в поле ввода */
  isInsertCurrentlySelected?: boolean
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
  autoComplete = AutoComplete.OFF,
  className = "",
  defaultItem,
  delayFetch = 500,
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
  isInsertCurrentlySelected = false,
  items,
  onChange,
  placeholder,
  textFieldAttr,
  ...rest
}) => {
  const [isOpenedSuggestions, setIsOpenedSuggestions] = useState<boolean>(false)
  const [value, setValue] = useState<string>(defaultItem ?? "")
  const [filteredArray, setFilteredArray] = useState<Item[]>([])
  const [currentItem, setCurrentItem] = useState<string>("")
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

  const clear = (): void => {
    if (isDisableClickIcon) {
      return
    }

    setIsOpenedSuggestions(false)
    setValue("")
    setCurrentItem("")
    onChange("")
    setIsBlockFetch(true)
  }

  const filterItems = (item: Item): boolean => {
    if (!value?.length) {
      return true
    }

    return item?.value?.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  }

  const filteredItems: Item[] =
    isInsertCurrentlySelected && isBlockFetch && !!filteredArray?.length
      ? filteredArray
      : items.filter(filterItems)

  const isShowListResult =
    isOpenedSuggestions && !!filteredItems.length && !!value?.length

  const { activeIndex, handleKeyUpAndDown, setActiveIndex } =
    useKeyboardNavigation(filteredItems)

  const { isMouseMoved, setIsMouseMoved } = useMouseMovement(refChildren)

  const hoveredIndex = useHoveredIndex(refChildren, filteredItems)

  const { isClosing } = useAnimation(isShowListResult, durationAnimation)

  const onMouseEnter = (index: number): void => {
    if (isMouseMoved) {
      setActiveIndex(index)
    }
  }

  const handleArrowKeys = (event: React.KeyboardEvent<HTMLInputElement>) => {
    handleKeyUpAndDown(event)
    setIsBlockFetch(true)
  }

  const handleEscapeKey = () => {
    setValue("")
    setCurrentItem("")
  }

  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    setIsBlockFetch(false)

    const itemToChange =
      isInsertCurrentlySelected && !filteredArray.length
        ? filteredArray[activeIndex]?.id
        : filteredItems[activeIndex]?.id

    changeItem(itemToChange)
    setFilteredArray([])
    setActiveIndex(-1)
  }

  const copyArray = () => {
    if (isInsertCurrentlySelected && !filteredArray.length && !isBlockFetch) {
      setFilteredArray([...filteredItems])
    }
  }

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpenedSuggestions) {
      return
    }

    if (isMouseMoved) {
      setIsMouseMoved(false)
    }

    switch (event.key) {
      case KeyCode.ARROW_UP:
      case KeyCode.ARROW_DOWN:
        copyArray()
        handleArrowKeys(event)
        break

      case KeyCode.ESCAPE:
        handleEscapeKey()
        break

      case KeyCode.ENTER:
        handleEnterKey(event)
        break

      default:
        break
    }
  }

  const onClickInput = () => {
    if (defaultItem && fetchData && !isOpenedSuggestions) {
      fetchData(value)
    }
  }

  const debouncedFetchData = useDebounce(async (value: string) => {
    if (fetchData) {
      await fetchData(value)
    }
  }, delayFetch)

  useEffect(() => {
    if (fetchData && !!value?.length && !isBlockFetch) {
      debouncedFetchData(value)
      if (!isOpenedSuggestions && !!filteredItems.length) {
        openSuggestions()
      }
    }

    if (currentItem && isOpenedSuggestions && !isBlockFetch) {
      setActiveIndex(
        currentItem
          ? filteredItems.findIndex(({ id }) => id === currentItem)
          : filteredItems.findIndex((item) => !item.disabled) ?? 0
      )
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

  useEffect(() => {
    if (refChildren && activeIndex !== -1) {
      updateScroll(refChildren, activeIndex)
    }

    if (isInsertCurrentlySelected && !!filteredArray.length && !isMouseMoved) {
      if (!isBlockFetch) {
        setIsBlockFetch(true)
      }

      setValue(filteredArray[activeIndex]?.value)
    }
  }, [activeIndex, refChildren])

  useEffect(() => {
    if (isOpenedSuggestions) {
      setActiveIndex(
        currentItem
          ? filteredItems.findIndex(({ id }) => id === currentItem)
          : filteredItems.findIndex((item) => !item.disabled) ?? 0
      )
    } else {
      setIsBlockFetch(false)
    }
  }, [isOpenedSuggestions])

  useEffect(() => {
    if (
      isMouseMoved &&
      typeof hoveredIndex === "number" &&
      hoveredIndex >= 0 &&
      hoveredIndex !== activeIndex
    ) {
      setActiveIndex(hoveredIndex)
    }
  }, [isMouseMoved])

  useOnClickOutside(ref, closeSuggestions)

  return (
    <div
      {...rest}
      className={cn(
        "itpc-search-field",
        !disabled && "itpc-search-field_hover ",
        disabled && "itpc-search-field_disabled",
        className
      )}
      ref={ref}
    >
      <TextField
        autoComplete={autoComplete}
        defaultItem={defaultItem}
        disabled={disabled}
        icon={<div onClick={clear}>{icon}</div>}
        id="itpc-search-field"
        name="itpc-search-field"
        onBlur={closeSuggestions}
        onChange={changeValue}
        onClickInput={onClickInput}
        onFocus={openSuggestions}
        onKeyDown={handleKey}
        placeholder={placeholder}
        value={value}
        {...textFieldAttr}
      />

      <Portal element={document.body}>
        <PositionedWrap
          horizontalAlignment={HORIZONTAL_POSITION.LEFT}
          isClosing={isClosing}
          isOpen={isShowListResult}
          refParent={ref}
        >
          {!!filteredItems?.length && !!value?.length && (
            <ListBox
              durationAnimation={durationAnimation}
              isOpen={isOpenedSuggestions ? !isClosing : isOpenedSuggestions}
              refChildren={refChildren}
              refParent={ref}
            >
              {!!value.length &&
                filteredItems.map((item, itemIndex) => (
                  <SelectItem
                    activeIndex={activeIndex}
                    id={item.id}
                    isActive={item.id === currentItem}
                    itemIndex={itemIndex}
                    key={item.id}
                    onChange={changeItem}
                    onMouseEnter={onMouseEnter}
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
