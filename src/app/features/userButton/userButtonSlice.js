import { createSlice, createAsyncThunk, isFulfilled } from "@reduxjs/toolkit";

const fetchUserInfo = createAsyncThunk( // this can be called in main too to load as early as possible
    'app/fetchUserInfo',
    async (arg, thunkAPI) => {

})

/* 
example async function:

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        await dispatch(addNewPost({ title, content, user: userId })).unwrap()
        setTitle('')
        setContent('')
        setUserId('')
      } catch (err) {
        console.error('Failed to save the post: ', err)
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }
*/

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
    initialState: initialState,
    reducers: {
        toggleOptionList: (state, action) => {
            state.optionsVisible ? state.optionsVisible = false : state.optionsVisible = true
        }
    },
    extraReducers(builder) {
        builder
            .addCase('fetchUserInfo.pending', (state, action) => { // can be skipped if there is no loading state
                state.status = 'loading'
            })
            .addCase('fetchUserInfo.fulfilled', (state, action) => {
                state.status = 'fulfilled'
                // add user info to redux state
            })
            .addCase('fetchUserInfo.rejected', (state, action) => { // can be skipped if you only care about a successful response
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