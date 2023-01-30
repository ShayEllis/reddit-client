import { render } from '@testing-library/react'
import App from './App'

describe('App component', () => {
    it('should render App component correctly', () => {
        render(<App />)
    })
    it('shoul have a header component', () => {
        const { debug, getByRole } = render(<App />)
        const header = getByRole('banner')
        expect(header).toBeInTheDocument()
        debug()
    })
})