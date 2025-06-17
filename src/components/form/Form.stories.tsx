import React from "react"

import { Meta, StoryObj } from "@storybook/react"

import { Button } from "../buttons/Button"
import { Checkbox } from "../inputs/Checkbox"
import { DatePicker } from "../inputs/DatePicker"
import { NumberField } from "../inputs/NumberField"
import { SelectField } from "../inputs/SelectField"
import { TextField } from "../inputs/TextField"
import { Flex } from "../layout/Flex"

import { Form } from "./Form"
import { FormField } from "./FormField"
import { FormItem } from "./FormItem"
import { useForm } from "./hooks/useForm"

const meta: Meta<typeof Form> = {
  component: Form,
  parameters: {
    docs: {
      description: {
        component:
          "### Компоненты для построения форм\n" +
          "- **Form** — оборачивает форму, управляет состоянием и валидацией\n" +
          "- **FormItem** — вручную используется для отображения поля, прокидывает value, onChange, ошибки\n" +
          "- **FormField** — автоматическая обёртка над FormItem + компонентом поля, проставляет valuePropName и getValueFromEvent автоматически\n" +
          "- **FormContext** — используется внутри, содержит значения, ошибки, методы валидации и регистрации полей\n" +
          "\nИспользуйте **FormField** для интеграции с UI-китом. **FormItem** применяйте для сторонних компонентов или ручной настройки.",
      },
    },
  },
  subcomponents: {
    // @ts-ignore
    FormField,
    // @ts-ignore
    FormItem,
  },
  title: "Form/Form",
}

export default meta

const SmallForm = () => {
  const form = useForm()

  return (
    <Flex gap={12} vertical>
      <Form form={form}>
        <Flex gap={12} vertical>
          <FormField
            component={TextField}
            name="email"
            placeholder="Email"
            required
          />
          <FormField
            component={Checkbox}
            componentProps={{ label: "Согласие" }}
            name="agree"
            placeholder="Согласие"
          />

          <Button type="submit">Отправить</Button>
        </Flex>
      </Form>

      {
        <pre>
          Значения формы: {JSON.stringify(form.getFieldsValue(), null, 2)}
        </pre>
      }
      {
        <pre>
          Ошибки формы: {JSON.stringify(form.getFieldsError(), null, 2)}
        </pre>
      }
    </Flex>
  )
}

export const Small: StoryObj = {
  name: "Маленькая форма",
  parameters: {
    docs: {
      source: {
        code: `
const SmallForm = () => {
  const form = useForm()

  return (
    <>
      <Form form={form}>
        <FormField
          component={TextField}
          name="email"
          placeholder="Email"
          required
        />
        <FormField
          component={Checkbox}
          componentProps={{ label: "Согласие" }}
          name="agree"
          placeholder="Согласие"
        />

        <Button type="submit">Отправить</Button>
      </Form>

      {
        <pre>
          Значения формы: {JSON.stringify(form.getFieldsValue(), null, 2)}
        </pre>
      }
      {
        <pre>
          Ошибки формы: {JSON.stringify(form.getFieldsError(), null, 2)}
        </pre>
      }
    </>
  )
}`,
      },
    },
  },
  render: () => <SmallForm />,
}

const MediumForm = () => {
  const form = useForm()

  return (
    <Flex gap={12} vertical>
      <Form form={form}>
        <Flex gap={12} vertical>
          <FormField
            component={TextField}
            name="fullName"
            placeholder="ФИО"
            rules={[{ message: "Введите ФИО", required: true }]}
          />
          <FormField component={NumberField} name="age" placeholder="Возраст" />
          <FormField
            componentProps={{
              items: [
                { id: "m", value: "Мужской" },
                { id: "f", value: "Женский" },
              ],
            }}
            component={SelectField}
            name="gender"
            placeholder="Пол"
          />
          <FormField
            component={DatePicker}
            name="birthDate"
            placeholder="Дата рождения"
            required
          />

          <Button type="submit">Отправить</Button>
        </Flex>
      </Form>

      {
        <pre>
          Значения формы: {JSON.stringify(form.getFieldsValue(), null, 2)}
        </pre>
      }
      {
        <pre>
          Ошибки формы: {JSON.stringify(form.getFieldsError(), null, 2)}
        </pre>
      }
    </Flex>
  )
}

export const Medium: StoryObj = {
  name: "Средняя форма",
  parameters: {
    docs: {
      source: {
        code: `
const MediumForm = () => {
  const form = useForm()

  return (
    <>
      <Form form={form}>
        <FormField
          component={TextField}
          name="fullName"
          placeholder="ФИО"
          rules={[{ message: "Введите ФИО", required: true }]}
        />
        <FormField component={NumberField} name="age" placeholder="Возраст" />
        <FormField
          componentProps={{
            items: [
              { id: "m", value: "Мужской" },
              { id: "f", value: "Женский" },
            ],
          }}
          component={SelectField}
          name="gender"
          placeholder="Пол"
        />
        <FormField
          component={DatePicker}
          name="birthDate"
          placeholder="Дата рождения"
          required
        />

        <Button type="submit">Отправить</Button>
      </Form>

      {
        <pre>
          Значения формы: {JSON.stringify(form.getFieldsValue(), null, 2)}
        </pre>
      }
      {
        <pre>
          Ошибки формы: {JSON.stringify(form.getFieldsError(), null, 2)}
        </pre>
      }
    </>
  )
}`,
      },
    },
  },
  render: () => <MediumForm />,
}

const LargeForm = () => {
  const form = useForm()

  return (
    <Flex gap={12} vertical>
      <Form
        onFailure={(errors) => {
          console.log("Submit error form", errors)
        }}
        onFinish={(values) => {
          console.log("Submit form", values)
        }}
        form={form}
        initialValues={{ agree: true }}
      >
        <Flex gap={12} vertical>
          <FormField component={TextField} name="name" placeholder="Имя" />
          <FormField
            component={TextField}
            name="surname"
            placeholder="Фамилия"
          />
          <FormField component={TextField} name="phone" placeholder="Телефон" />
          <FormField component={TextField} name="email" placeholder="Email" />
          <FormField
            rules={[
              {
                validator: (v) =>
                  v?.length !== 10 && {
                    message:
                      "Введите правильное значение паспорта (10 символов)",
                  },
              },
            ]}
            component={TextField}
            name="passport"
            placeholder="Паспорт"
          />
          <FormField
            component={TextField}
            name="issuedBy"
            placeholder="Кем выдан"
          />
          <FormField component={TextField} name="inn" placeholder="ИНН" />
          <FormField component={TextField} name="snils" placeholder="СНИЛС" />
          <FormField component={TextField} name="address" placeholder="Адрес" />
          <FormField
            component={Checkbox}
            componentProps={{ label: "Согласие" }}
            name="largeAgree"
            placeholder="Согласие"
          />

          <Button type="submit">Отправить</Button>
        </Flex>
      </Form>

      {
        <pre>
          Значения формы: {JSON.stringify(form.getFieldsValue(), null, 2)}
        </pre>
      }
      {
        <pre>
          Ошибки формы: {JSON.stringify(form.getFieldsError(), null, 2)}
        </pre>
      }
    </Flex>
  )
}

export const Large: StoryObj = {
  name: "Большая форма",
  parameters: {
    docs: {
      source: {
        code: `
const LargeForm = () => {
  const form = useForm()

  return (
    <>
      <Form form={form} initialValues={{ agree: true }}>
        <FormField component={TextField} name="name" placeholder="Имя" />
        <FormField component={TextField} name="surname" placeholder="Фамилия" />
        <FormField component={TextField} name="phone" placeholder="Телефон" />
        <FormField component={TextField} name="email" placeholder="Email" />
        <FormField
          rules={[
            {
              validator: (v) =>
                v?.length !== 10 && {
                  message: "Введите правильное значение паспорта (10 символов)",
                },
            },
          ]}
          component={TextField}
          name="passport"
          placeholder="Паспорт"
        />
        <FormField
          component={TextField}
          name="issuedBy"
          placeholder="Кем выдан"
        />
        <FormField component={TextField} name="inn" placeholder="ИНН" />
        <FormField component={TextField} name="snils" placeholder="СНИЛС" />
        <FormField component={TextField} name="address" placeholder="Адрес" />
        <FormField
          component={Checkbox}
          componentProps={{ label: "Согласие" }}
          name="agree"
          placeholder="Согласие"
        />

        <Button type="submit">Отправить</Button>
      </Form>

      {
        <pre>
          Значения формы: {JSON.stringify(form.getFieldsValue(), null, 2)}
        </pre>
      }
      {
        <pre>
          Ошибки формы: {JSON.stringify(form.getFieldsError(), null, 2)}
        </pre>
      }
    </>
  )
}`,
      },
    },
  },
  render: () => <LargeForm />,
}
