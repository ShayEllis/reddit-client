import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import helpers from "../../functions/helper-functions";

const fetchUserInfo = createAsyncThunk('userButton/fetchUserInfo',
    async () => {
        const redditToken = localStorage.getItem('redditToken')
        const response = await fetch('https://oauth.reddit.com/api/v1/me', { headers: { 'authorization': `bearer ${redditToken}`} })
        const jsonResponse = await response.json()
        return jsonResponse
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
        toggleOptionList: (state) => {
            state.isDropdownVisible = !state.isDropdownVisible
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUserInfo.pending, (state) => {
                state.status = 'pending'
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
    const correctedIconImgURL = helpers.correctURL(iconImgURL)
    return {
        correctedIconImgURL,
        name
    }
})

export { fetchUserInfo }
export { selectIsDropdownVisible, selectUserInfo, selectStatus }
export const { toggleOptionList } = userButtonSlice.actions
export default userButtonSlice.reducer