export const updateScroll = (
  ref: React.RefObject<HTMLUListElement>,
  activeIndex: number
) => {
  const listItems = ref.current?.children
  if (listItems && listItems[activeIndex]) {
    const selectedElement = listItems[activeIndex] as HTMLElement
    selectedElement.scrollIntoView({ block: "nearest", inline: "nearest" })
  }
}
