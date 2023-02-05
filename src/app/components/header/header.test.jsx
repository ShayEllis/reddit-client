import { render, within } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Header from "./Header";

describe('Header component', () => {
    describe('', () => {
        beforeEach(() => {
            window.matchMedia.mockClear()
        })
        afterEach(() => {
            localStorage.clear()
        })
        it('should set the correct theme based on localStorage value and ignore system theme', () => {
            render(<Header />)
            // Initial page load to set <body> data-theme
            window.dispatchEvent(new Event('load'))
            // Initial render calls match media twice, then page load calls it a third times and set the data-them in the <body>
            expect(window.matchMedia.mock.calls.length).toBe(3)
            // make sure LocalStorage theme was set
            expect(localStorage.getItem('current-theme')).toBe('dark');
            // Make sure <body> data-theme was set
            expect(document.getElementsByTagName('body')[0].getAttribute('data-theme')).toBe('dark')
            // Recheck with a LocalStorage theme value of light
            localStorage.setItem('current-theme', 'light')
            expect(localStorage.getItem('current-theme')).toBe('light')
            window.dispatchEvent(new Event('load'))
            expect(window.matchMedia.mock.calls.length).toBe(3)
            expect(document.getElementsByTagName('body')[0].getAttribute('data-theme')).toBe('light')
        })
        it('should set the theme based on system theme if nothing is in localStorage', () => {
            render(<Header />)
            expect(localStorage.getItem('current-theme')).toBeFalsy()
            expect(window.matchMedia('(prefers-color-scheme: dark)').matches).toBe(true)
            window.dispatchEvent(new Event('load'))
            expect(localStorage.getItem('current-theme')).toBe('dark')
        })
    })
    describe('theme icon', () => {
        afterEach(() => {
            localStorage.clear()
        })
        it('should render correctly', () => {
            const { getByTitle } = render(<Header />)
            const themeButton = getByTitle(/change theme/i)
            expect(themeButton).toBeInTheDocument()
        })
        it('should toggle the svg image when clicked', async () => {
            // Setup user click test
            const user = userEvent.setup()
            const { getByTitle } = render(<Header />)
            const themeButton = getByTitle(/change theme/i)
            window.dispatchEvent(new Event('load'))
            // Check if the dark theme icon is in the document
            expect(within(themeButton).getByTitle(/light theme/i)).toBeInTheDocument()
            // Check that the light theme icon is not in the document
            expect(within(themeButton).queryByTitle(/dark theme/i)).toBeNull()
            // Simulate a user clicking on the theme button
            await user.click(themeButton)
            // Check that the Icon toggled to the light theme icon
            expect(within(themeButton).getByTitle(/dark theme/i)).toBeInTheDocument()
            expect(within(themeButton).queryByTitle(/light theme/i)).toBeNull()
        })
        it('should change localStorage theme setting when clicked', async () => {
            const { getByTitle, debug } = render(<Header />)
            const user = userEvent.setup()
            window.dispatchEvent(new Event('load'))
            expect(localStorage.getItem('current-theme')).toBe('dark')
            const themeButton = getByTitle(/change theme/i)
            await user.click(themeButton)
            expect(localStorage.getItem('current-theme')).toBe('light')
            await user.click(themeButton)
            expect(localStorage.getItem('current-theme')).toBe('dark')
        })
    })
})