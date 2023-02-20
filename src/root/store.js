import { configureStore } from "@reduxjs/toolkit"
import searchbarSlice from "../app/features/searchbar/searchbarSlice"
import userButtonSlice from "../app/features/userButton/userButtonSlice"
import boardSlice from "../app/components/board/boardSlice"

export default configureStore({
    reducer: {
        searchbar: searchbarSlice,
        userButton: userButtonSlice,
        board: boardSlice
    }
})