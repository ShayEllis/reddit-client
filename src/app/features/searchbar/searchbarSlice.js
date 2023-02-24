import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const searchReddit = createAsyncThunk('searchbar/searchReddit',
    async ({searchStr, sort = 'relevance'}) => { //Options for sort (relevance, hot, top, new, comments)
        const redditToken = localStorage.getItem('redditToken')
        const response = await fetch(`https://oauth.reddit.com/search?limit=50&sort=${sort}&q=${searchStr}`, { headers: { 'authorization': `bearer ${redditToken}`} })
        const jsonResponse = await response.json()

        console.log(jsonResponse)
        const children = jsonResponse.data.children.map((child) => { 
            return {
                author: child.data.author,
                id: child.data.id,
                media: child.data.media,
                media_metadata: child.data.media_metadata,
                num_comments: child.data.num_comments,
                permalink: child.data.permalink,
                preview: child.data.preview,
                subreddit_name_prefixed: child.data.subreddit_name_prefixed,
                ups: child.data.ups,
                url: child.data.url,
                title: child.data.title,
                text: child.data.selftext,
                thumbnail: child.data.thumbnail
            }
        })

                localStorage.setItem('searchResponse', JSON.stringify({
                    after: jsonResponse.data.after,
                    before: jsonResponse.data.before,
                    children
                }))
        
        return {
            after: jsonResponse.data.after,
            before: jsonResponse.data.before,
            children
        }
    }     
    //after - Example: "t3_10o909a" - used to specify that we want to additional post that are beofore or after this ID
    //before - Example: null
)
const initialState = {
    searchValue: '',
    after: '',
    before: '',
    children: [],
    status: 'pending',
    error: null
}

const searchbarSlice = createSlice({
    name: 'searchbar',
    initialState,
    reducers: {
        changeSearchValue(state, action) {
            state.searchValue = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(searchReddit.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(searchReddit.fulfilled, (state, action) => {
                if (state.after !== action.payload.after) {
                    state.children = action.payload.children
                }
                state.after = action.payload.after
                state.before = action.payload.before
                state.status = 'fulfilled'
            })
            .addCase(searchReddit.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
})

const selectAfter = (state) => state.searchbar.after
const selectBefore = (state) => state.searchbar.before
const selectChildren = (state) => state.searchbar.children
const selectSearchValue = (state) => state.searchbar.searchValue
const selectStatus = (state) => state.searchbar.status

export { selectAfter, selectBefore, selectChildren, selectSearchValue, selectStatus }
export { searchReddit }
export const { changeSearchValue } = searchbarSlice.actions
export default searchbarSlice.reducer