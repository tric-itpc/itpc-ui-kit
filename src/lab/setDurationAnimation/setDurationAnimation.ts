import type { DurationAnimation } from "../../components/types"

export const setDurationAnimation = (
  durationAnimation: DurationAnimation,
  openClass: string,
  closeClass: string
) => {
  if (durationAnimation.durationClose !== 0) {
    const openedListBox = document.querySelector(openClass) as HTMLUListElement
    if (openedListBox) {
      openedListBox.style.transitionDuration = `${durationAnimation.durationOpen}ms`
    }
  }

  if (durationAnimation.durationClose !== 0) {
    const closedListBox = document.querySelector(closeClass) as HTMLUListElement
    if (closedListBox) {
      closedListBox.style.transitionDuration = `${durationAnimation.durationClose}ms`
    }
  }
}
