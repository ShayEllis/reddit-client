import { render, within } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Header from "./Header";

describe('Header component', () => {
    it('should render a theme button', () => {
        const { getByTitle } = render(<Header />)
        const themeButton = getByTitle(/change theme/i)
        expect(themeButton).toBeInTheDocument()
    })
    it('theme icon should toggle the svg image when clicked', async () => {
        // Setup user click test
        const user = userEvent.setup()
        const { getByTitle, queryByTitle, debug } = render(<Header />)
        // Select theme button
        const themeButton = getByTitle(/change theme/i)
        // Check if the dark theme icon is in the document
        expect(within(themeButton).getByTitle(/dark theme/i)).toBeInTheDocument()
        // Check that the light theme icon is not in the document
        expect(within(themeButton).queryByTitle(/light theme/i)).toBeNull()
        // Simulate a user clicking on the theme button
        await user.click(themeButton)
        // Check that the Icon toggled to the light theme icon
        expect(within(themeButton).getByTitle(/light theme/i)).toBeInTheDocument()
        expect(within(themeButton).queryByTitle(/dark theme/i)).toBeNull()
    })
})