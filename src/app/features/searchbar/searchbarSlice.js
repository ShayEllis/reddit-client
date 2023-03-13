import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const fetchRedditPosts = async ({searchStr = null, chart = 'best', sort = 'relevance', after = null}, thunkAPI) => { //Options for sort (relevance, hot, top, new, comments), Options for chart (best, hot, new, top, rising)
    const redditToken = localStorage.getItem('redditToken')

    let response = searchStr ?
        await fetch(`https://oauth.reddit.com/search?limit=10&sort=${sort}&after=${after}&q=${searchStr}`, { headers: { 'authorization': `bearer ${redditToken}`} })
        :
        await fetch(`https://oauth.reddit.com/${chart}?limit=10&after=${after}`, { headers: { 'authorization': `bearer ${redditToken}`} })

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

const searchReddit = createAsyncThunk('searchbar/searchReddit',
    fetchRedditPosts
)

const loadMoreRedditPosts = createAsyncThunk('searchbar/loadMorePosts',
    fetchRedditPosts
)

const initialState = {
    searchValue: '',
    submittedSearchValue: '',
    chartValue: '',
    after: '',
    before: '',
    children: [],
    status: 'pending',
    loadMoreStatus: 'fulfilled',
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
                state.after = action.payload.responseAfter
                state.before = action.payload.responseBefore
                state.status = 'fulfilled'
            })
            .addCase(searchReddit.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
            .addCase(loadMoreRedditPosts.pending, (state) => {
                state.loadMoreStatus = 'pending'
            })
            .addCase(loadMoreRedditPosts.fulfilled, (state, action) => {
                if (state.after !== action.payload.responseAfter) {
                    return {
                        ...state, 
                        after: action.payload.responseAfter, 
                        before: action.payload.responseBefore, 
                        loadMoreStatus: 'fulfilled',
                        children: [...state.children, ...action.payload.children]
                    }
                }
            })
    }
})

const selectAfter = (state) => state.searchbar.after
const selectBefore = (state) => state.searchbar.before
const selectChildren = (state) => state.searchbar.children
const selectSearchValue = (state) => state.searchbar.searchValue
const selectSubmittedSearchValue = (state) => state.searchbar.submittedSearchValue
const selectStatus = (state) => state.searchbar.status
const selectLoadMoreStatus = (state) => state.searchbar.loadMoreStatus
const selectChartValue = (state) => state.searchbar.chartValue

export { selectAfter, selectBefore, selectChildren, selectSearchValue, selectSubmittedSearchValue, selectStatus, selectLoadMoreStatus, selectChartValue }
export { searchReddit, loadMoreRedditPosts }
export const { changeSearchValue, changeSubmittedSearchValue, changeChartValue } = searchbarSlice.actions
export default searchbarSlice.reducer