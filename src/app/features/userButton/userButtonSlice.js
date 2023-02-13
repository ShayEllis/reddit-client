import { createSlice, createAsyncThunk, isFulfilled } from "@reduxjs/toolkit";

const getUserInfo = createAsyncThunk(
    'userButton/getUserInfo',
    async (arg, thunkAPI) => { //arg is equal to the first argument passes to the thunk action creator itself getUserInfo('user'), arg would equal 'user'
                               // thinkAPI includes the stores dispatch and getState functions
        // fetch and return data here
    }
    
) 

/*
create async thunk will create lifecycle states for us
    - 'resourceType/actionType/pending'
	- 'resourceType/actionType/fulfilled'
	- 'resourceType/actionType/rejected'
        referenced as:
    - fetchUserById.pending
	- fetchUserById.fulfilled
	- fetchUserById.rejected

*/

const initialState = {
    userName: '',
    iconURL: '',
    optionsVisible: false,
    isLoading: false,
    hasError: false
}

const userButtonSlice = createSlice({
    name: 'userButton',
    initialState: initialState,
    reducers: {
        toggleOptionList: (state, action) => {
            console.log(state.optionsVisible)
            console.log(action)
            state.optionsVisible ? state.optionsVisible = false : state.optionsVisible = true
        }
    },
    extraReducers: {
        [getUserInfo.pending]: (state, action) => {
            state.isLoading = true
            state.hasError = false
        },
        [getUserInfo.fulfilled]: (state, action) => {
            // set username and iconurl using async thunk
            // set loading and error to false
            state.isLoading = false
            state.hasError = false
        },
        [getUserInfo.rejected]: (state, action) => {
            state.isLoading = false
            state.hasError = true
        }
    }
})

const optionsVisibleSelector = (state) =>  state.userButton.optionsVisible

export { optionsVisibleSelector }
export const { toggleOptionList } = userButtonSlice.actions
export default userButtonSlice.reducer