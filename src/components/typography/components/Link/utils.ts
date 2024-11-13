import cn from "classnames"

import { generateBaseClassList } from "../utils"

import { ClassListProps } from "./types"

export const generateClassList = (props: ClassListProps): string =>
  cn(
    "itpc-link",
    props.disabled && "itpc-link_disabled",
    generateBaseClassList(props)
  )
