import React from "react"

export const getComponentName = (Component: React.ElementType): string =>
  typeof Component === "string"
    ? Component
    : Component.displayName || Component.name || "Unknown"
