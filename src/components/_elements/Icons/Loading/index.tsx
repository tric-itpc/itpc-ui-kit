import React from "react"

import { Preloader } from "../../../Preloader"

import { Icon } from '../styled'

export const Loading: React.FC = () => (
  <Icon>
    <Preloader borderWidth={2} size={20} />
  </Icon>
)
