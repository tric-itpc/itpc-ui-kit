import { useCallback, useRef, useState } from "react"

import { type } from "node:os"

import { DEFAULT_REQUIRED_MESSAGE } from "../constants"
import { Field, FormInstance, ValidateError } from "../types"

export const useForm = (): FormInstance => {
  const [, forceUpdate] = useState({})

  const fieldsRef = useRef<Record<string, Field>>({})
  const errorsRef = useRef<Record<string, ValidateError[]>>({})

  const registerField = useCallback((field: Field) => {
    fieldsRef.current[field.name] = field
  }, [])

  const unregisterField = useCallback((name: string) => {
    delete fieldsRef.current[name]
    delete errorsRef.current[name]
  }, [])

  const getFieldsValue = useCallback(() => {
    const result: Record<string, any> = {}
    Object.keys(fieldsRef.current).forEach((key) => {
      result[key] = fieldsRef.current[key].value
    })
    return result
  }, [])

  const getFieldValue = useCallback(
    (name: string) => fieldsRef.current[name]?.value,
    []
  )

  const setFieldsValue = useCallback((values: Record<string, any>) => {
    let count = 0

    Object.keys(fieldsRef.current).forEach((key) => {
      if (values[key] !== undefined) {
        fieldsRef.current[key] = values[key]
        count++
      }
    })

    if (count > 0) {
      forceUpdate({})
    }
  }, [])

  const setFieldValue = useCallback((name: string, value: any) => {
    if (fieldsRef.current[name]) {
      fieldsRef.current[name].value = value
      forceUpdate({})
    }
  }, [])

  const getFieldsError = useCallback(() => {
    const errors: Record<string, ValidateError[]> = {}
    Object.keys(errorsRef.current).forEach((key) => {
      errors[key] = errorsRef.current[key]
    })
    return errors
  }, [])

  const getFieldError = useCallback(
    (name: string) => errorsRef.current[name] || [],
    []
  )

  const validateField = useCallback((name: string) => {
    const field = fieldsRef.current[name]
    const value = field?.value
    const errors: ValidateError[] = []

    if (field?.rules) {
      for (const rule of field.rules) {
        if (
          rule.required &&
          (value === null || value === undefined || value === "")
        ) {
          errors.push({ message: rule.message || DEFAULT_REQUIRED_MESSAGE })
          continue
        }

        if (typeof rule.validator === "function") {
          const error = rule.validator(value)

          if (error !== null && typeof error !== "boolean") {
            errors.push(error)
          }
        }
      }
    }

    errorsRef.current[name] = errors
    return { errors, isValid: errors.length === 0 }
  }, [])

  const validateFields = useCallback(() => {
    let isValid = true

    Object.keys(fieldsRef.current).forEach((name) => {
      const result = validateField(name)
      if (!result.isValid) {
        isValid = false
      }
    })

    forceUpdate({})
    return isValid
  }, [validateField])

  return {
    getFieldError,
    getFieldsError,
    getFieldsValue,
    getFieldValue,
    registerField,
    setFieldsValue,
    setFieldValue,
    unregisterField,
    validateField,
    validateFields,
  }
}
