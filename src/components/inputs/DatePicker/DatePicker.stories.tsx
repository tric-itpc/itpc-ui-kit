import React, { useState } from "react"

import { Meta, type StoryObj } from "@storybook/react"
import moment from "moment"

import { DatePicker, FormattedValues } from "../../index"

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: "Inputs/DatePicker",
}

export default meta

type Story = StoryObj<typeof DatePicker>

const Template: React.FC = (args) => {
  const [date, setDate] = useState<FormattedValues>({
    formattedValue: "",
    value: "",
  })

  const onChange = (inputValue: FormattedValues): void => {
    setDate(inputValue)
  }

  return <DatePicker {...args} onChange={onChange} value={date.value} />
}

export const Basic: Story = {
  args: {
    id: "basic",
    name: "basic",
    placeholder: "Select date",
  },
  name: "Базовый",
}

export const Controlled: Story = {
  args: {
    id: "controlled",
    name: "controlled",
    placeholder: "Select date",
  },
  name: "Управляемый",
  render: ({ ...args }) => <Template {...args} />,
}

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
    id: "disabled",
    name: "disabled",
  },
  name: "Отключено",
}

export const WithValue: Story = {
  args: {
    ...Basic.args,
    id: "with-value",
    name: "with-value",
    value: "01012000",
  },
  name: "Значение",
}

export const WithoutIcon: Story = {
  args: {
    ...Basic.args,
    id: "without-icon",
    isShowIcon: false,
    name: "without-icon",
  },
  name: "Без иконки",
}

export const WithIconClickable: Story = {
  args: {
    ...Basic.args,
    id: "with-icon-clickable",
    isIconClickable: true,
    name: "with-icon-clickable",
  },
  name: "Кликабельная иконка",
}

export const WithActiveDates: Story = {
  args: {
    ...Basic.args,
    activeDates: [
      moment().format("YYYY-MM-DD"),
      moment().add(1, "day").format("YYYY-MM-DD"),
    ],
    id: "with-active-dates",
    isIconClickable: true,
    name: "with-active-dates",
  },
  name: "Активные даты",
}

export const WithDisabledActiveDates: Story = {
  args: {
    ...Basic.args,
    disabledAfterDate: moment().format("YYYY-MM-DD"),
    id: "with-disabled-active-dates",
    isIconClickable: true,
    name: "with-disabled-active-dates",
  },
  name: "Отключение дат после даты",
}

export const WithDisabledBeforeDates: Story = {
  args: {
    ...Basic.args,
    disabledBeforeDate: moment().format("YYYY-MM-DD"),
    id: "with-disabled-before-dates",
    isIconClickable: true,
    name: "with-disabled-before-dates",
  },
  name: "Отключение дат до даты",
}

export const WithDisabledDates: Story = {
  args: {
    ...Basic.args,
    disabledDates: [
      moment().add(1, "day").format("YYYY-MM-DD"),
      moment().add(2, "day").format("YYYY-MM-DD"),
    ],
    id: "with-disabled-dates",
    isIconClickable: true,
    name: "with-disabled-dates",
  },
  name: "Отключение дат",
}

export const WithDisabledDaysOfWeek: Story = {
  args: {
    ...Basic.args,
    disabledDaysOfWeek: [6, 7],
    id: "with-disabled-days-of-week",
    isIconClickable: true,
    name: "with-disabled-days-of-week",
  },
  name: "Отключение дней недели",
}

export const WithDisabledSelectMonth: Story = {
  args: {
    ...Basic.args,
    disabledSelectMonth: true,
    id: "with-disabled-select-month",
    isIconClickable: true,
    name: "with-disabled-select-month",
  },
  name: "Отключение выбора месяца",
}

export const WithDisabledSelectYear: Story = {
  args: {
    ...Basic.args,
    disabledSelectYear: true,
    id: "with-disabled-select-year",
    isIconClickable: true,
    name: "with-disabled-select-year",
  },
  name: "Отключение выбора года",
}

export const WithOffsetYear: Story = {
  args: {
    ...Basic.args,
    id: "with-offset-year",
    isIconClickable: true,
    name: "with-offset-year",
    offsetYear: 100,
  },
  name: "Отображение лет перед и после текущего",
}

export const WithScrollToYear: Story = {
  args: {
    ...Basic.args,
    id: "with-scroll-to-year",
    isIconClickable: true,
    name: "with-scroll-to-year",
    offsetYear: 100,
    scrollToYear: 2000,
  },
  name: "Прокрутка к выбранному году",
}

export const WithYearsFromTo: Story = {
  args: {
    ...Basic.args,
    id: "with-years-from-to",
    isIconClickable: true,
    name: "with-years-from-to",
    yearsFromTo: [moment().year(), moment().add(2, "year").year()],
  },
  name: "Отображение периода лет",
}
