import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import {
  TableSort,
  ITableSortProps,
  IDataTitle,
  IDataBody,
} from "../components/TableSort"

export default {
  title: "Components/TableSort",
  component: TableSort,
} as ComponentMeta<React.FC<ITableSortProps>>

const dataTitle: IDataTitle[] = [
  {
    key: "id1",
    dataIndex: "name",
    title: "Name",
    sorter: (a: IDataBody, b: IDataBody) => a.name.length - b.name.length,
    isSortable: true,
  },
  {
    key: "id2",
    dataIndex: "age",
    title: "Age",
    sorter: (a: IDataBody, b: IDataBody) => Number(a.age) - Number(b.age),
    isSortable: true,
  },
  {
    key: "id3",
    dataIndex: "duty",
    title: "Duty",
    sorter: (a: IDataBody, b: IDataBody) => Number(a.duty) - Number(b.duty),
    isSortable: true,
  },
]

const dataBody: IDataBody[] = [
  { key: "1", name: "Сергей", age: "25", duty: "50" },
  { key: "4", name: "Рома", age: "19", duty: "500.02" },
  { key: "5", name: "Алексей", age: "9", duty: "1.10" },
  { key: "6", name: "Борис", age: "19", duty: "250" },
  { key: "2", name: "Сергей", age: "35", duty: "51" },
  { key: "7", name: "Яша", age: "100", duty: "250" },
  { key: "3", name: "Сергей", age: "45", duty: "49" },
]

const Template: ComponentStory<React.FC<ITableSortProps | null>> = (args) => (
  <TableSort
    captionTable="Table caption"
    titleColumns={dataTitle}
    sourceData={dataBody}
    {...args}
  />
)

export const Basic = Template.bind({})
Basic.args = {
  captionTable: "Table caption",
}
