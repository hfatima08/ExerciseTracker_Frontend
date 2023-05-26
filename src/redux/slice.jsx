import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    initialState:false,
    name: "isLoggedin",
    reducers:{
        "setIsLoggedIn" :(state)=>{
              return  state=true
        }
    }
})

export const {setIsLoggedIn} = loginSlice.actions;
export default loginSlice.reducer;