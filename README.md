# ITPC UI Kit

## [Демонстрация storybook](https://tric-itpc.github.io/itpc-ui-kit)

## Установка

```sh
// with npm
npm install itpc-ui-kit

// with yarn
yarn add itpc-ui-kit
```

## Запуск в режиме разработки

```shell
// with npm
npm i
npm run storybook

// with yarn
yarn
yarn storybook
```

## Использование

```typescript jsx
import React, { useState } from "react"
import { Button } from "itpc-ui-kit"

const MyComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return <Button onPress={() => setIsOpen(!isOpen)}>Click!</Button>
}
```

## Описание компонентов

### Accordion

#### Accordion состоит из нескольких элементов

`1. Accordion - компонент-обертка, необходимая для рендера списка аккордионов`
<br>
`2. AccordionItem - элемент списка`
<br>
`3. AccordionHeader - заголовок`
<br>
`4. AccordionBody - тело аккордиона (выпадающая часть)`
<br>
`5. AccordionArrow - стилизованная стрелка`

#### Props

#### `<Accordion>` Props

| Название  | Тип                           | Описание  | Значение по умолчанию | Возможные значения |
| --------- | ----------------------------- | --------- | --------------------- | ------------------ |
| className | `string` `undefined`          | CSS класс | `''`                  | Любая строка       |
| children  | `React.ReactNode` `undefined` | children  |                       |                    |

#### `<AccordionItem>` Props

| Название | Тип                           | Описание | Значение по умолчанию | Возможные значения |
| -------- | ----------------------------- | -------- | --------------------- | ------------------ |
| children | `React.ReactNode` `undefined` | children |                       |                    |

#### `<AccordionHeader>` Props

| Название | Тип                                                                      | Описание                          | Значение по умолчанию     | Возможные значения |
| -------- | ------------------------------------------------------------------------ | --------------------------------- | ------------------------- | ------------------ |
| id       | `string` `undefined`                                                     | -                                 | `'itpc-accordion-header'` | Любая строка       |
| isOpened | `boolean`                                                                | Флаг открытия                     | -                         | `true` `false`     |
| isActive | `boolean` `undefined`                                                    | Флаг выбора (активный/неактивный) | `false`                   | `true` `false`     |
| onPress  | `(e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` `undefined` | Обработчик клика                  | -                         | Любая функция      |
| children | `React.ReactNode` `undefined`                                            | children                          |                           |                    |

#### `<AccordionBody>` Props

| Название | Тип                           | Описание      | Значение по умолчанию | Возможные значения |
| -------- | ----------------------------- | ------------- | --------------------- | ------------------ |
| isOpened | `boolean`                     | Флаг открытия | -                     | `true` `false`     |
| children | `React.ReactNode` `undefined` | children      |                       |                    |

#### `<AccordionArrow>` Props

| Название | Тип       | Описание      | Значение по умолчанию | Возможные значения |
| -------- | --------- | ------------- | --------------------- | ------------------ |
| isOpened | `boolean` | Флаг открытия | -                     | `true` `false`     |

#### Пример

```typescript jsx
import React, { useState } from "react"
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  AccordionArrow,
} from "itpc-ui-kit"

const MyComponent: React.FC = () => {
  const [opened, setOpened] = useState<boolean>(false)

  const handleOpened = (): void => {
    setOpened(!opened)
  }

  return (
    <Accordion>
      <AccordionItem>
        <AccordionHeader id={"1"} isOpened={opened} onPress={handleOpened}>
          Header
          <AccordionArrow isOpened={opened} />
        </AccordionHeader>
        <AccordionBody isOpened={opened}>Body</AccordionBody>
      </AccordionItem>
    </Accordion>
  )
}
```

---

### Button

#### Props

| Название  | Тип                                                 | Описание         | Значение по умолчанию | Возможные значения             |
| --------- | :-------------------------------------------------- | ---------------- | --------------------- | ------------------------------ |
| type      | `string` `undefined`                                | Тип              | `'button'`            | `'button', 'submit',  'reset'` |
| variant   | `string` `undefined`                                | Цвет             | `''`                  | `'white', 'red'`               |
| disabled  | ` boolean``undefined `                              | Блокировка       | `false`               | `'true', 'false'`              |
| onPress   | `(e?: React.MouseEvent<HTMLButtonElement>) => void` | Обработчик клика | -                     |                                |
| className | `string` `undefined`                                | CSS класс        | `''`                  | Любая строка                   |
| children  | `React.ReactNode` `undefined`                       |                  | -                     |                                |

#### Пример

```typescript jsx
import React, { useState } from "react"
import { Button } from "itpc-ui-kit"

const MyComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onHandleIsOpen = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <Button onPress={onHandleIsOpen} variant={isOpen ? "purple" : "red"}>
      {isOpen ? "Purple" : "Red"} button
    </Button>
  )
}
```

---

### ButtonRound

#### ButtonRound - это круглая кнопка. Она не предназначена для вставки в нее текста. Для корректной работы, в качестве `children` лучше использовать иконку

#### Props

| Название  | Тип                                                             | Описание              | Значение по умолчанию | Возможные значения             |
| --------- | --------------------------------------------------------------- | --------------------- | --------------------- | ------------------------------ |
| type      | `string` `undefined`                                            | Тип                   | `'button'`            | `'button', 'submit',  'reset'` |
| disabled  | `boolean` `undefined`                                           | Блокировка            | `false`               | `'true', 'false'`              |
| tooltip   | `string` `undefined`                                            | Подпись при наведении | -                     | `'true', 'false'`              |
| onPress   | `(e?: React.MouseEvent<HTMLButtonElement>) => void` `undefined` | Обработчик клика      | -                     |                                |
| className | `string` `undefined`                                            | CSS класс             | `''`                  | Любая строка                   |
| children  | `React.ReactNode` `undefined`                                   |                       | -                     |                                |

#### Пример

```typescript jsx
import React from "react"
import { ButtonRound } from "itpc-ui-kit"

const MyComponent: React.FC = () => {
  return (
    <ButtonRound disabled={disabled}>
      <i />
    </ButtonRound>
  )
}
```

---

### Card

#### Props

| Название   | Тип                           | Описание                                      | Значение по умолчанию | Возможные значения |
| ---------- | ----------------------------- | --------------------------------------------- | --------------------- | ------------------ |
| title      | `string` `undefined`          | Заголовок карточки                            | -                     | Любая строка       |
| isBordered | `boolean` `undefined`         | Флаг выделения карточки. Поменяет цвет border | `false`               | `'true', 'false'`  |
| className  | `string` `undefined`          | CSS класс                                     | `''`                  | Любая строка       |
| children   | `React.ReactNode` `undefined` |                                               | -                     |                    |

#### Пример

```typescript jsx
import React from "react"
import { Card } from "itpc-ui-kit"

const MyComponent: React.FC = () => {
  return (
    <Card isBordered title="My card">
      <form>
        <p>My form</p>
        <button>Test</button>
      </form>
    </Card>
  )
}
```

---

### Checkbox

#### Props

| Название         | Тип                                                            | Описание                                                          | Значение по умолчанию | Возможные значения                       |
| ---------------- | -------------------------------------------------------------- | ----------------------------------------------------------------- | --------------------- | ---------------------------------------- |
| id               | `string`                                                       | -                                                                 | -                     | Любая строка                             |
| name             | `string`                                                       | -                                                                 | -                     | Любая строка                             |
| type             | `string` `undefined`                                           | Тип кнопки                                                        | `'checkbox'`          | `'checkbox', 'radio'`                    |
| variant          | `InputCheckboxVariant`                                         | Вариант стилизации                                                | `'android'`           | `'android'` `'ios'` `'round'` `'square'` |
| labelPosition    | `InputCheckboxLabelPosition`                                   | Позиция подписи чекбокса                                          | `'right'`             | `'left'` `'right'` `'all'`               |
| disabled         | `boolean` `undefined`                                          | Блокировка чекбокса                                               | `false`               | `true` `false`                           |
| labelLeft        | `string` `undefined`                                           | Значение левой подписи (если нет, то по дефолту возьмет из label) | `undefined`           | Любая строка                             |
| label            | `string` `undefined`                                           | Значение подписи                                                  | `undefined`           | Любая строка                             |
| isBlurLabelLeft  | `boolean` `undefined`                                          | Блюр левой подписи                                                | `false`               | `true` `false`                           |
| isBlurLabelRight | `boolean` `undefined`                                          | Блюр правой подписи                                               | `false`               | `true` `false`                           |
| isBlurCheckbox   | `boolean` `undefined`                                          | Блюр всего чекбокса                                               | `false`               | `true` `false`                           |
| isChecked        | `boolean` `undefined`                                          | Выбран ли чекбокс                                                 | `false`               | `true` `false`                           |
| onClick          | `(e: React.ChangeEvent<HTMLInputElement>) => void` `undefined` | Обработчик клика                                                  | `undefined`           |                                          |
| inputAttr        | `HTMLAttributes<HTMLInputElement>`                             | Атрибуты input                                                    | `undefined`           |                                          |
| labelAttr        | `HTMLAttributes<HTMLSpanElement>`                              | Атрибуты label                                                    | `undefined`           |                                          |
| className        | `string` `undefined`                                           | CSS класс                                                         | `''`                  | Любая строка                             |

#### Пример

```typescript jsx
import React, { useState } from "react"
import { Checkbox } from "itpc-ui-kit"

const MyComponent: React.FC = () => {
  const [checkedFirst, setCheckedFirst] = useState<boolean>(false)
  const [checkedSecond, setCheckedSecond] = useState<boolean>(false)

  const handleCheckedFirst = (): void => {
    setCheckedFirst(!checkedFirst)
  }

  const handleCheckedSecond = (): void => {
    setCheckedSecond(!checkedSecond)
  }

  return (
    <>
      <Checkbox
        {...args}
        name="1"
        isChecked={checkedFirst}
        onClick={handleCheckedFirst}
      />
      <Checkbox
        {...args}
        name="1"
        isChecked={checkedSecond}
        onClick={handleCheckedSecond}
      />
    </>
  )
}
```

---

### DatePicker

#### Компонент для ввода даты и времени. В качестве value необходимо передавать строку, состоящую только из чисел

#### Календарь основан на работе библиотеки react-number-format v.4.9.1

Например, если дата соответствует значению - 01.01.2000, то в качестве value необходимо передать 01012000.

Пример возвращаемого значения:

```typescript
{
  value: '01012000',
  formattedValues: '01.01.2000'
}
```

<br>

Значение `position:` при использовании 'fixsed' может выявиться баг, что открытый календарь не отображается в нужном месте.

###### Примечание:

Существуют несоответствия браузеров perspective, filter, transform способствующие формированию сдерживающих блоков. И в этом случаи этот предок ведет себя как содержащий блок.
<br>
При использовании `position: 'absolut'`, календарь может не полностью видим.

###### Примечание:

Если position свойство равно absolute, содержащий блок формируется краем поля заполнения ближайшего элемента-предка, имеющего position значение. Но может быть видим частично при значении свойства `overflow: 'hidden'`

Ссылка: https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#calculating_percentage_values_from_the_containing_block
<br>

В календаре используется

#### Props

| Название            | Тип                                                                                                                                                                                                      | Описание                                                                                                                                            | Значение по умолчанию | Возможные значения                          |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------- |
| id                  | `string`                                                                                                                                                                                                 | -                                                                                                                                                   | -                     | Любая строка                                |
| name                | `string`                                                                                                                                                                                                 | -                                                                                                                                                   | -                     | Любая строка                                |
| value               | `string` `undefined`                                                                                                                                                                                     | Значение инпута                                                                                                                                     | `''`                  | `Строки, содержащие только числа: 10102010` |
| activeDates         | `string[]` `undefined`                                                                                                                                                                                   | Список дат, которые должны быть доступны. Остальные даты будут заблокированы для выбора                                                             | `undefined`           | `["2000-01-01"]`                            |
| disabledDates       | `string[]` `undefined`                                                                                                                                                                                   | Список дат, которые должны быть заблокированы. Остальные даты будут доступны для выбора                                                             | `undefined`           | `["2000-01-01"]`                            |
| disabledAfterDate   | `string` `undefined`                                                                                                                                                                                     | Дата, после которой необходимо заблокировать выбор дат (не включительно)                                                                            | `undefined`           | `"2000-01-01"`                              |
| disabledBeforeDate  | `string` `undefined`                                                                                                                                                                                     | Дата, перед которой необходимо заблокировать выбор дат (не включительно)                                                                            | `undefined`           | `"2000-01-01"`                              |
| disabledDaysOfWeek  | `number[]` `undefined`                                                                                                                                                                                   | Дни недели, которые необходимо заблокировать. Понедельник - 1, воскресенье - 7                                                                      | `undefined`           | `[6,7]`                                     |
| disabled            | `boolean` `undefined`                                                                                                                                                                                    | Флаг блокировки ввода                                                                                                                               | `false`               | `'true', 'false'`                           |
| disabledSelectMonth | `boolean` `undefined`                                                                                                                                                                                    | Флаг блокировки выбора месяца                                                                                                                       | `false`               | `'true', 'false'`                           |
| disabledSelectYear  | `boolean` `undefined`                                                                                                                                                                                    | Флаг блокировки выбора года                                                                                                                         | `false`               | `'true', 'false'`                           |
| placeholder         | `string` `undefined`                                                                                                                                                                                     | Подпись инпута                                                                                                                                      | `''`                  | Любая строка                                |
| position            | `string` `undefined`                                                                                                                                                                                     | Значение определяющее в стилях position календаря                                                                                                   | `'fixed'`             | `'fixed'` `'absolute'`                      |
| validationState     | `ValidationState` `undefined`                                                                                                                                                                            | Значение, определяющее валидность значения инпута                                                                                                   | `'valid'`             | `'valid'` `'invalid'`                       |
| errorMessage        | `string` `undefined`                                                                                                                                                                                     | Текст ошибки при не валидности значения инпута                                                                                                      | `''`                  | Любая строка                                |
| className           | `string` `undefined`                                                                                                                                                                                     | CSS класс                                                                                                                                           | `''`                  | Любая строка                                |
| isIconClickable     | `boolean` `undefined`                                                                                                                                                                                    | Флаг, определяющий возможность открытия календаря по клику на иконку                                                                                | `false`               | `'true', 'false'`                           |
| offsetYear          | `number` `undefined`                                                                                                                                                                                     | Число, определяющее какое количество лет от текущего года показывать в календаре                                                                    | `10`                  | Любое число                                 |
| withTime            | `boolean` `undefined`                                                                                                                                                                                    | Флаг, определяющий будет ли значение в инпуте включать время                                                                                        | `false`               | `'true', 'false'`                           |
| isShowIcon          | `boolean` `undefined`                                                                                                                                                                                    | Флаг, определяющий будет показываться иконка календаря в инпуте                                                                                     | `true`                | `'true', 'false'`                           |
| scrollToYear        | `number`                                                                                                                                                                                                 | Значение года, определяющее до какого года необходимо проскроллить список годов. По дефолту будет скроллить на текущее значение года и даты (value) | `undefined`           | `2000`                                      |
| yearsFromTo         | `[number, number]`                                                                                                                                                                                       | Список из двух годов. По нему определяется промежуток годов для выбора. "from" должно быть меньше или равно "to"                                    | `undefined`           | `[2000, 2001], [2000, 2040]`                |
| onBlur              | `() => void` `undefined`                                                                                                                                                                                 | Событие onBlur, передаваемое инпуту                                                                                                                 | -                     |                                             |
| onFocus             | `() => void` `undefined`                                                                                                                                                                                 | Событие onFocus, передаваемое инпуту                                                                                                                | -                     |                                             |
| onChange            | `(values: FormattedValues, event: React.SyntheticEvent<HTMLInputElement> or React.SyntheticEvent<HTMLButtonElement> or React.SyntheticEvent<HTMLTableDataCellElement>, info: IInfo) => void` `undefined` | Событие onChange, передаваемое инпуту                                                                                                               | -                     |                                             |

#### Пример

```typescript jsx
import React, { useState } from "react"
import { DatePicker } from "itpc-ui-kit"

const MyComponent: React.FC = () => {
  const [date, setDate] = useState<FormattedValues>({
    value: "",
    formattedValue: "",
  })

  const onChange = (inputValue: FormattedValues): void => {
    setDate(inputValue)
  }

  return <DatePicker value={date.value} onChange={onChange} offsetYear={100} />
}
```

---

### ErrorMessage

#### Props

| Название  | Тип                           | Описание  | Значение по умолчанию | Возможные значения |
| --------- | ----------------------------- | --------- | --------------------- | ------------------ |
| className | `string` `undefined`          | CSS класс | `''`                  | Любая строка       |
| children  | `React.ReactNode` `undefined` |           | -                     |                    |

#### Пример

```typescript jsx
import React from "react"
import { ErrorMessage } from 'itpc-ui-kit'

const MyComponent: React.FC = () => <ErrorMessage>My error text<ErrorMessage/>
```

---

### Modal

#### Modal состоит из нескольких элементов

`1. Modal - модальное окно с заголовком`
<br>
`2. ModalContent - тело модального окна`
<br>
`3. ModalFooter - подвал модального окна`

#### Props

#### `<Modal>` Props

| Название           | Тип                           | Описание                                                                  | Значение по умолчанию | Возможные значения |
| ------------------ | ----------------------------- | ------------------------------------------------------------------------- | --------------------- | ------------------ |
| title              | `string`                      | Заголовок модального окна                                                 | -                     | Любая строка       |
| isOpen             | `boolean`                     | Флаг открытия модального окна                                             | -                     | `'true', 'false'`  |
| isOverlayClickable | `boolean`                     | Флаг, определяющий возможность закрыть модальное окно по клику на оверлей | `''`                  | Любая строка       |
| onClose            | `() => void`                  | Метод закрытия модального окна                                            | `''`                  | Любая строка       |
| iconClose          | `React.ReactNode` `undefined` | Иконка крестика модального окна                                           | `''`                  | Любая строка       |
| className          | `string` `undefined`          | CSS класс                                                                 | `''`                  | Любая строка       |
| children           | `React.ReactNode` `undefined` | children                                                                  |                       |                    |

#### `<ModalContent>` Props

| Название  | Тип                           | Описание  | Значение по умолчанию | Возможные значения |
| --------- | ----------------------------- | --------- | --------------------- | ------------------ |
| className | `string` `undefined`          | CSS класс | `''`                  | Любая строка       |
| children  | `React.ReactNode` `undefined` | children  |                       |                    |

#### `<ModalFooter>` Props

| Название  | Тип                           | Описание  | Значение по умолчанию | Возможные значения |
| --------- | ----------------------------- | --------- | --------------------- | ------------------ |
| className | `string` `undefined`          | CSS класс | `''`                  | Любая строка       |
| children  | `React.ReactNode` `undefined` | children  |                       |                    |

#### Пример

```typescript jsx
import React, { useState } from "react"
import { Button, Modal, ModalContent, ModalFooter } from "itpc-ui-kit"

const MyComponent: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const close = (): void => {
    setIsOpenModal(false)
  }

  return (
    <Modal isOpen={isOpenModal} onClose={close}>
      <ModalContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </ModalContent>
      <ModalFooter>
        <Button variant="white" onPress={close}>
          Cancel
        </Button>
        <Button onPress={close}>Ok</Button>
      </ModalFooter>
    </Modal>
  )
}
```

---

### MultiSelectField

#### Props

| Название      | Тип                          | Описание                    | Значение по умолчанию | Возможные значения |
| ------------- | ---------------------------- | --------------------------- | --------------------- | ------------------ |
| items         | `Item[]`                     | Список элементов для выбора | -                     | `Item[]`           |
| selectedItems | `string` `undefined`         | Список выбранных элементов  | `''`                  | Любая строка       |
| placeholder   | `string` `undefined`         | Подпись                     | `''`                  | Любая строка       |
| disabled      | `boolean` `undefined`        | Флаг блокировки выбора      | `false`               | `'true', 'false'`  |
| className     | `string` `undefined`         | CSS класс                   | `''`                  | Любая строка       |
| onChange      | `(values: string[]) => void` | Метод выбора элементов      | -                     |                    |

#### Пример

```typescript jsx
import React, { useState } from "react"
import { MultiSelectField, Item } from "itpc-ui-kit"

const mockItems: Item[] = [
  {
    id: "1",
    value: "Cat",
  },
  {
    id: "2",
    value: "Dog",
  },
  {
    id: "3",
    value: "Duck",
  },
  {
    id: "4",
    value: "Bear",
  },
  {
    id: "5",
    value: "Mouse",
  },
  {
    id: "6",
    value: "Tiger",
  },
  {
    id: "7",
    value: "Lion",
  },
]

const MyComponent: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<Item[] | []>([
    {
      id: "1",
      value: "Cat",
    },
  ])

  const onChange = (values: string[]): void => {
    setSelectedItems(mockItems.filter((item) => values.includes(item.id)))
  }

  return (
    <MultiSelectField
      {...args}
      items={mockItems}
      selectedItems={selectedItems.map((item) => item.id)}
      onChange={onChange}
    />
  )
}
```

---

### NumberField

#### Компонент для ввода числовых значений. В качестве value необходимо передавать строку, состоящую только из чисел

#### NumberField основан на работе библиотеки react-number-format v.4.9.1

Например, если значение соответствует - 01.01.2000, то в качестве value необходимо передать 01012000.

Пример возвращаемого значения:

```typescript
{
  value: '01012000',
  formattedValues: '01.01.2000'
}
```

#### Props

| Название             | Тип                                                                                             | Описание                                                                                                                                                                                                      | Значение по умолчанию    | Возможные значения                          |
| -------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------- |
| id                   | `string`                                                                                        | -                                                                                                                                                                                                             | -                        | Любая строка                                |
| name                 | `string`                                                                                        | -                                                                                                                                                                                                             | -                        | Любая строка                                |
| value                | `string` `undefined`                                                                            | Значение инпута                                                                                                                                                                                               | `''`                     | `Строки, содержащие только числа: 10102010` |
| disabled             | `boolean` `undefined`                                                                           | Флаг блокировки ввода                                                                                                                                                                                         | `false`                  | `'true', 'false'`                           |
| placeholder          | `string` `undefined`                                                                            | Подпись инпута                                                                                                                                                                                                | `''`                     | Любая строка                                |
| validationState      | `ValidationState` `undefined`                                                                   | Значение, определяющее валидность значения инпута                                                                                                                                                             | `'valid'`                | `'valid'` `'invalid'`                       |
| errorMessage         | `string` `undefined`                                                                            | Текст ошибки при не валидности значения инпута                                                                                                                                                                | `''`                     | Любая строка                                |
| className            | `string` `undefined`                                                                            | CSS класс                                                                                                                                                                                                     | `''`                     | Любая строка                                |
| format               | `string` `undefined` 1                                                                          | Формат ввода. Определяет вид вводимого значения                                                                                                                                                               | `''`                     | Любая строка (Например: `'####-####-##'`)   |
| mask                 | `string` `undefined`                                                                            | Маска ввода. Пустые значения заменит этой маской                                                                                                                                                              | `'_'`                    | Любая строка                                |
| prefix               | `string` `undefined`                                                                            | Маска перед значением инпута.                                                                                                                                                                                 | `''`                     | Любая строка                                |
| suffix               | `string` `undefined`                                                                            | Маска после значением инпута.                                                                                                                                                                                 | `''`                     | Любая строка                                |
| allowEmptyFormatting | `boolean` `undefined`                                                                           | Флаг, определяющий, показывать ли маску ввода при пустом значении                                                                                                                                             | `'true'`                 | `'true', 'false'`                           |
| allowNegative        | `boolean` `undefined`                                                                           | Флаг, определяющий, можно ли вводить отрицательные величины                                                                                                                                                   | `'false'`                | `'true', 'false'`                           |
| onBlur               | `() => void` `undefined`                                                                        | Событие onBlur, передаваемое инпуту                                                                                                                                                                           | -                        |                                             |
| onFocus              | `() => void` `undefined`                                                                        | Событие onFocus, передаваемое инпуту                                                                                                                                                                          | -                        |                                             |
| onChange             | `(values: FormattedValues, event?: React.SyntheticEvent<HTMLInputElement>) => void` `undefined` | Событие onChange, передаваемое инпуту                                                                                                                                                                         | -                        |                                             |
| getInputRef          | `((el: HTMLInputElement) => void)` `React.Ref<any>` `undefined`                                 | Метод, возвращающий ref инпута                                                                                                                                                                                | -                        |                                             |
| replaceValue         | `(value: string) => string` `undefined`                                                         | Функция для замены значения, игнорируя маску. Например при вводе значения в инпут мы хотим удалять определенные символы. Тогда реализация будет такой (value: string) => value.replace(regexp, replacedValue) | (value: string) => value |                                             |

#### Пример

```typescript jsx
import React, { useState } from "react"
import { FormattedValues, NumberField } from "itpc-ui-kit"

const MyComponent: React.FC = () => {
  const [date, setDate] = useState<FormattedValues>({
    value: "",
    formattedValue: "",
  })

  const onChange = (inputValue: FormattedValues): void => {
    setDate(inputValue)
  }

  return (
    <NumberField
      id="itpc-number-field-id"
      name="itpc-number-field-name"
      value={date.value}
      onChange={onChange}
    />
  )
}
```

---

### Pagination

#### Props

| Название   | Тип                                      | Описание                                                                           | Значение по умолчанию | Возможные значения |
| ---------- | ---------------------------------------- | ---------------------------------------------------------------------------------- | --------------------- | ------------------ |
| step       | `number` `undefined`                     | Шаг пагинации                                                                      | `10`                  | Любое число        |
| dataLength | `number`                                 | Длина массива, данные которого необходимо разделить                                | -                     | Любое число        |
| className  | `string` `undefined`                     | CSS класс                                                                          | `''`                  | Любая строка       |
| callback   | `(pagination: PaginationResult) => void` | Результат пагинации. Возвращает значения, на основании которого разделяется массив | -                     |                    |

#### Пример

```typescript jsx
import React, { useState } from "react"
import { Pagination, PaginationResult } from "itpc-ui-kit"

const MyComponent: React.FC = () => {
  const [start, setStart] = useState<number>(0)
  const [end, setEnd] = useState<number>(0)

  const paginationResult = (pagination: PaginationResult): void => {
    setStart(pagination.start)
    setEnd(pagination.end)
  }

  return (
    <Pagination
      step={10}
      dataLength={mockItems.length}
      callback={paginationResult}
    />
  )
}
```

---

### Popup

#### Props

| Название  | Тип                           | Описание                                                                                                                           | Значение по умолчанию | Возможные значения                                                                                                              |
| --------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| title     | `string`                      | Заголовок поп-апа                                                                                                                  | -                     | Любая строка                                                                                                                    |
| isOpen    | `boolean`                     | Флаг открытия поп-апа                                                                                                              | -                     | `'true', 'false'`                                                                                                               |
| size      | `PopupSize`                   | Определяет размер поп-апа. С телом или без.                                                                                        | `'normal'`            | `'small' 'normal'`                                                                                                              |
| variant   | `PopupVariant`                | Определяет тип поп-апа. По-умолчанию, ошибка, предупреждение или успех. В зависимости от типа, будет соответствующий цвет поп-апа. | `'default'`           | `'default' 'error' 'warning' 'success'`                                                                                         |
| position  | `PopupPosition`               | Определяет позицию поп-апа                                                                                                         | `'center-center'`     | `'top-left' 'top-center' 'top-right' 'center-left' 'center-center' 'center-right' 'bottom-left' 'bottom-center' 'bottom-right'` |
| className | `string` `undefined`          | CSS класс                                                                                                                          | `''`                  | Любая строка                                                                                                                    |
| children  | `React.ReactNode` `undefined` | children                                                                                                                           |                       |                                                                                                                                 |
| onClose   | `() => void`                  | Метод закрытия поп-апа                                                                                                             |                       |                                                                                                                                 |

#### Пример

```typescript jsx
import React, { useState } from "react"
import { Popup } from "itpc-ui-kit"

const MyComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const close = (): void => {
    setIsOpen(false)
  }

  return (
    <Popup title="My popup" isOpen={isOpen} onClose={close}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum est
      sagittis, odio tincidunt ipsum, lorem cras mollis.
    </Popup>
  )
}
```

---

### Preloader

#### Индикация загрузки в виде круга

#### Props

| Название  | Тип                  | Описание  | Значение по умолчанию | Возможные значения |
| --------- | -------------------- | --------- | --------------------- | ------------------ |
| className | `string` `undefined` | CSS класс | `''`                  | Любая строка       |

#### Пример

```typescript jsx
import React, { useState } from "react"
import { Preloader } from "itpc-ui-kit"

const MyComponent: React.FC = () => <Preloader />
```

---

### SearchField

#### Props

| Название    | Тип                                            | Описание                                             | Значение по умолчанию | Возможные значения    |
| ----------- | ---------------------------------------------- | ---------------------------------------------------- | --------------------- | --------------------- |
| defaultItem | `string` `undefined`                           | Id выбранного элемента по умолчанию                  | -                     | Id элемента из списка |
| items       | `Item[]`                                       | Список элементов для выбора                          | -                     | `Item[]`              |
| placeholder | `string` `undefined`                           | Подпись                                              | `''`                  | Любая строка          |
| isLoading   | `boolean`                                      | Флаг статуса загрузки                                | -                     | `'true', 'false'`     |
| isClear     | `boolean` `undefined`                          | Флаг принудительного очищения                        | `false`               | `'true', 'false'`     |
| className   | `string` `undefined`                           | CSS класс                                            | `''`                  | Любая строка          |
| handleClear | `() => void` `undefined`                       | Метод очищения элементов                             | -                     |                       |
| fetchData   | `(value: string) => Promise<void>` `undefined` | Метод отправки запроса на получение списка элементов | -                     |                       |
| onChange    | `(id: string) => void`                         | Метод выбора элемента                                | -                     |                       |

#### Пример

```typescript jsx
import React, { useState } from "react"
import { SearchField, Item } from "itpc-ui-kit"

const mockItems: Item[] = [
  {
    id: "1",
    value: "Cat",
  },
  {
    id: "2",
    value: "Dog",
  },
  {
    id: "3",
    value: "Duck",
  },
  {
    id: "4",
    value: "Bear",
  },
  {
    id: "5",
    value: "Mouse",
  },
  {
    id: "6",
    value: "Tiger",
  },
  {
    id: "7",
    value: "Lion",
  },
]

const MyComponent: React.FC = () => {
  const [items, setItems] = useState<Item[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)

  const onChange = (id: string): void => {
    setSelectedItem(items.find((item) => item.id === id) ?? null)
  }

  const fetchData = async (value: string) => {
    setIsLoading(true)
    await setTimeout(() => {
      setItems(mockItems)
      setIsLoading(false)
    }, 2000)
  }

  const clear = (): void => {
    setSelectedItem(null)
    setItems([])
  }

  return (
    <SearchField
      items={items}
      isLoading={isLoading}
      onChange={onChange}
      fetchData={fetchData}
      handleClear={clear}
    />
  )
}
```

---

### SelectField

#### Props

| Название      | Тип                       | Описание                            | Значение по умолчанию | Возможные значения    |
| ------------- | ------------------------- | ----------------------------------- | --------------------- | --------------------- |
| defaultItemId | `string` `undefined`      | Id выбранного элемента по умолчанию | -                     | Id элемента из списка |
| items         | `Item[]`                  | Список элементов для выбора         | -                     | `Item[]`              |
| placeholder   | `string` `undefined`      | Подпись                             | `''`                  | Любая строка          |
| disabled      | `boolean` `undefined`     | Флаг блокировки выбора              | `false`               | `'true', 'false'`     |
| className     | `string` `undefined`      | CSS класс                           | `''`                  | Любая строка          |
| onChange      | `(value: string) => void` | Метод выбора элемента               | -                     |                       |

#### Пример

```typescript jsx
import React, { useState } from "react"
import { SearchField, Item } from "itpc-ui-kit"

const mockItems: Item[] = [
  {
    id: "1",
    value: "Cat",
  },
  {
    id: "2",
    value: "Dog",
  },
  {
    id: "3",
    value: "Duck",
  },
  {
    id: "4",
    value: "Bear",
  },
  {
    id: "5",
    value: "Mouse",
  },
  {
    id: "6",
    value: "Tiger",
  },
  {
    id: "7",
    value: "Lion",
  },
]

const MyComponent: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)

  const onChange = (id: string): void => {
    setSelectedItem(mockItems.find((item) => item.id === id) ?? null)
  }

  return (
    <SelectField
      items={mockItems}
      defaultItemId={selectedItem?.id}
      onChange={onChange}
    />
  )
}
```

---

### Table

#### Table состоит из нескольких элементов

`1. Table - таблица`
<br>
`2. TableHeader - заголовок таблицы`
<br>
`3. TableBody - тело таблицы`
<br>
`4. TableFooter - подвал таблицы`
<br>
`5. Row - строка таблицы`
<br>
`6. Column - ячейка заголовка таблицы`
<br>
`7. Cell - ячейка тела таблицы`

#### Props

#### `<Table>` Props

| Название  | Тип                           | Описание        | Значение по умолчанию | Возможные значения |
| --------- | ----------------------------- | --------------- | --------------------- | ------------------ |
| id        | `string` `undefined`          | -               | `''`                  | Любая строка       |
| title     | `string` `undefined`          | Подпись таблицы | -                     | Любая строка       |
| className | `string` `undefined`          | CSS класс       | `''`                  | Любая строка       |
| children  | `React.ReactNode` `undefined` | children        |                       |                    |

#### `<TableHeader>` Props

| Название | Тип                           | Описание | Значение по умолчанию | Возможные значения |
| -------- | ----------------------------- | -------- | --------------------- | ------------------ |
| id       | `string` `undefined`          | -        | `''`                  | Любая строка       |
| children | `React.ReactNode` `undefined` | children |                       |                    |

#### `<TableBody>` Props

| Название | Тип                           | Описание | Значение по умолчанию | Возможные значения |
| -------- | ----------------------------- | -------- | --------------------- | ------------------ |
| children | `React.ReactNode` `undefined` | children |                       |                    |

#### `<TableFooter>` Props

| Название | Тип                           | Описание | Значение по умолчанию | Возможные значения |
| -------- | ----------------------------- | -------- | --------------------- | ------------------ |
| children | `React.ReactNode` `undefined` | children |                       |                    |

#### `<Row>` Props

| Название   | Тип                                                                   | Описание                   | Значение по умолчанию | Возможные значения |
| ---------- | --------------------------------------------------------------------- | -------------------------- | --------------------- | ------------------ |
| id         | `string` `undefined`                                                  | -                          | `''`                  | Любая строка       |
| children   | `React.ReactNode` `undefined`                                         | children                   |                       |                    |
| onPressRow | `(event?: React.MouseEvent<HTMLTableRowElement>) => void` `undefined` | Обработчик клика по строке |                       |                    |

#### `<Column>` Props

| Название      | Тип                                                                    | Описание                                     | Значение по умолчанию | Возможные значения |
| ------------- | ---------------------------------------------------------------------- | -------------------------------------------- | --------------------- | ------------------ |
| id            | `string` `undefined`                                                   | -                                            | `''`                  | Любая строка       |
| children      | `React.ReactNode` `undefined`                                          | children                                     |                       |                    |
| onPressColumn | `(event?: React.MouseEvent<HTMLTableCellElement>) => void` `undefined` | Обработчик клика по ячейке заголовка таблицы |                       |                    |

#### `<Cell>` Props

| Название    | Тип                                                                    | Описание                                | Значение по умолчанию | Возможные значения |
| ----------- | ---------------------------------------------------------------------- | --------------------------------------- | --------------------- | ------------------ |
| id          | `string` `undefined`                                                   | -                                       | `''`                  | Любая строка       |
| children    | `React.ReactNode` `undefined`                                          | children                                |                       |                    |
| onPressCell | `(event?: React.MouseEvent<HTMLTableCellElement>) => void` `undefined` | Обработчик клика по ячейке тела таблицы |                       |                    |

#### Пример

```typescript jsx
import React from "react"
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
  TableProps,
} from "itpc-ui-kit"

const MyComponent: React.FC = () => {
  return (
    <Table>
      <TableHeader>
        <Row>
          <Column>#</Column>
          <Column>Head 2</Column>
          <Column>Head 3</Column>
        </Row>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>1</Cell>
          <Cell>Column 2</Cell>
          <Cell>Column 3</Cell>
        </Row>
        <Row>
          <Cell>2</Cell>
          <Cell>Column 2</Cell>
          <Cell>Column 3</Cell>
        </Row>
        <Row>
          <Cell>3</Cell>
          <Cell>Column 2</Cell>
          <Cell>Column 3</Cell>
        </Row>
      </TableBody>
    </Table>
  )
}
```

---

### TableSort

Таблица поддерживает как просто отображение данных, так и сортировку по одному и двум столбцам. При передаче данных в колонку isSortable - true, сортировка будет произведена по алфавиту или используйте свой метод для сортировки передав метод с данными.

#### Props

| Название            | Тип                         | Описание         | Значение по умолчанию | Возможные значения                                  |
| ------------------- | --------------------------- | ---------------- | --------------------- | --------------------------------------------------- |
| className           | `string` `undefined`        | -                | `''`                  | Любая строка                                        |
| columns             | `dataColumns[]`             | Список элементов |                       | `dataColumns[]`                                     |
| rows                | `dataRows[]`                | Список элементов |                       | `dataRows[]`                                        |
| sortByNumberColumns | `NumberColumns` `undefined` |                  |                       | `NumberColumns.ONE` `NumberColumns.TWO` `undefined` |

#### Пример

```typescript jsx
import React from "react"
import { TableSort, NumberColumns } from "itpc-ui-kit"

interface RowType {
  id: string
  city: string
  population: string
}

const MyComponent: React.FC = () => {
  const dataRows: RowType[] = [
    { id: "1", city: "Тюмень", population: "861 098" },
    { id: "2", city: "Ишим", population: "64 011" },
    { id: "3", city: "Тобольск", population: "102 000" },
  ]

  const dataColumns = [
    {
      isSortable: false,
      name: "id",
      sorter: (a: RowType, b: RowType) => Number(a.id) - Number(b.id),
      title: "ID",
    },
    {
      isSortable: true,
      name: "city",
      title: "Город",
    },
    {
      isSortable: true,
      name: "population",
      sorter: (a: RowType, b: RowType) =>
        Number(a.population.replace(/\s+/g, "")) -
        Number(b.population.replace(/\s+/g, "")),
      title: "Население",
    },
  ]
  return (
    <TableSort
      sortByNumberColumns={NumberColumns.ONE}
      columns={dataColumns}
      rows={originalCounter()}
    />
  )
}
```

---

### Tabs

#### Props

| Название        | Тип                      | Описание                                       | Значение по умолчанию | Возможные значения |
| --------------- | ------------------------ | ---------------------------------------------- | --------------------- | ------------------ |
| items           | `TabsItem[]`             | Список элементов для переключения              | -                     | `Item[]`           |
| disabled        | `boolean` `undefined`    | Флаг блокировки переключения                   | `false`               | `'true', 'false'`  |
| className       | `string` `undefined`     | CSS класс                                      | `''`                  | Любая строка       |
| changeActiveTab | `(value: id) => void`    | Метод переключения вкладок                     | -                     |                    |
| ...props        | `[key: string]: unknown` | Пропсы, которые передаются компоненту TabsItem | -                     |                    |

#### Пример

```typescript jsx
import React, { useState } from "react"
import { Tabs, TabsItem } from "itpc-ui-kit"

const items: TabsItem[] = [
  {
    title: "First",
    content: <div>First tab</div>,
  },
  {
    title: "Second",
    content: <div>Second tab</div>,
  },
  {
    title: "Third",
    content: <div>Third tab</div>,
  },
]

const MyComponent: React.FC = () => <Tabs items={items} />
```

---

### Text

#### Props

| Название  | Тип                           | Описание  | Значение по умолчанию | Возможные значения |
| --------- | ----------------------------- | --------- | --------------------- | ------------------ |
| className | `string` `undefined`          | CSS класс | `''`                  | Любая строка       |
| children  | `React.ReactNode` `undefined` | children  |                       |                    |

#### Пример

```typescript jsx
import React from "react"
import { Text } from "itpc-ui-kit"

const MyComponent: React.FC = () => <Text>My text</Text>
```

---

### TextAreaField

#### Props

| Название        | Тип                                             | Описание                                          | Значение по умолчанию | Возможные значения    |
| --------------- | ----------------------------------------------- | ------------------------------------------------- | --------------------- | --------------------- |
| id              | `string`                                        | -                                                 | -                     | Любая строка          |
| name            | `string`                                        | -                                                 | -                     | Любая строка          |
| value           | `string` `undefined`                            | Значение инпута                                   | `''`                  | Любая строка          |
| disabled        | `boolean` `undefined`                           | Флаг блокировки ввода                             | `false`               | `'true', 'false'`     |
| placeholder     | `string` `undefined`                            | Подпись инпута                                    | `''`                  | Любая строка          |
| validationState | `ValidationState` `undefined`                   | Значение, определяющее валидность значения инпута | `'valid'`             | `'valid'` `'invalid'` |
| errorMessage    | `string` `undefined`                            | Текст ошибки при не валидности значения инпута    | `''`                  | Любая строка          |
| maxHeight       | `number` `undefined`                            | Максимальная высота поля в px                     | -                     | Любая строка          |
| className       | `string` `undefined`                            | CSS класс                                         | `''`                  | Любая строка          |
| onBlur          | `() => void` `undefined`                        | Событие onBlur, передаваемое инпуту               | -                     |                       |
| onFocus         | `() => void` `undefined`                        | Событие onFocus, передаваемое инпуту              | -                     |                       |
| onChange        | `(values: FormattedValues) => void` `undefined` | Событие onChange, передаваемое инпуту             | -                     |                       |

#### Пример

```typescript jsx
import React, { useState } from "react"
import { TextAreaField } from "itpc-ui-kit"

const MyComponent: React.FC = () => {
  const [value, setValue] = useState<string>("")

  const onChange = (valueInput: string): void => {
    setValue(valueInput)
  }

  return <TextAreaField value={value} onChange={onChange} />
}
```

---

### TextField

#### Props

| Название        | Тип                                             | Описание                                                                                   | Значение по умолчанию | Возможные значения                                     |
| --------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------ | --------------------- | ------------------------------------------------------ |
| id              | `string`                                        | -                                                                                          | -                     | Любая строка                                           |
| name            | `string`                                        | -                                                                                          | -                     | Любая строка                                           |
| value           | `string` `undefined`                            | Значение инпута                                                                            | `''`                  | Любая строка                                           |
| type            | `InputType` `undefined`                         | Тип инпута                                                                                 | `'text'`              | `'password', 'text'`                                   |
| state           | `InputState` `undefined`                        | Состояние инпута инпута. В зависимости от состояния, будет показана соответствующая иконка | `'default'`           | `'default', 'cancel', 'loading', 'success', 'warning'` |
| disabled        | `boolean` `undefined`                           | Флаг блокировки ввода                                                                      | `false`               | `'true', 'false'`                                      |
| placeholder     | `string` `undefined`                            | Подпись инпута                                                                             | `''`                  | Любая строка                                           |
| validationState | `ValidationState` `undefined`                   | Значение, определяющее валидность значения инпута                                          | `'valid'`             | `'valid'` `'invalid'`                                  |
| errorMessage    | `string` `undefined`                            | Текст ошибки при не валидности значения инпута                                             | `''`                  | Любая строка                                           |
| maxLength       | `number` `undefined`                            | Максимальная длина значения в инпуте                                                       | -                     | Любая строка                                           |
| className       | `string` `undefined`                            | CSS класс                                                                                  | `''`                  | Любая строка                                           |
| onBlur          | `() => void` `undefined`                        | Событие onBlur, передаваемое инпуту                                                        | -                     |                                                        |
| onFocus         | `() => void` `undefined`                        | Событие onFocus, передаваемое инпуту                                                       | -                     |                                                        |
| onChange        | `(values: FormattedValues) => void` `undefined` | Событие onChange, передаваемое инпуту                                                      | -                     |                                                        |
| onClickIcon     | `() => void` `undefined`                        | Событие onClick, передаваемое иконке инпута                                                | -                     |                                                        |

#### Пример

```typescript jsx
import React, { useState } from "react"
import { TextField } from "itpc-ui-kit"

const MyComponent: React.FC = () => {
  const [value, setValue] = useState<string>("")

  const onChange = (valueInput: string): void => {
    setValue(valueInput)
  }

  return <TextField value={value} onChange={onChange} />
}
```

---

## Прочее

### ConfigProvider

Обеспечивает поддержку конфигурации theme компонентов.
Этот компонент предоставляет конфигурацию всем компонентам React, расположенным ниже него, с помощью контекстного API. В дереве рендеринга все компоненты будут иметь доступ к предоставленной конфигурации.

#### Пример

```typescript jsx
import React, { useState } from "react"
import { createRoot } from "react-dom/client"
import { ConfigProvider, Theme } from "itpc-ui-kit"
import App from "./App"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <ConfigProvider theme={Theme.Dark}>
    <App />
  </ConfigProvider>
)
```

---

## Утилитарные типы

```typescript
// UIKitColors - цвета, используемые в ките
enum UIKitColors {
  black = "#000",
  green = "#4DB04D",
  grey = "#B2B7C7",
  greyLight = "#E5E5E5",
  white = "#FFF",
  redDark = "#C9184A",
  red = "#D42564",
  yellow = "#DCB21E",
  purple = "#5C53AC",
  purpleLight = "#6F65CB",
}

// FormattedValues - интерфейс для работы с компонентами ввода, где подразумевается ввод только чисел.  Используется в NumberField, DatePicker
interface FormattedValues {
  value: string
  formattedValue: string
}

// Item - интерфейс описывает элемент выпадающего списка. Используется в SelectField, MultiSelectField, SearchField
interface Item {
  id: string
  value: string
}

// TabsItem - интерфейс описывает элемент таба. Используется в Tabs
interface TabsItem {
  title: string
  content: React.ReactElement<React.ReactNode>
}

// PaginationResult - интерфейс описывает возвращаемое значение элемента Pagination.
interface PaginationResult {
  currentPage?: number
  start: number
  end: number
}
```

## License

The MIT License.
