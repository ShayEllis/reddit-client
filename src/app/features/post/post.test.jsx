import { render } from "@testing-library/react";
import Post from "./post";

// will need to test other buttons and the main post area

describe('Post component', () => {
    it('renders correctly', () => {
        const { getByRole } = render(<Post />)
        const postComponent = getByRole('article')
        expect(postComponent).toBeInTheDocument()
    })
})