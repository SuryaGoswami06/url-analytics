import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:'user',
    initialState:{
        isLoggedIn:true
    },
    reducers:{
        setUserLog:(state,action)=>{
            state.isLoggedIn = action.payload
        }
    }
})

const {setUserLog} = userSlice.actions

export default userSlice.reducer