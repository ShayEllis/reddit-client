import { render, waitFor } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import appRoutes from "../root/appRoutes"

/* getBy returns an element or an error
getByText - most common
getByRole - most common
getByLabelText - most common
getByPlaceholderText
getByAltText
getByDisplayValue
*/

/*
All of the above also have a queryBy and findBy variation

queryBy - can be used if we need to check that an element is not there, does not throw and error

findBy - used for asyncronous elements which will be there eventually
*/

/* 
all search varients can be extended with the all work to get multiple elements

e.g. getAllByText
*/

/* 
Assertive Functions

Most common:
    .toBeInTheDocument()
    .toBeNull() - not in document

Others:
    toBeDisabled
    toBeEnabled
    toBeEmpty
    toBeEmptyDOMElement
    toBeInvalid
    toBeRequired
    toBeValid
    toBeVisible
    toContainElement
    toContainHTML
    toHaveAttribute
    toHaveClass
    toHaveFocus
    toHaveFormValues
    toHaveStyle
    toHaveTextContent
    toHaveValue
    toHaveDisplayValue
    toBeChecked
    toBePartiallyChecked
    toHaveDescription
*/

/*
    waitFor(() ={}) - used to wait for an asyncronous function to resolve before the the callback is executed

React Testing Library has functions that simulate user interaction
    fireEvent.change() - used to simulate a user interaction

RTL has a library that builds on top of the fireEvent API. userEvent can be used instead, the userEvent API mimics the actual browser behavior more closely
fireEvent.change() triggers only a change event whereas userEvent.type triggers a change event, but also keyDown, keyPress, and keyUp events.

userEvent.click(element)
*/

/*
Tests to run:
1. Snapshot test of top and sidebar

functional testing - test behaviour of components

integration tests?
*/

describe('App component', () => {
    const setupMemoryRouter = (options = { initialEntries: ['/'] }) => {
        const router = createMemoryRouter(appRoutes, options)
        return <RouterProvider router={router} />
    }

    it('should render App with a header as the root route', async () => {
        const { findByRole } = render(setupMemoryRouter())

        expect(await findByRole('banner')).toBeInTheDocument()
    })
    it('should render App with a sidebar as the root route', async () => {
        const { findByRole } = render(setupMemoryRouter())

        expect(await findByRole('complementary')).toBeInTheDocument()
    })
    it('should render the error page with a bad route', async () => {
        const badRoute = { initialEntries: ['/bad/route']}
        const { findByRole } = render(setupMemoryRouter(badRoute))
        const el = (await findByRole('heading')).textContent
        expect(el).toContain('An error has occurred')
    })
})