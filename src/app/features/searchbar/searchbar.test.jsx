import { render, fireEvent } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Searchbar from "./Searchbar";

describe('Searchbar component', () => {
    const setupAndRenderSearchbar = () => {
        const user = userEvent.setup()
        const { getByRole, debug } = render(<Searchbar />)
        const searchInput = getByRole('searchbox')
        return {
            getByRole,
            debug,
            searchInput,
            user
        }
    }
    it('renders correctly', () => {
        const { getByRole } = render(<Searchbar />)
        expect(getByRole('search')).toBeInTheDocument()
    })
    it('changes the correct class on focus', async() => {
        const { searchInput, user } = setupAndRenderSearchbar()
        expect(searchInput.classList[0]).toBe('searchbar-inactive')
        await user.click(searchInput)
        expect(searchInput.classList[0]).toBe('searchbar-active')
    })
    it('changes the class correctly on blur when no value is entered', async () => {
        const { searchInput, user } = setupAndRenderSearchbar()
        await user.click(searchInput)
        expect(searchInput.classList[0]).toBe('searchbar-active')
        await user.click(searchInput.parentElement)
        expect(searchInput.classList[0]).toBe('searchbar-inactive')
    })
    it('does not change the class on blur when value is entered', async () => {
        const { searchInput, user, debug } = setupAndRenderSearchbar()
        await user.click(searchInput)
        await user.keyboard('test value')
        expect(searchInput.classList[0]).toBe('searchbar-active')
        expect(searchInput.value).toBe('test value')
        await user.click(searchInput.parentElement)
        expect(searchInput.classList[0]).toBe('searchbar-active')
    })
    it('submits the form', async () => {
        const { searchInput, user, debug, getByRole } = setupAndRenderSearchbar()
        const submitButton = getByRole('button')
        await user.click(searchInput)
        await user.keyboard('test value')
        // This submits the form, currently logs the value to the console
        await user.click(submitButton)
        await user.keyboard('[Enter]')
    })
})