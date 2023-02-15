import { createSlice, createAsyncThunk, isFulfilled } from "@reduxjs/toolkit";

const fetchUserInfo = createAsyncThunk( // this can be called in main too to load as early as possible
    'userButton/fetchUserInfo',
    async () => {
        const redditToken = localStorage.getItem('redditToken')
        const response = await fetch('http://localhost:5173/api/v1/me', { headers: { 'authorization': `bearer ${redditToken}`} })
        return await response.json()
    },
)

const initialState = {
    optionsVisible: false,
    iconImg: '',
    id: '',
    name: '',
    snoovatarImg: '',
    status: 'pending',
    error: null
}

const userButtonSlice = createSlice({
    name: 'userButton',
    initialState,
    reducers: {
        toggleOptionList: (state, action) => {
            state.optionsVisible ? state.optionsVisible = false : state.optionsVisible = true
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUserInfo.pending, (state, action) => { // can be skipped if there is no loading state
                state.status = 'loading'
            })
            .addCase(fetchUserInfo.fulfilled, (state, { payload }) => {
                state.status = 'fulfilled'
                state.iconImg = payload.icon_img
                state.id = payload.id
                state.name = payload.name
                state.snoovatarImg = payload.snoovatar_img
                console.log(payload)
            })
            .addCase(fetchUserInfo.rejected, (state, action) => { // can be skipped if you only care about a successful response
                state.status = 'rejected'
                state.error = action.error.message // error info
            })
    }
})

const optionsVisibleSelector = (state) =>  state.userButton.optionsVisible

export { fetchUserInfo }
export { optionsVisibleSelector }
export const { toggleOptionList } = userButtonSlice.actions
export default userButtonSlice.reducer