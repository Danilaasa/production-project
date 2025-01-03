import { createSlice } from "@reduxjs/toolkit"
import { UserSchema } from "../types/user"

const initialState:UserSchema = {
    
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {}
})

export const { actions } = userSlice
export const { reducer: userReducer } = userSlice

export default userSlice.reducer