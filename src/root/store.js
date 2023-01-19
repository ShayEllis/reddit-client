import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from '../app/features/navbar/navbarSlice'

export default configureStore({
    reducer: {
        navBar: navbarSlice
    }
})

