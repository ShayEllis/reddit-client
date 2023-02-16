import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";

const fetchUserInfo = createAsyncThunk( // this can be called in main too to load as early as possible
    'userButton/fetchUserInfo',
    async () => {
        const redditToken = localStorage.getItem('redditToken')
        const response = await fetch('http://localhost:5173/api/v1/me', { headers: { 'authorization': `bearer ${redditToken}`} })
        return await response.json()
    },
)

const initialState = {
    isDropdownVisible: false,
    iconImgURL: '',
    id: '',
    name: '',
    snoovatarImgURL: '',
    status: 'pending',
    error: null
}

const userButtonSlice = createSlice({
    name: 'userButton',
    initialState,
    reducers: {
        toggleOptionList: (state, action) => {
            state.isDropdownVisible ? state.isDropdownVisible = false : state.isDropdownVisible = true
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUserInfo.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchUserInfo.fulfilled, (state, { payload }) => {
                state.status = 'fulfilled'
                state.iconImgURL = payload.icon_img
                state.id = payload.id
                state.name = payload.name
                state.snoovatarImgURL = payload.snoovatar_img
            })
            .addCase(fetchUserInfo.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
})

const selectIsDropdownVisible = (state) =>  state.userButton.isDropdownVisible

const selectIconImgURL = (state) => state.userButton.iconImgURL
const selectName = (state) => state.userButton.name
const selectStatus = (state) => state.userButton.status
const selectUserInfo = createSelector([selectIconImgURL, selectName, selectStatus], (iconImgURL, name) => {
    const correctedIconImgURL = iconImgURL.replace(/&amp;/ig, "&")
    return {
        correctedIconImgURL,
        name
    }
})

export { fetchUserInfo }
export { selectIsDropdownVisible, selectUserInfo, selectStatus }
export const { toggleOptionList } = userButtonSlice.actions
export default userButtonSlice.reducer