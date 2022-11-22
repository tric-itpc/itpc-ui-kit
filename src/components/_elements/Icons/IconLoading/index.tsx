import React from "react"

import { Preloader } from "../../../Preloader"

import './styles.css'

export const IconLoading: React.FC = () => (
  <i className="itpc-icon__loading">
    <Preloader className="itpc-icon__preloader" />
  </i>
)
