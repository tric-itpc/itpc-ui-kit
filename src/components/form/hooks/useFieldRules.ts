import { useMemo } from "react"

import { DEFAULT_REQUIRED_MESSAGE } from "../constants"
import { Rule } from "../types"

interface UseFieldRulesProps {
  required?: boolean
  rules?: Rule[]
}

export const useFieldRules = ({
  required = false,
  rules = [],
}: UseFieldRulesProps): Rule[] =>
  useMemo(() => {
    if (!required) {
      return rules
    }

    const hasRequired = rules.some((r) => r.required)

    return hasRequired
      ? rules
      : [{ message: DEFAULT_REQUIRED_MESSAGE, required: true }, ...rules]
  }, [required, JSON.stringify(rules)])
