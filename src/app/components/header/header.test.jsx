import { render, within, act, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { vi } from "vitest";
import Header from "./Header";

describe('Header component', () => {
    describe('', () => {
        beforeEach(() => {
            window.matchMedia.mockClear()
        })
        afterAll(() => {
            localStorage.clear()
        })
        it('should set the correct theme based on localStorage value and ignore system theme', async () => {
            //  Page load
                // 	Detect current theme - detectTheme() function is called
                // 		localStorage.getItem('current-theme') or (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') is called
                // 	Checks if anything is in local storage
                // 		If nothing is in local stoarage setThemePreference is called with the current theme detected above
                // 	setHTMLTheme() is called, and the theme that was detected is passed in
                // 		Grabs HTML Element - document.firstElementChild
                // 		Check if there is a ' attribute set - getAttrubute('data-theme')
                // 			If no data-theme attribute is set - set it using the theme that was passed to the function
                        
            // On page load
                // 	No data-theme set - correct one is set correctly based on localStorage (light or dark)
                // 		Correct Data-theme is set on HTML element (light or dark)
                // 	No data-theme set - no theme in local stoarage - the correct theme is set correctly based on match-media (light or dark)
                // Correct Data-theme is set on HTML element


            const { getByRole, debug } = render(<Header />)
            const user = userEvent.setup()
            window.dispatchEvent(new Event('load'))
            
            localStorage.setItem('current-theme', 'dark')
            //localStorage.clear()
            // console.log(localStorage.getItem('current-theme'))
            // console.log(window.matchMedia('(prefers-color-scheme: dark)').matches)
            debug()
            //window.dispatchEvent(new Event('load'))
    
            // console.log(localStorage.getItem('current-theme'))
            // console.log(window.matchMedia('(prefers-color-scheme: dark)').matches)
    
            debug()

            //console.log(window.matchMedia.mock.calls)
        })
        it('should set the theme based on system theme if nothing is in localStorage', () => {

        })
        it('should change the theme if system theme is changed and ignore localStorage', () => {

        })
    })
    describe('theme icon', () => {
        it('should render correctly', () => {
            const { getByTitle } = render(<Header />)
            const themeButton = getByTitle(/change theme/i)
            expect(themeButton).toBeInTheDocument()
        })
        it('theme icon should toggle the svg image when clicked', async () => {
            // Setup user click test
            const user = userEvent.setup()
            const { getByTitle, debug } = render(<Header />)
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
})