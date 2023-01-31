import { render } from "@testing-library/react"
import { RouterProvider, createMemoryRouter } from "react-router-dom"

import appRoutes from "./appRoutes"

describe('Main component', () => {
    it('should render App as the root route', () => {

    })
    it('should render error page for a unkown route', () => {
        const router = createMemoryRouter(appRoutes, {
            initialEntries: ['/board']
        })

        const { debug } = render(<RouterProvider router={router} />)
        debug()
    })
})