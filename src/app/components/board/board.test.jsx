import { render } from "@testing-library/react";
import Board from "./board";

describe('Board component', () => {
    it('renders correctly', () => {
        const { getByRole } = render(<Board />)
        const mainBoard = getByRole('main')
        expect(mainBoard).toBeInTheDocument()
    })
})