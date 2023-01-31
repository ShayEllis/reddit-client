import { render, waitFor } from "@testing-library/react"
import { RouterProvider, createMemoryRouter } from "react-router-dom"

import appRoutes from "./appRoutes"

describe('Main component', () => {
    it('should render App as the root route', () => {

    })
    it('should render error page for a unkown route', async () => {
        const router = createMemoryRouter(appRoutes, {
            initialEntries: ['/', '/post'],
            initialIndex: 0,
        })

        const { debug, getByRole } = render(<RouterProvider router={router} />)

        await waitFor(() => getByRole('heading'))

        getByRole(' ')
    })
})