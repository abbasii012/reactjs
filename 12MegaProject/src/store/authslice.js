import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    status : false,
    userData: null,
}

export  const authSlice = createSlice({
      name:"Auth",
      initialState,
      reducers:{
        login:(state,action)=>{
            state.status = true,
            state.userData = action.payload.userData
        },
        logout:(state)=>{
            state.status = false,
            state.userData = null
        }
      }

})

export  const {logout,login}   = authSlice.actions
export default  authSlice.reducer