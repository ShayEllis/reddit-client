import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const searchReddit = createAsyncThunk('searchbar/searchReddit',
    async () => {
        const redditToken = localStorage.getItem('redditToken')
        const response = await fetch('https://oauth.reddit.com/search?q=react', { headers: { 'authorization': `bearer ${redditToken}`} })
        const jsonResponse = await response.json()
        console.log(response)
        console.log(jsonResponse)
    })

const initialState = {

}

const searchbarSlice = createSlice({
    name: 'searchbar',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(searchReddit.fulfilled, (state, action) => {
                //console.log(action.payload)
            })
    }
})

export { searchReddit }
//export { } = searchbarSlice.actions
export default searchbarSlice.reducer