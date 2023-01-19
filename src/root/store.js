import { configureStore } from "@reduxjs/toolkit"
import searchbarSlice from "../app/features/searchbar/searchbarSlice"

export default configureStore({
    reducer: {
        searchbar: searchbarSlice
    }
})

