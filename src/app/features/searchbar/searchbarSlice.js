import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const searchReddit = createAsyncThunk('searchbar/searchReddit',
    async ({searchStr = null, chart = null, sort = 'relevance', after = null}, thunkAPI) => { //Options for sort (relevance, hot, top, new, comments), Options for chart (best, hot, new, top, rising)
        const redditToken = localStorage.getItem('redditToken')
        let response = null

        if (searchStr && thunkAPI.getState().searchbar.submittedSearchValue !== searchStr) {
            response = await fetch(`https://oauth.reddit.com/search?limit=10&sort=${sort}&after=${after}&q=${searchStr}`, { headers: { 'authorization': `bearer ${redditToken}`} })
        } else {
            if (!searchStr && thunkAPI.getState().searchbar.chartValue !== chart) {
                response = await fetch(`https://oauth.reddit.com/${chart}?limit=10&after=${after}`, { headers: { 'authorization': `bearer ${redditToken}`} })
            } else {
                return { children: thunkAPI.getState().searchbar.children }
            }
        }

        const jsonResponse = await response.json()

        const responseAfter = jsonResponse.data.after
        const responseBefore = jsonResponse.data.before
        const children = jsonResponse.data.children.map((child) => { 
            return {
                author: child.data.author,
                id: child.data.id,
                media: child.data.media,
                is_gallery: child.data.is_gallery,
                media_metadata: child.data.media_metadata,
                num_comments: child.data.num_comments,
                permalink: child.data.permalink,
                preview: child.data.preview,
                subreddit_name_prefixed: child.data.subreddit_name_prefixed,
                ups: child.data.ups,
                url: child.data.url,
                title: child.data.title,
                text: child.data.selftext,
                textHTML: child.data.selftext_html,
                thumbnail: child.data.thumbnail
            }
        })
        
        return {
            responseAfter,
            responseBefore,
            children
        }
    }     
    //after - Example: "t3_10o909a" - used to specify that we want to additional post that are beofore or after this ID
    //before - Example: null
)
const initialState = {
    searchValue: '',
    submittedSearchValue: '',
    chartValue: '',
    after: [],
    before: [],
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
        },
        changeSubmittedSearchValue(state, action) {
            state.submittedSearchValue = action.payload
        },
        changeChartValue(state, action) {
            state.chartValue = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(searchReddit.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(searchReddit.fulfilled, (state, action) => {
                if (state.after !== action.payload.responseAfter) {
                    state.children = action.payload.children
                }
                state.after.indexOf(action.payload.responseAfter) === -1 && state.after.push(action.payload.responseAfter)
                state.before.indexOf(action.payload.responseBefore) === -1 && state.before.push(action.payload.responseBefore)
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
const selectChartValue = (state) => state.searchbar.chartValue

export { selectAfter, selectBefore, selectChildren, selectSearchValue, selectStatus, selectChartValue }
export { searchReddit }
export const { changeSearchValue, changeSubmittedSearchValue, changeChartValue } = searchbarSlice.actions
export default searchbarSlice.reducer