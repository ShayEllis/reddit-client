import { createSlice } from "@reduxjs/toolkit";

const initialState = {
}

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        
    }
})

const selectPosts = (state) => state.board.posts

export { selectPosts }
export const { addPosts } = boardSlice.actions
export default boardSlice.reducer