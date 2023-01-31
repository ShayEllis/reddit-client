import { render } from '@testing-library/react'
import App from './App'

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

    it('should render a header component', () => {
        // const { getByRole } = render(<App />)
        // const header = getByRole('banner')
        // expect(header).toBeInTheDocument()
    })
    it('should render a sidebar component', () => {
        // const { debug, getByRole } = render(<App />)
        // const sidebar = getByRole('complementary')
        // expect(sidebar).toBeInTheDocument()
    })
})