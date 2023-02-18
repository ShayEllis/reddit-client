import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const searchReddit = createAsyncThunk('searchbar/searchReddit',
    async ({searchStr, sort = 'relevance'}) => { //Options for sort (relevance, hot, top, new, comments)
        const redditToken = localStorage.getItem('redditToken')
        const response = await fetch(`https://oauth.reddit.com/search?limit=10&sort=${sort}&q=${searchStr}`, { headers: { 'authorization': `bearer ${redditToken}`} })
        const jsonResponse = await response.json()
        console.log(jsonResponse)
        console.log(jsonResponse.data.after)

    }     
    //after - Example: "t3_10o909a" - used to specify that we want to additional post that are beofore or after this ID
    //before - Example: null
)




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