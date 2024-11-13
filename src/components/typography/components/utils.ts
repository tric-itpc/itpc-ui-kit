import cn from "classnames"

import { BaseClassListProps } from "./types"

export const generateBaseClassList = (props: BaseClassListProps): string =>
  cn(
    props.type && `itpc-text_color_${props.type}`,
    props.size && `itpc-text_size_${props.size}`,
    props.weight && `itpc-text_weight_${props.weight}`,
    props.through && "itpc-text_through",
    props.underline && "itpc-text_underline",
    props.className
  )
