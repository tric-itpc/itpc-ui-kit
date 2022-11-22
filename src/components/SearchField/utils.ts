import { InputState } from "../types"

export const getSearchState = (isLoading: boolean, value: string): InputState => {
  if (isLoading) {
    return 'loading'
  }

  if (value.length) {
    return 'cancel'
  }

  return 'default'
}
