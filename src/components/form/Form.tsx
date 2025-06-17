import React, { useEffect } from "react"

import { FormContext } from "./FormContext"
import { useForm } from "./hooks/useForm"
import { FormInstance, ValidateError } from "./types"

interface Props {
  /** Дочерние элементы формы */
  children: React.ReactNode
  /** Дополнительный класс */
  className?: string
  /** Инстанс формы, управляемый через хук useForm */
  form?: FormInstance
  /** Дефолтное значение формы */
  initialValues?: Record<string, any>
  /** Метод не успешной отправки формы */
  onFailure?: (values: Record<string, ValidateError[]>) => void
  /** Метод успешной отправки формы */
  onFinish?: (values: Record<string, any>) => void
}

export const Form: React.FC<Props> = ({
  children,
  className,
  form,
  initialValues,
  onFailure,
  onFinish,
}) => {
  const internalForm = useForm()
  const contextValue = form || internalForm

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const isValid = contextValue.validateFields()

    if (isValid && onFinish) {
      const values = contextValue.getFieldsValue()
      onFinish(values)
    }

    if (!isValid && onFailure) {
      const errors = contextValue.getFieldsError()
      onFailure(errors)
    }
  }

  useEffect(() => {
    if (initialValues) {
      contextValue.setFieldsValue(initialValues)
    }
  }, [])

  return (
    <FormContext.Provider value={contextValue}>
      <form className={className} onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  )
}
