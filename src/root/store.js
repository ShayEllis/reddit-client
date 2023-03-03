import { configureStore } from "@reduxjs/toolkit"
import searchbarSlice from "../app/features/searchbar/searchbarSlice"
import userButtonSlice from "../app/features/userButton/userButtonSlice"

export default configureStore({
    reducer: {
        searchbar: searchbarSlice,
        userButton: userButtonSlice,
    }
})