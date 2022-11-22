import React from "react"
import cn from 'classnames'

import './styles.css'

export interface PreloaderProps {
  className?: string
}

export const Preloader: React.FC<PreloaderProps> = ({
  className = ''
}) => (
  <span className={cn('itpc-preloader', className)} />
)
