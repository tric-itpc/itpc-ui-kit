import { createContext, useContext } from "react"

import { FormInstance } from "./types"

export const FormContext = createContext<FormInstance | null>(null)

export const useFormContext = (): FormInstance => {
  const ctx = useContext(FormContext)
  if (!ctx) {
    throw new Error("useFormContext должен использоваться внутри <Form>")
  }
  return ctx
}
