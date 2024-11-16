import { render, screen } from "@testing-library/react"
import { Button, ThemeButton } from "./Button"

describe("Button", () => {
    test("button", () => {
        render(<Button theme={ThemeButton.CLEAR} >s</Button>)
        expect(screen.getByText("s")).toHaveClass("clear")
        screen.debug()
    })
})