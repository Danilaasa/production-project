import { fireEvent, render, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar"

jest.mock("react-i18next", () => ({
    useTranslation: () => {
        return {
            t: (str: string) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        };
    },
}));

describe("Sidebar", () => {
    test("button render", () => {
        render(<Sidebar />)
        expect(screen.getByTestId("sidebar")).toBeInTheDocument()
        screen.debug()
    })

    test("sidebar toggle", () => {
        render(<Sidebar />) 
        const toggleBtn = screen.getByTestId("button")
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId("sidebar")).toHaveClass(/^collapsed/)
    })
})