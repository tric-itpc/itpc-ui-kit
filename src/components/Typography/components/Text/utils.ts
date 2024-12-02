import React from "react"

import cn from "classnames"

import { TextTag } from "../../../../enums"
import { generateBaseClassList } from "../utils"

import { ClassListProps } from "./types"

export const getTag = (
  tag: TextTag
): keyof Pick<React.JSX.IntrinsicElements, TextTag> => tag

export const generateClassList = (props: ClassListProps): string =>
  cn("itpc-text", generateBaseClassList(props))
