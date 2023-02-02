import { render } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Sidebar from "./sidebar";

describe('Sidebar component', () => {
    global.innerWidth = 500
    it('renders correctly', async () => {
        const user = userEvent.setup()
        console.log(global.innerWidth)
        const { debug, getByRole } = render(<Sidebar />)
        const sidebarButton = getByRole('button')
        await user.click(sidebarButton)
        debug()

        // check for added class to sidebar and button

        
    })

    // create second it() statement to test window innerWidth over 575
})