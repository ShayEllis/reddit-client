import { render } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Sidebar from "./sidebar";

describe('Sidebar component', async () => {
    const setupSidebarAndUser = () => {
        const user = userEvent.setup()
        return {
            ...render(<Sidebar />),
            user
        }
    }
    describe('with a window width > 575', () => {
        beforeAll(() => {
            window.innerWidth = 580
            window.dispatchEvent(new Event('resize'))
        })
        it('renders correctly', () => {
            const { getByRole } = render(<Sidebar />)
            expect(getByRole('complementary')).toBeInTheDocument()
        })
        it('adds and removes the correct class from button when button is clicked', async () => {
            const { getByRole, user } = setupSidebarAndUser()
            const button = getByRole('button')
            expect(button.classList.contains('button-is-rotated')).toBeFalsy()
            expect(button.classList.contains('button-not-rotated')).toBeFalsy()
            await user.click(button)
            expect(button.classList.contains('button-is-rotated')).toBeTruthy()
            expect(button.classList.contains('button-not-rotated')).toBeFalsy()
            await user.click(button)
            expect(button.classList.contains('button-is-rotated')).toBeFalsy()
            expect(button.classList.contains('button-not-rotated')).toBeFalsy()
        })
        it('adds and removes the correct class to aside when button is clicked', async () => {
            const { getByRole, user } = setupSidebarAndUser()
            const button = getByRole('button')
            expect(getByRole('complementary').classList.contains('sidebar-is-closed')).toBeFalsy()
            expect(getByRole('complementary').classList.contains('sidebar-not-closed')).toBeFalsy()
            await user.click(button)
            expect(getByRole('complementary').classList.contains('sidebar-is-closed')).toBeTruthy()
            expect(getByRole('complementary').classList.contains('sidebar-not-closed')).toBeFalsy()
            await user.click(button)
            expect(getByRole('complementary').classList.contains('sidebar-is-closed')).toBeFalsy()
            expect(getByRole('complementary').classList.contains('sidebar-not-closed')).toBeFalsy()
        })
        describe('and has extra class', () => {
            it('the extra button class is removed before the correct one is added and removed', async () => {
                const { getByRole, user } = setupSidebarAndUser()
                const button = getByRole('button')
                getByRole('button').classList.add('button-not-rotated')
                expect(button.classList.contains('button-is-rotated')).toBeFalsy()
                expect(button.classList.contains('button-not-rotated')).toBeTruthy()
                await user.click(button)
                expect(button.classList.contains('button-is-rotated')).toBeTruthy()
                expect(button.classList.contains('button-not-rotated')).toBeFalsy()
                await user.click(button)
                expect(button.classList.contains('button-is-rotated')).toBeFalsy()
                expect(button.classList.contains('button-not-rotated')).toBeFalsy()

            })
            it('the extra aside class is removed before the correct one is added and removed', async () => {
                const { getByRole, user } = setupSidebarAndUser()
                const button = getByRole('button')
                getByRole('complementary').classList.add('sidebar-not-closed')
                expect(getByRole('complementary').classList.contains('sidebar-is-closed')).toBeFalsy()
                expect(getByRole('complementary').classList.contains('sidebar-not-closed')).toBeTruthy()
                await user.click(button)
                expect(getByRole('complementary').classList.contains('sidebar-is-closed')).toBeTruthy()
                expect(getByRole('complementary').classList.contains('sidebar-not-closed')).toBeFalsy()
                await user.click(button)
                expect(getByRole('complementary').classList.contains('sidebar-is-closed')).toBeFalsy()
                expect(getByRole('complementary').classList.contains('sidebar-not-closed')).toBeFalsy()
            })
        })
    })
    describe('with a window width < 575', () => {
        beforeAll(() => {
            window.innerWidth = 570
            window.dispatchEvent(new Event('resize'))
        })
        it('renders correctly', () => {
            const { getByRole } = render(<Sidebar />)
            expect(getByRole('complementary')).toBeInTheDocument()
        })
        it('adds and removes the correct class from button when button is clicked', async () => {
            const { getByRole, user } = setupSidebarAndUser()
            const button = getByRole('button')
            expect(button.classList.contains('button-is-rotated')).toBeFalsy()
            expect(button.classList.contains('button-not-rotated')).toBeFalsy()
            await user.click(button)
            expect(button.classList.contains('button-is-rotated')).toBeFalsy()
            expect(button.classList.contains('button-not-rotated')).toBeTruthy()
            await user.click(button)
            expect(button.classList.contains('button-is-rotated')).toBeFalsy()
            expect(button.classList.contains('button-not-rotated')).toBeFalsy()
        })
        it('adds and removes the correct class to aside when button is clicked', async () => {
            const { getByRole, user } = setupSidebarAndUser()
            const button = getByRole('button')
            expect(getByRole('complementary').classList.contains('sidebar-is-closed')).toBeFalsy()
            expect(getByRole('complementary').classList.contains('sidebar-not-closed')).toBeFalsy()
            await user.click(button)
            expect(getByRole('complementary').classList.contains('sidebar-is-closed')).toBeFalsy()
            expect(getByRole('complementary').classList.contains('sidebar-not-closed')).toBeTruthy()
            await user.click(button)
            expect(getByRole('complementary').classList.contains('sidebar-is-closed')).toBeFalsy()
            expect(getByRole('complementary').classList.contains('sidebar-not-closed')).toBeFalsy()
        })
        describe('and has extra class', () => {
            it('the extra button class is removed before the correct one is added and removed', async () => {
                const { getByRole, user } = setupSidebarAndUser()
                const button = getByRole('button')
                getByRole('button').classList.add('button-is-rotated')
                expect(button.classList.contains('button-is-rotated')).toBeTruthy()
                expect(button.classList.contains('button-not-rotated')).toBeFalsy()
                await user.click(button)
                expect(button.classList.contains('button-is-rotated')).toBeFalsy()
                expect(button.classList.contains('button-not-rotated')).toBeTruthy()
                await user.click(button)
                expect(button.classList.contains('button-is-rotated')).toBeFalsy()
                expect(button.classList.contains('button-not-rotated')).toBeFalsy()

            })
            it('the extra aside class is removed before the correct one is added and removed', async () => {
                const { getByRole, user } = setupSidebarAndUser()
                const button = getByRole('button')
                getByRole('complementary').classList.add('sidebar-is-closed')
                expect(getByRole('complementary').classList.contains('sidebar-is-closed')).toBeTruthy()
                expect(getByRole('complementary').classList.contains('sidebar-not-closed')).toBeFalsy()
                await user.click(button)
                expect(getByRole('complementary').classList.contains('sidebar-is-closed')).toBeFalsy()
                expect(getByRole('complementary').classList.contains('sidebar-not-closed')).toBeTruthy()
                await user.click(button)
                expect(getByRole('complementary').classList.contains('sidebar-is-closed')).toBeFalsy()
                expect(getByRole('complementary').classList.contains('sidebar-not-closed')).toBeFalsy()
            })
        })
    })
})