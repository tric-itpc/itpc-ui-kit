# ITPC UI Kit

## _Build React Apps with ITPC Design_

## Installation

```sh
// with npm
npm install itpc-ui-kit

// with yarn
yarn add itpc-ui-kit
```

## Usage
* Import by adding `import { Component } from 'itpc-ui-kit'`.
* Use by adding `<Component />`.

Here's an example of basic usage:

```typescript jsx
import React, { useState } from "react"
import { Button } from 'itpc-ui-kit'

const MyButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return <Button onPress={() => setIsOpen(!isOpen)}>MyButton</Button>
}
```

## User guide
### Button
#### Props
| Prop name | Type                           | Description  | Default value  | Example values                 |
|-----------|--------------------------------|--------------|----------------|--------------------------------|
| type      | `'button', 'submit',  'reset'` | Button type  | `'button'`     | `'button', 'submit',  'reset'` |
| variant   | `'purple', 'white', 'red'`     | Button color | `'purple'`     | `'purple', 'white', 'red'`     |

#### Example
```typescript jsx
import React, { useState } from "react"
import { Button } from 'itpc-ui-kit'

const MyComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  const onHandleIsOpen = (): void => {
    setIsOpen(!isOpen)
  }
  
  return (
    <Button 
      onPress={onHandleIsOpen} 
      variant={isOpen ? 'purple' : 'red'}
    >
      {isOpen ? 'Purple' : 'Red'} button
    </Button>
  )
}
```

### InputField
#### Props
| Prop name       | Type                                                   | Description                                                                  | Default value  | Example values               |
|-----------------|--------------------------------------------------------|------------------------------------------------------------------------------|----------------|------------------------------|
| id              | `string`                                               | Input id                                                                     | `'itpc-input'` | Any string                   |
| name            | `string`                                               | Input name                                                                   | `'itpc-input'` | Any string                   |
| type            | `'password', 'text', 'date'`                           | Input type                                                                   | `'text'`       | `'password', 'text', 'date'` |
| value           | `string`                                               | Input value                                                                  | Empty string   | `'purple', 'white', 'red'`   |
| disabled        | `boolean`                                              | Input disabled                                                               | `false`        | `true or false`              |
| maxLength       | `number`                                               | Input max length value                                                       | none           | Any number                   |
| label           | `string`                                               | Input label                                                                  | Empty string   | Any string                   |
| placeholder     | `string`                                               | Input placeholder                                                            | Empty string   | Any string                   |
| state           | `'default', 'cancel', 'loading', 'success', 'warning'` | Input state. Depending on the state, shows an icon                           | `default`      | Any string                   |
| validationState | `'valid', 'invalid'`                                   | Input validation. If invalid - change color to red and show an error message | `valid`        | `'valid', 'invalid'`         |
| errorMessage    | `string`                                               | Input error message. If input state invalid - show an error message          | Empty string   | `Wrong phone number!`        |
| onBlur          | `() => void`                                           | Fires when focus is lost from input                                          | none           |                              |
| onFocus         | `() => void`                                           | Fires when the input is in focus                                             | none           |                              |
| onChange        | `(value: string) => void`                              | Will work when entering a value in the input                                 | none           |                              |

#### Example
```typescript jsx
import React, { useState } from "react"
import { InputField } from 'itpc-ui-kit'

const MyComponent: React.FC = () => {
  const [value, setValue] = useState<string>('')
  
  const onChangeValue = (value: string): void => {
    setValue(value)
  }
  
  return (
    <InputField
      id="1"
      name="input"
      placeholder="Placeholder"
      label="+7"
      onChange={onChangeValue}
      validationState={value.startsWith('9') ? 'valid' : 'invalid'}
      errorMessage="Value invalid"
    />
  )
}
```

### Modal
#### Props
| Prop name          | Type         | Description                              | Default value | Example values |
|--------------------|--------------|------------------------------------------|---------------|----------------|
| title              | `string`     | Modal title                              | none          | `Title`        |
| isOpen             | `boolean`    | Modal open                               | none          | `true`         |
| isOverlayClickable | `boolean`    | Closing modal window on click on overlay | `false`       | `true`         |
| onClose            | `() => void` | Modal close function                     | none          |                |

#### Example
```typescript jsx
import React, { useState } from "react"
import { 
  Button, 
  InputField,
  Modal,
  ModalContent,
  ModalFooter
} from 'itpc-ui-kit'

const MyComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  const onHandleIsOpen = (): void => {
    setIsOpen(!isOpen)
  }
  
  return (
    <Modal 
      title="Modal window"
      isOpen={isOpen}
      onClose={onHandleIsOpen}
    >
      <>
        <ModalContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ModalContent>
        <ModalFooter>
          <Button
            variant="white"
            onPress={onHandleIsOpen}
          >
            Cancel
          </Button>
          <Button onPress={onHandleIsOpen}>Ok</Button>
        </ModalFooter>
      </>
    </Modal>
  )
}
```

### Popup
#### Props
| Prop name | Type                                                                                                                                    | Description            | Default value    | Example values |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------|------------------------|------------------|----------------|
| title     | `string`                                                                                                                                | Popup title            | none             | `Title`        |
| isOpen    | `boolean`                                                                                                                               | Popup open             | none             | `true`         |
| size      | `'small', 'normal'`                                                                                                                     | Popup size             | `normal`         | `normal`       |
| variant   | `'default', 'error', 'warning', 'success'`                                                                                              | Popup color            | `default`        | `default`      |
| position  | `'top-left', 'top-center', 'top-right', 'center-left', 'center-center', 'center-right', 'bottom-left', 'bottom-center', 'bottom-right'` | Popup position in page | `center-center ` | `true`         |
| onClose   | `() => void`                                                                                                                            | Popup close function   | none             |                |

#### Example
```typescript jsx
import React, { useState } from "react"
import { Popup } from 'itpc-ui-kit'

const MyComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  const onHandleIsOpen = (): void => {
    setIsOpen(!isOpen)
  }
  
  return (
    <Popup 
      isOpen={isOpen} 
      onClose={onHandleIsOpen}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum est sagittis, odio tincidunt ipsum, lorem cras mollis.
    </Popup>
  )
}
```

### Preloader
#### Props
| Prop name   | Type     | Description     | Default value | Example values |
|-------------|----------|-----------------|---------------|----------------|
| size        | `number` | Preloader size  | `25`          | `true`         |
| borderWidth | `number` | Preloader color | `4`           | `true`         |

#### Example
```typescript jsx
import React, { useState } from "react"
import { Preloader } from 'itpc-ui-kit'

const MyComponent: React.FC = () => <Preloader size={30} borderWidth={3} />
```

### SelectField
#### Props
| Prop name     | Type                              | Description                | Default value | Example values                                            |
|---------------|-----------------------------------|----------------------------|---------------|-----------------------------------------------------------|
| items         | `{ id: string, value: string }[]` | List of items              | none          | `[{id: '1', value: 'First }, {id: '2', value: 'Second }]` |
| defaultItemId | `string`                          | Initially selected item    | `null`        | `1`                                                       |
| placeholder   | `string`                          | SelectField placeholder    | none          | `Placeholder`                                             |
| disabled      | `boolean`                         | SelectField disabled       | `false`       | `true`                                                    |
| onChange      | `(value: string) => void`         | SelectField close function | none          |                                                           |

#### Example
```typescript jsx
import React, { useState } from "react"
import { SelectField } from 'itpc-ui-kit'

const mockItems = [
  {
    id: '1',
    value: 'Cat'
  }, {
    id: '2',
    value: 'Dog'
  }, {
    id: '3',
    value: 'Duck'
  }, {
    id: '4',
    value: 'Bear'
  }
]

const MyComponent: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)

  const onChange = (id: string): void => {
    setSelectedItem(mockItems.find((item) => item.id === id) ?? null)
  }

  return (
    <SelectField items={mockItems} defaultItemId={selectedItem?.id} onChange={onChange} />
  )
}
```

### Table
#### Props
| Prop name | Type            | Description  | Default value | Example values |
|-----------|-----------------|--------------|---------------|----------------|
| title     | `string`        | Table title  | none          | `Title`        |

### Row
#### Props
| Prop name  | Type         | Description    | Default value |
|------------|--------------|----------------|---------------|
| onPressRow | `() => void` | Click on a row | none          |

#### Example
```typescript jsx
import React, { useState } from "react"
import { Button } from 'itpc-ui-kit'

const MyComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  const onHandleIsOpen = (): void => {
    setIsOpen(!isOpen)
  }
  
  return (
    <Table title="Table title">
      <TableHeader>
        <Row>
          <Column>Head 1</Column>
          <Column>Head 2</Column>
          <Column>Head 3</Column>
        </Row>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>Column 1</Cell>
          <Cell>Column 2</Cell>
          <Cell>Column 3</Cell>
        </Row>
        <Row>
          <Cell>Column 1</Cell>
          <Cell>Column 2</Cell>
          <Cell>Column 3</Cell>
        </Row>
        <Row>
          <Cell>Column 1</Cell>
          <Cell>Column 2</Cell>
          <Cell>Column 3</Cell>
        </Row>
      </TableBody>
    </Table>
  )
}
```

## License

The MIT License.