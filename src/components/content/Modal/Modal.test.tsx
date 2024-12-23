import React from "react"

import { fireEvent, render } from "@testing-library/react"

import { Modal, ModalContent, ModalFooter } from "./index"

describe("Компонент Modal", () => {
  test("Снимок Modal с заголовком и контентом", () => {
    const { asFragment } = render(
      <Modal onClose={() => {}} title="Modal Title" isOpen>
        <p>Modal Content</p>
      </Modal>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test("Снимок Modal без контента", () => {
    const { asFragment } = render(
      <Modal onClose={() => {}} title="Modal Title" isOpen />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test("Снимок Modal с иконкой закрытия", () => {
    const { asFragment } = render(
      <Modal
        iconClose={<button>Close</button>}
        onClose={() => {}}
        title="Modal Title"
        isOpen
      >
        <p>Modal Content</p>
      </Modal>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test("Рендер Modal с заголовком и контентом", () => {
    const { container, getByText } = render(
      <Modal title="Заголовок" isOpen>
        <p>Контент</p>
      </Modal>
    )

    const modalHeader = getByText("Заголовок")
    expect(modalHeader).toBeInTheDocument()

    const modalContent = container.querySelector(".itpc-modal")
    expect(modalContent).toBeInTheDocument()
  })

  test("Закрытие Modal при клике на оверлей, если isOverlayClickable=true", () => {
    const onCloseMock = jest.fn()
    const { container } = render(
      <Modal onClose={onCloseMock} title="Заголовок" isOpen isOverlayClickable>
        <p>Контент</p>
      </Modal>
    )

    const overlay = container.querySelector(".itpc-modal-overlay")
    fireEvent.click(overlay!)

    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  test("Не закрывается Modal при клике на оверлей, если isOverlayClickable=false", () => {
    const onCloseMock = jest.fn()
    const { container } = render(
      <Modal
        isOverlayClickable={false}
        onClose={onCloseMock}
        title="Заголовок"
        isOpen
      >
        <p>Контент</p>
      </Modal>
    )

    const overlay = container.querySelector(".itpc-modal-overlay")
    fireEvent.click(overlay!)

    expect(onCloseMock).not.toHaveBeenCalled()
  })

  test("Рендер Modal с иконкой закрытия", () => {
    const { container } = render(
      <Modal iconClose={<button>Закрыть</button>} title="Заголовок" isOpen>
        <p>Контент</p>
      </Modal>
    )

    const closeButton = container.querySelector("button")
    expect(closeButton).toBeInTheDocument()
  })

  test("Modal закрывается при изменении isOpen", () => {
    const { container, rerender } = render(<Modal title="Заголовок" isOpen />)
    expect(container.querySelector(".itpc-modal_opened")).toBeInTheDocument()

    rerender(<Modal isOpen={false} title="Заголовок" />)
    expect(container.querySelector(".itpc-modal_closed")).toBeInTheDocument()
  })
})

describe("Компонент ModalContent", () => {
  test("Рендер ModalContent с содержимым", () => {
    const { getByText } = render(
      <ModalContent>
        <p>Контент</p>
      </ModalContent>
    )

    const content = getByText("Контент")
    expect(content).toBeInTheDocument()
  })

  test("Присваивание дополнительного класса для ModalContent", () => {
    const { container } = render(<ModalContent className="custom-class" />)
    const content = container.querySelector(".itpc-modal__content")
    expect(content).toHaveClass("custom-class")
  })
})

describe("Компонент ModalFooter", () => {
  test("Рендер ModalFooter с содержимым", () => {
    const { getByText } = render(
      <ModalFooter>
        <p>Контент футера</p>
      </ModalFooter>
    )

    const footerContent = getByText("Контент футера")
    expect(footerContent).toBeInTheDocument()
  })

  test("Присваивание дополнительного класса для ModalFooter", () => {
    const { container } = render(<ModalFooter className="custom-class" />)
    const footer = container.querySelector(".itpc-modal__footer")
    expect(footer).toHaveClass("custom-class")
  })
})
