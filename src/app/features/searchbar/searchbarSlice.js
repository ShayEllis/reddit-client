import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const searchReddit = createAsyncThunk('searchbar/searchReddit',
    async ({searchStr, sort = 'relevance'}) => { //Options for sort (relevance, hot, top, new, comments)
        const redditToken = localStorage.getItem('redditToken')
        const response = await fetch(`https://oauth.reddit.com/search?limit=10&sort=${sort}&q=${searchStr}`, { headers: { 'authorization': `bearer ${redditToken}`} })
        const jsonResponse = await response.json()

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
                title: child.data.title
            }
        })
        
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
    after: '',
    before: '',
    children: []
}

const searchbarSlice = createSlice({
    name: 'searchbar',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(searchReddit.fulfilled, (state, action) => {
                if (state.before !== action.payload.before) {
                    state.children.push(...action.payload.children)
                }
                state.after = action.payload.after
                state.before = action.payload.before
            })
    }
})

const selectAfter = (state) => state.searchbar.after
const selectBefore = (state) => state.searchbar.before
const selectChildren = (state) => state.searchbar.children

export { selectAfter, selectBefore, selectChildren }
export { searchReddit }
//export { } = searchbarSlice.actions
export default searchbarSlice.reducer