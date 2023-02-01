import { render, screen, within } from "@testing-library/react";
import Header from "./Header";

describe('Header component', () => {
    it('should render a theme button', () => {
        const { getByTitle } = render(<Header />)
        const themeButton = getByTitle(/change theme/i)
        expect(themeButton).toBeInTheDocument()
    })
    it('theme icon should toggle the svg when clicked', () => {

        // need to test from a user perspective
            // 1. check button/theme
            // 2. sent click event
            // 3. check that button/theme toggled
            
        const { debug, getByTitle, getByRole } = render(<Header />)
        const themeButton = getByTitle(/change theme/i)
        //console.log(themeButton)

        const darkIcon = within(themeButton).getByTitle(/dark theme/i)
        expect(darkIcon.classList.toString()).toEqual('dark-theme-icon')

        const lightIcon = within(themeButton).getByTitle(/light theme/i)
    })
})